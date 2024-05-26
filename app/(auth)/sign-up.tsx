import { View, Text, ScrollView, Image, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import { Link, router } from 'expo-router';

import { images } from '@/constants';
import { CustomButton, CustomInput } from '@/components';
import { createUser } from '@/lib/appwrite';

export default function SingUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleUserNameChange = (e: string) => {
    setUsername(e);
  };

  const handleEmailChange = (e: string) => {
    setEmail(e);
  };
  const handlePasswordChange = (e: string) => {
    setPassword(e);
  };

  const handleSubmit = async () => {
    const data = { email, password, username };
    setIsSubmitting(true);

    try {
      const result = await createUser(data);
      setEmail('');
      setPassword('');
      setUsername('');
      setIsSubmitting(false);

      router.replace('/home');

      console.log(result.data);
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
            Sing Up to Aora
          </Text>
          <View className="mt-10">
            <CustomInput
              label="User Name"
              value={username}
              handleChange={handleUserNameChange}
              placeholder="Enter your username"
            />
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
            disabled={email === '' || password === '' || username === ''}
          >
            Sing Up
          </CustomButton>

          <View className="justify-center gap-2 pt-5 flex-row">
            <Text className="text-gray-100 text-sm font-pregular">
              Have an account already?{' '}
              <Link href="/sign-in">
                <Text className="text-secondary-200">Sign In</Text>
              </Link>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
