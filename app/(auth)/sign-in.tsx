import { View, Text, ScrollView, Image, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useEffect, useState } from 'react';
import { Link, router } from 'expo-router';

import { images } from '@/constants';
import { CustomButton, CustomInput } from '@/components';
import { singIn } from '@/lib/appwrite';

export default function SingIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleEmailChange = (e: string) => {
    setEmail(e);
  };
  const handlePasswordChange = (e: string) => {
    setPassword(e);
  };

  const handleSubmit = async () => {
    const data = { email, password };
    setIsSubmitting(true);

    try {
      const result = await singIn(data);
      setEmail('');
      setPassword('');
      setIsSubmitting(false);

      router.replace('/home');

      console.log(result);
    } catch (error: unknown) {
      if (error instanceof Error) {
        Alert.alert('Error', error.message);
        setIsSubmitting(false);
      }
    }
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full min-h-[95vh] justify-center px-4 my-6">
          <Image
            source={images.logo}
            className="w-[115px] h-[35px]"
            resizeMode="contain"
            alt="logo"
          />
          <Text className="text-white text-2xl text-semibold font-psemibold mt-10">
            Log In to Aora
          </Text>
          <View className="mt-10">
            <CustomInput
              label="Email"
              value={email}
              handleChange={handleEmailChange}
              placeholder="Enter your email"
              keyboardType="email-address"
            />
            <CustomInput
              label="Password"
              value={password}
              handleChange={handlePasswordChange}
              placeholder="Enter your password"
            />
          </View>
          <CustomButton
            styles="mt-10 bg-secondary-200 w-full py-4 rounded-2xl justify-center items-center"
            textStyle="text-sm font-pbold text-primary"
            isLoading={isSubmitting}
            onPress={handleSubmit}
            disabled={email === '' || password === ''}
          >
            Sing In
          </CustomButton>

          <View className="justify-center gap-2 pt-5 flex-row">
            <Text className="text-gray-100 text-sm font-pregular">
              Don't have an account?{' '}
              <Link href="/sign-up">
                <Text className="text-secondary-200">Sign Up</Text>
              </Link>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
