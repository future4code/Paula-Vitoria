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

### Exercício 3

#### a) e b)

```

export const verifyAge = (casino: Casino, users: User[]) => {
  const allowed: User[] = [];
  const unallowed: User[] = [];

  for (let i = 0; i < users.length; i++) {
    if (users[i].nacionality === NACIONALITY.BRAZILIAN) {
      if (users[i].age >= 18) {
        allowed.push(users[i]);
      } else {
        unallowed.push(users[i]);
      }
    }
  }

  for (let i = 0; i < users.length; i++) {
    if (users[i].nacionality === NACIONALITY.AMERICAN) {
      if (users[i].age >= 21) {
        allowed.push(users[i]);
      }
    } else {
      unallowed.push(users[i]);
    }
  }

  return {
    brazilians: {
      allowed: allowed
        .filter((user) => user.nacionality === NACIONALITY.BRAZILIAN)
        .map((u) => u.name),
      unallowed: unallowed
        .filter((user) => user.nacionality === NACIONALITY.BRAZILIAN)
        .map((u) => u.name),
    },
    americans: {
      allowed: allowed
        .filter((user) => user.nacionality === NACIONALITY.AMERICAN)
        .map((u) => u.name),
      unallowed: unallowed
        .filter((user) => user.nacionality === NACIONALITY.AMERICAN)
        .map((u) => u.name),
    },
  };
};

```

#### c)

O mais difícil de fazer foi o retorno da função com o map.

### Exercício 4

a)

```
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

```

b)

```
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

```
