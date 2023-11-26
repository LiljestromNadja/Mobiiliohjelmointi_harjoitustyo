//"Kaikki memot"
import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Modal, TouchableWithoutFeedback, Keyboard } from "react-native";
import { globalStyles } from "../styles/globalstyle"; 
import * as SQLite from 'expo-sqlite';
import Card from "../shared/card";
import { MaterialIcons } from '@expo/vector-icons'
import MemoFormikForm from './memoForm';
import { AntDesign } from '@expo/vector-icons'; 


const db = SQLite.openDatabase('itemdb.db'); //"tietokantaolio/kahva"

export default function AllMemos( { navigation } ) {

    const [modalOpen, setModalOpen] = useState(false);

    const[memos, setMemos] = useState([]);

    //Luodaan tietokanta jos sitä ei ole olemassa
    useEffect(() => {
        db.transaction(tx => {
          tx.executeSql('create table if not exists memo (id integer primary key not null, memocontent text, memosubject text);');
        }, null, updateList); 
      }, []);    

    //Lisätään memo kantaan 
    const addMemo = (memo) => {
        console.log("--- home.js, addMemo, lisätään: " + memo.memosubject + " " + memo.memocontent);
        memosubject = memo.memosubject;
        memocontent = memo.memocontent;
    db.transaction(tx => {
        tx.executeSql('insert into memo (memosubject, memocontent) values (?, ?);', [memosubject, memocontent]);    
        }, null, updateList
    )
    setModalOpen(false);
    }

    //memolistan päivitys
    const updateList = () => {
        db.transaction(tx => {
          tx.executeSql('select * from memo;', [], (_, { rows }) => {
            console.log("--- home.js updateList: " , rows);
            setMemos(rows._array)
          }); 
        });
      }

    //Poistetaan memo
    const deleteMemo= (id) => {
        console.log("delete memo id ", id);
    db.transaction(
        tx => {
        tx.executeSql(`delete from memo where id = ?;`, [id]);
        }, null, updateList
    )    
    }

    return (
        <View style={globalStyles.container}>
            {/* <Button title="Go to About Memos" color='#ff7f50' onPress={() => navigation.navigate("About")}/> */}
            <AntDesign
                name="closecircle"
                size={24}
                color="black"
                style={styles.exitIcon}
                //onPress={() => deletePressed(item)}
                onPress={() => navigation.navigate('Home')}
            />
             
            <Modal visible={modalOpen} animationType='slide'>
                <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                    <View style={styles.modalContent}>
                            <MaterialIcons
                                name="close"
                                size={24}
                                style={styles.modalClose}
                                onPress={() => setModalOpen(false)}
                            />
                            <MemoFormikForm addMemo={addMemo} /> 
                    </View>
                </TouchableWithoutFeedback>                
            </Modal>

            <FlatList
                data={memos}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('ShowMemo', {item})}>
                        <Card>
                            <Text style={globalStyles.titleText}> {item.memosubject}</Text> 
                            {/* <Text style={globalStyles.paragraph}> {item.memocontent}</Text>    */}                                                    
                                <MaterialIcons
                                    name="delete"
                                    size={24}
                                    style={styles.modalClose}
                                    onPress={() => deleteMemo(item.id)}
                                />
                        </Card>
                    </TouchableOpacity>
                )}
            />  

            <MaterialIcons
                name="add"
                size={24}
                style={styles.modalToggle}
                onPress={() => setModalOpen(true)}
            />          
            
        </View>
    )
}

const styles = StyleSheet.create({
    modalToggle: {
        marginBottom: 10, 
        borderWidth: 1, 
        borderColor: '#f2f2f2',
        padding: 10, 
        borderRadius: 10, 
        alignSelf: 'center',
    },
    modalClose: {
        marginTop: 20,
        marginBottom: 0, 
        borderWidth: 1, 
        borderColor: '#f2f2f2',
        padding: 10, 
        borderRadius: 10, 
        alignSelf: 'flex-end',
    }, 
    modalContent: {
        flex: 1, 
        
    },
    exitIcon: {
        margin: 10,
        alignSelf: 'flex-end',
    }, 
    
    
})

 