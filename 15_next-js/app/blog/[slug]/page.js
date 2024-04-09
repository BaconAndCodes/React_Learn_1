const BlogPostPage = ({params}) => {
  return (
    <div>
      <h1>BlogPostPage</h1>
      <p>This is the BlogPostPage page</p>
      <p>{params.slug}</p>
    </div>
  );
};
export default BlogPostPage;
