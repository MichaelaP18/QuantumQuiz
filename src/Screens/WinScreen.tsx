import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, } from "react-native";
import HomeScreen from "./HomeScreen";


function WinScreen({ navigation, route } : {navigation : any, route : any}) {

    return (
    <View>
        <View>
            <Text>QuarkQuestor Winner!</Text>
            <Text>{name}</Text>
        </View>

        <View style={styles.container}>
            <Text>Correct:</Text>
            <Text>Incorrect:</Text>

            <View>
                //Displays the number of answers that are correct and Incorrect.

            </View>
        </View>

        <TouchableOpacity 
            style={styles.againBtn}
            onPress={() => navigation.navigate("Question Screen")}
            >
                Restart Quiz
            </TouchableOpacity>

        <TouchableOpacity 
            style={styles.start}
            onPress={() => navigation.navigate("Home Screen")}
        >
            Start new Quiz
        </TouchableOpacity>

        <TouchableOpacity 
            style={styles.reset}
            onPress={() => navigation.navigate("Home Screen")}
        >
            Back Home
        </TouchableOpacity>
    </View>
    );
}

const styles = StyleSheet.create({
    txt: {
        fontSize: 35,
    },
    
    container: {
        borderRadius: 15,
    },

    reset: {
        borderRadius: 10,
        backgroundColor: 'red',
    },

    start: {
        borderRadius: 10,
        backgroundColor: 'teal',
    },

    againBtn: {
        borderRadius: 10,
        backgroundColor: 'red',
    },
});

export default WinScreen;