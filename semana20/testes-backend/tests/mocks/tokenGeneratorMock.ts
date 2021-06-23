import { USER_ROLES } from "../../src/model/User";

export class TokenGeneratorMock {
  public generate = (input: AuthenticationData): string => {
    return "token_mock";
  };

  public verify(token: string) {
    const result = { id: "id_mock", role: USER_ROLES.NORMAL };
    return result;
  }
}

export interface AuthenticationData {
  id: string;
  role: string;
}

export default new TokenGeneratorMock();
