import ListOfPosts from "../components/ListOfPosts";

const HomePage = (props) =>{
    
    return(<div>
        <h1>HomePage</h1>
        <ListOfPosts posts={props.posts} />
    </div>)
}
export default HomePage;