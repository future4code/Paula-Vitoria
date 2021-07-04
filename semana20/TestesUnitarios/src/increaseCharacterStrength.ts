import { Character } from "../models/character";
import { validateCharacter } from "./validateCharacter";

export const increaseCharacterStrength = (
  character: Character,
  newStrength: number
): void => {
  if (!validateCharacter(character)) {
    throw new Error("Invalid Character");
  }

  if (newStrength < character.force) {
    throw new Error("newStrength is less than current strength");
  }

  character.force = newStrength;
};
