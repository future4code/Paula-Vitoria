import { Character } from "../models/character";
import { validateCharacter } from "./validateCharacter";
export const decreaseCharacterDefense = (
  character: Character,
  newDefense: number
): void => {
  if (validateCharacter(character)) {
    throw new Error("Invalid Character");
  }

  if (newDefense > character.defense) {
    throw new Error("the new defense must be major than current defense");
  }

  character.defense = newDefense;
};
