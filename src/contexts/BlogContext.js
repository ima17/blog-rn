import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "add_blogpost":
      return [
        ...state,
        {
          id: `#${state.length + 1}${Math.floor(Math.random() * 999999)}`,
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    case "edit_blogpost":
      return state.map((blogPost) => {
        return blogPost.id === action.payload.id ? action.payload : blogPost;
      });
    case "delete_blogpost":
      return state.filter((blogPost) => blogPost.id !== action.payload);
    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {
  return (title, content, callback) => {
    dispatch({ type: "add_blogpost", payload: { title, content } });
    if (callback) {
      callback();
    }
  };
};

const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: "delete_blogpost", payload: id });
  };
};

const editBlogPost = (dispatch) => {
  return (id, title, content, callback) => {
    dispatch({
      type: "edit_blogpost",
      payload: { id, title, content },
    });
    if (callback) {
      callback();
    }
  };
};

export const { Provider, Context } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost },
  [
    {
      title: "What is Blogiing?",
      content:
        "Blogging has become a popular way for individuals and businesses to share their ideas, opinions, and expertise with the world. A blog is essentially an online journal or diary that can cover any topic and be updated regularly with new content. Many people enjoy blogging because it allows them to express themselves, connect with others who share similar interests, and potentially even make money. Blogging can be a great way to build a following, establish yourself as an authority in your field, and provide value to your readers. With the right approach and commitment, anyone can start a successful blog and make a positive impact in their niche.",
      id: "1",
    },
  ]
);
