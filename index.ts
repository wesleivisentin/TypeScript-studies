import { Person } from "./Person";

function main() {}
const maria = new Person("Maria", "Da Silva", new Date("1999-01-15"));

console.log(maria.getFullName());

maria.updateFirstName("Maria Clara");

console.log(maria.getFullName());

main();
