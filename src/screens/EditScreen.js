import React, { useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Context as BlogContext } from "../contexts/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const EditScreen = ({ navigation, route }) => {
  const { state, editBlogPost } = useContext(BlogContext);

  const id = route.params.id;
  const blogPost = state.find((blogPost) => blogPost.id === id);

  return (
    <View>
      <BlogPostForm
        initialValues={{ title: blogPost.title, content: blogPost.content }}
        onSubmit={(title, content) => {
          editBlogPost(id, title, content, () => {
            navigation.pop();
          });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default EditScreen;
