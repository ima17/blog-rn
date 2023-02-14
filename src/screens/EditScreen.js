import React, { useContext, useState } from "react";
import { View, StyleSheet, Text,TextInput,Button} from "react-native";
import { Context as BlogContext } from "../contexts/BlogContext";

const EditScreen = ({ navigation, route }) => {
  const { state } = useContext(BlogContext);

  const blogPost = state.find((blogPost) => blogPost.id === route.params.id);

  const [title, setTitle] = useState(blogPost.title);
  const [content, setContent] = useState(blogPost.content);

  console.log(blogPost);
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Edit Title:</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.label}>Edit Content:</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={(text) => setContent(text)}
      />
      <Button
        title="Save"
        // onPress={() =>
        //   addBlogPost(title, content, () => {
        //     navigation.navigate("Index");
        //   })
        // }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    padding: 5,
    fontSize: 18,
    marginBottom: 15,
  },
  label: {
    marginBottom: 5,
    fontSize: 20,
  },
});

export default EditScreen;
