import React from "react";

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
  console.log(children);
  return <BlogContext.Provider value={5 + 7}>{children}</BlogContext.Provider>;
};

export default BlogContext;
