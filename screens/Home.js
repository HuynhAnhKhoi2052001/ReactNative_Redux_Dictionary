import { StyleSheet, Text, View, TextInput, Button, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { set, add } from "../redux/action";
import store from "../redux/store";

const Home = () => {
  // const user = route.params;
  const [english, setEnglish] = useState("");
  const [vietnamese, setVietnamese] = useState("");
  const dispatch = useDispatch();
  const[data,setData]=useState(store.getState().dictionary)
  console.log(data);
  //handle add
  const handleAdd = () => {
    const payload = {
      english: { english: english },
      vietnamese: { vietnamese: vietnamese },
    };
    dispatch(add(payload));
    handlePut(store.getState().dictionary);
    setData(store.getState().dictionary)
  };
  const handlePut = (user) => {
    fetch(`https://6565a856eb8bb4b70ef20ec3.mockapi.io/user/${user.id}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        english: user.english,
        vietnamese: user.vietnamese,
      }),
    })
      .then((respone) => respone.json())
      .then(() => {
        setEnglish("");
        setVietnamese("");
      });
  };

  return (
    <View>
      <Text>Dictionary</Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ padding: 20 }}>English</Text>
        <TextInput
          placeholder="english"
          placeholderTextColor="grey"
          value={english}
          onChangeText={(text) => {
            setEnglish(text);
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
        <Text style={{ padding: 20 }}>Vietnamese</Text>
        <TextInput
          placeholder="vietnamese"
          placeholderTextColor="grey"
          value={vietnamese}
          onChangeText={(text) => {
            setVietnamese(text);
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
        <Button title="ADD" onPress={handleAdd}></Button>
      </View>
      <View style={{height:'50%'}}>
        <FlatList
        data={data.english}
        renderItem={({item,index})=>(
          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={{width:'45%',paddingLeft:'20%'}}>{item.english ||item.EN}</Text>
            <Text style={{width:'10%'}}>:</Text>
            <Text style={{width:'45%'}}>{data.vietnamese[index].vietnamese||data.vietnamese[index].VN}</Text>
          </View>
        )}>
        </FlatList>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
