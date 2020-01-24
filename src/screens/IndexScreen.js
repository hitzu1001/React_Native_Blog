import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { Context } from "../context/BlogContext";
import { FontAwesome } from '@expo/vector-icons'
import { TouchableOpacity } from "react-native-gesture-handler";

const IndexScreen = ({ navigation }) => {
  // const blogPosts = useContext(BlogContext);
  const { state, deleteBlogPost } = useContext(Context);
  return (
    <View>
      <Text>This is my IndexScreen.</Text>
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('Show', { id: item.id })}
            >
              <View style={styles.row}>
                <Text style={styles.title}>{item.title} - {item.id}</Text>
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                  <FontAwesome style={styles.deleteIcon} name='trash' />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>

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
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: 'lightgray',
  },
  title: {
    fontSize: 18,
  },
  deleteIcon: {
    fontSize: 24,
  },
  addIcon: {
    fontSize: 24,
    marginRight: 20,
  },
});

export default IndexScreen;
