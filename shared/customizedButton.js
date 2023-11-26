import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

export default function FlatButton({ text, onPress }) {
    <TouchableOpacity onPress={onPress}>
        <View style={styles.flatButton}>
            <Text style={styles.buttontext}> {text} </Text>
        </View>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    flatButton: {
        borderRadius: 8,
        paddingVertical: 14, 
        paddingHorizontal: 10,
        backgroundColor: 'coral',
    }, 
    buttontext: {
        color: 'white', 
        fontWeight: 'bold', 
        fontSize: 16,
        textTransform: 'uppercase',
        textAlign: 'center'
    }
})