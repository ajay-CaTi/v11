import { Component } from "react";

class UserClass extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, count1: 1 };
    // console.log(props.name);
    console.log("child constructor");
  }

  componentDidMount() {
    console.log("child CDM");
  }

  render() {
    const { name } = this.props;
    console.log(name, "RENDER");
    return (
      // NEVER Update State variable DIrectly
      <div className="user_card">
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
              count1: this.state.count1 + 1,
            });
          }}
        >
          Count Inc.
        </button>
        <h2>count: {this.state.count}</h2>
        <h2>count1: {this.state.count1}</h2>
        <h2>Name: {name}</h2>
        <h2>This is me</h2>
      </div>
    );
  }
}

export default UserClass;
