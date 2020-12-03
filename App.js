import React, { Component } from 'react';

import { StyleSheet, Text, View, TextInput, TouchableOpacity,ToastAndroid,Button, constructor, Alert, alert} from 'react-native';


export default class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      username: '',
      password: '',
    };
  }
  
  onLogin() {
    const { username, password } = this.state;

    Alert.alert('Credentials', `${username} + ${password}`);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>InkFactory</Text>
        <View style={styles.inputView} >
        <TextInput
          value={this.state.username}
          onChangeText={(username) => this.setState({ username })}
          style={styles.inputText}
          placeholder="Email..." 
          placeholderTextColor="#003f5c"
        />
        </View>
        <View style={styles.inputView} >

        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.inputText}
          placeholderTextColor="#003f5c"

        />
        </View>
        
        <Button
          title={'Login'}
          style={styles.input}
          onPress={this.onLogin.bind(this)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"blue",
    marginBottom:40
  },
  inputView:{
    width:"80%",
    backgroundColor:"#ffffe6",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"black"
  },

  loginBtn:{
    width:"80%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  loginText:{
    color:"black"
  }
  
});