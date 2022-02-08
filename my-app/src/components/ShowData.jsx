import { Link } from "react-router-dom";
import "../Body/body.css"
const ShowData = (props) =>{
    

    
       
        return (
            
          <div className="InfoText">
            <h1 className="PostCommentHeader">Post and comment information about # {props.InfoPost.id}</h1>
           <div>
                <p>
              <strong className="PostCommentStrong">Post-ID:</strong> {props.InfoPost.id}
            </p>
              <p>
              <strong className="PostCommentStrong">Post-title:</strong> {props.InfoPost.title}
            </p>
               <p>
              <strong className="PostCommentStrong">Post-text:</strong> {props.InfoPost.body}
            </p>
            </div>
            <div>
            <p>
              <strong className="PostCommentStrong">Name:</strong> {props.InfoComment.name}
            </p>
            <p>
              <strong className="PostCommentStrong">E-mail:</strong> {props.InfoComment.email}
            </p>
            <p>
              <strong className="PostCommentStrong">Comment-Text:</strong> {props.InfoComment.body}
            </p>
            </div>
           <Link className="button" to="/">
           <button className="BTN">Tillbaka till startsidan</button>
           </Link>
          
          </div>
        );
    
}
export default ShowData;