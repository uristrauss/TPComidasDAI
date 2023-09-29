/*import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TextInput,
  styles,
  Image,
  Button
  }
  from 'react-native';
  import axios from 'axios';
  import { useContextState } from './contextState';
  const [detallePlato, setDetallePlato] = useState({});
  const {contextState, setContextState} = useContextState();

const Detalle = ({navigation, route}) => {
    useEffect(() => {
        axios.get(`https://api.spoonacular.com/recipes/${route.params.id}/information?apiKey=3a5083611ddd48758994eed45d254648`, {
        })
        .then(function (response) {
        setDetallePlato(response.data);
        })
        .catch(function (response) {
        })
      }) 

    return{
        
    }
  }

export default Menu;
*/