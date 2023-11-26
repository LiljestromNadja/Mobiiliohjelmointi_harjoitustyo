import React from "react";
import { StyleSheet, Button, TextInput, View, Text} from "react-native";
import { globalStyles } from "../styles/globalstyle";
import { Formik } from "formik";
import * as yup from 'yup';


const memoValidationSchema = yup.object({
    memosubject: yup.string().required().min(5), //syötteen pitää olla string-muotoista, kenttä ei voi olla tyhjä, min 5 mekkiä
    memocontent: yup.string().required().min(5)
})

export default function MemoFormikForm( {addMemo} ) { 

    return (
        <View style={globalStyles.container}>
            <Formik
                initialValues={{memosubject: '', memocontent: ''}}
                validationSchema={memoValidationSchema}
                onSubmit={(values, actions) => {  
                    actions.resetForm(); //lomakekenttien tyhjennys, tosin tässä tapauksessa ei tarpeellinen, koska kentät tyhjenevät kun modal suljetaan 
                    addMemo(values) //lähetetään homeen addMemo:lle  
                    
                    console.log("--- memoForm " , values);
                }}
            >
                {(props) => (
                    <View>
                        <Text style={globalStyles.formTitleText}> Add memo </Text>
                        <TextInput
                            style={globalStyles.input}
                            placeholder="Memo subject"
                            onChangeText={props.handleChange('memosubject')}
                            value={props.values.memosubject}
                            onBlur={props.handleBlur('memosubject')}
                        />
                        <Text style={globalStyles.errorText}>{ props.touched.memosubject && props.errors.memosubject }</Text>
                        
                        <TextInput
                            multiline minHeight={100}
                            style={globalStyles.input}
                            placeholder="Memo content"
                            onChangeText={props.handleChange('memocontent')}
                            value={props.values.memocontent}
                            onBlur={props.handleBlur('memocontent')}
                        />
                        <Text style={globalStyles.errorText}>{ props.touched.memocontent && props.errors.memocontent }</Text>
                        
                        <Button title="submit" color='#ff7f50' onPress={props.handleSubmit}/> 
                        
                    </View>
                )}

            </Formik>
        </View>
    );

}