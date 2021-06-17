export type authenticationData = {
  id: string;
};

export type user = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type loginDTO = {
  password: string;
  email: string;
};

export type signupDTO = {
  name: string;
  email: string;
  password: string;
};
