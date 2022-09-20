import React from "react";
import Button from 'react-bootstrap/Button';


class Counter extends React.Component {
  constructor() {
    super();
    console.log('Construcor')
    this.state = {count : 0};
  }

  Increase = () => {
    console.log('Increase'+this.state.count)
    this.setState({ count: this.state.count + 1 })
        
}
Decrease = () => {
  console.log('Decrease'+this.state.count)
  this.setState({ count: this.state.count - 1 })
      
}
Reset = () => {
  console.log('Reset'+this.state.count)
  this.setState({ count: 0 })
      
}
 
  render() {
    return(
        <>
              <h2>Counter</h2>

        <p>
            {this.state.count}    
        </p>
        <Button onClick={this.Increase} variant="success">Increase</Button>{' '}
        <Button onClick={this.Decrease} variant="danger">Decrease</Button>{' '}
        <Button onClick={this.Reset} variant="warning">Reset</Button>{' '}

        </>
    )
}

}
export default Counter


