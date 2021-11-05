import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const Homepage = ({ navigation }) => {

  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
   
      <Image
        source={require("../../Bike/assets/bike.jpg")}
        style={{
          width: 200,
          height: 200,
          borderRadius: 15,
          marginBottom: 50,
          marginTop: -4,  
          transform: [{ rotate: "30deg" }],
        }}
        alt="Homepage logo"
      />
  
      <Text style={{ fontSize: 24 }}> Welcome to </Text>
      <Text style={{ fontSize: 28, fontWeight: "bold" }}>Power Bike Shop</Text>
      <View style={{ marginTop: 20 }}>
        <TouchableOpacity
          style={{
            backgroundColor: "rgba(52,52,52,0.1)",
            borderRadius: 10,
            padding: 13,
            paddingHorizontal: 60,
            flexDirection: "row",
          }}
          onPress={() => navigation.replace("Shop")}
        >
          <Image
            source={require("../../Bike/assets/google.png")}
            style={{ width: 19, height: 18, marginTop: 3, marginHorizontal: 5 }}
          />
          <Text style={{ fontSize: 17 }}> Login with Gmail </Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 12 }}>
        <TouchableOpacity
          style={{
            backgroundColor: "black",
            borderRadius: 10,
            padding: 14,
            paddingHorizontal: 67,
            flexDirection: "row",
          }}
          onPress={() => navigation.replace("Shop")}
        >
          <Icon name="apple" color="white" size={23} />
          <Text style={{ fontSize: 17, color: "white" }}> Login with Apple </Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row", marginTop: 14 }}>
        <Text style={{ color: "#ACB0BD", fontSize: 15, fontWeight: "bold" }}>
          Not a member?{" "}
        </Text>
        <TouchableOpacity>
          <Text style={{ color: "#FD8250", fontSize: 14, fontWeight: "bold" }}>
            Sign up{" "}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Homepage;
