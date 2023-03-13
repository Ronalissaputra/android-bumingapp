import React from 'react';
import {View, ScrollView, TextInput} from 'react-native';
import {
  Header,
  TitleText,
  Konseling,
  InformasiKesehatan,
} from '../../components';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = () => {
  return (
    <ScrollView className="h-auto w-full px-2">
      <View className="sticky top-0">
        <Header />
      </View>
      <View className="flex justify-center">
        <TextInput
          className="rounded-full border border-black py-[2px] px-4 text-xl"
          placeholder="Search"
        />
        <View className="absolute right-2">
          <Icon name="ios-search-outline" size={25} />
        </View>
      </View>
      <TitleText>Jadwal Konseling</TitleText>
      <Konseling />
      <Konseling />
      <TitleText>Informasi Kesehatan</TitleText>
      <InformasiKesehatan />
      <InformasiKesehatan />
      <InformasiKesehatan />
      <InformasiKesehatan />
      <InformasiKesehatan />
    </ScrollView>
  );
};

export default HomeScreen;
