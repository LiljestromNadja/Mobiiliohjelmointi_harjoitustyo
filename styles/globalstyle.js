//tämä tiedosto sisältää globaalit tyylimäärittelyt
import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1, //koko näyttö
        padding: 24,
    }, 
    titleText: {
        fontSize: 18,
        fontWeight: "bold",
        color: '#ff7f50',
        //marginBottom: 10
        //textAlign: 'center',
        
    }, 
    paragraph: {
        marginVertical: 8,
        lineHeight: 20,
    }, 
    input: {
        borderWidth: 1, 
        borderColor: '#ddd',
        padding: 10,
        fontSize: 18, 
        borderRadius: 6,
    }, 
    formTitleText: {
        fontSize: 18,
        fontWeight: "bold",
        color: '#ff7f50',
        textAlign: 'center',
        paddingBottom:20
    },
    errorText: {
        color: '#dc143c',
        fontWeight: 'bold', 
        marginBottom: 10, 
        marginTop: 6, 
        textAlign: 'center'
    },
    memoTitleText: {
        fontSize: 18,
        fontWeight: "bold",
        color: '#ff7f50',
        textAlign: 'center',
        marginBottom: 20,
        
    },
    memoParagraph: {
        marginVertical: 8,
        lineHeight: 20,
        textAlign:"center"
    }
})