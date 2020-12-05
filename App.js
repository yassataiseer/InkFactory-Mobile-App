import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,ToastAndroid,Button, constructor, Alert, alert} from 'react-native';
//import { StackNavigator } from 'react-navigation';
import {createBottomTabNavigator,  createAppContainer } from 'react-navigation';  
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';  
import Icon from 'react-native-vector-icons/Ionicons';  

import {
   createStackNavigator,
  StackNavigator,
}   from 'react-navigation-stack';
import { useTheme } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { not } from 'react-native-reanimated';
var passkey = "";
//const Tab = createBottomTabNavigator();

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

          if (json==undefined){
            console.log(password);
            passkey ="fail";
            console.log(passkey)
          }
          else if (json==true){
            passkey="pass";
            console.log(passkey)
          }})}
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
          {
            console.log("status");
            console.log(passkey);
            this.onLogin()
            if (passkey=="fail"){
            console.log("HHHH");
          }
          else if(passkey=="pass"){
            console.log("logging you in :)");
            this.props.navigation.navigate('Second')

          }
          }}
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
           <Button style={styles.loginBtn} status='success' title={"clients"} onPress onPress={() =>{this.props.navigation.navigate('Clients')}}>
           </Button>
        </View>
        
     );
  }
}
class clients extends Component
{
  static navigationOptions =
  {
     title: 'Clients',
  };

  render()
  {
     return(
        <View style = { styles.loginText }>
           <Text style = { styles.loginText }> This is the Clients Page! </Text>

        </View>
     );
  }
}

class Order_builder extends Component
{
  static navigationOptions =
  {
     title: 'Order=Builder',
  };

  render()
  {
     return(
        <View style = { styles.loginText }>
           <Text style = { styles.loginText }> This is the order builder Page! </Text>

        </View>
     );
  }
}

const TabNavigator = createBottomTabNavigator(
{
  Home:{screen:App,
    navigationOptions:{  
      tabBarLabel:'Employees',  
      tabBarIcon: ({ tintColor }) => (  
          <View>  
              <Icon style={[{color: tintColor}]} size={25} name={'ios-home'}/>  
          </View>),  
      activeColor: '#f60c0d',  
      inactiveColor: '#f65a22',  
      barStyle: { backgroundColor: '#f69b31' },  
  }}});



const Project = createStackNavigator (
  {
   First: {screen:App },
   
   Second:{screen:Employees},

   Clients:{screen:clients}
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
  },

  
});