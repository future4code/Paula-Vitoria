export type user = {
  id: string;
  email: string;
  password: string;
};

export enum USER_ROLES {
  NORMAL = "NORMAL",
  ADMIN = "ADMIN",
}
