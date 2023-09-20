import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TextInput,
  styles
  }
   from 'react-native';
import axios from 'axios';

const Busqueda = () => {
  const [input, setInput] = useState('');
  const [lista, setLista] = useState([]);

  useEffect(() => {
  if (input.length > 2) {
    axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${input}&apiKey=a6aa31454fab42f790965a67a211fa2f`, {
          })
          .then(function (response) {
            setLista(response.data.results);
            console.log(response);

          })
          .catch(function (response) {
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
          </View>
        )}
      />
    </View>

  )

};



export default Busqueda;

