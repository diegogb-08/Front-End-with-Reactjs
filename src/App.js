import './App.css';

import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Register from './containers/Register/Register';
import Footer from './components/Footer/Footer';
import Home from './containers/Home/Home';
import Header from './components/Header/Header';

const App = () => {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/register' exact component={Register}/>

        </Switch>

        <Footer/>

      </BrowserRouter>

    </div>
  );
}

export default App;
