import React from 'react';
import { Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function TabLayout() {
  return (
    <View className="items-center justify-center flex-1">
      <Text className="text-2xl font-bold text-blue-700">Hello world!</Text>
      <Link href="/profile" style={{ color: 'blue' }}>
        Profile
      </Link>
    </View>
  );
}
