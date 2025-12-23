import { createIconSet } from "@expo/vector-icons"; //cerca alternativa react
import glyphMap from "../assets/map.json";

// 1. Definisci il nome del font (identico a quello interno al file ttf)
const fontName = "smart-home-icons";

// 2. Esportiamo il "require" del file ttf.
// Questo serve all'utente finale per passarlo a useFonts() di Expo.
export const fontSource = require("../assets/fonts/smart-home-icons.ttf");

// 3. Creiamo il componente Icona
const Shicons = createIconSet(glyphMap, fontName, "smart-home-icons.ttf");

export default Shicons;
