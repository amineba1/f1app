import { useEffect, useState } from "react";
import BlogList from "./BlogList";
const Home = () => {

    // const[name,setName]=useState('Ben Abdallah');
    // const handlClick=(name)=>{
    //    setName(name);
    // }
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIspending] = useState(true);
    const abort = new AbortController();
    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        fetch("http://localhost:3002/blogs")
            .then(
                res => {
                    return res.json();
                }
            )
            .then(data => {
                console.log(data);
                setBlogs(data);
                setIspending(false);
            })
    }, [])


    return (
        <div className="home">
            {/* <h2>Home Page</h2>
            <p>{name}</p>
            <button onClick={()=>handlClick("amine")}>click me</button> */}
            {isPending && <div> loading...</div>}
            {blogs && <BlogList blogs={blogs} title="all Blogs" handleDelete={handleDelete} />}
            {blogs && <BlogList blogs={blogs.filter((blog) => blog.author === 'amine')} title="Amine's blogs" handleDelete={handleDelete}/>}

        </div>
    );
}

export default Home;