import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { TextInput } from 'react-native-web';
import axios, { Axios } from 'axios';
import { useContextState } from './contextState';

//AXIOS FALLA REQUEST FAIL

//no funcionan las alertas de abajo!

const Formulario = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [vacio, setVacio] = useState(false);
    const [error, setError] = useState(false);


    const {contextState , setContextState} = useContextState();
  
    const OnPressed = () => {
    if(email == '' || password =='')
    {
        setVacio(true);
    }
    else
    {
        axios.post('http://challenge-react.alkemy.org/', {
            email: email,
            password: password
          })
          .then(function (response) {
            console.log(response);

            
              setContextState({
                  type: ActionTypes.SetToken,
                  value: response.data.token,
              });      
          
          })
          .catch(function (response) {
            setError(true);
          })
    }


  }


    return(
    <View style={styles.container}>
    <Image style={styles.image} source = {require("./assets/logo.png")}/>

    <View style={styles.inputView}>
    <TextInput
        style={styles.TextInput}
        placeholder="Email"
        placeholderTextColor="#000000"
        onChangeText={(email) => setEmail(email)}
    />
    </View>

    <View sytle={styles.inputView}>
    <TextInput
        style={styles.TextInput}
        placeholder="Password"
        placeholderTextColor="#000000"
        secureTextEntry={true}
        onChangeText={(password) => setPassword(password)}
    />    
    </View>

      <TouchableOpacity style={styles.loginBtn} onPress={OnPressed}>
        <Text style={styles.loginText}>ENVIAR</Text>    
      </TouchableOpacity>

    <View>
        { vacio ? <Text>El email o password están vacios.</Text> : error ? <Text>El email o password son incorrectos.</Text> : <></>}
    </View>

    </View>

    
    )
};

const styles = StyleSheet.create({
    container: {
        
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
     },
     image :{
      marginBottom: 40,
      height: 200,
      width: 200
    },
    inputView: {
        backgroundColor: "#FFF44A",
        borderRadius: 30,
        width: "40%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
      },
      TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
      },
      forgot_button: {
        height: 30,
        marginBottom: 30,
      },
      loginBtn:
      {
        width:"80%",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        backgroundColor:"#B3A701",
      }
      
  });

export default Formulario;
