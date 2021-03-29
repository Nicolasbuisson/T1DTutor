import React, { Component } from "react";
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Alert,
} from "react-native";
import colors from "../../style/colors.js";
import Header from "../../components/header";
import Greenbutton from "../../components/greenButton"
import QuestionDescription from "../../components/QuestionDescription"
import Context from "../../Context";
import {Picker} from '@react-native-picker/picker';

class PumpScreen1 extends Component {
    constructor() {
        super();
        this.state = {
            showBrand: "",
            disabled: true,
            brandOptions: ["Medtronic: MiniMed 670G","Medtronic: MiniMed 630G", "Medtronic: Paragidm", "Medtronic: Other", "OmniPod", "Tandem t:slim With Control-IQ", "Tandem t:slim Without Control-IQ", "YPSO"]
        };

        //functions
        this.backFunction = this.backFunction.bind(this);
        this.goToNextScreen = this.goToNextScreen.bind(this);

    }
    static contextType = Context;

    componentDidMount() {
        this.isDisabled();
      }
    
      componentDidUpdate() {
        this.isDisabled();
      }
    
      isDisabled = () => {
        const {pumpType} = this.context.user.questions;
        if(pumpType && this.state.disabled) {
          this.setState({disabled: false});
        }
      }

    backFunction() {
        this.context.setView("InjectionOrPumpScreen");
    }

    goToNextScreen() {
        this.context.completeQuestions({...this.context.user});
    }

    toggleSelect = () => {
          let toggle = !this.state.showBrand;
          if(!this.context.user?.questions?.pumpType) {
            this.context.setUser({...this.context.user, questions: {...this.context.user?.questions, pumpType: "Medtronic: MiniMed 670G"}})
          }
            this.setState({showBrand: toggle})
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
                    <View style={styles.space}>
                        <Text style={styles.field}>Brand/model</Text>
                        {!this.state.showBrand &&
                        <Text>{this.context.user?.questions?.pumpType}</Text>
                        }
                        {!this.state.showBrand &&
                        <Greenbutton title="Select" onPress={()=>this.toggleSelect()}></Greenbutton>
                        }
                        <Text>
                        {this.state.showBrand &&
                            <Picker
                                selectedValue={this.context.user?.questions?.pumpType || "Medtronic: MiniMed 670G"}
                                style={{width: 350, height: 120, backgroundColor: colors.background, fontSize: 10}}
                                itemStyle={{height: 120}}
                                onValueChange={(itemValue, itemIndex) => this.context.setUser({...this.context.user, questions: {...this.context.user?.questions, pumpType: itemValue}})
                                }>
                                    {this.state.brandOptions.map((option)=>{
                                        return <Picker.Item label={option} value={option} key={option}/>
                                    })}
                            </Picker>
                        }</Text><Text>
                        {this.state.showBrand &&
                        <Greenbutton title="Okay" onPress={()=>this.toggleSelect()}></Greenbutton>
                        }</Text>
                    </View>
                </View>

                <View style={styles.footer}><Greenbutton title="Go to Dashboard!" onPress={this.goToNextScreen} disabled={this.state.disabled}></Greenbutton></View>

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
        alignItems: "center",
        justifyContent: "center",
    },
    field: {
        fontSize: 20,
        color: colors.primary,
    },
    space: {
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 40
    },
    input: {
        height: 25,
        width: 300,
        borderColor: colors.grey,
        borderWidth: 3,
        marginTop: 5,
        marginBottom: 25,
    },
    footer: {
        marginBottom: 80,
    }
});

