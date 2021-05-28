import knex from "knex";
export const connection = knex({
  client: "mysql",
  connection: {
    host: "35.226.146.116",
    user: "2114846-paula-santos",
    password: "WgcES3xl0yV03Lxr%4j$",
    database: "cruz-2114846-paula-santos",
    port: 3306,
    multipleStatements: true,
  },
});
