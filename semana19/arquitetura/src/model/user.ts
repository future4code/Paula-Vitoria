import { AuthenticationData } from "../services/authenticator";

export type userData = {
  name: string;
  email: string;
  password: string;
  role: USER_ROLES;
};

export type user = userData & { id: string };

export enum USER_ROLES {
  NORMAL = "NORMAL",
  ADMIN = "ADMIN",
}
