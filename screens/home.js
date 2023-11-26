//"Etusivu"
import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { globalStyles } from "../styles/globalstyle"; //globaali tyylitiedosto
import { AntDesign } from '@expo/vector-icons'; 

export default function HomeScreen( {navigation}) {
    return (
        <View style={styles.homeContainer}>
{/*             <AntDesign
                name="closecircle"
                size={24}
                color="black"
                style={styles.exitIcon}
                //onPress={() => deletePressed(item)}
                onPress={() => navigation.navigate('AllMemos')}
            /> */}
            <View style={styles.homeView}>
                <Text style={styles.homeTitleText}> Welcome to Memo App! </Text>
                {/* <Text style={styles.homePgraph}> This is a simple memo application.. </Text> */}
            </View>

            <View style={styles.buttonView}>
                <Button title=' memos' color='#ff7f50' onPress={() => navigation.navigate('AllMemos')}      /> 
                <Button title=' go to test page' color='#ff7f50' onPress={() => navigation.navigate('Testisivu')}      />
                <Button title=' about' color='#ff7f50' onPress={() => navigation.navigate('About')}      />   
            </View>

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
    homeView: {
        textAlign:"center"
    },
    homeContainer: {
        flex: 1, //koko näyttö
        padding: 24,
    }, 
    homeTitleText: {
        fontSize: 18,
        fontWeight: "bold",
        color: '#ff7f50',
        //marginBottom: 10
        textAlign: 'center',   
        marginTop: 28,
        marginBottom: 28,     
    },
    homePgraph: {
        marginVertical: 8,
        lineHeight: 20,
        textAlign: 'center',
        marginBottom:28,
    },
    buttonView: {        
        //flex: 2,
/*      flexDirection: 'row',
        alignContent: "center",
        alignItems: 'center',
        margin: 10,
        padding: 10,
        justifyContent: 'space-between', */
        marginEnd: 20, 
        marginHorizontal: 20,
        padding: 20,
        marginVertical: 20

           
    }
  
  })
  
  
  
