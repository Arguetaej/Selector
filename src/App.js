import React, {Component} from 'react';
import Shape from './shape';

class Selector extends Component{
constructor (){
  super();//allows us to us this. global object
  this.state = {
    selectedShape: "square",

  }
}

//methods live in this area...below constructor and  above render code blocks
selectShape = (shapeName) =>{
  this.setState({
    selectedShape: shapeName,
  })
}




  render (){
    return(
      <div className="container">
        <div className="navbar">
        <div>Selected: <span>{this.state.selectedShape}</span></div>
        </div>
        <div className="shape-list">

        <Shape shape="square" selectShape={this.selectShape}/>
        <Shape shape="circle" selectShape={this.selectShape}/>
        <Shape shape="triangle" selectShape={this.selectShape}/>
        </div>

      </div>
    )
  }
}

export default Selector;
