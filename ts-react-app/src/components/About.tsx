import React from "react";

//写成类式组件
interface IProps {
  name: string;
}

interface IState {
  count: number;
}
class About extends React.Component<IProps, IState>{

  state = {
    count: 12
  };

  render() {
    return (
      <div>
       Name: {this.state.count}
       <div></div>
       Count: {this.props.name}
      </div>
    );
  }
  
}

export default About