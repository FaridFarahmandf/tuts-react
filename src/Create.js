import { useState } from "react";
import { useHistory } from 'react-router-dom';
const Create = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('mario');
    const [body, setBody] = useState('');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory(); 

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsPending(true);
        const newBlog = {title, body, author};
        fetch('http://localhost:8000/blogs/', {
        method:'POST',
        headers:{ "Content-Type": "application/json" },
        body: JSON.stringify(newBlog)
    }).then(() => {
        setIsPending(false);
        // history.go(-1)
        history.push("/")
        })
    }
    return ( 
        <div className="create">
            <h2>Create a new blog</h2>
            <form onSubmit={handleSubmit}>
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
                 { isPending && <button disabled>adding blog...</button>}
                 { !isPending && <button>Add Blog</button>}
                 
            </form>
        </div>
     );
}
 
export default Create;
