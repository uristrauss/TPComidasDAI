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
  Image
  }
   from 'react-native';
import axios from 'axios';

//buscar a la api el ID con axios
    //route.params.id
    //https://api.spoonacular.com/recipes/{id}/information
    //sumarle el api key

const Detalle = ({navigation, route}) => {
  const [detallePlato, setDetallePlato] = useState({});
  useEffect(() => {
    axios.get(`https://api.spoonacular.com/recipes/${route.params.id}/information?apiKey=659c6657aa804d29a9d7ea134ec03ce1`, {
    })
    .then(function (response) {
    setDetallePlato(response.data);
    })
    .catch(function (response) {
    })
  })
  return(
    <View>

      <Text>{detallePlato.title}</Text>
      <Image source={{ uri: detallePlato.image }} style={{ width: 200, height: 200 }} />
      <Text>Health Score: {detallePlato.healthScore}</Text>
      <Text>Vegan: {detallePlato.vegan ? 'Yes' : 'No'}</Text>
      

    </View>
  )
}
export default Detalle;