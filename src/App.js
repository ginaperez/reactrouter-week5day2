import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Students from './components/Students/Students';
import Profile from './components/Students/Profile';
import MyStyler from './components/Students/MyStyler';
import './App.css';

function About(props) {
  return <div>{props.data}</div>
}

function Test(props) {
  return <div>Test</div>
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {};
  }

  render() {
      return ( 
      <div className="App">
        <header>
          <Link to="/">Home</Link>
          <Link to="/student">Students</Link>
          <Link to="/about">About</Link>
        </header>
        <MyStyler background="red" direction="column">
          <Test />
        </MyStyler>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" render={() => {
            return <About data="this is passed in data" />;
          }}
          />
          <Route path="/student" component={Students} />
          <Route path="/profile/:id" component={Profile} />
          <Route path="*" render={() => {
            return <div>GET THE HECK OUTTA HERE!</div>;
          }}
          />
        </Switch>
      </div>
    );
  }
};

export default App;
