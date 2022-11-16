import React from "react";

interface GreetingProps {
  name?: string;
}

interface GreetingState {
  message: string;
}

export default class Greeting extends React.Component<
  GreetingProps,
  GreetingState
> {
  constructor(props: GreetingProps) {
    super(props);
    this.state = {
      message: `Hello from, ${props.name}`,
    };
  }

  render(): React.ReactNode {
    if (!this.props.name) {
      return <div>no name given</div>;
    }
    return <>{this.state.message}</>;
  }
}
