import React, { useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Context as BlogContext } from "../contexts/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const EditScreen = ({ navigation, route }) => {
  const { state } = useContext(BlogContext);

  const blogPost = state.find((blogPost) => blogPost.id === route.params.id);

  console.log(blogPost);
  return (
    <View>
      <BlogPostForm
        initialValues={{ title: blogPost.title, content: blogPost.content }}
        onSubmit={() => {
          console.log("Test");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default EditScreen;
