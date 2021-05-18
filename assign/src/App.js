import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Switch, Route} from 'react-router-dom';
import Search from './components/Search';
import Count from './components/Count'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path={"/"} component={Search} />
          <Route path={"/to-do"} component={Count} />
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
