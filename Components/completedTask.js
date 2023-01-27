import React from "react";
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import AddTask from "./AddTask";

 

const colors = ['#FE8686', '#7AAFFF', '#B080FF'];

 const CTask = (props) => {
    const index = +props.text[props.text.length - 1] - 1;
    return (
        
            <View style={styles.item}>
                <Text style={styles.itemText}>{props.text}</Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={{ marginRight: 15, color: colors[index] }} >{props.label}</Text>
                    <View style={{ ...styles.circular, backgroundColor: colors[index] }}>
                    </View>
                </View>
            </View>
    
    )
};


const styles = StyleSheet.create({
    item: {
        backgroundColor: "#e8e8e8",
        padding: 15,
        borderRadius: 25,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        height: 80,
        shadowColor: "2e2e2e",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    circular: {
        width: 20,
        height: 20,
        //backgroundColor: "#766680",
        borderRadius: 10,
    },
    taskWrapper: {
        paddingTop: 80,
        paddingHorizontal: 20,
        marginBottom:0,
        backgroundColor: '#fffdfa',
        flex:1,
    },
});

 export default CTask;