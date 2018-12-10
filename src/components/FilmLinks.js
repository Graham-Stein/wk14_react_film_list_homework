import React, {Component, Fragment} from 'react';

class FilmLinks extends Component {
  render (){
    return(
      <Fragment>
        <li>
        <a href={this.props.url}>{this.props.name}</a>
        </li>
      </Fragment>
    )
  }
}

export default FilmLinks;
