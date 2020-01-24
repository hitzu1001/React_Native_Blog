import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const CreateScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(Context);
  return <BlogPostForm onSubmit={(title, content) => {
    addBlogPost(title, content, () => {
      // ensure the page is navigated to Index after the post has been added
      navigation.navigate('Index');
    });
  }} />
};

const styles = StyleSheet.create({

});
export default CreateScreen;

