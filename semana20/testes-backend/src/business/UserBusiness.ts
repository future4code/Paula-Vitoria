import { CustomError } from "../errors/CustomError";
import { User, stringToUserRole, USER_ROLES } from "../model/User";
import userDatabase, { UserDatabase } from "../data/UserDatabase";
import hashGenerator, { HashGenerator } from "../services/hashGenerator";
import idGenerator, { IdGenerator } from "../services/idGenerator";
import tokenGenerator, {
  AuthenticationData,
  TokenGenerator,
} from "../services/tokenGenerator";

export class UserBusiness {
  constructor(
    private idGenerator: IdGenerator,
    private hashGenerator: HashGenerator,
    private userDatabase: UserDatabase,
    private tokenGenerator: TokenGenerator
  ) {}
  public async signup(
    name: string,
    email: string,
    password: string,
    role: string
  ) {
    try {
      if (!name || !email || !password || !role) {
        throw new CustomError(422, "Missing input");
      }

      if (email.indexOf("@") === -1) {
        throw new CustomError(422, "Invalid email");
      }

      if (password.length < 6) {
        throw new CustomError(422, "Invalid password");
      }

      const id = this.idGenerator.generate();

      const cypherPassword = await this.hashGenerator.hash(password);

      await this.userDatabase.createUser(
        new User(id, name, email, cypherPassword, stringToUserRole(role))
      );

      const accessToken = this.tokenGenerator.generate({
        id,
        role,
      });
      return { accessToken };
    } catch (error) {
      if (error.message.includes("key 'email'")) {
        throw new CustomError(409, "Email already in use");
      }

      throw new CustomError(error.statusCode, error.message);
    }
  }

  public async login(email: string, password: string) {
    try {
      if (!email || !password) {
        throw new CustomError(422, "Missing input");
      }

      const user = await this.userDatabase.getUserByEmail(email);

      if (!user) {
        throw new CustomError(401, "Invalid credentials");
      }

      const isPasswordCorrect = await this.hashGenerator.compareHash(
        password,
        user.getPassword()
      );

      if (!isPasswordCorrect) {
        throw new CustomError(401, "Invalid credentials");
      }

      const accessToken = this.tokenGenerator.generate({
        id: user.getId(),
        role: user.getRole(),
      });

      return { accessToken };
    } catch (error) {
      throw new CustomError(error.statusCode, error.message);
    }
  }

  public async getUserById(id: string) {
    try {
      if (!id) {
        throw new CustomError(422, "Missing id");
      }

      const user: User | undefined = await this.userDatabase.getUserById(id);

      if (!user) {
        throw new CustomError(404, "User not found");
      }

      return user;
    } catch (err) {
      throw new CustomError(err.statusCode, err.message);
    }
  }

  public async getAllUsers(token: string) {
    try {
      const verifiedToken = this.tokenGenerator.verify(
        token
      ) as AuthenticationData;

      if (!verifiedToken) {
        throw new CustomError(422, "Missing or invalid token");
      }
      if (verifiedToken.role !== "ADMIN") {
        throw new CustomError(402, "Only admins can acces this resource");
      }
      console.log("very", verifiedToken);

      const users = await this.userDatabase.getAllUsers();

      if (users.length === 0) {
        throw new CustomError(404, "Users not found");
      }

      return users;
    } catch (err) {
      throw new CustomError(err.statusCode, err.message);
    }
  }
}

export default new UserBusiness(
  idGenerator,
  hashGenerator,
  userDatabase,
  tokenGenerator
);
