import ListOfPosts from "../components/ListOfPosts";

const HomePage = (props) =>{
    
    return(<div>
        
        <ListOfPosts posts={props.posts} />
    </div>)
}
export default HomePage;