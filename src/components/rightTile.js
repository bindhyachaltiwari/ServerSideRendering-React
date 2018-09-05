import React, {Component} from 'react';
import Title from './title';


class RightTile extends Component {

  render() {
    return (
      <div className="col-right">
        <div className="app-meta">
           <Title name={this.props.name} publisher={this.props.app.projectAllocated}/>
           Role:<span className="app-lic">{this.props.app.profile}</span>
        </div>
        <div className="app-intro" dangerouslySetInnerHTML={{__html: this.props.app.desc}} />
         <div className="app-link">
          <a className="btn" href={this.props.app.profileLink} target="_blank">Linked In profile</a>
        </div>
      </div>
    );
  }

}


export default RightTile;
