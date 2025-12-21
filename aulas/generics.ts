// Generics - Capacidade de criar código (função, classe, tipos)
// que funcionam em uma variedade de tipos ao em vez de apenas um.

// type variable - variáveis de tipo

function identify<Type>(arg: Type): Type {
  return arg;
}

const value = identify<string>("value");
const value2 = identify<number>(3);
// o typescrip consegue inferir o valor, então não precisa declarar o <boolean>:
const value3 = identify(true);
