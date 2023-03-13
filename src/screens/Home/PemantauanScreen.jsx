import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {Header, TitleText} from '../../components';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  Kehamilan,
  Persalinan,
  Nifas,
  Bayi,
  Popup,
} from '../../components/Modal';

const PemantauanScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [kehamilan, setKehamilan] = useState(false);
  const [persalinan, setPersalinan] = useState(false);
  const [nifas, setNifas] = useState(false);
  const [bayi, setBayi] = useState(false);

  return (
    <>
      <ScrollView
        className={`${
          modalVisible || kehamilan || persalinan || nifas || bayi
            ? 'bg-gray-400'
            : ''
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
        <TitleText>MenuPemantauan</TitleText>
        <TouchableOpacity
          onPress={() => setKehamilan(true)}
          className="mt-3 h-20 flex-row items-center justify-between rounded-lg bg-indigo-800 px-4 shadow-lg">
          <View>
            <Text className="font-mono text-3xl text-gray-100">Kehamilan</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setPersalinan(true)}
          className="mt-3 h-20 flex-row items-center justify-between rounded-lg bg-indigo-800 px-4 shadow-lg">
          <View>
            <Text className="font-mono text-3xl text-gray-100">Persalinan</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setNifas(true)}
          className="mt-3 h-20 flex-row items-center justify-between rounded-lg bg-indigo-800 px-4 shadow-lg">
          <View>
            <Text className="font-mono text-3xl text-gray-100">Nifas</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setBayi(true)}
          className="mt-3 h-20 flex-row items-center justify-between rounded-lg bg-indigo-800 px-4 shadow-lg">
          <View>
            <Text className="font-mono text-3xl text-gray-100">Bayi</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          className="mt-3 h-20 flex-row items-center justify-between rounded-lg bg-indigo-800 px-4 shadow-lg">
          <View>
            <Text className="font-mono text-3xl text-gray-100">
              Keluarga Berencana
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
      <Kehamilan kehamilan={kehamilan} setKehamilan={setKehamilan} />
      <Persalinan persalinan={persalinan} setPersalinan={setPersalinan} />
      <Nifas nifas={nifas} setNifas={setNifas} />
      <Bayi bayi={bayi} setBayi={setBayi} />
      {/* contoh */}
      <Popup modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </>
  );
};

export default PemantauanScreen;
