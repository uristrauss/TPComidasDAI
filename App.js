import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Busqueda from './Busqueda';
import Formulario from './Formulario';
import Detalle from './Detalle';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { ContextProvider } from './contextState';

const Stack = createNativeStackNavigator();
const MyStack = () => {
  return (
    <ContextProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Formulario">
          <Stack.Screen
            name="Formulario"
            component={Formulario}
            options={{title: 'Login'}}
          />
          <Stack.Screen name="Busqueda" component={Busqueda} />
          <Stack.Screen name="Detalle" component={Detalle} />
        </Stack.Navigator>
      </NavigationContainer>
    </ContextProvider>
  );
};


const App = () => {
  return (
    <MyStack/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
