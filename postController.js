const posts = [
  { id: 1, title: "Post 1", body: "This is post 1" },
  { id: 2, title: "Post 2", body: "This is post 2" },
  { id: 3, title: "Post 3", body: "This is post 3" },
  { id: 4, title: "Post 4", body: "This is post 4" },
  { id: 5, title: "Post 5", body: "This is post 5" },
  { id: 6, title: "Post 6", body: "This is post 6" },
  { id: 7, title: "Post 7", body: "This is post 7" },
  { id: 8, title: "Post 8", body: "This is post 8" },
  { id: 9, title: "Post 9", body: "This is post 9" },
  { id: 10, title: "Post 10", body: "This is post 10" },
];

const getPosts = () => posts;

export const getPostLength = () => posts.length;

export default getPosts;
