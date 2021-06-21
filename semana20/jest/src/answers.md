### Exercício 1
#### Interface para representar o usuário
```
export interface User {
  name: string;
  balance: number;
}

```

#### Função canBuy implementada
```
export const canBuy = (user: User, value: number): User | undefined => {
  if (user.balance >= value) {
    return {
      ...user,
      balance: user.balance - value,
    };
  }

  undefined;
};

```

### Exercício 2
#### a)
```
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
```
#### b)
```
  test("Testing balance less than value", () => {
    const user: User = {
      name: "Paula",
      balance: 500,
    };

    const result = canBuy(user, 800);

    expect(result).toBeUndefined();
  });
```
#### c)
```
  test("Testing balance equal value", () => {
    const user: User = {
      name: "Paula",
      balance: 500,
    };

    const result = canBuy(user, 500);

    expect(result).toEqual({ ...user, balance: 0 });
  });
});

```


