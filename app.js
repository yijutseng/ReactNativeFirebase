import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import {Header} from './components/common'
import LoginForm from './components/LoginForm'


class App extends Component {
    componentWillMount(){
        firebase.initializeApp({
    apiKey: "AIzaSyABCybDe-qJ4QR0jZX_gokSi9ZmxZD7yac",
    authDomain: "authreactnative-293a9.firebaseapp.com",
    databaseURL: "https://authreactnative-293a9.firebaseio.com",
    storageBucket: "authreactnative-293a9.appspot.com",
    messagingSenderId: "456659684889"
  });
    }
    render(){
        return (
            <View>
                <Header headerText="Authentication"/>
                <LoginForm />
            </View>
        );
    }
}

export default App;