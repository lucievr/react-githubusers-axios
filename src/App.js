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
        <GithubUserInfo username="sdras"/>
        <GithubUserInfo username="aneagoie"/>
        <GithubUserInfo username="btholt"/>
        <GithubUserInfo username="SaraVieira"/>
        <GithubUserInfo username="gaearon"/>
        <GithubUserInfo username="jlengstorf"/>
        <GithubUserInfo username="kentcdodds"/>
        <GithubUserInfo username="charliegerard"/>
        <GithubUserInfo username="aspittel"/>
        </div>
      </div>
    );
  }
}

export default App;
