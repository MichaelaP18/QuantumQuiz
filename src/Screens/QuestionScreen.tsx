import React from "react";
import {View, Text, StyleSheet, } from "react-native";


function QuestionScreen({ navigation, route } : {navigation : any, route : any}) {
    return (
    <View>
        <Text>Welcome to the questions screen!</Text>
    </View>
    );
}

const styles = StyleSheet.create({
    txt: {
        fontSize: 35,
    },
});

export default QuestionScreen;