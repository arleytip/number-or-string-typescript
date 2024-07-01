function toNumber(value: number | string) {
  if (typeof value === "number") {
    return `Retornado com o seguinte numero: ${value}`;
  } else if (typeof value === "string") {
    return `Retornado com o seguinte número em string: ${Number(value)}`;
  } else {
    throw "value deve ser um número ou uma string";
  }
}
console.log(toNumber("21"));
