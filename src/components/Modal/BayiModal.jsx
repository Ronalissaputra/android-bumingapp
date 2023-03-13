import React from 'react';
import {Alert, Modal, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Bayi = ({bayi, setBayi}) => {
  const kunjungan = [
    {
      id: 1,
      title: 'Kunjungan Neonatus 1',
    },
    {
      id: 2,
      title: 'Kunjungan Neonatus 2',
    },
    {
      id: 3,
      title: 'Kunjungan Neonatus 3',
    },
    {
      id: 4,
      title: 'Imunisasi',
    },
    {
      id: 5,
      title: 'Tumbuh Kembang',
    },
  ];
  return (
    <View className="flex justify-end">
      <Modal
        animationType="slide"
        transparent={true}
        visible={bayi}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setBayi(!bayi);
        }}>
        <View style={{flex: 1, justifyContent: 'flex-end'}}>
          <View className="rounded-t-2xl bg-slate-50 px-2 shadow-xl">
            <View className="mt-2 flex-row items-center justify-center">
              <TouchableOpacity
                onPress={() => setBayi(false)}
                className="absolute right-0">
                <Icon name="ios-close" size={28} color="black" />
              </TouchableOpacity>
              <View className="items-center">
                <Text className="text-2xl text-gray-800">Pilih Kunjungan</Text>
              </View>
            </View>
            <View className="border-b" />
            {kunjungan.map(kunjung => (
              <View key={kunjung.id} className="mb-2 flex items-center">
                <TouchableOpacity className=" mt-2 w-full rounded-lg">
                  <View className="flex-row space-x-3">
                    <Icon name="calendar" size={30} color="blue" />
                    <Text className="text-2xl text-gray-800">
                      {kunjung.title}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Bayi;
