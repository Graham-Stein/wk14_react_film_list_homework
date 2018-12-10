import React, {Component, Fragment} from 'react';

class FilmLinks extends Component {
  render (){
    return(
      <Fragment>
        <h3>
        <a href={this.props.url}>{this.props.name}</a>
        </h3>
      </Fragment>
    )
  }
}

export default FilmLinks;
