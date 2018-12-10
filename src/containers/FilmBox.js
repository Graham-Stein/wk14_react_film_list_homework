import React, {Component} from 'react';
import FilmList from '../components/FilmList.js'
import {filmData, imdbURL} from  '../data/FilmData.js'
class FilmBox extends Component {
  constructor(){
    super();
    this.state = filmData;
  }
  render(){
    return(
      <div>
      <h1>Upcoming Film Releases for UK</h1>
      < FilmList data = {this.state}/>
      <h1>
       <a href={imdbURL}> View More Upcoming Releases</a>
       </h1>
      </div>
    );
  }
}


export default FilmBox;
