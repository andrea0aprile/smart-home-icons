# Smart Home Icons

A custom font icons specifically designed for Smart Home applications in React Native.
Built on top of `@expo/vector-icons`, it works seamlessly with Expo and React Native.

## Installation

```bash
npm install smart-home-icons
```

## Setup & Usage

To use the icons, you must load the font file first. This library exports the fontSource required for the expo-font hook.

1. Load the Font
   Inside your root component (e.g., App.js or app/\_layout.js if using Expo Router):

```
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';

// 1. Import the component and the font source
import Shicons, { fontSource } from 'smart-home-icons';

export default function App() {
  // 2. Load the font using the exported source
  const [fontsLoaded] = useFonts({
    'smart-home-icons': fontSource, // NOTE: The key must match the internal font name
  });

  if (!fontsLoaded) {
    return null; // Or return a loading spinner
  }

  return (
    <View >
      <Text >My Smart Home</Text>

      {/* 3. Use the icon */}
      <View >
        <Shicons name="fp-icon-on-light_0" size={48} color="#FFD700" />
        <Shicons name="fp-icon-off-light_0" size={48} color="#333" />
      </View>

    </View>
  );
}
```

## Props

Shicons accepts all standard props from @expo/vector-icons:

name string Required The name of the icon (see list below)
size number 12 Size of the icon in pixels
color string black Color of the icon
style object - Custom styles

## Icon List (Cheat Sheet)

Here are the available icon names included in this package: (SOON)
