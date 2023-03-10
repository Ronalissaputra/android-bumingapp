import React from 'react';
import {Alert, Modal, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Kehamilan = ({kehamilan, setKehamilan}) => {
  return (
    <View className="flex justify-end">
      <Modal
        animationType="slide"
        transparent={true}
        visible={kehamilan}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setKehamilan(!kehamilan);
        }}>
        <View style={{flex: 1, justifyContent: 'flex-end'}}>
          <View className="rounded-t-lg bg-slate-50 px-2 shadow-xl">
            <View className="mt-2 flex-row items-center justify-center">
              <TouchableOpacity
                onPress={() => setKehamilan(false)}
                className="absolute right-0">
                <Icon name="ios-close" size={28} color="black" />
              </TouchableOpacity>
              <View className="items-center">
                <Text className="text-2xl text-gray-800">Pilih Kunjungan</Text>
              </View>
            </View>
            <View className="mt-1 border-b" />
            <View className="mb-2 space-y-4">
              <TouchableOpacity className="mt-2">
                <View className="flex-row space-x-3">
                  <Icon name="calendar" size={30} color="blue" />
                  <Text className="text-2xl text-gray-800">Kunjungan 1</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity className="mt-2">
                <View className="flex-row space-x-3">
                  <Icon name="calendar" size={30} color="blue" />
                  <Text className="text-2xl text-gray-800">Kunjungan 2</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity className="mt-2">
                <View className="flex-row space-x-3">
                  <Icon name="calendar" size={30} color="blue" />
                  <Text className="text-2xl text-gray-800">Kunjungan 3</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity className="mt-2">
                <View className="flex-row space-x-3">
                  <Icon name="calendar" size={30} color="blue" />
                  <Text className="text-2xl text-gray-800">Kunjungan 4</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity className="mt-2">
                <View className="flex-row space-x-3">
                  <Icon name="calendar" size={30} color="blue" />
                  <Text className="text-2xl text-gray-800">Kunjungan 5</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity className="mt-2">
                <View className="flex-row space-x-3">
                  <Icon name="calendar" size={30} color="blue" />
                  <Text className="text-2xl text-gray-800">Kunjungan 6</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Kehamilan;
