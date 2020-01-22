import React from 'react';


class Helloworld extends React.Component {
  constructor (props){
    super(props);
    this.state={ who: 'World'}
  }
  handleButtonClick = (value) => {
    const newWho = value
    console.log(this.state.value)
    this.setState({
      who:newWho
    })
  }

  render() {
    return <div>
      <p>Hello, {this.state.who}</p>
      <button  onClick={() => this.handleButtonClick('Friend')}>Friend</button>
      <button  onClick={() => this.handleButtonClick('React')}>React</button>
      <button  onClick={() => this.handleButtonClick('World')}>World</button>
    </div>
  }
}

export default Helloworld;