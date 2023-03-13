import React from 'react';
import {Alert, Modal, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Popup = ({modalVisible, setModalVisible}) => {
  return (
    <View className="flex justify-end">
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={{flex: 1, justifyContent: 'flex-end'}}>
          <View className="rounded-t-lg bg-slate-50 px-2 shadow-xl">
            <View className="mt-2 flex-row items-center justify-center">
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                className="absolute right-0">
                <Icon name="ios-close" size={28} color="black" />
              </TouchableOpacity>
              <View className="items-center">
                <Text className="text-2xl text-gray-800">Pilih Ibu Hamil</Text>
              </View>
            </View>
            <View className="mt-1 border-b" />
            <View className="mb-2 space-y-2">
              <TouchableOpacity className="mt-2">
                <Text className="text-2xl text-gray-800">Kosong</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Popup;
