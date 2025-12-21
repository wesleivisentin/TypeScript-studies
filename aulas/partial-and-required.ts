type User = {
  id: string;
  name: string;
  email: string;
};

//Partial<Type> Constructs a type with all properties of types set to optional
//required<Type> constructs a type consisting of all properties of type set to required
function updateUser(user: User, updates: Partial<User>): User {
  return { ...user, ...updates };
}

const lucas: User = {
  id: "1",
  name: "Lucas",
  email: "lucas@exemple.com",
};

const updated = updateUser(lucas, { email: "bla@bla.com" });
console.log(updated);

//Para required é o mesmo principio, ele muda as propriedades opcionais (id?:) para obrigatorias
