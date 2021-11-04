import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Alert,
  FlatList,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const Data = ["All","Roadbike", "Mountain", "Urban", "Desert", "Snow" ,"Rainy", "Groove"];

const categories = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <TouchableOpacity onPress={() => Alert.alert("Filter result")}>
          <Image
            source={require("../assets/edit.png")}
            style={{
              marginTop: 40,
              marginLeft: 20,
              width: 20,
              height: 20,
              tintColor: "gray",
            }}
          />
        </TouchableOpacity>
        <FontAwesome
          name="motorcycle"
          size={26}
          style={{
            marginTop: 38,
            position: "absolute",
            right: 180,
            color: "gray",
          }}
        />
        <FontAwesome
          name="search"
          size={22}
          style={{ marginTop: 38, marginLeft: "64%", color: "gray" }}
        />
        <FontAwesome
          name="bell"
          size={22}
          style={{ marginTop: 38, marginRight: 20, color: "gray" }}
        />
      </View>
      <Text style={{ color: "gray", padding: 30, fontSize: 14 }}>
        The World's{" "}
        <Text style={{ color: "orange", fontWeight: "bold", fontSize: 18 }}>
          Best Bike
        </Text>
      </Text>
      <Text
        style={{
          color: "black",
          marginLeft: 32,
          marginTop: -6,
          fontSize: 14,
          fontWeight: "700",
        }}
      >
        Categories
      </Text>
      <FlatList
      horizontal
        data={Data}
        renderItem={({ item }) => (
       
         <TouchableOpacity style={{backgroundColor:'white',  height:90, width:10}}>
         <Text
            style={{
              marginTop:20,
              backgroundColor:'#e1e8e3',
              marginHorizontal:5,
              textAlign:'center',
              
            }}
          >
            {item}
          </Text>
         </TouchableOpacity>
          
        
        )}
      />
    </View>
  );
};

export default categories;
