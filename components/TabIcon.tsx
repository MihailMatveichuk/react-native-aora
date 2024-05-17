import React from 'react';
import { View, Image, type ImageProps } from 'react-native';

type Props = {
  src: ImageProps;
  color: string;
  name: string;
  focused: boolean;
  size: number;
};

export function TabIcon({ src, color, name, focused, size }: Props) {
  return (
    <View>
      <Image source={src} />
    </View>
  );
}
