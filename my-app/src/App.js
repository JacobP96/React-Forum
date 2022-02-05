import './App.css';
import HomePage from "./page/HomePage"
import InformationPage from './page/InformationPage';
import {Switch,Route} from "react-router-dom"
import {useEffect,useState} from "react"
function App() {
  const [posts,setPosts] = useState([])
 
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(json => setPosts(json))
  },[])
  
  return (
    <div className="App">
      <Switch>
        <Route exact
          path="/"
          render={(props) => <HomePage posts={posts}  {...props} />}/>
          <Route
          path="/post/:id"
          render={(props) => <InformationPage {...props} />}/>
      </Switch>
    </div>
  );
}

export default App;
