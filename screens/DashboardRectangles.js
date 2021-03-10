import React from "react";
import {
  StyleSheet,
  StatusBar,
  Text,
  View,
  Image,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const width = Dimensions.get("window").width;

function DashboardRectangles(props) {
  return (
    <View
      style={{
        backgroundColor: props.color,
        height: 200,
        borderRadius: 5,
        marginTop: 20,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 30,
        }}
      >
        <Text style={{ color: "white", fontFamily: "Trebuchet", fontSize: 30 }}>
          {props.heading} {props.icon == "credit-card" ? "Naira" : null}
        </Text>
        <FontAwesome5 name={props.icon} size={24} color="#9DC828" />
      </View>
      <Text
        style={{
          color: "white",
          fontFamily: "Trebuchet",
          fontSize: 14,
          paddingLeft: 30,
          marginTop: 30,
        }}
      >
       {props.sub}
      </Text>
    </View>
  );
}

export default DashboardRectangles;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  kContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#000",
  },

  textInput: {
    color: "#575757",
    fontSize: 14,
    paddingLeft: 25,
  },
  itemStyle: {
    borderColor: "#101010",
    backgroundColor: "#101010",
    marginLeft: 20,
    marginRight: 20,

    borderRadius: 5,
  },
  tinyText: {
    fontSize: 12,
    marginTop: 17,
  },

  registerButton: {
    backgroundColor: "#000",

    height: 60,
    width: width - 40,
    marginTop: 15,
    paddingLeft: 30,
    justifyContent: "space-between",
    paddingRight: 30,
  },
  loginButton: {
    backgroundColor: "#1a1a1a",
    height: 60,
    marginTop: 15,
    width: width - 40,
    paddingLeft: 30,
    justifyContent: "space-between",
    paddingRight: 30,
    marginLeft: 20,
    marginRight: 20,
  },
  buttonText: {
    color: "white",
    fontFamily: "Trebuchet",
  },
  errorMessage: {
    color: "#F46270",
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 10,
  },
  loginInfo: {
    color: "#575757",
    fontFamily: "Trebuchet",
    marginLeft: 20,
    marginTop: 20,
  },
});
