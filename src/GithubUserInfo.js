import React from 'react';
import axios from 'axios';

class GithubUserInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {}
        }
    }

    async componentDidMount() {
        const url = `https://api.github.com/users/${this.props.username}`;
        let response = await axios.get(url);
        let user = response.data;
        this.setState({ user });
    }

    //     componentDidMount(){
    //         axios.get('https://api.github.com/users/')
    //          .then(response => {
    //              let user = response.data
    //              this.setState({ user });
    //          });
    //    }

    render() {
        return (
            <div className="user">
            <h2>{this.state.user.login} ({this.state.user.name})</h2>
            <img src={this.state.user.avatar_url} />
            <p>{this.state.user.bio}</p>
            <p><span>Number of public repos:</span> {this.state.user.public_repos}</p>
          </div>
        )
    }
}

export default GithubUserInfo;