import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Konseling = () => {
  return (
    <TouchableOpacity className="mt-3 h-20 flex-row items-center justify-between rounded-lg bg-indigo-800 px-2 shadow-lg">
      <View>
        <Text className="text-2xl font-light text-gray-100">
          Tidak ada jadwal
        </Text>
        <Text className="text-md font-semibold text-gray-100">
          Jum'at, 10 Maret 2023
        </Text>
      </View>
      <View>
        <Icon name="ios-time" size={50} color="orange" />
      </View>
    </TouchableOpacity>
  );
};

export default Konseling;
