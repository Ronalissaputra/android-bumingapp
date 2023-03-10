import {View, ScrollView, TextInput} from 'react-native';
import React from 'react';
import {Header, InformasiKesehatan, TitleText} from '../components';
import Icon from 'react-native-vector-icons/Ionicons';

const ArticleScreen = () => {
  return (
    <>
      <ScrollView className="h-auto w-full px-2">
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
        <TitleText>Info kesehatan</TitleText>
        <InformasiKesehatan />
        <InformasiKesehatan />
        <InformasiKesehatan />
      </ScrollView>
    </>
  );
};

export default ArticleScreen;
