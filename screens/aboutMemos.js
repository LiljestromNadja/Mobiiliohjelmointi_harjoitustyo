//"Tietoja sovelluksesta -näyttö"
import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { globalStyles } from "../styles/globalstyle"; //globaali tyylitiedosto
import { AntDesign } from '@expo/vector-icons'; 

export default function AboutMemos( {navigation}) {
    return (
        <View style={globalStyles.container}>
            <AntDesign
                name="closecircle"
                size={24}
                color="black"
                style={styles.exitIcon}
                //onPress={() => deletePressed(item)}
                onPress={() => navigation.navigate('Home')}
            />
            <Text style={styles.aboutTitleText}> About Memos </Text>
            <Text style={styles.aboutPgraph}>This simple Memo app was developed during a mobile programming course </Text>
            
            
            <Text style={{marginTop:20, fontWeight: 'bold', textAlign:'center'}}>Technologies/Components:</Text>
            
            
            <Text style={styles.aboutList}> Expo Go </Text>
            <Text style={styles.aboutList}> Formik form </Text>
            <Text style={styles.aboutList}> React Native Card </Text>
            <Text style={styles.aboutList}> React Native Flatlist </Text>
            <Text style={styles.aboutList}> React Native Modal </Text>
            <Text style={styles.aboutList}> React Native Stack Navigation </Text>
            <Text style={styles.aboutList}> React Native Touchables </Text>
            <Text style={styles.aboutList}> Yup validation</Text> 

{/*             <View style={styles.buttonstyle}>
                <Button title=' go to test page' color='#ff7f50' onPress={() => navigation.navigate('Testisivu')}      />  
            </View> */}
        </View>
    )
}


const styles = StyleSheet.create({
    exitIcon: {
        margin: 10,
        alignSelf: 'flex-end',
    }, 
    testText: {
      textAlign: 'center'
    }, 
    testTitle: {
      textAlign: "center"
    },
    aboutTitleText: {
        fontSize: 18,
        fontWeight: "bold",
        color: '#ff7f50',
        //marginBottom: 10
        textAlign: 'center',   
        marginTop: 28,
        marginBottom: 15,     
    },
    aboutPgraph: {
        marginVertical: 8,
        lineHeight: 20,
        textAlign: 'center',
        marginBottom:28,
        paddingEnd: 30,
        paddingStart: 30,
        fontWeight: 'bold'
    },
    buttonstyle: {
        marginTop: 20, 
        padding: 20
    }, 
    aboutList: {
        marginTop: 10,        
        textAlign: 'center',
        
        
    }
  
  })
