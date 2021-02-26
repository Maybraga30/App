import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import {Home, Login, SignUp, Produtos} from './views/index';


  const Stack = createStackNavigator();
  const Tab = createMaterialBottomTabNavigator();

  function Tabs() {
    return(
      <Tab.Navigator
    initialRouteName="Home"
    activeColor="#fff"
  >
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarLabel: 'Home',
        tabBarColor: '#8B008B',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Login"
      component={Login}
      options={{
        tabBarLabel: 'Login',
        tabBarColor: '#8B008B',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-log-in-sharp" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="SignUp"
      component={SignUp}
      options={{
        tabBarLabel: 'Cadastre-se',
        tabBarColor: '#8B008B',
        tabBarIcon: ({ color }) => (
          <Icon name="people-circle-outline"  color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Produtos"
      component={Produtos}
      options={{
        tabBarLabel: 'Produtos',
        tabBarColor: '#8B008B',
        tabBarIcon: ({ color }) => (
          <Icon name="heart-outline" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>

  );
}
 

  export default function App() {
    return (
  <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
          name="Home" 
          component={Tabs} 
          options={{
            title:"Watercolor",
            headerStyle:{backgroundColor:"#8B008B"},
            headerTintColor: '#fff',
            headerTitleStyle:{fontWeight:'bold', alignSelf:'center'}
         }}
          />
        <Stack.Screen 
        name="Login" 
        component={Login} 
        options={{
          title:"Login",
          headerStyle:{backgroundColor:"#fff"},
          headerTintColor: '#333',
          headerTitleStyle:{fontWeight:'bold', alignSelf:'center'}
       }}
        />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Produtos" component={Produtos} />
        </Stack.Navigator>
    </NavigationContainer>
    );
        }
     

       