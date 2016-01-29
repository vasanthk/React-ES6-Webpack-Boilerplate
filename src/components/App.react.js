const React = require('react')
const { Link } = require('react-router')

module.exports = () => (
  <div>
   <h1>App</h1>
   <ul>
     <li><Link to="/about">About</Link></li>
     <li><Link to="/inbox">Inbox</Link></li>
   </ul>
  </div>
)
