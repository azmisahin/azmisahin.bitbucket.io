/*
    ████████████████████████████████████████████████████████████████████████████████████████████████████
    * Name          :   azmisahin.bitbucket.io App
    * Version       :   @package.js.version
    * Description   :   Node Base React App
    * Author        :   Azmi ŞAHİN <bilgi@azmisahin.com>
    * Licence       :   MIT
    ════════════════════════════════════════════════════════════════════════════════════════════════════
    * Package       :   No Package / Web Application
    * Repository    :   https://bitbucket.org/azmisahin/azmisahin.bitbucket.io.git
    * Homepage      :   https://azmisahin.bitbucket.io
    ████████████████████████████████████████████████████████████████████████████████████████████████████
*/

import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='root'>
      
          <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
              <a className="navbar-brand" href="#">
                
              </a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                  <ul className="navbar-nav mr-auto">
                      <li className="nav-item active">
                          <a className="nav-link" href="#">Azmi ŞAHİN <span className="sr-only">(current)</span></a>
                      </li>
                  </ul>
                  <form className="form-inline my-2 my-lg-0" action='https://bitbucket.org/azmisahin/azmisahin.bitbucket.io'>
                    
                      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Source</button>
                  </form>
              </div>
          </nav>
      
          <div className="jumbotron">
              <div className="container">
                  <h1 className="display-3"> <img className="brandLogo" src={logo} /> Optimistic Web!</h1>
                 
                  <p><a className="btn btn-primary btn-lg" href="https://bitbucket.org/azmisahin/azmisahin.bitbucket.io" role="button">Learn more &raquo;</a></p>
              </div>
          </div>
      
          <div className="container">
      
              <div className="row">
                  <div className="col-md-4">
                      <h2>NodeJS</h2>
                      <p>Node.js® is a JavaScript runtime. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world. </p>
                      <p><a className="btn btn-secondary" href="https://nodejs.org/" role="button">View details &raquo;</a></p>
                  </div>
                  <div className="col-md-4">
                      <h2>Reactjs</h2>
                      <p>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. </p>
                      <p><a className="btn btn-secondary" href="https://facebook.github.io/react/" role="button">View details &raquo;</a></p>
                  </div>
                  <div className="col-md-4">
                      <h2>Travis CI</h2>
                      <p>Test and Deploy with Confidence. Easily sync your GitHub projects with Travis CI and you'll be testing your code in minutes! .</p>
                      <img src='https://travis-ci.org/azmisahin/azmisahin.bitbucket.io.svg?branch=master' alt='CI' />
                      <p></p>
                      <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
                      
                  </div>
              </div>
              <hr/>
              <footer>
                  <p>&copy; http://azmisahin.com</p>
              </footer>
          </div>
      
      </div>
    );
  }
}

export default App;
