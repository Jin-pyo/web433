import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Product from './Product';
import NotFound from './NotFound';
import {Switch,Route,Link} from 'react-router-dom';
import ClickCheck from './ClickCheck';

function App() {
  return (
    <div className="App">
      
      <Link to="/">Home</Link> | <Link to="/Product/3">Products</Link> | <Link to="/NotFound">Not</Link>

      <ClickCheck message="CLick"/>
      <Switch>
        <Route exact path='/' render={()=>(
          <Home />
        )}/>
        <Route exact path='/Product/:id' render={(props)=>(
            <Product id={props.match.params.id} />
        )}/>
        <Route render={()=>(
          <NotFound />
        )}/>
      </Switch>


    </div>
  );
}

export default App;
