const BlogList = ({blogs,title,deleteHandle}) => {
    // const blogs = props.blogs;
    // const title = props.title;
    return ( 
        <>
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <button className="deleteBtn" style={
                        {
                            display:"block",
                            backgroundColor:"#f1356d",
                            borderRadius:"8px",
                            color:"#fafafa",
                            marginTop:"10px",
                            padding:"10px",
                            border:"hidden"
                        }
                    }
                    onClick={()=> deleteHandle(blog.id)}
                    >Delete</button>
                </div>
            ))}
        </>
     );
}
 
export default BlogList;