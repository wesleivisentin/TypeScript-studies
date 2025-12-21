// Generic contraints - Restrições genéricas
// Genérico mas nem tanto

type TypeContraints = {
  length: number;
};

function logginIdentity<Type extends TypeContraints>(arg: Type): Type {
  console.log(arg.length);
  return arg;
}

const value: string = "value";

logginIdentity(value);
logginIdentity([3, 34]);
