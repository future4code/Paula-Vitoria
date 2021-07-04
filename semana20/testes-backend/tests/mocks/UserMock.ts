import { User, USER_ROLES } from "../../src/model/User";

export const userMockAdmin = new User(
  "id_mock_admin",
  "paula",
  "paula@gmail.com",
  "123456",
  USER_ROLES.ADMIN
);


export const userMockNormal = new User(
    "id_mock_normal",
    "elvis",
    "elvis@gmail.com",
    "123456",
    USER_ROLES.NORMAL
  );
  