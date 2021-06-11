export type authenticationData = {
  id: string;
  role: string;
};

export enum userRole {
  ADMIN = "ADMIN",
  NORMAL = "NORMAL",
}
export type recipe = {
  id: string;
  title: string;
  description: string;
  date:Date
};

export type user = {
  //user ok
  id: string;
  name: string;
  email: string;
  password: string;
};
