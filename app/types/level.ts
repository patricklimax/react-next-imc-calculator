export type Level = {
  title: string;
  color: string;
  icon: "down" | "up";
  imc: number[] | string;
  yourImc?: number | string;
};
