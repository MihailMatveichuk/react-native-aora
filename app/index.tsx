import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Redirect, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { CustomButton } from '@/components';
import { images } from '@/constants';

export default function TabLayout() {
  const handleSingIn = () => router.push('/sign-in');

  return (
    <SafeAreaView className="bg-primary h-full">
      <StatusBar backgroundColor="#161622" style="light" />
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className="w-full min-h-[95vh] items-center justify-center px-4">
          <Image
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
            alt="logo"
          />

          <Image
            source={images.cards}
            className="max-w-[380px] w-full h-[300px]"
            resizeMode="contain"
            alt="cards"
          />

          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">
              Discover Endless Possibilities With{' '}
              <Text className="text-secondary-200">Aora</Text>
            </Text>

            <Image
              source={images.path}
              resizeMode="contain"
              className="absolute w-[136px] h-[15px] -bottom-2 -right-8"
            />
          </View>

          <Text className="text-gray-100 text-sm font-pregular text-center mt-7">
            Where creativity means annovation: embark on a journey limitless
            exploration with Aora.
          </Text>

          <CustomButton
            styles="mt-10 bg-secondary-200 w-full py-4 rounded-2xl justify-center items-center"
            textStyle="text-sm font-psemibold text-white"
            isLoading={false}
            onPress={handleSingIn}
          >
            Continue with Email
          </CustomButton>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
