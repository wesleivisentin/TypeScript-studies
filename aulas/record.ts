// Record<Keys, Type> - Usado para mapear propriedades de um tipo para outro

type ButtonVariant = "primary" | "danger" | "disable";

type ButtonStyle = {
  backgroundColor: string;
  isEnable: boolean;
};

const buttons: Record<ButtonVariant, ButtonStyle> = {
  primary: { backgroundColor: "#8158F9", isEnable: true },
  danger: { backgroundColor: "#DC3545", isEnable: true },
  disable: { backgroundColor: "#CCC", isEnable: false },
};
buttons.danger;
//ou
buttons["danger"];
