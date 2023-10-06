import React, { useState, useEffect } from 'react';
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
  Button,
  Alert
  }
   from 'react-native';
import axios from 'axios';
import { useContextState } from './contextState';

//buscar a la api el ID con axios
    //route.params.id
    //https://api.spoonacular.com/recipes/{id}/information
    //sumarle el api key

const Detalle = ({navigation, route}) => {
  const [detallePlato, setDetallePlato] = useState({});
  const {contextState, setContextState} = useContextState();
  useEffect(() => {
    axios.get(`https://api.spoonacular.com/recipes/${route.params.id}/information?apiKey=f6ab686f7e6142e190f8297ee15bcca4`, {
    })
    .then(function (response) {
    setDetallePlato(response.data);
    })
    .catch(function (response) {
    })
  }, [])
  return(
    <View>
{/*NO RENDERIZA BIEN*/}
      <Text>{detallePlato.title}</Text>
      <Image source={{ uri: detallePlato.image }} style={{ width: 200, height: 200 }} />
      <Text>Health Score: {detallePlato.healthScore}</Text>
      <Text>Vegan: {detallePlato.vegan ? 'Yes' : 'No'}</Text>
      <Text>PricePerServing: {detallePlato.pricePerServing}</Text>
      
      <Button
            title="Agregar al menú"
            onPress={() => {
              if (contextState.menu.length >= 4) {
                <Text>cantidad de platos alcanzados maximos</Text>
              } else if (detallePlato.vegan && contextState.menu.filter(dish => dish.vegan).length >= 2) {
                <Text>Basta de platos veganos</Text>
              } else if (detallePlato.vegan == false && contextState.menu.filter(dish => dish.vegan == false).length >= 2) {
                <Alert>Basta de platos carnosos</Alert>
              } else {
              setContextState({type: 'ADD_PLATO', newValue: detallePlato});
              navigation.navigate('Menu')
              }
            }}
          />
    </View>

  )
}
export default Detalle;
