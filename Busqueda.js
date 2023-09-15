import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';
import axios from 'axios';
/*
const Busqueda = () => {

    axios.get('https://api.spoonacular.com/recipes/complexSearch', {
            email: email,
            password: password
          })
          .then(function (response) {
            console.log(response);

          
          })
          .catch(function (response) {
            setError(true);
          })

}
*/


function Busqueda() 
  const [data, setData] = useState(null);

  useEffect(() => {
    // Realiza una solicitud GET a la API
    axios.get('https://api.spoonacular.com/recipes/complexSearch')
      .then(response => {
        // Si la solicitud es exitosa, actualiza el estado con los datos de la respuesta
        setData(response.data);
      })
      .catch(error => {
        // Si hay un error, maneja el error aquí
        console.error('Error:', error);
      });
  }, []);
  
  const Form = () => {
    const [title, serTitle] = useState('');
    const {contextState , setContextState} = useContextState();
/*
    const OnPressed = () => {
    if(title == '')
    {
        setVacio(true);
    }else{
        axios.get('https://api.spoonacular.com/recipes/complexSearch')
    }
    
   }*/
}
export default Busqueda;

