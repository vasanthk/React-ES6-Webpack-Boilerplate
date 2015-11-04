import * as React from 'react';
import {render} from 'react-dom';

type State = {};
export default class Subcomp extends React.Component<{}, State> {
  constructor() {
    super();
    console.log('in subcomponent');
  };
  render() {
    return (
      <p>I'm a sub component!</p>
    );
  }
}
