
import ShowData from "../components/ShowData";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const InformationPage = (props) =>{
    const [InfoPost, setInfoPost] = useState([])
    const [InfoComment, setInfoComment] = useState([])
  const { id } = useParams();
  useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
          .then((response) => response.json())
          .then((json) => setInfoPost(json));
    }, );
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments/${id}`)
          .then((response) => response.json())
          .then((json) => setInfoComment(json));
    }, );
    
    return(<div>
        <h1>InformationPage</h1>
        <ShowData InfoPost={InfoPost}  InfoComment={InfoComment} />
        
        
    </div>)
}
export default InformationPage;