import { Link } from "react-router-dom";

const ListOfPosts = (props) =>{
    return(<div>
        <ol>
            {props.posts.map((post,i)=>{
                return(
                    <Link key={i} to={{
                        pathname:`/post/${post.id}`,
                        PostInfo:{...post}
                    }}>
<li >{post.title}</li>
</Link>
                )

            })}
        </ol>
        
    </div>)
}
export default ListOfPosts;