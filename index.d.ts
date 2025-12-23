import { Component } from "react";
import { TextProps } from "react-native";

// Esportiamo la sorgente del font per l'uso con useFonts
export const fontSource: any;

// Lista di tutte le tue icone per l'autocompletamento
export type IconNames =
  | "fp-icon-off-light_0"
  | "fp-icon-off-light_1"
  | "fp-icon-off-light_2"
  | "fp-icon-off-light_3"
  | "fp-icon-off-light_4"
  | "fp-icon-off-light_5"
  | "fp-icon-on-light_0"
  | "fp-icon-on-light_1"
  | "fp-icon-on-light_2"
  | "fp-icon-on-light_3"
  | "fp-icon-on-light_4"
  | "fp-icon-on-light_5";
// ... (VS Code capirà che stringhe accettare)

export interface IconProps extends TextProps {
  name: IconNames;
  size?: number;
  color?: string;
}

// Definizione del componente
export default class Shicons extends Component<IconProps> {}
