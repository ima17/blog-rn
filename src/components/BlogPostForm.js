import React, { useState } from "react";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  Button,
  ScrollView,
} from "react-native";

const BlogPostForm = ({
  onSubmit,
  initialValues = {
    title: "",
    content: "",
  },
}) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);

  return (
    <ScrollView automaticallyAdjustKeyboardInsets={true}>
      <View style={styles.conatainer}>
        <Text style={styles.label}>Enter Title:</Text>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={(text) => setTitle(text)}
        />
        <Text style={styles.label}>Enter Content:</Text>
        <TextInput
          multiline={true}
          numberOfLines={2}
          style={styles.input}
          value={content}
          onChangeText={(text) => setContent(text)}
        />
        <Button
          title="Save blog post"
          onPress={() => {
            onSubmit(title, content);
          }}
        />
      </View>
    </ScrollView>
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

export default BlogPostForm;
