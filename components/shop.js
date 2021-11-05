import React from "react";
import { View, Text, Image,TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CartList from "./cart";
import categories from "./categories";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import recording from "./recording";

const Tab = createBottomTabNavigator();

const Shopping = () => {
  return (
    <Tab.Navigator
  screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        headerShown: false,
        tabBarStyle: {position:'absolute', padding:10, backgroundColor:'#e1e8e3'}
     }} 
    >
      <Tab.Screen
        name="categories"
        component={categories}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
        />
         <Tab.Screen
        name="recording"
        component={recording}
        options={{
          tabBarLabel: "",
          tabBarIcon: () => (
            <TouchableOpacity style={{backgroundColor:'white', border:1, borderRadius:25, position:'relative', bottom:25, height:50, width:50}}>
               <Image source={require("../assets/mic.png")} style={{width:20,height:20, marginLeft:15, marginTop:13}}/>
            </TouchableOpacity>
              
          ),
      
        }}
        
      />
      <Tab.Screen name="Cart" component={CartList} options = {{
        tabBarLabel: " ",
        tabBarIcon: ({color}) => (
          <MaterialCommunityIcons name ="cart" size={26} color={color}/>
        )
      }} />
    </Tab.Navigator>
  );
};

export default Shopping;
