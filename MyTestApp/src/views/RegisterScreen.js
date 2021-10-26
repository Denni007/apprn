import React, { useEffect, useState } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Button, StyleSheet, TextInput } from 'react-native';

import { withNavigation, useRoute } from 'react-navigation';
import { useNavigation, useNavigationParam } from 'react-navigation-hooks'
import { useSelector, useDispatch } from 'react-redux';
import { signin } from '../actions/userActions';

import AsysncStorage from '@react-native-community/async-storage';

function SigninScreen({ props, navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // sign in or sign up
    const userSignin = useSelector(state => state.userSignin);
  const { loading, userInfo, error } = userSignin;
  const dispatch = useDispatch();
  //const redirect = props.location.search ? props.location.search.split("=")[1] : '/';
  useEffect(() => {
    if (userInfo) {
        var a   =  AsysncStorage.getItem('userInfo');
        console.log(AsysncStorage.getItem('userInfo'));
        navigation.navigate('Home');
    }
    return () => {
      //
    };
  }, [userInfo]);

  const submitHandler = (e) => {
   // e.preventDefault();
    dispatch(signin(email, password));

  }


    return (
        <View style={styles.container_login}>

            <View style={styles.logo}>
                <Image
                    source={{ uri: 'https://i.pinimg.com/736x/0b/2d/1f/0b2d1fe02e0eb338c48107691e7dac63.jpg' }}
                    style={styles.login_logo}
                />
            </View>

            <View style={styles.inputView} >
                <TextInput
                    style={styles.inputText}
                    placeholder="Email..."
                    placeholderTextColor="#fff"
                    autoCapitalize='none'
                    autoCorrect={false}
                    onChangeText={e => { setEmail(e);}}
                    textContentType='emailAddress'
                    keyboardType='email-address' />
            </View>

            <View style={styles.inputView} >
                <TextInput
                    secureTextEntry
                    style={styles.inputText}
                    onChangeText={e => setPassword(e)}
                    placeholder="Password..."
                    placeholderTextColor="#fff" />
            </View>

            <TouchableOpacity style={styles.loginBtn}  onPress={() => submitHandler()} >
                <Text style={styles.loginText}>Sign In</Text>
            </TouchableOpacity>
            <View style={styles.linkContainer}>
                <Text style={styles.link}>Don't have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                    <Text style={styles.linkText}>Sign up.</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'center',
        padding: 20,
    },
     
logo:{
    fontSize:50,
    fontWeight:'bold',
    width:'100%',
    textAlign:'center',
    color:"#2874F0",
        marginBottom:50
  },
    linkText: {
        fontFamily: 'Lato-Regular',

        color: "rgb(79, 60, 230)",
    },
    link: {
        fontFamily: 'Lato-Bold',
        color: "rgb(0, 0, 41)",
    },
    linkContainer: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginBottom: 30,
    },
    inputView: {
        width: "80%",
        borderColor: '#000',
        borderWidth: 1,
        color: '#000',
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: "center",
        padding: 20
    },
    inputText: {
        height: 50,
        color: "#000"
    },

    container_login: {
        flex: 1,
        backgroundColor: '#ffffff',
        justifyContent: 'center', //Centered vertically
        alignItems: 'center', // Centered horizontally
    },
    loginBtn: {
        width: "80%",
        backgroundColor: "#F1DE0E",
        borderRadius: 25,
        height: 50,
        color: 'black',
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        marginBottom: 10
    },
    forgot: {
        color: "#000",
        backgroundColor: "#F1DE0E",
        borderRadius: 25,
        width: "80%",
        fontSize: 14,
        height: 50,
        color: 'black',
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        marginBottom: 10

    },
    loginText: {
        color: "black"
    },

    textInput: {
        borderWidth: 1,
        borderColor: 'grey',
        padding: 10,
        marginBottom: 20,
        borderRadius: 5,
    },
    login_logo: {
        height: 70, width: '100%', resizeMode: 'contain', margin: 0, marginBottom: 50
    },

    text: {
        color: 'blue',
        marginTop: 20,
    },
});
export default SigninScreen;