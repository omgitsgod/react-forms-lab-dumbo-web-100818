import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }



  render() {
    return (
      <div>
        <strong>Your Message: <br /></strong>
        <input type="text" name="message" value={this.state.message} onChange={event => this.setState({message: event.target.value})}/>
        {this.props.maxChars - this.state.message.length}
      </div>
    );
  }
}

export default TwitterMessage;
