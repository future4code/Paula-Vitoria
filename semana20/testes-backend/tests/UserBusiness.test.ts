import { UserBusiness } from "../src/business/UserBusiness";
import { UserDatabase } from "../src/data/UserDatabase";
import hashGeneratorMock from "./mocks/hashGeneratorMock";
import idGeneratorMock from "./mocks/idGeneratorMock";
import tokenGeneratorMock from "./mocks/tokenGeneratorMock";
import userDatabaseMock from "./mocks/UserDatabaseMock";
import { userMockNormal } from "./mocks/UserMock";

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
});
