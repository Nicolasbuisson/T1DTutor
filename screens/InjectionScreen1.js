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

class InjectionScreen1 extends Component {
    constructor() {
        super();
        this.state = {
            meals: "",
            long_acting: "",
        };

        //functions
        this.backFunction = this.backFunction.bind(this);
        this.goToNextScreen = this.goToNextScreen.bind(this);

    }

    backFunction() {
        this.props.navigation.navigate("InjectionOrPumpScreen");
    }

    goToNextScreen() {
        this.props.navigation.navigate("InjectionScreen2");
    }


    render() {
        return (
            <View style={styles.container}>
                <Header
                    title="T1D App"
                    backArrow={true}
                    function={this.backFunction}
                ></Header>
                <QuestionDescription title="You are on Injections"></QuestionDescription>
                <QuestionDescription title="What type of insulin do you use?"></QuestionDescription>
                <View style={styles.fieldsContainer}>
                    <Text style={styles.field}>For meals</Text>
                    <TextInput
                        autoCorrect={false}
                        onChangeText={(text) => this.setState({ meals: text })}
                        value={this.state.meals}
                        style={styles.input}
                    ></TextInput>
                    <Text style={styles.field}>For long-acting</Text>
                    <TextInput
                        autoCorrect={false}
                        secureTextEntry={false}
                        onChangeText={(text) => this.setState({ long_acting: text })}
                        value={this.state.long_acting}
                        style={styles.input}
                    ></TextInput>
                </View>

                <View style={styles.fieldsContainer}><Greenbutton title="Next" onPress={this.goToNextScreen}></Greenbutton></View>

            </View>
        );
    }
}

export default InjectionScreen1;

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

