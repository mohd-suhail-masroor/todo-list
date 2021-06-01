import './App.css';
import {BrowserRouter as Router ,Route,Switch} from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Create from './components/Create'


function App() {
  return (
    <div className="App">
      <Router>
         <Header></Header>
         <hr />
         <Switch>
            <Route exact path='/'>
              <h3 className="heading">Tasks</h3>
              <Home></Home>
            </Route>
            <Route exact path='/Create'>
              <h3 className="heading">add task</h3>
              <Create></Create>
            </Route>
         </Switch>
      </Router>
        

    </div>
  );
}

export default App;
