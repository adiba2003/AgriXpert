import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeScreen from "./components/HomeScreen";
import LoginScreen from "./components/LoginScreen";
import RegisterScreen from "./components/RegisterScreen";
import GuestDashboard from "./components/GuestDashboard";
import Browse from "./components/Browse";
import LearnArti from "./components/LearnArti";
import Ai from "./components/Ai";
import SoilGuide from "./components/SoilGuide";
import LearnVdo from "./components/LearnVdo";
import LearnSoil from "./components/LearnSoil";
import BuyerDashboard from "./components/BuyerDashboard";
import BuyerBrowse from "./components/BuyerBrowse";
import BuyerOrder from "./components/BuyerOrder";
import Cart from "./components/Cart";
import BuyerLearn from "./components/BuyerLearn";
import FarmerDashboard from "./components/FarmerDashboard";
import Calendar from "./components/Calendar";
import FarmerProducts from "./components/FarmerProducts";
import NewProduct from "./components/NewProduct";
import FarmerOrders from "./components/FarmerOrders";
import FAi from "./components/FAi";
import FLearn from "./components/FLearn";
import BuyerVdo from "./components/BuyerVdo";
import BuyerSoil from "./components/BuyerSoil";

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="Home"
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="GuestHome" component={GuestDashboard} />
          <Stack.Screen name="browse" component={Browse} />
          <Stack.Screen name="LearnArti" component={LearnArti} />
          <Stack.Screen name="Ai" component={Ai} />
          <Stack.Screen name="SoilGuide" component={SoilGuide} />
           <Stack.Screen name="LearnVdo" component={LearnVdo} />
            <Stack.Screen name="LearnSoil" component={LearnSoil} />
             <Stack.Screen name="BuyerDashboard" component={BuyerDashboard} />
             <Stack.Screen name="BuyerBrowse" component={BuyerBrowse} />
<Stack.Screen name="BuyerOrder" component={BuyerOrder} />
<Stack.Screen name="Cart" component={Cart} />
<Stack.Screen name="BuyerLearn" component={BuyerLearn} />
<Stack.Screen name="FarmerDashboard" component={FarmerDashboard} />
<Stack.Screen name="Calendar" component={Calendar} />
<Stack.Screen name="FarmerProducts" component={FarmerProducts} />
<Stack.Screen name="NewProduct" component={NewProduct} />
<Stack.Screen name="FarmerOrders" component={FarmerOrders} />
  <Stack.Screen name="FAi" component={FAi} />
   <Stack.Screen name="FLearn" component={FLearn} />
    <Stack.Screen name="BuyerVdo" component={BuyerVdo} />
            <Stack.Screen name="BuyerSoil" component={BuyerSoil} />


        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
