//"Yksittäisen muistiinpanon näyttö"
import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { globalStyles } from "../styles/globalstyle"; //globaali tyylitiedosto
import Card from "../shared/card";
import { MaterialIcons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'; 

export default function ShowMemo({ route, navigation }) {
    const {item} = route.params; //lähetettiin home.js:stä item-nimellä
    console.log( '--- showMemo.js ');
    console.log(item);

    const deletePressed = (item) => {
        console.log("Memo details deletePressed()!  " , item.id);
    }

    return (
        <View style={globalStyles.container}>
            <Card>
                <AntDesign
                    name="closecircle"
                    size={24}
                    color="black"
                    style={styles.delicon}
                    //onPress={() => deletePressed(item)}
                    onPress={() => navigation.navigate('AllMemos')}
                />
                <Text style={globalStyles.memoTitleText}> { item.memosubject} </Text>
                <Text style={globalStyles.memoParagraph}> { item.memocontent} </Text>  
                
                
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    delicon: {
        //marginTop: 40,
        alignSelf: 'flex-end',
    }

})

