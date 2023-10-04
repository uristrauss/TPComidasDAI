import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TextInput,
  Image,
  Button
} from 'react-native';
import axios from 'axios';
import { useContextState } from './contextState';

const Menu = ({ navigation, route }) => {
  const [detallePlato, setDetallePlato] = useState({});
  const { contextState, setContextState } = useContextState();



  return (
    <SafeAreaView>
      <View>
        {/*SACAR EL DISH*/}
        {contextState?.menu?.map((dish, index) => (
          <View key={index}>
            <Text>{dish.title}</Text>
            <Text>{dish.description}</Text>
            <Text>{dish.price}</Text>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default Menu;
