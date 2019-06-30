import React from "react";
import GithubUserInfo from './GithubUserInfo';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>GitHub Users Info App</h1>
        <div className="container">
        <GithubUserInfo username="lucievr"/>
        <GithubUserInfo username="Marijan3062"/>
        <GithubUserInfo username="podlomar"/>
        <GithubUserInfo username="polakjan"/>
        <GithubUserInfo username="emmawedekind"/>
        <GithubUserInfo username="manoloide"/>
        <GithubUserInfo username="wesbos"/>
        </div>
      </div>
    );
  }
}

export default App;
