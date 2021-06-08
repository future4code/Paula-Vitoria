import { genSaltSync, hashSync, compareSync } from "bcryptjs";
//função que gera o  hash
export const createHash = (plainText: string): string => {
  const salt: string = genSaltSync(12);
  const hash: string = hashSync(plainText, salt);
  return hash;
};

export const compareHash = (plainText: string, cypherText: string): boolean => {
  return compareSync(plainText, cypherText);
};
