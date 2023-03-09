import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const LoginScreen = ({navigation}) => {
  return (
    <View className="flex min-h-screen w-full items-center justify-center">
      <Text className="text-2xl">LoginScreen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('register')}>
        <Text className="bg-red-300 p-2 text-2xl text-gray-100">
          Go To Register
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
