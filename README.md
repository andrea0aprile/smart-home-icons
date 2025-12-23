# Smart Home Icons

A lightweight, custom icon font designed for Smart Home applications in React Native.
Powered by `@expo/vector-icons`, it works seamlessly with **Expo** and **React Native**.

> Status: **Beta** — under active development

## Installation

```bash
npm install smart-home-icons
```

## Setup & Usage

To use the icons, you must load the font file first. This library exports the fontSource required for the expo-font hook.

```js
import React from "react";
import { View, StyleSheet } from "react-native";
import { useFonts } from "expo-font";

// ——————————————————————> 1. Import the component and the font source
import Shicons, { fontSource } from "smart-home-icons";

export default function App() {
  // ————————————————————> 2. Load the font using the exported source
  const [fontsLoaded] = useFonts({
    "smart-home-icons": fontSource,
  });

  if (!fontsLoaded) {
    return null;
    // or return a loading spinner
  }

  return (
    <View>
      {/* ———————————————> 3. Use your icons */}
      <Shicons name="fp-icon-on-light_0" size={48} color="#FFD700" />
      <Shicons name="fp-icon-off-light_0" size={48} color="#F50F0F" />
    </View>
  );
}
```

## Props

Shicons supports the following props:

| Prop  | Type   | Required | Default | Description                                        |
| ----- | ------ | -------- | ------- | -------------------------------------------------- |
| name  | string | ✅ Yes   | —       | Name of the icon to render (see Cheat Sheet below) |
| size  | number | ❌ No    | 12      | Icon size in pixels                                |
| color | string | ❌ No    | black   | Icon color                                         |

**Notes:**

- The `name` prop must match one of the available icon names.

## Cheat Sheet

Here are the available icons included in this package: (coming soon)

## Contributing

This project is in beta and actively developed.
Feel free to open issues or submit pull requests to help improve the icon set.

## License

The source code in this repository is licensed under MIT.
