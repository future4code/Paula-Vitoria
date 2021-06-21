import { Casino, NACIONALITY } from "../models/verifyAgeModel";
import { User, Result, ResultItem } from "../models/verifyAgeModel";

const user1: User = {
  name: "Paula",
  age: 28,
  nacionality: NACIONALITY.BRAZILIAN,
};

const user2: User = {
  name: "Luis",
  age: 15,
  nacionality: NACIONALITY.BRAZILIAN,
};

const user3: User = {
  name: "Maura",
  age: 25,
  nacionality: NACIONALITY.BRAZILIAN,
};

const user4: User = {
  name: "Harry",
  age: 27,
  nacionality: NACIONALITY.AMERICAN,
};

const usersCasino: User[] = [];
usersCasino.push(user1);
usersCasino.push(user2);
usersCasino.push(user3);
usersCasino.push(user4);
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

  const allowedNames: User[] = [];
  const unallowedNames: User[] = [];
  console.log(allowed);
  console.log(unallowed);
};
