import React, {Component} from 'react';

class Title extends Component {
  render(){
    if(this.props.publisher){
       return (
         <h3>{this.props.name}<span className="connector">working in </span><span className="publisher">{this.props.publisher}</span> project</h3>
       );
    } else{
      return (
        <h3>{this.props.name}</h3>
      );
    }
  }
}

export default Title;
