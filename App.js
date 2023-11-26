import React, { useState, useEffect} from 'react';
import { Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Home from './screens/home'; //tuodaan "etusivu"
import Testisivu from './screens/testisivu';
import ShowMemo from './screens/showMemo'; //näkymä yksittäiselle memolle
import AboutMemos from './screens/aboutMemos';
import AllMemos from './screens/allMemos';
import HomeScreen from './screens/home';


const Stack = createNativeStackNavigator();

export default function App() {

  return (
    //<Home /> //tuodaan kotikomponentti  
    //<Button onPress={() => navigation.navigate('Testisivu')}      />  
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        {/* <Stack.Screen name="Root" component={Root} /> */}

        <Stack.Screen 
        name="Home" 
        component={HomeScreen}        
        options={{
          title:'Welcome!',
          headerStyle: {backgroundColor: '#ffa07a'},headerTintColor: '#fff', headerTitleAlign:'center'}}
        />

        <Stack.Screen 
          name="AllMemos" 
          component={AllMemos}
          options={{
            title: 'All Memos',
            headerStyle: {backgroundColor: '#ffa07a'},headerTintColor: '#fff', headerTitleAlign:'center'}}
        /> 

        <Stack.Screen 
          name="About" 
          component={AboutMemos}
          options={{
            headerStyle: {backgroundColor: '#ffa07a'},headerTintColor: '#fff', headerTitleAlign:'center'}}
        />        

        <Stack.Screen 
        name="ShowMemo" 
        component={ShowMemo} 
        options={{ 
          title: 'Memo Details', 
          headerStyle: {backgroundColor: '#ffa07a'},headerTintColor: '#fff', headerTitleAlign:'center'}}         
        />  

        <Stack.Screen
          name="Testisivu" 
          component={Testisivu}
          options={{
            headerStyle: {backgroundColor: '#ffa07a'},headerTintColor: '#fff', headerTitleAlign:'center'}}
        />   
           
      </Stack.Navigator>
    </NavigationContainer>
  );
}

