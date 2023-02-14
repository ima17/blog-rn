import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Context as BlogContext } from "../contexts/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const CreateScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(BlogContext);

  return (
    <View>
      <BlogPostForm
        onSubmit={(title, content) => {
          addBlogPost(title, content, () => {
            navigation.navigate("Index");
          });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default CreateScreen;
