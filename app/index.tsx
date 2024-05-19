import { CustomButton } from '@/components';
import { images } from '@/constants';
import React from 'react';
import { Image, ScrollView, StatusBar, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TabLayout() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className="flex w-full h-full items-center px-4">
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
            onPress={() => {}}
          >
            Continue with Email
          </CustomButton>
        </View>
      </ScrollView>

      <StatusBar backgroundColor="transparent" barStyle="light-content" />
    </SafeAreaView>
  );
}
