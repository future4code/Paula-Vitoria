import { UserBusiness } from "../src/business/UserBusiness";
import { UserDatabase } from "../src/data/UserDatabase";
import hashGeneratorMock from "./mocks/hashGeneratorMock";
import idGeneratorMock from "./mocks/idGeneratorMock";
import tokenGeneratorMock from "./mocks/tokenGeneratorMock";
import userDatabaseMock from "./mocks/UserDatabaseMock";
import { userMockAdmin, userMockNormal } from "./mocks/UserMock";
import { USER_ROLES } from "../src/model/User";

const userBusinessMock = new UserBusiness(
  idGeneratorMock,
  hashGeneratorMock,
  userDatabaseMock as UserDatabase,
  tokenGeneratorMock
);

describe("User Business", () => {
  describe("Function getUserById", () => {
    test("non-existent user error", async () => {
      expect.assertions(2);
      try {
        await userBusinessMock.getUserById("123");
      } catch (err) {
        expect(err.statusCode).toBe(404);
        expect(err.message).toBe("User not found");
      }
    });

    test("Success search by user", async () => {
      try {
        const result = await userBusinessMock.getUserById("id_mock_normal");
        expect(result).toEqual(userMockNormal);
      } catch (err) {
        console.log(err.message);
      }
    });
  });

  describe("Function getAllUsers", () => {
    test("Unhoutorized Error", async () => {
      try {
        await userBusinessMock.getAllUsers("token_mock");
      } catch (err) {
        expect(err.statusCode).toBe(402);
        expect(err.message).toBe("Only admins can acces this resource");
      }
    });
  });

  test("Return of success", async () => {
    try {
      const getAllUsers = jest.fn((role: USER_ROLES) =>
        userBusinessMock.getAllUsers(role)
      );

      const users = await getAllUsers(USER_ROLES.ADMIN);
      expect(users).toContainEqual({
        id: "id_mock_admin",
        name: "paula",
        email: "paula@gmail.com",
        role: "ADMIN",
      });
      expect(users).toContainEqual({
        id: "id_mock_normal",
        name: "elvis",
        email: "elvis@gmail.com",
        role: "NORMAL",
      });
    } catch (err) {
      console.log(err);
    }
  });
});
