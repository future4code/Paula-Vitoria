import * as bcrypt from "bcryptjs";

export const hash = async (password: string): Promise<string> => {
  const round: number = Number(process.env.BCRYPT_COST);
  if (isNaN(Number(process.env.BCRYPT_COST))) {
    throw new Error("Cost must be a number");
  }
  const salt = await bcrypt.genSalt(round);
  const result = await bcrypt.hash(password, salt);

  return result;
};

export const compare = (password: string, hash: string): Promise<boolean> => {
  return bcrypt.compare(password, hash);
};
