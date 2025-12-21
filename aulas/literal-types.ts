// Tipos Literais - Literal Types
// Uma variável pode fazer parte de um conjunto específico de string ou number
// exemplo: Direction => left, right, up, bottom.

type Direction = "left" | "top" | "right" | "bottom";

const value: Direction = "left";

//_____________________

type METHOD = "GET" | "POST";
declare function handleRequest(url: string, method: METHOD): void;

const req: { url: string; method: METHOD } = {
  url: "https://exemple.com",
  method: "GET",
};
req.method = "POST";

handleRequest(req.url, req.method);
