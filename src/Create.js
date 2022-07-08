import { useState } from "react";
const Create = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('mario');
    const [body, setBody] = useState('');
    return ( 
        <div className="create">
            <h2>Create a new blog</h2>
            <form>
                <label>Title: </label>
                <input type="text" 
                       value={title}
                       required
                       onChange={(e) => setTitle(e.target.value)} 
                />
                <label>Body: </label>
                 <textarea
                 required
                 value={body}
                 onChange={(e) => setBody(e.target.value)}>
                 </textarea>
                 <label>Author: </label>
                 <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option value="mario">Mario</option>
                    <option value="yoshi">Yoshi</option>
                 </select>
                 <button>submit</button>
            </form>
            <p>{title}</p>
            <p>{body}</p>
            <p>{author}</p>
        </div>
     );
}
 
export default Create;
