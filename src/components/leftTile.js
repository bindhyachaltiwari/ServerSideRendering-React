import React, {Component} from 'react';

class LeftTile extends Component {

  render() {
    return (
      <div className="col-left">
        <div className="app-no">
         
         <span>{this.props.appno}</span>
        </div>

        <img className="app-icon" src={this.props.img.src} alt={this.props.img.alt} height="120" width="120"/>
      </div>
    );
  }

}


export default LeftTile;
