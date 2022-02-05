import { Link } from "react-router-dom";
const ShowData = (props) =>{
    

    
       
        return (
            
          <div>
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
           <Link to="/">
           <button>Tillbaka till startsidan</button>
           </Link>
           
          </div>
        );
    
}
export default ShowData;