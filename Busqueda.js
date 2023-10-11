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
import Detalle from './Detalle';

const Busqueda = ({navigation}) => {
  const [input, setInput] = useState('');
  const [lista, setLista] = useState([]);

  useEffect(() => {
  if (input.length > 2) {
    axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${input}&apiKey=f6ab686f7e6142e190f8297ee15bcca4`, {
          })
          .then(function (response) {
            setLista(response.data.results);
            console.log(response);

          })
  }else{

    axios.get('', {
          })
          .then(function (response) {
            setLista();
            console.log(response);

          })

  }
}, [input]);

  return(

    <View>
    <View >
    <TextInput
        
        placeholder="Input"
        placeholderTextColor="#000000"
        onChangeText={(input) => setInput(input)}
    />
    </View>

    <FlatList
        data={lista}
        keyExtractor={(item) => item.id.toString()} //de que manera voy a identificar cada item de manera unica
        renderItem={({ item }) => ( // por cada elemento de la lista, ¿que voy a mostrar?
          <View>
            <Text>{item.title}</Text>
            <Image source={{ uri: item.image }} style={{ width: 100, height: 100 }} />
            <Button
            title="Detalle del plato"
            onPress={() =>
            navigation.navigate('Detalle', { id: item.id })
            }
          
          />
          </View>
          
        )}
      />
    </View>
  )
};

const ProfileScreen = ({navigation, route}) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};

export default Busqueda;

