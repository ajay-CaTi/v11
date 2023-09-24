import { Component } from "react";

class UserClass extends Component {
  constructor(props) {
    super(props);
    this.state = { userInfo: { name: "dummy", location: "delhi" } };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/ajay-CaTi");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log("Com Did Update");
  }

  componentWillUnmount() {
    console.log("CWUnmount");
  }

  render() {
    const { name, login, avatar_url } = this.state.userInfo;
    console.log(this.state.userInfo);
    return (
      // NEVER Update State variable DIrectly
      <div className="user_card">
        <img src={avatar_url} alt={name} />
        <h2>Name: {name}</h2>
        <h2>This is {login}</h2>
      </div>
    );
  }
}

export default UserClass;
