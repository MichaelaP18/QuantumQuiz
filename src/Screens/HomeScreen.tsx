import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, } from "react-native";
import { navigate } from './../../node_modules/@react-navigation/routers/src/CommonActions';
import { TextInput } from "react-native-paper";


function HomeScreen({ navigation, route } : {navigation : any, route : any}) {
    const [name, setName] = useState(route.params?.name || "");
    const [number, setNumber] = useState(route.params?.number || "") 

    return (
    <View>
        <View>
            <Text>Welcome to Quantium Quiz!</Text>
        </View>

        <View>
            <Text>Enter Your QuarkQuizQuester Name:</Text>
            <TextInput
                style={styles.input}
                placeholder="QuarkQuestor Captain John"
                value={name}
                onChangeText={setName}
            />
            
            <Text>Enter the Number of Questions</Text>
            <TextInput 
            style={styles.input}
            placeholder="12"
            value={number}
            onChangeText={setNumber}
            />

        </View>

        
            
        

        <TouchableOpacity 
            style={styles.reset}
            onPress={() => navigation.navigate("Home Screen")}
            >
                Reset
            </TouchableOpacity>

        <TouchableOpacity
            style={styles.start}
            onPress={() => navigation.navigate("Question Screen")}
            >
                Start Quantium Quiz
            </TouchableOpacity>

    </View>
    );
}

const styles = StyleSheet.create({
    txt: {
        borderRadius: 10,
    },

    reset: {
        borderRadius: 10,
        backgroundColor: 'red',
    },

    start: {
        borderRadius: 10,
        backgroundColor: 'teal',
    },

    input: {
        borderRadius: 10,
    },

    container: {
        backgroundColor: 'purple',
    },
});

export default HomeScreen;