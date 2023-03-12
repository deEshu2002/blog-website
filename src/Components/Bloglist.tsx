const blogList = ["hellow", "this", "is", "list", "testing"];

export default function Bloglist() {
  return (
    <div>
      {blogList.map((elem, idx) => {
        return <div key={idx}>{elem}</div>;
      })}
    </div>
  );
}
