import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {
  HomeScreen,
  KonselingScreen,
  ProfileScreen,
  ArticleScreen,
} from '../screens';
import {StatusBar} from 'react-native';

const Routes = () => {
  const Tab = createBottomTabNavigator();
  return (
    <>
      <StatusBar backgroundColor="#54CBFF" barStyle="dark-content" />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            headerShown: false,
            tabBarShowLabel: true,
            tabBarLabelStyle: {fontSize: 14},
            tabBarStyle: {
              backgroundColor: 'green',
              height: 55,
              padding: 5,
            },
            tabBarInactiveTintColor: '#ffff',
            tabBarActiveTintColor: 'orange',
            // eslint-disable-next-line react/no-unstable-nested-components
            tabBarIcon: ({focused, size, color}) => {
              let iconName;
              if (route.name === 'home') {
                iconName = focused ? 'ios-home' : 'ios-home-outline';
                size = focused ? size + 5 : size + 3;
              } else if (route.name === 'konseling') {
                iconName = focused ? 'calendar' : 'calendar-outline';
                size = focused ? size + 5 : size + 3;
              } else if (route.name === 'article') {
                iconName = focused ? 'book' : 'book-outline';
                size = focused ? size + 5 : size + 3;
              } else if (route.name === 'profil') {
                iconName = focused ? 'person-circle' : 'person-circle-outline';
                size = focused ? size + 5 : size + 3;
              }
              return <IonIcon name={iconName} size={size} color={color} />;
            },
          })}>
          <Tab.Screen name="home" component={HomeScreen} />
          <Tab.Screen name="konseling" component={KonselingScreen} />
          <Tab.Screen name="article" component={ArticleScreen} />
          <Tab.Screen name="profil" component={ProfileScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Routes;
