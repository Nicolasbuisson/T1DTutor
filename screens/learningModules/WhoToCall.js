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
import Context from "../../Context";

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
      english: true,
    };

    //functions
    this.goToLearningModules = this.goToLearningModules.bind(this);
    this.submitPharmacy = this.submitPharmacy.bind(this);
    this.submitCompany = this.submitCompany.bind(this);
    this.submitPersonel = this.submitPersonel.bind(this);
    this.addContact = this.addContact.bind(this);
    this.clearContacts = this.clearContacts.bind(this);
  }
  static contextType = Context;

  goToLearningModules() {
    this.context.setView("LearningModulesScreen");
  }

  submitPharmacy() {
    this.context.updateUserAndState(
      {
        pharmacy: {
          name: this.state.pharmacyNameInput,
          number: this.state.pharmacyNumberInput,
        },
      },
      () => {
        this.setState({
          pharmacyNameInput: "",
          pharmacyNumberInput: "",
        });
      }
    );
  }

  submitCompany() {
    this.context.updateUserAndState(
      {
        company: {
          name: this.state.companyNameInput,
          number: this.state.companyNumberInput,
        },
      },
      () => {
        this.setState({
          companyNameInput: "",
          companyNumberInput: "",
        });
      }
    );
  }

  submitPersonel() {
    this.context.updateUserAndState(
      {
        personel: {
          name: this.state.personelNameInput,
          number: this.state.personelNumberInput,
        },
      },
      () => {
        this.setState({
          personelNameInput: "",
          personelNumberInput: "",
        });
      }
    );
  }

  addContact() {
    this.context.updateUserAndState(
      {
        contact: {
          names: [...this.state.contactNames, this.state.contactNameInput],
          numbers: [
            ...this.state.contactNumbers,
            this.state.contactNumberInput,
          ],
        },
      },
      () => {
        this.setState({
          contactNameInput: "",
          contactNumberInput: "",
        });
      }
    );
  }

  clearContacts() {
    this.context.updateUserAndState(
      {
        contact: {
          names: [],
          numbers: [],
        },
      },
      () => null
    );
  }

  componentDidMount() {
    this.setState({
      english: this.context.user?.language === "French" ? false : true,
      contactNames: this.context.user?.contact?.names,
      contactNumbers: this.context.user?.contact?.numbers,
      personelName: this.context.user?.personel?.name,
      personelNumber: this.context.user?.personel?.number,
      pharmacyName: this.context.user?.pharmacy?.name,
      pharmacyNumber: this.context.user?.pharmacy?.number,
      companyName: this.context.user?.company?.name,
      companyNumber: this.context.user?.company?.number,
    });
  }

  render() {
    if (this.state.english) {
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
                {"\n"} - To talk with a secretary about paperwork to be filled
                or signed
                {"\n"} - To know how to get in touch with your endocrinologist
                for any other issue. Secretaries answer the phone from Monday to
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
                help with your diabetes care. They answer the phone from Monday
                to Friday between 8 am to 4 pm. Call the McGill University
                Health Centre at{" "}
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
                {"\n"} - {this.context.user?.personel?.name}
                {": "}
                <Text
                  style={{ textDecorationLine: "underline" }}
                  onPress={() => {
                    Linking.openURL(
                      "tel:" + this.context.user?.personel?.number
                    );
                  }}
                >
                  {this.context.user?.personel?.number}
                </Text>
              </Text>
              <View style={styles.inputView}>
                <Text style={styles.inputText}>
                  Enter the personel's name:{" "}
                </Text>
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
                {"\n"} - {this.context.user?.company?.name}
                {": "}
                <Text
                  style={{ textDecorationLine: "underline" }}
                  onPress={() => {
                    Linking.openURL(
                      "tel:" + this.context.user?.company?.number
                    );
                  }}
                >
                  {this.context.user?.company?.number}
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
                <Text style={styles.inputText}>
                  Enter the company's number:{" "}
                </Text>
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
                {"\n"} - Pharmacy name: {this.context.user?.pharmacy?.name}
                {"\n"} - Pharmacy number:{" "}
                <Text
                  style={{ textDecorationLine: "underline" }}
                  onPress={() => {
                    Linking.openURL(
                      "tel:" + this.context.user?.pharmacy?.number
                    );
                  }}
                >
                  {this.context.user?.pharmacy?.number}
                </Text>
              </Text>
              <View style={styles.inputView}>
                <Text style={styles.inputText}>
                  Enter the pharmacy's name:{" "}
                </Text>
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
                In the event of something urgent that cannot wait for office
                hours that is related to your diabetes, and you are unsure
                whether or not to go to the emergency department, you can call
                the McGill University Health Centre and ask switchboard for the
                endocrinologist on call. This is for urgent cases only. Make
                sure you have your hospital card ready when you call.
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
                <Text style={styles.inputText}>
                  Enter the contact's number:{" "}
                </Text>
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
                  {this.context.user?.contact?.names.map((item) => (
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
                  {this.context.user?.contact?.numbers.map((item) => (
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
    } else {
      return (
        <View style={styles.container}>
          <Header
            title="Qui Appeler"
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
                Appelez la clinique d'endocrinologie et métabolisme:
                {"\n"} - Pour réserver, annuler ou modifier un rendez-vous
                {"\n"} - Pour demander la disponibilité des médecins
                {"\n"} - Pour parler avec une secrétaire des documents à remplir
                ou à signer
                {"\n"} - Pour savoir comment contacter votre endocrinologue pour
                tous autres problèmes. Les secrétaires répondent au téléphone du
                lundi au vendredi de 8 h à 16 h. Le numéro de téléphone de la
                clinique du site Glen est le{" "}
                <Text
                  style={{ textDecorationLine: "underline" }}
                  onPress={() => {
                    Linking.openURL("tel:+15149348224");
                  }}
                >
                  514-934-8224
                </Text>
                . Le numéro de téléphone de la clinique de l'Hôpital général de
                Montréal est le{" "}
                <Text
                  style={{ textDecorationLine: "underline" }}
                  onPress={() => {
                    Linking.openURL("tel:+1514934193444760");
                  }}
                >
                  514-934-1934, poste 44760.
                </Text>
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.text}>
                Appelez l'une des infirmières éducatrices en diabète si vous
                avez besoin de l'aide avec le soins de votre diabète. Ils
                répondent au téléphone du lundi au vendredi de 8 h à 16 h.
                Appelez le Centre universitaire de santé McGill au{" "}
                <Text
                  style={{ textDecorationLine: "underline" }}
                  onPress={() => {
                    Linking.openURL("tel:+15149341934");
                  }}
                >
                  514-934-1934
                </Text>{" "}
                et utilisez les numéros de poste ci-dessous.
                {"\n"} - Maria D'Errico: 38006
                {"\n"} - Panhavat Huor: 38004
                {"\n"} - {this.context.user?.personel?.name}
                {": "}
                <Text
                  style={{ textDecorationLine: "underline" }}
                  onPress={() => {
                    Linking.openURL(
                      "tel:" + this.context.user?.personel?.number
                    );
                  }}
                >
                  {this.context.user?.personel?.number}
                </Text>
              </Text>
              <View style={styles.inputView}>
                <Text style={styles.inputText}>
                  Entrez le nom de l'infirmière:{" "}
                </Text>
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
                  Entrez le numéro de téléphone de l'infirmière :{" "}
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
                  Confirmer
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.text}>
                Pour l'assistance technique ou de livraison de votre technologie
                de diabète, vous devez appeler le numéro d'assistance de
                l'entreprise.
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
                {"\n"} - Diabète en tandem:{" "}
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
                {"\n"} - {this.context.user?.company?.name}
                {": "}
                <Text
                  style={{ textDecorationLine: "underline" }}
                  onPress={() => {
                    Linking.openURL(
                      "tel:" + this.context.user?.company?.number
                    );
                  }}
                >
                  {this.context.user?.company?.number}
                </Text>
              </Text>
              <View style={styles.inputView}>
                <Text style={styles.inputText}>
                  Entrez le nom d'une entreprise:{" "}
                </Text>
                <TextInput
                  style={styles.input}
                  onChangeText={(text) =>
                    this.setState({ companyNameInput: text })
                  }
                  value={this.state.companyNameInput}
                ></TextInput>
              </View>
              <View style={styles.inputView}>
                <Text style={styles.inputText}>
                  Entrez le numéro de téléphone de l'entreprise:{" "}
                </Text>
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
                  Confirmer
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.text}>
                Pour vos renouvellements de prescriptions, appelez votre
                pharmacie.
                {"\n"} - Nom de la pharmacie:{" "}
                {this.context.user?.pharmacy?.name}
                {"\n"} - Numéro de la pharmacie:{" "}
                <Text
                  style={{ textDecorationLine: "underline" }}
                  onPress={() => {
                    Linking.openURL(
                      "tel:" + this.context.user?.pharmacy?.number
                    );
                  }}
                >
                  {this.context.user?.pharmacy?.number}
                </Text>
              </Text>
              <View style={styles.inputView}>
                <Text style={styles.inputText}>
                  Entrez le nom de la pharmacie:{" "}
                </Text>
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
                  Entrez le numéro de la pharmacie:{" "}
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
                  Confirmer
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.text}>
                En cas de problème urgent lié à votre diabète qui ne peut pas
                attendre les heures de bureau et que vous ne savez pas si vous
                devez vous rendre à l'urgence, vous pouvez appeler le Centre
                universitaire de santé McGill et demander pour l'endocrinologue
                de garde. Ceci est uniquement pour les cas urgents. Assurez-vous
                d'avoir votre carte d'hôpital à main lorsque vous appelez.
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.title}>Contacts</Text>
              <View style={styles.inputView}>
                <Text style={styles.inputText}>Entrez le nom du contact: </Text>
                <TextInput
                  style={styles.input}
                  onChangeText={(text) =>
                    this.setState({ contactNameInput: text })
                  }
                  value={this.state.contactNameInput}
                ></TextInput>
              </View>
              <View style={styles.inputView}>
                <Text style={styles.inputText}>
                  Entrez le numéro du contact:{" "}
                </Text>
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
                  Ajouter
                </Text>
              </TouchableOpacity>
              <Text style={styles.text}>Autres contacts importants:{"\n"}</Text>
              <View style={styles.contactsView}>
                <View
                  style={{
                    flexBasis: "35%",
                  }}
                >
                  {this.context.user?.contact?.names.map((item) => (
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
                  {this.context.user?.contact?.numbers.map((item) => (
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
                  Effacer
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      );
    }
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
