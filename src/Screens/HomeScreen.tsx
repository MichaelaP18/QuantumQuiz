import React from "react";
import { View, Text, StyleSheet, } from "react-native";
import { navigate } from './../../node_modules/@react-navigation/routers/src/CommonActions';


function HomeScreen({ navigation, route } : {navigation : any, route : any}) {
    return (
    <View>
        <Text>Welcome to Quantium Quiz!</Text>
    </View>
    );
}

const styles = StyleSheet.create({
    txt: {
        fontSize: 35,
    },
});

export default HomeScreen;