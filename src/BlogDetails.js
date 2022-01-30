import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
const BlogDetails = () => {



    const { id } = useParams();
    const [blogDetail, setBlogDetail] = useState(null);
    const [isPending, setIspending] = useState(true);
    const abort = new AbortController();
    useEffect(() => {
        fetch("http://localhost:3002/blogs/" + id)
            .then(
                res => {
                    return res.json();
                }
            )
            .then(data => {
                console.log(data);
                setBlogDetail(data);
                setIspending(false);
            })
    }, [])


    return (
        <div className="blog-details">
            {isPending && <div>loading...</div>}
            {blogDetail && (
                <article>
                    <h2>{blogDetail.title}</h2>
                    <p>written by {blogDetail.author}</p>
                    <div>{blogDetail.body}</div>
                </article>
            )}
        </div>

    );
}

export default BlogDetails;