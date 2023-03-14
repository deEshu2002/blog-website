import { trpc } from "@/utils/trpc";
import { FormEvent } from "react";

async function handleBlogSubmit(e: FormEvent<HTMLFormElement>) {
  interface formDataType {
    [key: string]: FormDataEntryValue;
  }
  const responseBody: formDataType = {
    title: "",
    author: "",
    content: "",
  };
  e.preventDefault();
  const formData = new FormData(e.currentTarget as HTMLFormElement);
  formData.forEach(
    (value, property: string) => (responseBody[property] = value)
  );
  const insertPost = await trpc.insertPost.useQuery({
    title: responseBody.title.toString(),
    author: responseBody.author.toString(),
    content: responseBody.textArea.toString(),
  });

  return insertPost.data;
}

export default function BlogEntry() {

  return (
    <form onSubmit={(e) => handleBlogSubmit(e)}>
      <h2 className="add-blog-title">Add a new blog</h2>
      <div className="form-row">
        <label htmlFor="author">Author</label>
        <input type="text" id="Author" name="Author" placeholder="Your Name" />
      </div>
      <div className="form-row">
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" />
      </div>
      <div className="form-row">
        <label htmlFor="textArea">Content</label>
        <textarea name="textArea" id="textArea" cols={40}></textarea>
      </div>
      <div className="form-row">
        <button type="reset">Reset</button>
        <button type="submit">Publish</button>
      </div>
    </form>
  );
}
