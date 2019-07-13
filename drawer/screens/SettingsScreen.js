import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Logo } from "../components/header";
import { HeaderBackButton } from "react-navigation";

export default class SettingsScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)} />,
            headerTitle: <Logo />,
            headerBackTitle: "Settings",
            headerLayoutPreset: "center"
        };
    };
    render() {
        return (
            <View style={styles.container}>
                <Text>Hello! Welcome to my settings page</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});