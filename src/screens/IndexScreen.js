import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import BlogContext from "../contexts/BlogContext";

const IndexScreen = () => {
  const { data, addBlogPosts } = useContext(BlogContext);

  return (
    <View style={style.container}>
      <Text>Index Screen</Text>
      <FlatList
        data={data}
        keyExtractor={(blogPosts) => blogPosts.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
      <Button title="Add" onPress={addBlogPosts}/>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    margin: 20,
  },
});

export default IndexScreen;
