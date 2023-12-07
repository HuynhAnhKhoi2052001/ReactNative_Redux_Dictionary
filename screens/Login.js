import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { set } from "../redux/action";
import store from "../redux/store";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState([]);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  useEffect(() => {
    fetch("https://6565a856eb8bb4b70ef20ec3.mockapi.io/user")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
  }, []);
  var handleLogin = () => {
    const account = data.find(
      (item) => item.username === username && item.password === password
    );

    if (account) {
      dispatch(set(account));
      navigation.navigate("Home");
    } else alert("failed");
  };

  return (
    <View>
      <Text>Login</Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ padding: 20 }}>Username</Text>
        <TextInput
          placeholder="username"
          placeholderTextColor="grey"
          value={username}
          onChangeText={(text) => {
            setUsername(text);
          }}
          style={{ width: "60%", height: 50, borderWidth: 1 }}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ padding: 20 }}>Password</Text>
        <TextInput
          placeholder="password"
          placeholderTextColor="grey"
          value={password}
          secureTextEntry
          onChangeText={(text) => {
            setPassword(text);
          }}
          style={{ width: "60%", height: 50, borderWidth: 1 }}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          padding: 20,
        }}
      >
        <Button title="Log in" onPress={handleLogin}></Button>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
