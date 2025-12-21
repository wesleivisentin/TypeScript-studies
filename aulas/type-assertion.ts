/** afirmações de tipo - type assertions
palavra "as" - "como"

Às vezes, você terá informações sobre o 
tipo de um valor que o typescript não consegue conhecer.
**/

type Person = {
  firstName: string;
  lastName: string;
};

const value = { firstName: "Weslei " } as Person; // => recomendavel usar esse
//const value  = <Person>{} as Person

console.log(value.firstName);
