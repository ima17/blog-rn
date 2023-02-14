import React, { useContext, useState } from "react";
import { View, Text, TextInput, StyleSheet, Button,TouchableOpacity } from "react-native";
import { Context as BlogContext } from "../contexts/BlogContext";

const CreateScreen = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const { addBlogPost } = useContext(BlogContext);

  return (
    <View style={styles.conatainer}>
      <Text style={styles.label}>Enter Title:</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.label}>Enter Content:</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={(text) => setContent(text)}
      />
      <Button
        title="Add blog post"
        onPress={() =>
          addBlogPost(title, content, () => {
            navigation.navigate("Index");
          })
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  conatainer: {
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

export default CreateScreen;
