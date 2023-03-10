import {View, Text} from 'react-native';
import React from 'react';

const TitleText = props => {
  return (
    <View>
      <Text className="mt-5 text-xl font-semibold text-gray-800">
        {props.children}
      </Text>
    </View>
  );
};

export default TitleText;
