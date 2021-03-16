import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import "firebase/auth";
import Header from "../../components/header";
import colors from "../../style/colors.js";
import { ScrollView } from "react-native-gesture-handler";
import * as Linking from "expo-linking";
import firebase from "firebase";
import dbh from "../../firebase";

class WhoToCall extends Component {
  constructor() {
    super();
    this.state = {
      pharmacyName: "",
      pharmacyNameInput: "",
      pharmacyNumber: "",
      pharmacyNumberInput: "",
      companyName: "",
      companyNameInput: "",
      companyNumber: "",
      companyNumberInput: "",
      personelName: "",
      personelNameInput: "",
      personelNumber: "",
      personelNumberInput: "",
      contactNameInput: "",
      contactNumberInput: "",
      contactNames: [],
      contactNumbers: [],
      uid: "",
    };

    //functions
    this.goToLearningModules = this.goToLearningModules.bind(this);
    this.submitPharmacy = this.submitPharmacy.bind(this);
    this.submitCompany = this.submitCompany.bind(this);
    this.submitPersonel = this.submitPersonel.bind(this);
    this.addContact = this.addContact.bind(this);
    this.clearContacts = this.clearContacts.bind(this);
  }

  goToLearningModules() {
    this.props.navigation.navigate("LearningModulesScreen");
  }

  submitPharmacy() {
    this.setState(
      {
        pharmacyName: this.state.pharmacyNameInput,
        pharmacyNumber: this.state.pharmacyNumberInput,
        pharmacyNameInput: "",
        pharmacyNumberInput: "",
      },
      () => {
        dbh
          .collection("users")
          .doc(this.state.uid)
          .collection("userData")
          .doc("WhoToCall")
          .set(
            {
              pharmacyName: this.state.pharmacyName,
              pharmacyNumber: this.state.pharmacyNumber,
            },
            { merge: true }
          );
      }
    );
  }

  submitCompany() {
    this.setState(
      {
        companyName: this.state.companyNameInput,
        companyNumber: this.state.companyNumberInput,
        companyNameInput: "",
        companyNumberInput: "",
      },
      () => {
        dbh
          .collection("users")
          .doc(this.state.uid)
          .collection("userData")
          .doc("WhoToCall")
          .set(
            {
              companyName: this.state.companyName,
              companyNumber: this.state.companyNumber,
            },
            { merge: true }
          );
      }
    );
  }

  submitPersonel() {
    this.setState(
      {
        personelName: this.state.personelNameInput,
        personelNumber: this.state.personelNumberInput,
        personelNameInput: "",
        personelNumberInput: "",
      },
      () => {
        dbh
          .collection("users")
          .doc(this.state.uid)
          .collection("userData")
          .doc("WhoToCall")
          .set(
            {
              personelName: this.state.personelName,
              personelNumber: this.state.personelNumber,
            },
            { merge: true }
          );
      }
    );
  }

  addContact() {
    this.setState(
      {
        contactNames: [...this.state.contactNames, this.state.contactNameInput],
        contactNumbers: [
          ...this.state.contactNumbers,
          this.state.contactNumberInput,
        ],
        contactNameInput: "",
        contactNumberInput: "",
      },
      () => {
        dbh
          .collection("users")
          .doc(this.state.uid)
          .collection("userData")
          .doc("WhoToCall")
          .set(
            {
              contactNames: this.state.contactNames,
              contactNumbers: this.state.contactNumbers,
            },
            { merge: true }
          );
      }
    );
  }

  clearContacts() {
    this.setState(
      {
        contactNames: [],
        contactNumbers: [],
      },
      () => {
        dbh
          .collection("users")
          .doc(this.state.uid)
          .collection("userData")
          .doc("WhoToCall")
          .set(
            {
              contactNames: this.state.contactNames,
              contactNumbers: this.state.contactNumbers,
            },
            { merge: true }
          );
      }
    );
  }

  componentDidMount() {
    var user = firebase.auth().currentUser;
    if (user) {
      this.setState({ uid: user.uid, personelName: "" });
    }
    dbh
      .collection("users")
      .doc(user.uid)
      .collection("userData")
      .doc("WhoToCall")
      .get()
      .then((doc) => {
        if (doc.exists) {
          this.setState({
            personelName: doc.data().personelName,
            personelNumber: doc.data().personelNumber,
            pharmacyName: doc.data().pharmacyName,
            pharmacyNumber: doc.data().pharmacyNumber,
            companyName: doc.data().companyName,
            companyNumber: doc.data().companyNumber,
            contactNames: doc.data().contactNames,
            contactNumbers: doc.data().contactNumbers,
          });
        }
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          title="Who to Call"
          backArrow={true}
          function={this.goToLearningModules}
          small={true}
          smallArrow={true}
        />

        <ScrollView
          contentContainerStyle={styles.fieldsContainer}
          style={{ height: "77%", marginBottom: 5 }}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.listItem}>
            <Text style={styles.text}>
              Call the Endocrinology and Metabolism clinic:
              {"\n"} - To book, cancel, or modify an appointment
              {"\n"} - To ask about physician availability
              {"\n"} - To talk with a secretary about paperwork to be filled or
              signed
              {"\n"} - To know how to get in touch with your endocrinologist for
              any other issue. Secretaries answer the phone from Monday to
              Friday between 8 am to 4 pm. The phone number of the Glen site
              clinic is{" "}
              <Text
                style={{ textDecorationLine: "underline" }}
                onPress={() => {
                  Linking.openURL("tel:+15149348224");
                }}
              >
                514-934-8224
              </Text>
              . The phone number for the Montreal General Hospital clinic is{" "}
              <Text
                style={{ textDecorationLine: "underline" }}
                onPress={() => {
                  Linking.openURL("tel:+1514934193444760");
                }}
              >
                514-934-1934, extension 44760.
              </Text>
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.text}>
              Call one of the diabetes nurse educators if you need any other
              help with your diabetes care. They answer the phone from Monday to
              Friday between 8 am to 4 pm. Call the McGill University Health
              Centre at{" "}
              <Text
                style={{ textDecorationLine: "underline" }}
                onPress={() => {
                  Linking.openURL("tel:+15149341934");
                }}
              >
                514-934-1934
              </Text>{" "}
              and use the extension numbers below.
              {"\n"} - Maria D'Errico: 38006
              {"\n"} - Panhavat Huor: 38004
              {"\n"} - {this.state.personelName}
              {": "}
              <Text
                style={{ textDecorationLine: "underline" }}
                onPress={() => {
                  Linking.openURL("tel:" + this.state.personelNumber);
                }}
              >
                {this.state.personelNumber}
              </Text>
            </Text>
            <View style={styles.inputView}>
              <Text style={styles.inputText}>Enter the personel's name: </Text>
              <TextInput
                style={styles.input}
                onChangeText={(text) =>
                  this.setState({ personelNameInput: text })
                }
                value={this.state.personelNameInput}
              ></TextInput>
            </View>
            <View style={styles.inputView}>
              <Text style={styles.inputText}>
                Enter the personel's number:{" "}
              </Text>
              <TextInput
                style={styles.input}
                onChangeText={(text) =>
                  this.setState({ personelNumberInput: text })
                }
                keyboardType="numeric"
                value={this.state.personelNumberInput}
              ></TextInput>
            </View>
            <TouchableOpacity style={styles.addButton}>
              <Text
                style={styles.addButtonText}
                onPress={() => this.submitPersonel()}
              >
                Submit
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.text}>
              For any technical or delivery support for your diabetes
              technology, you should call the support hotline of the company.
              {"\n"} - OmniPod:{" "}
              <Text
                style={{ textDecorationLine: "underline" }}
                onPress={() => {
                  Linking.openURL("tel:+18005913455");
                }}
              >
                1-800-591-3455
              </Text>
              {"\n"} - Medtronic:{" "}
              <Text
                style={{ textDecorationLine: "underline" }}
                onPress={() => {
                  Linking.openURL("tel:+18002844416");
                }}
              >
                1-800-284-4416
              </Text>
              {"\n"} - Tandem Diabetes:{" "}
              <Text
                style={{ textDecorationLine: "underline" }}
                onPress={() => {
                  Linking.openURL("tel:+18778016901");
                }}
              >
                1-877-801-6901
              </Text>
              {"\n"} - Abbott/Freestyle Libre:{" "}
              <Text
                style={{ textDecorationLine: "underline" }}
                onPress={() => {
                  Linking.openURL("tel:+18882058296");
                }}
              >
                1-888-205-8296
              </Text>
              {"\n"} - Dexcom:{" "}
              <Text
                style={{ textDecorationLine: "underline" }}
                onPress={() => {
                  Linking.openURL("tel:+18448321810");
                }}
              >
                1-844-832-1810
              </Text>
              {"\n"} - {this.state.companyName}
              {": "}
              <Text
                style={{ textDecorationLine: "underline" }}
                onPress={() => {
                  Linking.openURL("tel:" + this.state.companyNumber);
                }}
              >
                {this.state.companyNumber}
              </Text>
            </Text>
            <View style={styles.inputView}>
              <Text style={styles.inputText}>Enter the company's name: </Text>
              <TextInput
                style={styles.input}
                onChangeText={(text) =>
                  this.setState({ companyNameInput: text })
                }
                value={this.state.companyNameInput}
              ></TextInput>
            </View>
            <View style={styles.inputView}>
              <Text style={styles.inputText}>Enter the company's number: </Text>
              <TextInput
                style={styles.input}
                onChangeText={(text) =>
                  this.setState({ companyNumberInput: text })
                }
                keyboardType="numeric"
                value={this.state.companyNumberInput}
              ></TextInput>
            </View>
            <TouchableOpacity style={styles.addButton}>
              <Text
                style={styles.addButtonText}
                onPress={() => this.submitCompany()}
              >
                Submit
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.text}>
              For your prescription renewals and refills, call your pharmacy.
              {"\n"} - Pharmacy name: {this.state.pharmacyName}
              {"\n"} - Pharmacy number:{" "}
              <Text
                style={{ textDecorationLine: "underline" }}
                onPress={() => {
                  Linking.openURL("tel:" + this.state.pharmacyNumber);
                }}
              >
                {this.state.pharmacyNumber}
              </Text>
            </Text>
            <View style={styles.inputView}>
              <Text style={styles.inputText}>Enter the pharmacy's name: </Text>
              <TextInput
                style={styles.input}
                onChangeText={(text) =>
                  this.setState({ pharmacyNameInput: text })
                }
                value={this.state.pharmacyNameInput}
              ></TextInput>
            </View>
            <View style={styles.inputView}>
              <Text style={styles.inputText}>
                Enter the pharmacy's number:{" "}
              </Text>
              <TextInput
                style={styles.input}
                onChangeText={(text) =>
                  this.setState({ pharmacyNumberInput: text })
                }
                keyboardType="numeric"
                value={this.state.pharmacyNumberInput}
              ></TextInput>
            </View>
            <TouchableOpacity style={styles.addButton}>
              <Text
                style={styles.addButtonText}
                onPress={() => this.submitPharmacy()}
              >
                Submit
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.text}>
              In the event of something urgent that cannot wait for office hours
              that is related to your diabetes, and you are unsure whether or
              not to go to the emergency department, you can call the McGill
              University Health Centre and ask switchboard for the
              endocrinologist on call. This is for urgent cases only. Make sure
              you have your hospital card ready when you call.
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.title}>Contacts</Text>
            <View style={styles.inputView}>
              <Text style={styles.inputText}>Enter the contact's name: </Text>
              <TextInput
                style={styles.input}
                onChangeText={(text) =>
                  this.setState({ contactNameInput: text })
                }
                value={this.state.contactNameInput}
              ></TextInput>
            </View>
            <View style={styles.inputView}>
              <Text style={styles.inputText}>Enter the contact's number: </Text>
              <TextInput
                style={styles.input}
                onChangeText={(text) =>
                  this.setState({ contactNumberInput: text })
                }
                keyboardType="numeric"
                value={this.state.contactNumberInput}
              ></TextInput>
            </View>
            <TouchableOpacity style={styles.addButton}>
              <Text
                style={styles.addButtonText}
                onPress={() => this.addContact()}
              >
                Add
              </Text>
            </TouchableOpacity>
            <Text style={styles.text}>Other important contacts:{"\n"}</Text>
            <View style={styles.contactsView}>
              <View
                style={{
                  flexBasis: "35%",
                }}
              >
                {this.state.contactNames.map((item) => (
                  <Text style={{ textAlign: "right", margin: 5 }}>
                    - {item} :
                  </Text>
                ))}
              </View>
              <View
                style={{
                  flexBasis: "65%",
                }}
              >
                {this.state.contactNumbers.map((item) => (
                  <Text
                    style={{
                      textDecorationLine: "underline",
                      textAlign: "left",
                      margin: 5,
                    }}
                    onPress={() => {
                      Linking.openURL("tel:" + item);
                    }}
                  >
                    {item}
                  </Text>
                ))}
              </View>
            </View>
            <TouchableOpacity style={styles.addButton}>
              <Text
                style={styles.addButtonText}
                onPress={() => this.clearContacts()}
              >
                Clear
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default WhoToCall;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.background,
  },
  contactsView: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  fieldsContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  listItem: {
    padding: 5,
    margin: 5,
    minWidth: "92%",
    maxWidth: "92%",
    backgroundColor: colors.secondary,
    borderWidth: 2,
    borderColor: colors.grey,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 3,
    textAlign: "center",
  },
  text: {
    fontWeight: "500",
    lineHeight: 22,
    marginBottom: 3,
  },
  inputView: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: 3,
  },
  inputText: {
    textAlign: "left",
    fontWeight: "500",
    lineHeight: 22,
    marginBottom: 3,
    flexBasis: "63%",
  },
  input: {
    borderColor: colors.grey,
    borderWidth: 1,
    flexBasis: "35%",
  },
  addButton: {
    margin: 5,
    padding: 5,
    paddingHorizontal: 10,
    backgroundColor: colors.primary,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.background,
    maxWidth: "35%",
    alignSelf: "center",
  },
  addButtonText: {
    textAlign: "center",
    color: colors.background,
  },
});
