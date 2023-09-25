import { Component } from "react";

class UserClass extends Component {
  constructor(props) {
    super(props);
    this.state = { userInfo: { name: "dummy", login: "delhi" } };
  }

  async componentDidMount() {
    this.timer = setInterval(() => {
      console.log("Namaste bro");
    }, 1000);
  }

  componentDidUpdate() {
    console.log("Com Did Update");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
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
