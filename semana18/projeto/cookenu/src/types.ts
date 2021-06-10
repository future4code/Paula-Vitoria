export type authenticationData = {
  id: string;
  role: string;
};

export type userCredentials = {
  email: string;
  password: string;
};

export type userPersonalInfo = {
  name: string;
  nickname: string;
};

export enum userRole {
  ADMIN = "ADMIN",
  NORMAL = "NORMAL",
}

export type user = {
  //user ok
  id: string;
  name: string;
  email: string;
  password: string;
};
