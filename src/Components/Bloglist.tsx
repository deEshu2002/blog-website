import BlogCard from "./BlogCard";

const blogList = ["hellow", "this", "is", "list", "testing"];

export default function Bloglist() {
  return (
    <div id="blog-list">
      {blogList.map((elem, idx) => {
        return <BlogCard/>;
      })}
    </div>
  );
}
