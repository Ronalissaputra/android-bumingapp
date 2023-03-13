import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const LoginScreen = ({navigation}) => {
  return (
    <View className="flex min-h-screen w-full justify-center px-2">
      <View className="">
        <Text className="text-3xl font-bold text-gray-800">Login</Text>
        <SafeAreaView>
          <View className="mt-5">
            <Text className="text-2xl text-gray-800">Username</Text>
            <View className="mt-1 flex justify-center">
              <TextInput
                className="h-12 rounded-full border pl-12 text-2xl"
                placeholder="Username"
                keyboardType="email-address"
              />
              <View className="absolute left-2">
                <Icon name="person-circle-outline" size={35} color="blue" />
              </View>
            </View>
          </View>
          <View className="mt-5">
            <Text className="text-2xl text-gray-800">Password</Text>
            <View className="mt-1 flex justify-center">
              <TextInput
                className="h-12 rounded-full border pl-12 text-2xl"
                placeholder="Password"
                keyboardType="default"
              />
              <View className="absolute left-2">
                <Icon name="keypad" size={30} color="blue" />
              </View>
            </View>
          </View>
          <View className="mt-5">
            <TouchableOpacity
              onPress={() => navigation.navigate('Home')}
              className="flex h-14 w-full items-center justify-center rounded-full bg-blue-500">
              <Text className="text-2xl font-semibold text-gray-100">
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
        <View className="mt-2 flex items-center">
          <View className="flex-row">
            <Text className="text-lg text-gray-800">Belum punya akun?</Text>
            <Text
              onPress={() => navigation.navigate('Register')}
              className="inline pl-1 text-lg italic text-blue-800 underline">
              Register
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
