import { User } from "../src/models/modelCanBuy";
import { canBuy } from "../src/exercises/canBuy";
//testeSuite
describe("Testing our function canBuy", () => {
  test("Testing balance greater than value ", () => {
    const user: User = {
      name: "Paula",
      balance: 500,
    };

    const result = canBuy(user, 100);

    expect(result).toEqual({
      name: "Paula",
      balance: 400,
    });
  });

  test("Testing balance less than value", () => {
    const user: User = {
      name: "Paula",
      balance: 500,
    };

    const result = canBuy(user, 800);

    expect(result).toBeUndefined();
  });

  test("Testing balance equal value", () => {
    const user: User = {
      name: "Paula",
      balance: 500,
    };

    const result = canBuy(user, 500);

    expect(result).toEqual({ ...user, balance: 0 });
  });
});
