import React from "react";
import { StyleSheet, } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Card } from "react-native-paper";
import HomeScreen from "./Screens/HomeScreen";
import QuestionScreen from "./Screens/QuestionScreen";
import WinScreen from "./Screens/WinScreen";

const Stack = createNativeStackNavigator();



function App() : React.JSX.Element {
    return (
        <NavigationContainer>
            <Stack.Navigator 
                initialRouteName="Home"
            >
                <Stack.Screen 
                    name="Home" 
                    component={HomeScreen} 
                />

                <Stack.Screen
                    name="Question"
                    component={QuestionScreen}
                />

                <Stack.Screen
                    name="Win"
                    component={WinScreen}
                />
 
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    txt: {
        fontSize: 35,
    },
});

export default App;

