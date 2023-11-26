import React from "react";
import { View, Text, StyleSheet} from "react-native";
import { globalStyles } from "../styles/globalstyle"; //globaali tyylitiedostoimport { userNavigatio }
// import { createDrawerNavigator } from '@react-navigation/drawer';
import { AntDesign } from '@expo/vector-icons'; 


// const Drawer = createDrawerNavigator();


export default function Testisivu( { navigation } ) {

  return (
    <View>
      <AntDesign
        name="closecircle"
        size={24}
        color="black"
        style={styles.exitIcon}
        //onPress={() => deletePressed(item)}
        onPress={() => navigation.navigate('Home')}
      />
      <Text style={styles.testText}>Tämä on testisivu mutta kun alkaa ideat ja aika loppua kesken...</Text>
    </View>
  );


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
  }

})


// return (
//   <Drawer.Navigator useLegacyImplementation>
//     <Drawer.Screen name="Home" component={Home} />
//     <Drawer.Screen name="Profile" component={EmptyScreen} />
//     {/* <Stack.Screen name="Settings" component={EmptyScreen} /> */}
//   </Drawer.Navigator>
// );