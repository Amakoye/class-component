import React from "react";

interface GreetingProps {
  name?: string;
}

interface GreetingState {
  message: string;
}

export default class Greeting extends React.Component<GreetingProps> {
  constructor(props: GreetingProps) {
    super(props);
    this.state = {
      message: `Hello from, ${props.name}`,
    };
  }
  state: GreetingState;

  static getDerivedStateFromProps(props: GreetingProps, state: GreetingState) {
    console.log(props, state);
    if (props.name && props.name !== state.message) {
      const newState = { ...state };
      newState.message = Greeting.getNewMessage(props.name);
      return newState;
    }
    return state;
  }

  static getNewMessage(name: string = "") {
    return `Hello from, ${name}`;
  }

  render(): React.ReactNode {
    console.log("rendering Greeting");

    if (!this.props.name) {
      return <div>no name given</div>;
    }
    return <>{this.state.message}</>;
  }
}
