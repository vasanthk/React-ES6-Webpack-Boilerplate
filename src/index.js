const React                                   = require('react')
const { render }                              = require('react-dom')
const { Router, Route, browserHistory } = require('react-router')
const App                                     = require('./components/App.react')
const About = require('./components/About.react')

render(
  <Router history={browserHistory}>
    <Route path='/' component={App}/>
    <Route path='about' component={About}/>
  </Router>,
  document.getElementById('root')
)
