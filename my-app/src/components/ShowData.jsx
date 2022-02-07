import { Link } from "react-router-dom";
import "../components/Body/body.css"
const ShowData = (props) =>{
    

    
       
        return (
            
          <div className="InfoText">
            <h1>Post and comment information about # {props.InfoPost.id}</h1>
           <div>
                <p>
              <strong>Post-ID:</strong> {props.InfoPost.id}
            </p>
              <p>
              <strong>Post-title:</strong> {props.InfoPost.title}
            </p>
               <p>
              <strong>Post-text:</strong> {props.InfoPost.body}
            </p>
            </div>
            <div>
            <p>
              <strong>Name:</strong> {props.InfoComment.name}
            </p>
            <p>
              <strong>Email:</strong> {props.InfoComment.email}
            </p>
            <p>
              <strong>Comment-Text:</strong> {props.InfoComment.body}
            </p>
            </div>
           <Link className="button" to="/">
           <button>Tillbaka till startsidan</button>
           </Link>
          
          </div>
        );
    
}
export default ShowData;