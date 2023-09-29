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
  Button
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
    axios.get(`https://api.spoonacular.com/recipes/${route.params.id}/information?apiKey=3a5083611ddd48758994eed45d254648`, {
    })
    .then(function (response) {
    setDetallePlato(response.data);
    })
    .catch(function (response) {
    })
  })
  return(
    <View>
{/*NO RENDERIZA BIEN*/}
      <Text>{detallePlato.title}</Text>
      <Image source={{ uri: detallePlato.image }} style={{ width: 200, height: 200 }} />
      <Text>Health Score: {detallePlato.healthScore}</Text>
      <Text>Vegan: {detallePlato.vegan ? 'Yes' : 'No'}</Text>
      <Text>PricePerServing: {detallePlato.price}</Text>
      
      <Button
            title="Agregar al menú"
            onPress={() => {
              setContextState({type: 'ADD_PLATO', newValue: detallePlato});
              /*navigation.navigate('Menu', { id: item.id })*/
            }}
          />
    </View>

  )
}
export default Detalle;
