import { Link } from "react-router-dom";
import "../Body/body.css"

const ListOfPosts = (props) =>{
    return(<div className="body">
        
        <ul>
           
            {props.posts.map((post,i)=>{
                return(
                    <div className="DesignPosts">
                  
                    <Link className="link" key={i} to={{
                        pathname:`/post/${post.id}`,
                        PostInfo:{...post}
                    }}>
               <li> Post: {post.id}</li>      
<li > {post.title} </li>
</Link>

</div>
                )

            })}
        </ul>
        
    </div>)
}
export default ListOfPosts;