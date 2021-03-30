import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import "firebase/auth";
import Header from "../../components/header";
import colors from "../../style/colors.js";
import { ScrollView } from "react-native-gesture-handler";
import * as WebBrowser from "expo-web-browser";
import Context from "../../Context";

class FoodAndYou extends Component {
  constructor() {
    super();
    this.state = {
      question1: false,
      question2: false,
      question3: false,
      english: true,
    };

    //functions
    this.goToLearningModules = this.goToLearningModules.bind(this);
  }
  static contextType = Context;

  goToLearningModules() {
    this.context.setView("LearningModulesScreen");
  }

  componentDidMount() {
    if (this.context.user?.language === "French") {
      this.setState({ english: false });
    }
  }

  render() {
    if (this.state.english) {
      return (
        <View style={styles.container}>
          <Header
            title="Food and You"
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
              <Text style={styles.title}>
                General Healthy Eating Recommendations
              </Text>
              <Text style={styles.text}>
                Diabetes Canada recommends that people with diabetes follow a
                heart healthy diet. Here are some suggestions
                {"\n"} - Eat more whole foods, and fewer refined or processed
                foods such as fast foods and sugar-sweetened beverages.
                {"\n"} - Pay attention to both carbohydrate quality and
                quantity.
                {"\n"} - Include both slower digesting foods (lower
                glycemic-index foods) such as legumes, whole grains, fruits and
                vegetables. These foods can help with your glucose control. They
                are also excellent for maintaining good health, especially heart
                health.
                {"\n"} - Learn to count carbohydrates if you don’t already do
                this. This will allow you to adjust your insulin for your food
                intake, give you more flexibility, and help you control you
                blood glucose after eating.
                {"\n"} - Choose unsaturated oils (such as olive, canola oils)
                and nuts.
                {"\n"} - Choose leaner animal proteins (lower fat cheeses, lean
                meats, etc). Try to eat more plant-based or vegetable proteins
                (such as soy, chickpeas, lentils, etc).
                {"\n"} - The style of eating that is healthy for all Canadians,
                as well as people with diabetes, is sometimes called a
                Mediterranean style diet, DASH diet or vegetarian-style of
                eating. All of the foods in these patterns of eating are rich in
                many protective elements that have been shown to help manage
                diabetes and protect our hearts and blood vessels.
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.title}>
                Everything you wanted to know about sweeteners but were afraid
                to ask!
              </Text>
              <Text style={styles.text}>
                Nutritive sweeteners contain calories or energy and are
                converted to glucose in your body. All sweeteners available have
                been approved by Health Canada.
                {"\n"} - Sugars (ending in “ose”): sucrose (white sugar, brown
                sugar, honey, syrup), dextrose (glucose tabs), lactose (in milk
                and yogurt), fructose (in fruits and some vegetables)
                {"\n"} - Alcohol sugars: sorbitol, lactilol, xylitol. Half of
                these are converted to glucose in your body. Often found in many
                “diet” candies, chocolates and “sugar-free foods”. These are
                strong laxatives and should be taken in very small amounts!!
                {"\n\n"}Non-nutritive sweeteners are either not absorbed by the
                digestive system, or are highly concentrated and are needed in
                such small amounts that they do not raise glucose.
                {"\n"} - Acesulfame potassium (aceK): not available for personal
                use. Used in industry as a “synergistic sweetener” to enhance
                the sweeteners of other non-nutritive sweeteners,
                {"\n"} - Aspartame aka Equal® found in sugar-free gum,
                {"\n"} - Sucralose (the only “ose” that does not raise glucose!)
                aka Splenda®: Found in processed foods and as a sugar substitute
                in bulk or packets.
                {"\n"} - Saccharin/Cyclamates –older sweeteners not permitted to
                be used in food processing in North America. “Sugar Twin” ® or
                Sweet ‘n Low® Not for use in pregnancy
                {"\n"} - Stevia (steviol glycosides)
                {"\n"} - Neotame : newer
                {"\n"} - Thaumatin
                {"\n"} - Monk fruit extract
                {"\n\n"}There is no reason to avoid sweeteners like sugar. They
                require insulin, and everyone is recommended to eat less sugar –
                diabetes or not!
                {"\n"}Sugar substitutes, and foods containing them are not
                necessary for people with T1D. Be aware that some may raise your
                blood glucose.
                {"\n"}Know what you are eating and drinking!
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.title}>
                Helpful links if you don’t count carbs and want to know more
              </Text>
              <Text
                style={styles.text}
                onPress={() => {
                  WebBrowser.openBrowserAsync(
                    "https://diabetes.ca/DiabetesCanadaWebsite/media/Managing-My-Diabetes/Tools%20and%20Resources/basic-carbohydrate-counting.pdf?ext=.pdf"
                  );
                }}
              >
                https://diabetes.ca/DiabetesCanadaWebsite/media/Managing-My-Diabetes/Tools%20and%20Resources/basic-carbohydrate-counting.pdf?ext=.pdf
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.title}>
                Helpful links if you use 15 gram Carb Choices/Portions/Exchanges
              </Text>
              <Text
                style={styles.text}
                onPress={() => {
                  WebBrowser.openBrowserAsync(
                    "https://www.diabete.qc.ca/wp-content/uploads/2014/08/Guide-dalimentation-anglais-2.pdf"
                  );
                }}
              >
                https://www.diabete.qc.ca/wp-content/uploads/2014/08/Guide-dalimentation-anglais-2.pdf
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.title}>
                Helpful Tips and links if you count grams of Carb
              </Text>
              <Text style={styles.text}>
                Label reading tips
                {"\n"} - Remember to check your portion size. It may be
                different from the portion on the label
                {"\n"} - The total grams of carbohydrate are listed first. This
                includes starches, sugars and fibre. Starches are not listed
                separately
                {"\n"} - Remember to subtract the fibre from the total
                carbohydrate
                {"\n"} - If there are any alcohol sugars: remember to subtract ½
                of the grams
                {"\n\n"}Measuring
                {"\n"} - Use a measuring cup for liquids or small uniformly
                shaped foods such as rice
                {"\n"} - A digital scale is better for weighing irregularly
                shaped foods such as pasta and cu-up fruits
                {"\n"} - When using a scale, always weigh the food in the state
                you will be eating it (i.e. cooked)
                {"\n"} - Nutrition Facts labels for grain products (eg. Pasta,
                rice, etc.) provide information for the uncooked food.
                {"\n"} - Using a table of “carb factors” or carb percentage of a
                food’s weight can help you be more precise
                {"\n"} - Most bread products (baguette, bagels, pita, etc) are
                50% carbohydrate. Half the weight in grams is usually
                carbohydrate.
                {"\n"} - Weighing and measuring foods at home can help you
                better estimate the carbs in foods when you are away from home.
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.title}>Helpful Carb counting Apps </Text>
              <Text style={styles.text}>
                There are many nutrition apps available. Most are focused on
                people who are dieting to lose weight. Some are especially
                helpful for people with T1D, and some also have a website.
              </Text>
              <View style={styles.appTable}>
                <View style={styles.appRow}>
                  <View style={styles.appColumn}>
                    <Text>App</Text>
                  </View>
                  <View style={styles.phoneColumn}>
                    <Text>IOS{"\n"}(Apple)</Text>
                  </View>
                  <View style={styles.phoneColumn}>
                    <Text>Android</Text>
                  </View>
                  <View style={styles.commentsColumn}>
                    <Text>Comments</Text>
                  </View>
                </View>
                <View style={styles.appRow}>
                  <View style={styles.appColumn}>
                    <Text>Carbs {"&"} Cals</Text>
                  </View>
                  <View style={styles.phoneColumn}>
                    <Text>X</Text>
                  </View>
                  <View style={styles.phoneColumn}>
                    <Text>X</Text>
                  </View>
                  <View style={styles.commentsColumn}>
                    <Text>
                      $; Photo based. Multiple databases (USA, UK, Austria,
                      Germany, Italy, Portugal); Expandable database
                    </Text>
                  </View>
                </View>
                <View style={styles.appRow}>
                  <View style={styles.appColumn}>
                    <Text
                      onPress={() => {
                        WebBrowser.openBrowserAsync(
                          "https://www.carbfactors.com/browse"
                        );
                      }}
                    >
                      Carb Factors{"\n"}https://www.carbfactors.com/browse
                    </Text>
                  </View>
                  <View style={styles.phoneColumn}>
                    <Text>X</Text>
                  </View>
                  <View style={styles.phoneColumn}>
                    <Text> </Text>
                  </View>
                  <View style={styles.commentsColumn}>
                    <Text>
                      Percentage of carbohydrate in a food. Carb = weight of
                      food (cooked) X Carb factor
                    </Text>
                  </View>
                </View>
                <View style={styles.appRow}>
                  <View style={styles.appColumn}>
                    <Text
                      onPress={() => {
                        WebBrowser.openBrowserAsync(
                          "https://www.calorieking.com/gb/en/"
                        );
                      }}
                    >
                      Calorie King{"\n"}https://www.calorieking.com/gb/en/
                    </Text>
                  </View>
                  <View style={styles.phoneColumn}>
                    <Text>X</Text>
                  </View>
                  <View style={styles.phoneColumn}>
                    <Text>X</Text>
                  </View>
                  <View style={styles.commentsColumn}>
                    <Text>
                      Search foods by category, brand, fast food chain, using
                      bar code scanner.
                    </Text>
                  </View>
                </View>
                <View style={styles.appRow}>
                  <View style={styles.appColumn}>
                    <Text
                      onPress={() => {
                        WebBrowser.openBrowserAsync(
                          "https://www.myfitnesspal.com/food/search"
                        );
                      }}
                    >
                      My Fitness Pal{"\n"}(E, Fr + others){"\n"}
                      https://www.myfitnesspal.com/food/search
                    </Text>
                  </View>
                  <View style={styles.phoneColumn}>
                    <Text>X</Text>
                  </View>
                  <View style={styles.phoneColumn}>
                    <Text>X</Text>
                  </View>
                  <View style={styles.commentsColumn}>
                    <Text>Includes recipe analyzer</Text>
                  </View>
                </View>
                <View style={styles.appRow}>
                  <View style={styles.appColumn}>
                    <Text>Glycemeal{"\n"}(E, Fr)</Text>
                  </View>
                  <View style={styles.phoneColumn}>
                    <Text>X</Text>
                  </View>
                  <View style={styles.phoneColumn}>
                    <Text> </Text>
                  </View>
                  <View style={styles.commentsColumn}>
                    <Text>
                      Food lists can be searched by food name or with bar code
                      scanner. Food lists show carb/100g, you enter weight of
                      portion. Can program ratios; app calculates insulin dose
                      (for food only)
                    </Text>
                  </View>
                </View>
                <View style={styles.appRow}>
                  <View style={styles.appColumn}>
                    <Text>Foodvisor{"\n"}(E, Fr)</Text>
                  </View>
                  <View style={styles.phoneColumn}>
                    <Text>X</Text>
                  </View>
                  <View style={styles.phoneColumn}>
                    <Text>X</Text>
                  </View>
                  <View style={styles.commentsColumn}>
                    <Text>
                      Helps you calculate your plate when you take a photo.
                    </Text>
                  </View>
                </View>
                <View style={styles.appRow}>
                  <View style={styles.appColumn}>
                    <Text>Under My Fork</Text>
                  </View>
                  <View style={styles.phoneColumn}>
                    <Text>X</Text>
                  </View>
                  <View style={styles.phoneColumn}>
                    <Text> </Text>
                  </View>
                  <View style={styles.commentsColumn}>
                    <Text>
                      Allows you to track meals and link with your CGM data.
                      Does not provide nutrition information, but can help look
                      for patterns with problem foods
                    </Text>
                  </View>
                </View>
                <View style={styles.appRow}>
                  <View style={styles.appColumn}>
                    <Text>Fooducate</Text>
                  </View>
                  <View style={styles.phoneColumn}>
                    <Text>X</Text>
                  </View>
                  <View style={styles.phoneColumn}>
                    <Text>X</Text>
                  </View>
                  <View style={styles.commentsColumn}>
                    <Text>
                      Food lists searched by food/category or bar code scanner.
                      Can preset nutrients you want (eg carbs and fibre).
                      Recipes.
                    </Text>
                  </View>
                </View>
                <View style={styles.appRow}>
                  <View style={styles.appColumn}>
                    <Text>Figwee Visual Food Diary</Text>
                  </View>
                  <View style={styles.phoneColumn}>
                    <Text>X</Text>
                  </View>
                  <View style={styles.phoneColumn}>
                    <Text>X</Text>
                  </View>
                  <View style={styles.commentsColumn}>
                    <Text>
                      Photo based. Arrow slider to increase or decrease portion
                      size.
                    </Text>
                  </View>
                </View>
                <View style={styles.appRow}>
                  <View style={styles.appColumn}>
                    <Text
                      onPress={() => {
                        WebBrowser.openBrowserAsync(
                          "https://www.sparkpeople.com/"
                        );
                      }}
                    >
                      Sparkpeople{"\n"}https://www.sparkpeople.com/
                    </Text>
                  </View>
                  <View style={styles.phoneColumn}>
                    <Text>X</Text>
                  </View>
                  <View style={styles.phoneColumn}>
                    <Text>X</Text>
                  </View>
                  <View style={styles.commentsColumn}>
                    <Text>Includes a recipe calculator</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.title}>Other helpful online resources</Text>
              <Text
                style={styles.link}
                onPress={() => {
                  WebBrowser.openBrowserAsync(
                    "https://diabetes.ca/DiabetesCanadaWebsite/media/Managing-My-Diabetes/Tools%20and%20Resources/basic-carbohydrate-counting.pdf?ext=.pdf"
                  );
                }}
              >
                -
                https://diabetes.ca/DiabetesCanadaWebsite/media/Managing-My-Diabetes/Tools%20and%20Resources/basic-carbohydrate-counting.pdf?ext=.pdf
              </Text>
              <Text
                style={styles.link}
                onPress={() => {
                  WebBrowser.openBrowserAsync(
                    "https://diabetes.ca/DiabetesCanadaWebsite/media/Managing-My-Diabetes/Tools%20and%20Resources/handy-portion-guide.pdf?ext=.pdf"
                  );
                }}
              >
                -
                https://diabetes.ca/DiabetesCanadaWebsite/media/Managing-My-Diabetes/Tools%20and%20Resources/handy-portion-guide.pdf?ext=.pdf
              </Text>
              <Text
                style={styles.link}
                onPress={() => {
                  WebBrowser.openBrowserAsync(
                    "https://diabetes.ca/managing-my-diabetes/tools---resources/the-glycemic-index-(gi)"
                  );
                }}
              >
                -
                https://diabetes.ca/managing-my-diabetes/tools---resources/the-glycemic-index-(gi)
              </Text>
              <Text
                style={styles.link}
                onPress={() => {
                  WebBrowser.openBrowserAsync(
                    "https://www.diabete.qc.ca/wp-content/uploads/2016/03/Dq-guideresto-2018-montage-anglais5-2.pdf"
                  );
                }}
              >
                -
                https://www.diabete.qc.ca/wp-content/uploads/2016/03/Dq-guideresto-2018-montage-anglais5-2.pdf
              </Text>
              <Text
                style={styles.link}
                onPress={() => {
                  WebBrowser.openBrowserAsync(
                    "https://www.canada.ca/content/dam/hc-sc/migration/hc-sc/fn-an/alt_formats/pdf/nutrition/fiche-nutri-data/nvscf-vnqau-eng.pdf"
                  );
                }}
              >
                -
                https://www.canada.ca/content/dam/hc-sc/migration/hc-sc/fn-an/alt_formats/pdf/nutrition/fiche-nutri-data/nvscf-vnqau-eng.pdf
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.title}>Check your knowledge</Text>
              <View style={styles.quizItem}>
                <Text style={styles.text}>
                  1. Which of the following foods does not contain carbohydrate?
                </Text>
                <Text
                  style={styles.text}
                  onPress={() => this.setState({ question1: true })}
                >
                  {"   "}a. 200 mL Unsweetened orange juice
                  {"\n   "}b. 125 mL Green peas
                  {"\n   "}c. 250 mL soy milk
                  {"\n   "}d. a bowl of green salad
                </Text>
                <Text style={this.state.question1 ? styles.text : styles.hide}>
                  Correct answer: d
                </Text>
              </View>
              <View style={styles.quizItem}>
                <Text style={styles.text}>
                  2. How much carbohydrate is in each muffin?
                </Text>
                <Text style={styles.text}>
                  Nutrition Facts per muffin (120g)
                  {"\n"}Valeur nutritive par muffin (120g)
                </Text>
                <View style={styles.q2Container}>
                  <View style={styles.q2RowCalories}>
                    <Text style={styles.q2text}>Calories/calories : 370</Text>
                  </View>
                  <View style={styles.q2RowDailyValue}>
                    <Text style={styles.q2text}>
                      % Daily Value
                      {"\n"}% valeur quotidienne
                    </Text>
                  </View>
                  <View style={styles.q2Row}>
                    <Text style={styles.q2text}>Fat/ Lipids</Text>
                    <Text style={styles.q2text}>12g</Text>
                    <Text style={styles.q2text}>18%</Text>
                  </View>
                  <View style={styles.q2Row}>
                    <Text style={styles.q2subtitle}> Saturated/ Saturés</Text>
                    <Text style={styles.q2text}>2g</Text>
                    <Text style={styles.q2text}>10%</Text>
                  </View>
                  <View style={styles.q2Row}>
                    <Text style={styles.q2subtitle}> +Trans/ Trans</Text>
                    <Text style={styles.q2text}>0g</Text>
                    <Text style={styles.q2text}> </Text>
                  </View>
                  <View style={styles.q2Row}>
                    <Text style={styles.q2text}>Carbohydrates/ Glucides</Text>
                    <Text style={styles.q2text}>63g</Text>
                    <Text style={styles.q2text}>21%</Text>
                  </View>
                  <View style={styles.q2Row}>
                    <Text style={styles.q2subtitle}> Fibre/ Fibres</Text>
                    <Text style={styles.q2text}>4g</Text>
                    <Text style={styles.q2text}>16%</Text>
                  </View>
                  <View style={styles.q2Row}>
                    <Text style={styles.q2subtitle}> Sugar/ Sucres</Text>
                    <Text style={styles.q2text}>36g</Text>
                    <Text style={styles.q2text}> </Text>
                  </View>
                  <View style={styles.q2Row}>
                    <Text style={styles.q2text}>Protein/ Protéines</Text>
                    <Text style={styles.q2text}>5g</Text>
                    <Text style={styles.q2text}> </Text>
                  </View>
                  <View style={styles.q2Row}>
                    <Text style={styles.q2text}>Cholesterol / Cholésterol</Text>
                    <Text style={styles.q2text}>20mg</Text>
                    <Text style={styles.q2text}>7%</Text>
                  </View>
                  <View style={styles.q2Row}>
                    <Text style={styles.q2text}>Sodium</Text>
                    <Text style={styles.q2text}>370mg</Text>
                    <Text style={styles.q2text}>15%</Text>
                  </View>
                </View>
                <Text
                  style={styles.text}
                  onPress={() => this.setState({ question2: true })}
                >
                  {"   "}a. 63g
                  {"\n   "}b. 36g
                  {"\n   "}c. 59g
                  {"\n   "}d. 99g
                </Text>
                <Text style={this.state.question2 ? styles.text : styles.hide}>
                  Correct answer: c
                </Text>
              </View>
              <View style={styles.quizItem}>
                <Text style={styles.text}>
                  3. You buy a bag of 6 bagels. The bag weighs 500g. How much
                  carb is in each bagel?
                </Text>
                <Text
                  style={styles.text}
                  onPress={() => this.setState({ question3: true })}
                >
                  {"   "}a. 41g
                  {"\n   "}b. 30g
                  {"\n   "}c. 50g
                  {"\n   "}d. 20g
                </Text>
                <Text style={this.state.question3 ? styles.text : styles.hide}>
                  Correct answer: a
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Header
            title="La Nourriture et Toi "
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
              <Text style={styles.title}>
                Recommandations générales à propos de l'alimentation saine
              </Text>
              <Text style={styles.text}>
                Diabète Canada recommande aux personnes atteintes de diabète de
                suivre une alimentation saine pour le cœur. Voici quelques
                suggestions:
                {"\n"} - Mangez plus d'aliments entiers et moins d'aliments
                raffinés ou transformés tels que les fast-foods et les boissons
                sucrées.
                {"\n"} - Faites attention à la fois à la qualité et à la
                quantité des glucides.
                {"\n"} - Inclure les aliments à digestion plus lente (aliments à
                faible indice glycémique) comme les légumineuses, les grains
                entiers, les fruits et les légumes. Ces aliments peuvent vous
                aider à contrôler votre glycémie. Ils sont également excellents
                pour maintenir une bonne santé, en particulier la santé
                cardiaque.
                {"\n"} - Apprenez à compter les glucides si vous ne le faites
                pas déjà. Cela vous permettra d'ajuster votre insuline en
                fonction de votre apport alimentaire, vous donnera plus de
                flexibilité et vous aidera à contrôler votre glycémie après
                avoir mangé.
                {"\n"} - Choisissez des huiles non saturées (comme les huiles
                d'olive, de canola) et des noix.
                {"\n"} - Choisissez des protéines animales plus maigres
                (fromages faibles en gras, viandes maigres, etc.). Essayez de
                manger plus de protéines végétales ou végétales (comme le soja,
                les pois chiches, les lentilles, etc.).
                {"\n"} - Le style d'alimentation sain pour tous les canadiens,
                ainsi que pour les personnes atteintes de diabète, est parfois
                appelé régime méditerranéen, régime DASH ou régime végétarien.
                Tous les aliments de ces habitudes alimentaires sont riches en
                nombreux éléments protecteurs qui aident à gérer le diabète et à
                protéger notre cœur et nos vaisseaux sanguins.
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.title}>
                Tout ce que vous vouliez savoir sur les édulcorants mais que
                vous aviez peur de demander!
              </Text>
              <Text style={styles.text}>
                Les édulcorants nutritifs contiennent des calories ou de
                l'énergie et sont convertis en glucose dans votre corps. Tous
                les édulcorants disponibles ont été approuvés par Santé Canada.
                {"\n"} - Sucres (se terminant par «ose»): saccharose (sucre
                blanc, cassonade, miel, sirop), dextrose (comprimés de glucose),
                lactose (dans le lait et le yaourt), fructose (dans les fruits
                et certains légumes)
                {"\n"} - Sucres alcoolisés: sorbitol, lactilol, xylitol. La
                moitié d'entre eux sont convertis en glucose dans votre corps.
                On les trouve souvent dans de nombreux bonbons «diététiques»,
                chocolats et «aliments sans sucre». Ce sont des laxatifs
                puissants et doivent être pris en très petites quantités!
                {"\n\n"}Les édulcorants non nutritifs ne sont pas absorbés par
                le système digestif ou sont très concentrés et sont nécessaires
                en si petites quantités qu'ils n'augmentent pas le glucose.
                {"\n"} - Acésulfame potassique (aceK): non disponible pour un
                usage personnel. Utilisé dans l'industrie comme «édulcorant
                synergique» pour améliorer les édulcorants d'autres édulcorants
                non nutritifs,
                {"\n"} - Aspartame aka Equal® présent dans la gomme sans sucre,
                {"\n"} - Sucralose (le seul «ose» qui n'augmente pas le
                glucose!) aka Splenda®: trouvé dans les aliments transformés et
                comme substitut du sucre en vrac ou en paquets.
                {"\n"} - Saccharine / cyclamates - les édulcorants plus anciens
                ne peuvent pas être utilisés dans la transformation des aliments
                en Amérique du Nord. «Sugar Twin» ® ou Sweet ‘n Low® Ne pas
                utiliser pendant la grossesse
                {"\n"} - Stevia (glycosides de stéviol)
                {"\n"} - Neotame: plus récent
                {"\n"} - Thaumatine
                {"\n"} - Extrait de fruit de moine
                {"\n\n"}Il n'y a aucune raison d'éviter les édulcorants comme le
                sucre. Ils ont besoin d'insuline, et il est recommandé à chacun
                de manger moins de sucre - diabète ou non!
                {"\n"}Les substituts du sucre et les aliments qui en contiennent
                ne sont pas nécessaires pour les personnes atteintes de DT1.
                Sachez que certains peuvent augmenter votre glycémie.
                {"\n"}Sachez ce que vous mangez et buvez!
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.title}>
                Liens utiles si vous ne comptez pas les glucides et souhaitez en
                savoir plus
              </Text>
              <Text
                style={styles.text}
                onPress={() => {
                  WebBrowser.openBrowserAsync(
                    "https://diabetes.ca/DiabetesCanadaWebsite/media/Managing-My-Diabetes/Tools%20and%20Resources/basic-carbohydrate-counting.pdf?ext=.pdf"
                  );
                }}
              >
                https://diabetes.ca/DiabetesCanadaWebsite/media/Managing-My-Diabetes/Tools%20and%20Resources/basic-carbohydrate-counting.pdf?ext=.pdf
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.title}>
                Liens utiles si vous utilisez 15 grammes de choix / portions /
                échanges de glucides
              </Text>
              <Text
                style={styles.text}
                onPress={() => {
                  WebBrowser.openBrowserAsync(
                    "https://www.diabete.qc.ca/wp-content/uploads/2014/08/Guide-dalimentation-anglais-2.pdf"
                  );
                }}
              >
                https://www.diabete.qc.ca/wp-content/uploads/2014/08/Guide-dalimentation-anglais-2.pdf
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.title}>
                Conseils et liens utiles si vous comptez des grammes de glucides
              </Text>
              <Text style={styles.text}>
                Conseils de lecture d'étiquettes
                {"\n"} - N'oubliez pas de vérifier la taille de vos portions. Il
                peut être différent de la portion sur l'étiquette
                {"\n"} - Les grammes totaux de glucides sont indiqués en
                premier. Cela comprend les amidons, les sucres et les fibres.
                Les amidons ne sont pas répertoriés séparément
                {"\n"} - N'oubliez pas de soustraire les fibres du total des
                glucides
                {"\n"} - S'il y a des sucres d'alcool: n'oubliez pas de
                soustraire la moitié des grammes
                {"\n\n"}Mesurer
                {"\n"} - Utilisez une tasse à mesurer pour les liquides ou les
                petits aliments de forme uniforme comme le riz
                {"\n"} - Une balance numérique est préférable pour peser des
                aliments de forme irrégulière tels que les pâtes et les fruits
                en coupe
                {"\n"} - Lorsque vous utilisez une balance, pesez toujours les
                aliments dans l'état où vous les mangerez (c.-à-d. cuits)
                {"\n"} - Les étiquettes de valeur nutritive des produits
                céréaliers (p. Ex. Pâtes, riz, etc.) fournissent des
                informations sur les aliments non cuits.
                {"\n"} - L’utilisation d’un tableau des «facteurs glucides» ou
                du pourcentage de glucides par rapport au poids d’un aliment
                peut vous aider à être plus précis
                {"\n"} - La plupart des produits de boulangerie (baguette,
                bagels, pita, etc.) contiennent 50% de glucides. La moitié du
                poids en grammes est généralement constituée de glucides.
                {"\n"} - Peser et mesurer les aliments à la maison peut vous
                aider à mieux estimer les glucides contenus dans les aliments
                lorsque vous n'êtes pas à la maison.
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.title}>
                Applications utiles de comptage de glucides
              </Text>
              <Text style={styles.text}>
                Il existe de nombreuses applications de nutrition disponibles.
                La plupart se concentrent sur les personnes qui suivent un
                régime pour perdre du poids. Certains sont particulièrement
                utiles pour les personnes atteintes de DT1, et certains ont
                également un site Web. [SVP notez que ce tableau inclus des
                applis anglophones]
              </Text>
              <View style={styles.appTable}>
                <View style={styles.appRow}>
                  <View style={styles.appColumn}>
                    <Text>Appli</Text>
                  </View>
                  <View style={styles.phoneColumn}>
                    <Text>IOS{"\n"}(Apple)</Text>
                  </View>
                  <View style={styles.phoneColumn}>
                    <Text>Android</Text>
                  </View>
                  <View style={styles.commentsColumn}>
                    <Text>Commentaires</Text>
                  </View>
                </View>
                <View style={styles.appRow}>
                  <View style={styles.appColumn}>
                    <Text>Carbs {"&"} Cals</Text>
                  </View>
                  <View style={styles.phoneColumn}>
                    <Text>X</Text>
                  </View>
                  <View style={styles.phoneColumn}>
                    <Text>X</Text>
                  </View>
                  <View style={styles.commentsColumn}>
                    <Text>
                      $; Basé sur la photo. Bases de données multiples (USA,
                      Royaume-Uni, Autriche, Allemagne, Italie, Portugal); Base
                      de données extensible
                    </Text>
                  </View>
                </View>
                <View style={styles.appRow}>
                  <View style={styles.appColumn}>
                    <Text
                      onPress={() => {
                        WebBrowser.openBrowserAsync(
                          "https://www.carbfactors.com/browse"
                        );
                      }}
                    >
                      Carb Factors{"\n"}https://www.carbfactors.com/browse
                    </Text>
                  </View>
                  <View style={styles.phoneColumn}>
                    <Text>X</Text>
                  </View>
                  <View style={styles.phoneColumn}>
                    <Text> </Text>
                  </View>
                  <View style={styles.commentsColumn}>
                    <Text>
                      Pourcentage de glucides dans un aliment. Glucides = poids
                      de l'aliment (cuit) X Facteur glucidique
                    </Text>
                  </View>
                </View>
                <View style={styles.appRow}>
                  <View style={styles.appColumn}>
                    <Text
                      onPress={() => {
                        WebBrowser.openBrowserAsync(
                          "https://www.calorieking.com/gb/en/"
                        );
                      }}
                    >
                      Calorie King{"\n"}https://www.calorieking.com/gb/en/
                    </Text>
                  </View>
                  <View style={styles.phoneColumn}>
                    <Text>X</Text>
                  </View>
                  <View style={styles.phoneColumn}>
                    <Text>X</Text>
                  </View>
                  <View style={styles.commentsColumn}>
                    <Text>
                      Recherchez les aliments par catégorie, marque, chaîne de
                      restauration rapide, à l'aide d'un lecteur de code à
                      barres
                    </Text>
                  </View>
                </View>
                <View style={styles.appRow}>
                  <View style={styles.appColumn}>
                    <Text
                      onPress={() => {
                        WebBrowser.openBrowserAsync(
                          "https://www.myfitnesspal.com/food/search"
                        );
                      }}
                    >
                      My Fitness Pal{"\n"}(E, Fr + autres){"\n"}
                      https://www.myfitnesspal.com/food/search
                    </Text>
                  </View>
                  <View style={styles.phoneColumn}>
                    <Text>X</Text>
                  </View>
                  <View style={styles.phoneColumn}>
                    <Text>X</Text>
                  </View>
                  <View style={styles.commentsColumn}>
                    <Text>Comprend un analyseur de recettes</Text>
                  </View>
                </View>
                <View style={styles.appRow}>
                  <View style={styles.appColumn}>
                    <Text>Glycemeal{"\n"}(E, Fr)</Text>
                  </View>
                  <View style={styles.phoneColumn}>
                    <Text>X</Text>
                  </View>
                  <View style={styles.phoneColumn}>
                    <Text> </Text>
                  </View>
                  <View style={styles.commentsColumn}>
                    <Text>
                      Les listes d'aliments peuvent être recherchées par nom
                      d'aliment ou avec un lecteur de code à barres. Les listes
                      d'aliments indiquent glucides / 100g, vous entrez le poids
                      de la portion. Peut programmer des ratios; l'application
                      calcule la dose d'insuline (pour les aliments uniquement)
                    </Text>
                  </View>
                </View>
                <View style={styles.appRow}>
                  <View style={styles.appColumn}>
                    <Text>Foodvisor{"\n"}(E, Fr)</Text>
                  </View>
                  <View style={styles.phoneColumn}>
                    <Text>X</Text>
                  </View>
                  <View style={styles.phoneColumn}>
                    <Text>X</Text>
                  </View>
                  <View style={styles.commentsColumn}>
                    <Text>
                      Vous aide à calculer votre assiette lorsque vous prenez
                      une photo.
                    </Text>
                  </View>
                </View>
                <View style={styles.appRow}>
                  <View style={styles.appColumn}>
                    <Text>Under My Fork</Text>
                  </View>
                  <View style={styles.phoneColumn}>
                    <Text>X</Text>
                  </View>
                  <View style={styles.phoneColumn}>
                    <Text> </Text>
                  </View>
                  <View style={styles.commentsColumn}>
                    <Text>
                      Vous permet de suivre les repas et d'établir un lien avec
                      vos données de capteur. Ne fournit pas d'informations
                      nutritionnelles, mais peut aider à rechercher des modèles
                      avec des aliments problématiques.
                    </Text>
                  </View>
                </View>
                <View style={styles.appRow}>
                  <View style={styles.appColumn}>
                    <Text>Fooducate</Text>
                  </View>
                  <View style={styles.phoneColumn}>
                    <Text>X</Text>
                  </View>
                  <View style={styles.phoneColumn}>
                    <Text>X</Text>
                  </View>
                  <View style={styles.commentsColumn}>
                    <Text>
                      Listes d'aliments recherchées par nourriture / catégorie
                      ou lecteur de code à barres. Peut prérégler les nutriments
                      que vous voulez (par exemple, glucides et fibres).
                      Recettes.
                    </Text>
                  </View>
                </View>
                <View style={styles.appRow}>
                  <View style={styles.appColumn}>
                    <Text>Figwee Visual Food Diary</Text>
                  </View>
                  <View style={styles.phoneColumn}>
                    <Text>X</Text>
                  </View>
                  <View style={styles.phoneColumn}>
                    <Text>X</Text>
                  </View>
                  <View style={styles.commentsColumn}>
                    <Text>
                      Basé sur la photo. Curseur fléché pour augmenter ou
                      réduire la taille des portions.
                    </Text>
                  </View>
                </View>
                <View style={styles.appRow}>
                  <View style={styles.appColumn}>
                    <Text
                      onPress={() => {
                        WebBrowser.openBrowserAsync(
                          "https://www.sparkpeople.com/"
                        );
                      }}
                    >
                      Sparkpeople{"\n"}https://www.sparkpeople.com/
                    </Text>
                  </View>
                  <View style={styles.phoneColumn}>
                    <Text>X</Text>
                  </View>
                  <View style={styles.phoneColumn}>
                    <Text>X</Text>
                  </View>
                  <View style={styles.commentsColumn}>
                    <Text>Comprend un calculateur de recettes</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.title}>Les autres ressources en ligne</Text>
              <Text
                style={styles.link}
                onPress={() => {
                  WebBrowser.openBrowserAsync(
                    "https://diabetes.ca/DiabetesCanadaWebsite/media/Managing-My-Diabetes/Tools%20and%20Resources/basic-carbohydrate-counting.pdf?ext=.pdf"
                  );
                }}
              >
                -
                https://diabetes.ca/DiabetesCanadaWebsite/media/Managing-My-Diabetes/Tools%20and%20Resources/basic-carbohydrate-counting.pdf?ext=.pdf
              </Text>
              <Text
                style={styles.link}
                onPress={() => {
                  WebBrowser.openBrowserAsync(
                    "https://diabetes.ca/DiabetesCanadaWebsite/media/Managing-My-Diabetes/Tools%20and%20Resources/handy-portion-guide.pdf?ext=.pdf"
                  );
                }}
              >
                -
                https://diabetes.ca/DiabetesCanadaWebsite/media/Managing-My-Diabetes/Tools%20and%20Resources/handy-portion-guide.pdf?ext=.pdf
              </Text>
              <Text
                style={styles.link}
                onPress={() => {
                  WebBrowser.openBrowserAsync(
                    "https://diabetes.ca/managing-my-diabetes/tools---resources/the-glycemic-index-(gi)"
                  );
                }}
              >
                -
                https://diabetes.ca/managing-my-diabetes/tools---resources/the-glycemic-index-(gi)
              </Text>
              <Text
                style={styles.link}
                onPress={() => {
                  WebBrowser.openBrowserAsync(
                    "https://www.diabete.qc.ca/wp-content/uploads/2016/03/Dq-guideresto-2018-montage-anglais5-2.pdf"
                  );
                }}
              >
                -
                https://www.diabete.qc.ca/wp-content/uploads/2016/03/Dq-guideresto-2018-montage-anglais5-2.pdf
              </Text>
              <Text
                style={styles.link}
                onPress={() => {
                  WebBrowser.openBrowserAsync(
                    "https://www.canada.ca/content/dam/hc-sc/migration/hc-sc/fn-an/alt_formats/pdf/nutrition/fiche-nutri-data/nvscf-vnqau-eng.pdf"
                  );
                }}
              >
                -
                https://www.canada.ca/content/dam/hc-sc/migration/hc-sc/fn-an/alt_formats/pdf/nutrition/fiche-nutri-data/nvscf-vnqau-eng.pdf
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.title}>Vérifier vos connaissances</Text>
              <View style={styles.quizItem}>
                <Text style={styles.text}>
                  1. Lesquel des aliments suivants ne contient pas de glucides?
                </Text>
                <Text
                  style={styles.text}
                  onPress={() => this.setState({ question1: true })}
                >
                  {"   "}a. 200 mL de jus d'orange non-sucré
                  {"\n   "}b. 125 mL pois vert
                  {"\n   "}c. 250 mL de lait de soja
                  {"\n   "}d. un bol de salade verte
                </Text>
                <Text style={this.state.question1 ? styles.text : styles.hide}>
                  Bonne réponse: d
                </Text>
              </View>
              <View style={styles.quizItem}>
                <Text style={styles.text}>
                  2. Combien de glucides contient chaque muffin?
                </Text>
                <Text style={styles.text}>
                  Nutrition Facts per muffin (120g)
                  {"\n"}Valeur nutritive par muffin (120g)
                </Text>
                <View style={styles.q2Container}>
                  <View style={styles.q2RowCalories}>
                    <Text style={styles.q2text}>Calories/calories : 370</Text>
                  </View>
                  <View style={styles.q2RowDailyValue}>
                    <Text style={styles.q2text}>
                      % Daily Value
                      {"\n"}% valeur quotidienne
                    </Text>
                  </View>
                  <View style={styles.q2Row}>
                    <Text style={styles.q2text}>Fat/ Lipids</Text>
                    <Text style={styles.q2text}>12g</Text>
                    <Text style={styles.q2text}>18%</Text>
                  </View>
                  <View style={styles.q2Row}>
                    <Text style={styles.q2subtitle}> Saturated/ Saturés</Text>
                    <Text style={styles.q2text}>2g</Text>
                    <Text style={styles.q2text}>10%</Text>
                  </View>
                  <View style={styles.q2Row}>
                    <Text style={styles.q2subtitle}> +Trans/ Trans</Text>
                    <Text style={styles.q2text}>0g</Text>
                    <Text style={styles.q2text}> </Text>
                  </View>
                  <View style={styles.q2Row}>
                    <Text style={styles.q2text}>Carbohydrates/ Glucides</Text>
                    <Text style={styles.q2text}>63g</Text>
                    <Text style={styles.q2text}>21%</Text>
                  </View>
                  <View style={styles.q2Row}>
                    <Text style={styles.q2subtitle}> Fibre/ Fibres</Text>
                    <Text style={styles.q2text}>4g</Text>
                    <Text style={styles.q2text}>16%</Text>
                  </View>
                  <View style={styles.q2Row}>
                    <Text style={styles.q2subtitle}> Sugar/ Sucres</Text>
                    <Text style={styles.q2text}>36g</Text>
                    <Text style={styles.q2text}> </Text>
                  </View>
                  <View style={styles.q2Row}>
                    <Text style={styles.q2text}>Protein/ Protéines</Text>
                    <Text style={styles.q2text}>5g</Text>
                    <Text style={styles.q2text}> </Text>
                  </View>
                  <View style={styles.q2Row}>
                    <Text style={styles.q2text}>Cholesterol / Cholésterol</Text>
                    <Text style={styles.q2text}>20mg</Text>
                    <Text style={styles.q2text}>7%</Text>
                  </View>
                  <View style={styles.q2Row}>
                    <Text style={styles.q2text}>Sodium</Text>
                    <Text style={styles.q2text}>370mg</Text>
                    <Text style={styles.q2text}>15%</Text>
                  </View>
                </View>
                <Text
                  style={styles.text}
                  onPress={() => this.setState({ question2: true })}
                >
                  {"   "}a. 63g
                  {"\n   "}b. 36g
                  {"\n   "}c. 59g
                  {"\n   "}d. 99g
                </Text>
                <Text style={this.state.question2 ? styles.text : styles.hide}>
                  Bonne réponse: c
                </Text>
              </View>
              <View style={styles.quizItem}>
                <Text style={styles.text}>
                  3. Vous achetez un sac de 6 bagels. Le sac est 500 grammes de
                  glucides. Il y a combien de glucides en chaque muffin?
                </Text>
                <Text
                  style={styles.text}
                  onPress={() => this.setState({ question3: true })}
                >
                  {"   "}a. 41g
                  {"\n   "}b. 30g
                  {"\n   "}c. 50g
                  {"\n   "}d. 20g
                </Text>
                <Text style={this.state.question3 ? styles.text : styles.hide}>
                  Bonne réponse: a
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>
      );
    }
  }
}

export default FoodAndYou;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.background,
  },
  fieldsContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  hide: {
    display: "none",
  },
  link: {
    fontWeight: "500",
    lineHeight: 22,
    marginBottom: 8,
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
  },
  text: {
    fontWeight: "500",
    lineHeight: 22,
    marginBottom: 3,
  },
  appTable: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "inherit",
  },
  appRow: {
    width: "100%",
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "space-between",
    // backgroundColor: "inherit",
  },
  appColumn: {
    fontWeight: "500",
    lineHeight: 22,
    flexBasis: "31%",
    textAlign: "center",
    borderColor: colors.black,
    borderWidth: 1,
  },
  commentsColumn: {
    fontWeight: "500",
    lineHeight: 22,
    flexBasis: "35%",
    textAlign: "center",
    borderColor: colors.black,
    borderWidth: 1,
  },
  phoneColumn: {
    fontWeight: "500",
    lineHeight: 22,
    flexBasis: "17%",
    textAlign: "center",
    borderColor: colors.black,
    borderWidth: 1,
  },
  quizItem: {
    margin: 5,
    backgroundColor: colors.secondary,
  },
  q2Container: {
    height: 450,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "inherit",
  },
  q2Row: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // backgroundColor: "inherit",
    borderColor: colors.black,
    borderBottomWidth: 1,
    borderTopWidth: 1,
  },
  q2RowCalories: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    // backgroundColor: "inherit",
    borderColor: colors.black,
    borderBottomWidth: 1,
    borderTopWidth: 2,
  },
  q2RowDailyValue: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    // backgroundColor: "inherit",
    borderColor: colors.black,
    borderBottomWidth: 1,
    borderTopWidth: 1,
  },
  q2text: {
    fontWeight: "500",
    lineHeight: 22,
    marginBottom: 3,
    flexBasis: "33%",
    textAlign: "center",
  },
  q2subtitle: {
    fontSize: 10,
    fontWeight: "500",
    lineHeight: 22,
    marginBottom: 3,
    flexBasis: "33%",
    textAlign: "center",
  },
});
