import React from 'react';
import { View, Image, type ImageProps, Text } from 'react-native';

type Props = {
  src: ImageProps;
  color: string;
  name: string;
  focused: boolean;
};

export function TabIcon({ src, color, name, focused }: Props) {
  return (
    <View className="flex flex-col items-center justify-center">
      <Image
        source={src}
        resizeMode="contain"
        className="w-6 h-6"
        tintColor={color}
        alt={name}
      />
      <Text
        className={`${focused ? ' font-psemibold' : ' font-pregular'} text-xs`}
        style={{ color }}
      >
        {name}
      </Text>
    </View>
  );
}
