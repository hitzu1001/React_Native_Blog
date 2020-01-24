import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { FontAwesome } from '@expo/vector-icons'

const IndexScreen = ({ navigation }) => {
  // const blogPosts = useContext(BlogContext);
  const { state, deleteBlogPost, getBlogPosts } = useContext(Context);

  useEffect(() => {
    getBlogPosts();

    const listener = navigation.addListener('didFocus', () => {
      getBlogPosts();
    });

    return () => {
      listener.remove();
    };
  }, []);

  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return (
            <View style={styles.row}>
              <TouchableOpacity
                style={styles.titleTO} 
                onPress={() => navigation.navigate('Show', { id: item.id })}
              >
                <Text style={styles.title}>{item.title} - {item.id}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                <FontAwesome style={styles.deleteIcon} name='trash' />
              </TouchableOpacity>
            </View>
          );
        }}
      ></FlatList>
    </View>
  );
};

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: <TouchableOpacity onPress={() => navigation.navigate('Create')}>
      <FontAwesome style={styles.addIcon} name='plus' />
    </TouchableOpacity>
  };
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: 'lightgray',
  },
  titleTO: {
    flex: 1,
    // borderWidth: 1,
    // borderColor: 'red',
  },
  title: {
    fontSize: 18,
  },
  deleteIcon: {
    fontSize: 24,
    marginLeft: 10,
    // borderWidth: 1,
    // borderColor: 'red',
  },
  addIcon: {
    fontSize: 24,
    marginRight: 20,
  },
});

export default IndexScreen;
