import { Character } from "../models/character";
import { validateCharacter } from "./validateCharacter";
export const recoverCharacters = (characters: Character[]): Character[] => {
  try {
    if (characters.length < 2) {
      throw new Error("Array must be 2 characters or more");
    }
    for (let i = 0; i < characters.length; i++) {
      if (validateCharacter(characters[i])) {
        characters[i].life === 500;
      }
    }
    return characters;
  } catch (err) {
    console.log(err.message);
  }
};
