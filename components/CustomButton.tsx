import { Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import React, { type ReactNode } from 'react';

type Props = {
  children: ReactNode;
  styles?: string;
  textStyle?: string;
  isLoading?: boolean;
  onPress?: () => void;
};

export function CustomButton({
  children,
  styles,
  textStyle,
  isLoading,
  onPress,
}: Props) {
  return (
    <TouchableOpacity
      className={`${styles} ${
        isLoading ? 'opacity-50 cursor-not-allowed' : ''
      }`}
      disabled={isLoading}
      onPress={onPress}
      activeOpacity={0.7}
    >
      {isLoading ? (
        <ActivityIndicator size="small" color="white" />
      ) : (
        <Text className={textStyle}>{children}</Text>
      )}
    </TouchableOpacity>
  );
}
