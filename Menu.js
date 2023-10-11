import React, { useEffect, useState } from 'react';
import {
  Text, View, Image, Button, FlatList, StyleSheet
} from 'react-native';
import { useContextState } from './contextState';

const Menu = ({ navigation, route }) => {
  const [detallePlato, setDetallePlato] = useState({});
  const { contextState, setContextState } = useContextState();

  const totalHealth = contextState?.menu?.reduce((total, menu) => total + menu.healthScore, 0);


  useEffect( () => {
    console.log(contextState)
  }, [])


  return (
    <View>
    

<FlatList
        data={contextState?.menu}
        keyExtractor={(item) => item.id} //de que manera voy a identificar cada item de manera unica
        renderItem={({ item }) => ( // por cada elemento de la lista, ¿que voy a mostrar?
          <View>
            <Image source={{ uri: item.image }} style={{ width: 200, height: 200 }} />
            <Text>{item.title}</Text>
            <Text>Precio: {item.pricePerServing}</Text>
            <Text>HealthScore: {item.healthScore}</Text>

            <Button
            title="Borrar del menú"
            onPress={() => {
              setContextState({type: 'REMOVE_PLATO', newValue: item.id});
            }}
            />
          </View>
          
        )}
      />

    <Text style={styles.text}>Acumulativo de precio del menú: {contextState?.menu?.reduce((total, menu) => total + menu.pricePerServing, 0)}</Text>

    <Text style={styles.text}>Promedio de HealthScore entre todos los platos: {contextState?.menu?.length ? totalHealth / contextState.menu.length : 0}</Text>

    
  </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default Menu;
