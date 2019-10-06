import React ,{ Component} from "react";
class LongPressSensor extends Component {
  constructor(props) {
    super(props)
    this.handleButtonPress = this.handleButtonPress.bind(this)
    this.handleButtonRelease = this.handleButtonRelease.bind(this)
  }
  handleButtonPress () {
    this.buttonPressTimer = setTimeout(() => alert(this.props.article_url), 400);
  }

  handleButtonRelease () {
    clearTimeout(this.buttonPressTimer);
  }

  render() {
    return (
      <div
          onTouchStart={this.handleButtonPress}
          onTouchEnd={this.handleButtonRelease}
          onMouseDown={this.handleButtonPress}
          onMouseUp={this.handleButtonRelease}
          onMouseLeave={this.handleButtonRelease}>
        {this.props.children}
      </div>
    );
  }
}

export default LongPressSensor;
