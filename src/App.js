import './App.css';

import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Register from './containers/Register/Register';
// import Footer from './components/Footer/Footer';
import Home from './containers/Home/Home';
import Login from './containers/Login/Login';


const App = () => {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/register' exact component={Register}/>
          <Route path='/login' exact component={Login}/>

        </Switch>

        {/* <Footer/> */}

      </BrowserRouter>

    </div>
  );
}

export default App;
