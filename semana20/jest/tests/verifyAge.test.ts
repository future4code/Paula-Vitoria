import {
  NACIONALITY,
  User,
  Casino,
  LOCATION,
} from "../src/models/verifyAgeModel";
import { verifyAge } from "../src/exercises/verifyAge";
//testeSuite
describe("Testing our function VerifyAge", () => {
  test("Testing user brazilian in a casino in Brazil(allowed) ", () => {
    const userBrazilian: User = {
      name: "Paula",
      age: 28,
      nacionality: NACIONALITY.BRAZILIAN,
    };
    const casino: Casino = {
      name: "All Money",
      location: LOCATION.BRAZIL,
    };

    const result = verifyAge(casino, [userBrazilian]);
    expect(result.brazilians.allowed).toEqual(["Paula"]);
  });

  test("Test user american in a casino in Brazil(allowed)", () => {
    const userAmerican: User = {
      name: "Harry",
      age: 27,
      nacionality: NACIONALITY.AMERICAN,
    };

    const casino: Casino = {
      name: "vibe gold",
      location: LOCATION.BRAZIL,
    };

    const result = verifyAge(casino, [userAmerican]);
    expect(result.americans.allowed).toEqual(["Harry"]);
  });

  test("Teste where nobody is allowed", () => {
    const userAmerican1: User = {
      name: "Lindt",
      age: 19,
      nacionality: NACIONALITY.AMERICAN,
    };
    const userAmerican2: User = {
      name: "Jack",
      age: 19,
      nacionality: NACIONALITY.AMERICAN,
    };

    const userBrazilian1: User = {
      name: "Fernanda",
      age: 19,
      nacionality: NACIONALITY.BRAZILIAN,
    };
    const userBrazilian2: User = {
      name: "Lurdes",
      age: 19,
      nacionality: NACIONALITY.BRAZILIAN,
    };

    const casino: Casino = {
      name: "Lux vibe",
      location: LOCATION.EUA,
    };

    const result = verifyAge(casino, [
      userAmerican1,
      userAmerican2,
      userBrazilian1,
      userBrazilian2,
    ]);
    expect(result.americans.unallowed).toEqual(["Lindt", "Jack"]);
    expect(result.brazilians.unallowed).toEqual(["Fernanda", "Lurdes"]);
  });

  test("Teste where 2 users are allowed", () => {
    const userAmerican1: User = {
      name: "Fred",
      age: 21,
      nacionality: NACIONALITY.AMERICAN,
    };
    const userAmerican2: User = {
      name: "Little",
      age: 21,
      nacionality: NACIONALITY.AMERICAN,
    };

    const userBrazilian1: User = {
      name: "Lorena",
      age: 19,
      nacionality: NACIONALITY.BRAZILIAN,
    };
    const userBrazilian2: User = {
      name: "Iago",
      age: 19,
      nacionality: NACIONALITY.BRAZILIAN,
    };

    const casino: Casino = {
      name: "Lux vibe",
      location: LOCATION.EUA,
    };

    const result = verifyAge(casino, [
      userAmerican1,
      userAmerican2,
      userBrazilian1,
      userBrazilian2,
    ]);
    expect(result.americans.allowed).toEqual(["Fred", "Little"]);
    expect(result.brazilians.unallowed).toEqual(["Iago", "Lorena"]);
  });
});
