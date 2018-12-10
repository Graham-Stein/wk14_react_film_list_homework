import React, {Component} from 'react';
import FilmLinks from './FilmLinks.js';

class FilmList extends Component {
  render(){
    const filmNodes = this.props.data.map((film) => {
      return <FilmLinks
        key={film.id}
        name={film.name}
        url={film.url}
      />
    });

    return (
      <div className="film-list">
        {filmNodes}
      </div>
    )
  }

}





export default FilmList;
