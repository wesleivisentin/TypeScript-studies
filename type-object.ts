// type Person = {firstName: string; lastName: string}

interface Person {
  firstName: string;
  lastName: string;
}
interface User extends Person {
  email: string;
}

function getFullName(person: Person): string {
  return `${person.firstName} ${person.lastName}`;
}

//Structural type system => Sistema de tipo estrutural
const User = {
  firstName: "Weslei",
  lastName: "Visentin",
  email: "weslei@gmail.com",
};

const fullName = getFullName(User);
console.log(fullName);
