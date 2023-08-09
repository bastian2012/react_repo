import React from 'react';

class Home extends React.Component{
  render() {
    return (<div>
      <h2>Welcome to Home component !!! </h2>
    </div>)
  }
} ``

export default class app extends React.Component {
  render() {

    return (<>
      <div>
        <Home/>
        <h1>Welcome to app component </h1>
    </div>
    </>)
  }
}
