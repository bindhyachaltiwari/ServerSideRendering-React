import React, {Component} from 'react';
import LeftTile from './leftTile';
import RightTile from './rightTile';

class Tile extends Component {

  Tiles(props){

    let tiles = [], tileNumber = 1

    for(let app of props.apps){
      tiles.push(
           <div className="app-card" key={app.name}>
                <LeftTile img={app.img} appno={tileNumber} totalapps={props.totalapps} />
                <RightTile name={app.name} app={app}/>
           </div>
         )
      tileNumber++
    }

    return ( <div> {tiles} </div> )

  }


  render() {

    return (
      <this.Tiles apps={this.props.apps} totalapps={this.props.totalapps}/>
    );
  }

}


export default Tile;
