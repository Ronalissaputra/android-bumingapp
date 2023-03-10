import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const Header = () => {
  return (
    <View className="mt-2 h-20 flex-row items-center justify-between space-x-4">
      <View>
        <Text className="text-xl font-semibold text-gray-800">
          Halo Ronalis
        </Text>
      </View>
      <View className="flex-row items-center space-x-2">
        <TouchableOpacity>
          <Icon name="ios-notifications" size={35} color="black" />
        </TouchableOpacity>
        <TouchableOpacity className="flex h-[45px] w-[45px] items-center justify-center rounded-full bg-orange-500">
          <Text className="text-2xl font-semibold text-gray-100">R</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
