import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import { Context as BlogContext } from "../contexts/BlogContext";

const IndexScreen = () => {
  const { state, addBlogPost } = useContext(BlogContext);

  return (
    <View style={style.container}>
      <Text>Index Screen</Text>
      <FlatList
        data={state}
        keyExtractor={(blogPosts) => blogPosts.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
      <Button title="Add" onPress={addBlogPost} />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    margin: 20,
  },
});

export default IndexScreen;
