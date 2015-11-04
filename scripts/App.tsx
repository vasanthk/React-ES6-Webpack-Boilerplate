
import * as React from 'react';
import {render} from 'react-dom';
import Subcomp from './components/subcomp';

type State = {};
export default class App extends React.Component<{}, State> {
  constructor() {
    super();
    console.log('hey');
  };
  render() {
    return (
      // Add your component markup and other subcomponent references here.
      <div>
        <h1>Hello, World!</h1>
        <Subcomp/>
      </div>
    );
  }
}

render(
 <App/>,
 document.body
);
