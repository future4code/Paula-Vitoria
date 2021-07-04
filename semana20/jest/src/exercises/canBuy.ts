import { User } from "../models/modelCanBuy";
export const canBuy = (user: User, value: number): User | undefined => {
  if (user.balance >= value) {
    return {
      ...user,
      balance: user.balance - value,
    };
  }

  undefined;
};
