import { useState } from "react";
import BlogList from "./BlogList";
const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ])
    const deleteHandle = (id) => {
        let newBlogs = blogs.filter(b => b.id !== id);
        setBlogs(newBlogs);
    }

     
    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="Blogs List!" deleteHandle={deleteHandle}/>
            <BlogList blogs={blogs.filter((blog) => blog.author === "mario")} title="Mario's Blog"/>
            <BlogList blogs={blogs.filter((blog) => blog.author === "yoshi")} title="Yoshi's Blog"/>
        </div>
     );
}
 
export default Home;