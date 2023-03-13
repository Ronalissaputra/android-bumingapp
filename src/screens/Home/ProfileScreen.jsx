import {View, Text, ScrollView} from 'react-native';
import React from 'react';

const ProfileScreen = () => {
  return (
    <ScrollView className="h-auto w-full px-2">
      <View className="mt-2 h-20 flex-row items-center space-x-4">
        <View className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-orange-500">
          <Text className="text-3xl font-semibold text-gray-100">R</Text>
        </View>
        <View className="w-full">
          <Text className="text-xl font-light text-gray-800">Hi, Ronalis</Text>
          <Text className="text-md font-semibold text-gray-800">
            Aplikasi buming pendamping
          </Text>
        </View>
      </View>
      <View className="mt-4 h-20 w-full rounded-lg bg-indigo-600">
        <Text className="p-2 text-2xl font-light text-gray-100">
          Hello Ronalis
        </Text>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;
