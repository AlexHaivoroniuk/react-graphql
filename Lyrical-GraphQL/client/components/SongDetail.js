import React, { Component } from 'react';
import {  graphql } from 'react-apollo';
import fetchSong from '../queries/fetchSong';
import { Link } from 'react-router';
import LyricCreate from './LyricCreate';
import LyricList from './LyricList';

class SongDetail extends Component {
  render() {

    const { song } = this.props.data;
    
    if (!song) return (  <div className="progress">
                            <div className="indeterminate"></div>
                         </div> )

    return (
      <div>
        <Link to="/">Back</Link>
        <h3>{song.title}</h3>
        <LyricList lyrics={song.lyrics}></LyricList>
        <LyricCreate songId={this.props.params.id}></LyricCreate>
      </div>
    )
  }
}

export default  graphql(fetchSong, {
  options: (props) => ( { variables: { id : props.params.id } } )
})(SongDetail);