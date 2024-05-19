import {
  View,
  Text,
  TextInput,
  type KeyboardTypeOptions,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';

import { icons } from '@/constants';

type Props = {
  label: string;
  value: string;
  styles?: string;
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions;
  handleChange: (e: string) => void;
};

export function CustomInput({
  label,
  value,
  placeholder,
  keyboardType,
  handleChange,
}: Props) {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => setShowPassword((prev) => !prev);

  return (
    <View>
      <Text className="font-psemibold text-gray-100 mb-1">{label}</Text>
      <View className="w-full flex-row mb-4 py-3 px-4 rounded-xl mt-1 bg-gray-800 border-[1px] focus:border-secondary-200">
        <TextInput
          aria-label={label}
          onChangeText={handleChange}
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
          className="font-psemibold text-gray-100 flex-1"
          keyboardType={keyboardType}
          secureTextEntry={label === 'Password' && !showPassword ? true : false}
        />
        {label === 'Password' && (
          <TouchableOpacity activeOpacity={0.5} onPress={handleShowPassword}>
            <Image
              source={showPassword ? icons.eyeHide : icons.eye}
              alt="eye"
              resizeMode="contain"
              className="w-[40px] h-[30px]"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
