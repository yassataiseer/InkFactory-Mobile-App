import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,ToastAndroid,Button, constructor, Alert, alert} from 'react-native';
//import { StackNavigator } from 'react-navigation';
import { createAppContainer } from 'react-navigation';  
import {
   createStackNavigator,
  StackNavigator,
}   from 'react-navigation-stack';
import { useTheme } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
class App extends Component {
  constructor(props) {
    super(props);
    //this.home_func = this.home_func.bind(this);
    this.state = {
      username: '',
      password: '',
      nameList: []
    };
  }
  onLogin() {
    const { username, password } = this.state;
    //const a = fetch('http://inkfactory.pythonanywhere.com/Validate_Employee/taiseer142@hotmail.com+56Operahouse')
    const url='http://inkfactory.pythonanywhere.com/Validate_Employee/'+username+"+"+password;
    //const b = a.json()

    function help (link) {
      fetch(link).then(
        function(data){return data.json()}
      )
      .then(
        function(json){
          if (json==true){
            var a ="";
            a = json.toString()
            if (a =="true"){
              //home_func("Second")
              return <Employees /> ;      
            }
          }
          else{
            ToastAndroid.showWithGravity(
              "Invalid Creds.",
              ToastAndroid.LONG,
              ToastAndroid.BOTTOM,
              25,
              50
            );}})}
      help(url)   
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
          //onPress={this.onLogin.bind(this)}
          onPress={() => 
          
          this.props.navigation.navigate('Second')}
        />
      </View>
    );
  }
}

class Employees extends Component
{
  static navigationOptions =
  {
     title: 'Employees',
  };

  render()
  {
     return(
        <View style = { styles.loginText }>
           <Text style = { styles.loginText }> This is the Employees Page! </Text>

        </View>
     );
  }
}
const Project = createStackNavigator (
  {
   First: {screen:App },
   
   Second:{screen:Employees}
  },
  {
    
    initialRouteParams: 'App',
    headerMode: 'none'
  }
 );
//var navigation = useNavigation();

 home_func=(area)=>{
   console.log("JJJJJJ");
   console.log(area);
   useNavigation.navigate(area)
 }
  const AppContainer = createAppContainer(Project);  
  export default class App1 extends React.Component {  
      render() {  
          return <AppContainer />;  
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