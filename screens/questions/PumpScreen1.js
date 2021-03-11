import React, { Component } from "react";
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Alert,
} from "react-native";
import firebase from "firebase";
import dbh from "../firebase";
import colors from "../style/colors.js";
import Header from "../components/header";
import Greenbutton from "../components/greenButton"
import QuestionDescription from "../components/QuestionDescription"

class PumpScreen1 extends Component {
    constructor() {
        super();
        this.state = {
            pump_type: "",
        };

        //functions
        this.backFunction = this.backFunction.bind(this);
        this.goToNextScreen = this.goToNextScreen.bind(this);

    }

    backFunction() {
        this.props.navigation.navigate("InjectionOrPumpScreen");
    }

    goToNextScreen() {
        this.props.navigation.navigate("DashboardScreen");
    }


    render() {
        return (
            <View style={styles.container}>
                <Header
                    title="T1D App"
                    backArrow={true}
                    function={this.backFunction}
                ></Header>
                <QuestionDescription title="You are on Pump"></QuestionDescription>
                <QuestionDescription title="What type of Pump do you use?"></QuestionDescription>
                <View style={styles.fieldsContainer}>
                    <Text style={styles.field}>Brand/model</Text>
                    <TextInput
                        autoCorrect={false}
                        onChangeText={(text) => this.setState({ pump_type: text })}
                        value={this.state.pump_type}
                        style={styles.input}
                    ></TextInput>
                </View>

                <View style={styles.fieldsContainer}><Greenbutton title="Go to Dashboard!" onPress={this.goToNextScreen}></Greenbutton></View>

            </View>
        );
    }
}

export default PumpScreen1;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.background,
    },

    fieldsContainer: {
        flex: 3,
        alignItems: "flex-start",
        justifyContent: "center",
    },
    field: {
        fontSize: 20,
        color: colors.primary,
    },

    input: {
        height: 25,
        width: 300,
        borderColor: colors.grey,
        borderWidth: 3,
        marginTop: 5,
        marginBottom: 25,
    },
});

