import React from "react";
import {View, Text, StyleSheet, } from "react-native";


function WinScreen({ navigation, route } : {navigation : any, route : any}) {
    return (
    <View>
        <Text>Welcome to the Win screen!</Text>
    </View>
    );
}

const styles = StyleSheet.create({
    txt: {
        fontSize: 35,
    },
});

export default WinScreen;