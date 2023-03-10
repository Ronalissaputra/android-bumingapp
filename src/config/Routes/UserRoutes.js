import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {
  HomeScreen,
  KonselingScreen,
  ProfileScreen,
  ArticleScreen,
} from '../../screens';
import {StatusBar} from 'react-native';

const UserRoutes = () => {
  const Tab = createBottomTabNavigator();
  return (
    <>
      <StatusBar backgroundColor="#54CBFF" barStyle="dark-content" />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            headerShown: false,
            tabBarShowLabel: true,
            tabBarLabelStyle: {fontSize: 12},
            tabBarStyle: {
              backgroundColor: 'white',
              height: 43,
              padding: 0,
            },
            tabBarInactiveTintColor: 'black',
            tabBarActiveTintColor: 'blue',
            // eslint-disable-next-line react/no-unstable-nested-components
            tabBarIcon: ({focused, size, color}) => {
              let iconName;
              if (route.name === 'Home') {
                iconName = focused ? 'ios-home' : 'ios-home-outline';
                size = focused ? size + 2 : size + 1;
              } else if (route.name === 'Pemantauan') {
                iconName = focused ? 'receipt' : 'receipt-outline';
                size = focused ? size + 2 : size + 1;
              } else if (route.name === 'Article') {
                iconName = focused ? 'newspaper-sharp' : 'newspaper-outline';
                size = focused ? size + 2 : size + 1;
              } else if (route.name === 'Profil') {
                iconName = focused ? 'person-circle' : 'person-circle-outline';
                size = focused ? size + 2 : size + 1;
              }
              return <IonIcon name={iconName} size={size} color={color} />;
            },
          })}>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Pemantauan" component={KonselingScreen} />
          <Tab.Screen name="Article" component={ArticleScreen} />
          <Tab.Screen name="Profil" component={ProfileScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default UserRoutes;
