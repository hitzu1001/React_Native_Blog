import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const BlogPostForm = ({ onSubmit, initialValues }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);

  return (
    <View>
      <Text style={styles.lable}>Enter Title</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={title => setTitle(title)}
      />
      <Text style={styles.lable}>Enter Content</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={content => setContent(content)}
      />
      <Button
        title='Save Blog Post'
        onPress={() => onSubmit(title, content)}
      />
    </View>
  );
};

BlogPostForm.defaultProps = {
  initialValues: {
    title: '',
    content: '',
  }
};

const styles = StyleSheet.create({
  lable: {
    fontSize: 20,
    marginHorizontal: 30,
    marginTop: 30,
    marginBottom: 10,
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    padding: 5,
    marginHorizontal: 30,
  },
});

export default BlogPostForm;
