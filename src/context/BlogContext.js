import createDateContext from "./createDataContext";
import uuid from 'uuid/v4';
import BlogPostForm from "../components/BlogPostForm";

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'add_blogpost':
      return [
        ...state,
        {
          id: uuid(),
          // id: Math.floor(Math.random() * 99999),
          title: action.payload.title,
          content: action.payload.content
        }
      ];
    case 'delete_blogpost':
      return state.filter(blogPost => blogPost.id !== action.payload);
    case 'edit_blogpost':
      return state.map(blogPost => {
        return blogPost.id === action.payload.id ? action.payload : blogPost;
      });
    default:
      return state;
  };
};

const addBlogPost = (dispatch) => {
  return (title, content, callback) => {
    dispatch({ type: "add_blogpost", payload: { title, content } });
    if(callback) {
      callback();
    }
  };
};

const deleteBlogPost = (dispatch) => {
  return id => {
    dispatch({ type: "delete_blogpost", payload: id });
  };
};

const editBlogPost = (dispatch) => {
  return (id, title, content, callback) => {
    dispatch({ type: "edit_blogpost", payload: { id, title, content } });
    if(callback) {
      callback();
    }
  };
};

export const { Context, Provider } = createDateContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost },
  [
    { title: 'TEST POST', content: 'TEST CONTENT', id: uuid() },
    { title: 'Happy New Year', content: 'Roger Federer 100 Wins', id: uuid() },
  ]
);