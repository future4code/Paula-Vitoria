type userAccount = {
  name: string;
  cpf: string;
  birth: String;
  balance: number;
  spents: extract[];
};

type extract = {
  value: number;
  date: string;
  description: string;
};

export const users: userAccount[] = [
  {
    name: "Paula Lopes",
    cpf: "0241569874",
    birth: "22/08/1996",
    balance: 320.0,
    spents: [
      { value: 200.0, date: "30/02/2020", description: "Aluguel" },
      { value: 380.0, date: "30/07/2020", description: "empréstimo" },
    ],
  },
  {
    name: "Elvis Cunha",
    cpf: "0390322506",
    birth: "21/06/1993",
    balance: 890.0,
    spents: [],
  },
  {
    name: "Débora Lopes",
    cpf: "03203371550",
    birth: "06/11/1994",
    balance: 150.0,
    spents: [],
  },
];
