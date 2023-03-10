import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {contens} from '../fakeApi';

const InformasiKesehatan = () => {
  return (
    <>
      {contens.map(conten => (
        <TouchableOpacity
          key={conten.id}
          className="mt-4 h-auto w-full rounded-lg bg-cyan-700 shadow-lg">
          <Image
            source={conten.image}
            className="h-[100px] w-full rounded-t-lg"
          />
          <Text className="px-1 font-serif text-lg text-gray-100">
            {conten.body}
          </Text>
        </TouchableOpacity>
      ))}
    </>
  );
};

export default InformasiKesehatan;
