import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {Header, TitleText} from '../components';
import Icon from 'react-native-vector-icons/Ionicons';
import Popup from '../components/Popup';
import Kehamilan from '../components/KehamilanModal';

const KonselingScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [kehamilan, setKehamilan] = useState(false);

  return (
    <>
      <ScrollView
        className={`${
          modalVisible || kehamilan ? 'bg-gray-400' : ''
        } h-auto w-full  px-2`}>
        <Header />
        <View className="flex justify-center">
          <TextInput
            className="rounded-full border border-black py-[2px] px-4 text-xl"
            placeholder="Search"
          />
          <View className="absolute right-2">
            <Icon name="ios-search-outline" size={25} />
          </View>
        </View>
        <TitleText>Input Pemantauan</TitleText>
        <TouchableOpacity
          onPress={() => setKehamilan(true)}
          className="mt-3 h-20 flex-row items-center justify-between rounded-lg border-l-8 border-orange-600 bg-indigo-800 px-2 shadow-lg">
          <View>
            <Text className="font-mono text-3xl text-gray-100">Kehamilan</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          className="mt-3 h-20 flex-row items-center justify-between rounded-lg border-l-8 border-orange-600 bg-indigo-800 px-2 shadow-lg">
          <View>
            <Text className="font-mono text-3xl text-gray-100">Persalinan</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          className="mt-3 h-20 flex-row items-center justify-between rounded-lg border-l-8 border-orange-600 bg-indigo-800 px-2 shadow-lg">
          <View>
            <Text className="font-mono text-3xl text-gray-100">Nifas</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          className="mt-3 h-20 flex-row items-center justify-between rounded-lg border-l-8 border-orange-600 bg-indigo-800 px-2 shadow-lg">
          <View>
            <Text className="font-mono text-3xl text-gray-100">Bayi</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          className="mt-3 h-20 flex-row items-center justify-between rounded-lg border-l-8 border-orange-600 bg-indigo-800 px-2 shadow-lg">
          <View>
            <Text className="font-mono text-3xl text-gray-100">
              Keluarga Berencana
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
      <Kehamilan kehamilan={kehamilan} setKehamilan={setKehamilan} />
      <Popup modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </>
  );
};

export default KonselingScreen;
