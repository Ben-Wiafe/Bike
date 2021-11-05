import React, {useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Alert,
  FlatList,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const Data = [
  "All",
  "Roadbike",
  "Mountain",
  "Urban",
  "Desert",
  "Snow",
  "Rainy",
  "Groove",
];

const categories = () => {

  const [images, setimages] = useState([
    require("../assets/b1.jpg"),
    require("../assets/b4.jpg"),
    require("../assets/b2.jpg"),
    require("../assets/b1.jpg"),
    require("../assets/b4.jpg"),
    require("../assets/b2.jpg"),
    require("../assets/b1.jpg"),
    require("../assets/b4.jpg"),
    require("../assets/b2.jpg"),
    require("../assets/b1.jpg"),
    require("../assets/b4.jpg"),
    require("../assets/b2.jpg"),
  ]);

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
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={{ flex: 1, backgroundColor: "white", marginTop: 20, marginBottom:100}}>
            <TouchableOpacity
              style={{
                borderWidth: 0,
                padding: 3,
                height: 45,
                borderWidthColor: "red",
                backgroundColor: "#ccded1",
                marginHorizontal: 6,
                borderRadius: 21,
              }}
            >
              <Text
                style={{
                  marginTop: 10,
                  marginHorizontal: 10,
                  marginLeft: 10,
                }}
              >
                {item}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
   
      <FlatList
        numColumns={2}
        key={2}
      
        data={images}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <TouchableOpacity style={{backgroundColor:'#faf9f7',borderRadius:18,marginLeft:20, marginBottom:10}}>
          <FontAwesome name="heart" size={20} style={{color:'#ccc7be', marginLeft:130, padding:2}}/>
          <Image
            source={item} /* Use item to set the image source */
            key={index}
            style={{
              width: 140,
              height: 160,
              borderRadius:10,
              marginHorizontal:10,
              marginBottom:1
            }}
          />
          <Text style={{color:'gray', textAlign:'center'}}>
            Moutain Bikes
          </Text>
          <Text style={{color:'orange', textAlign:'center', fontWeight:'bold'}}>
            $
            <Text style={{color:'black', textAlign:'center'}}>
            10,000
          </Text>
          </Text>
          </TouchableOpacity>
        )}
      />
     
    </View>
  );
};

export default categories;
