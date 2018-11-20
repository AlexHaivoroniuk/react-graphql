import React, { Component } from 'react';
import '../style/style.css';
import gql from 'graphql-tag';
import {  compose, graphql } from 'react-apollo';
import { Link } from 'react-router';
import query from '../queries/fetchSongs';


class SongList extends Component {

  constructor(props) {
    super(props)

    this.onSongDelete = this.onSongDelete.bind(this);
  }

  onSongDelete(id) {
    this.props.mutate({
        variables: {
            id
        }
    }).then(() => this.props.data.refetch())
  }

  renderSongs() {
    return this.props.data.songs.map(({ id, title }) => (
                <li 
                    key={id}
                    title={title}
                    className='collection-item'
                >
                    {title}
                    <i 
                        className="material-icons right"
                        onClick={() => this.onSongDelete(id)}
                    >
                        delete
                    </i>
                </li> 
            ))
  }

  render() {
    if (this.props.data.loading) return (  <div className="progress">
                                              <div className="indeterminate"></div>
                                           </div> )
    return (
        <div>
            <ul className='collection'>
                {this.renderSongs()}
            </ul>
            <Link to="songs/new" className="btn-floating btn-large red right">
                <i className="material-icons">add</i>
            </Link>
        </div>
    )
  }
}

const mutation = gql`
    mutation DeleteSong($id: ID) {
        deleteSong(id: $id) {
            id
        }
    }
`;

export default graphql(mutation)(
    graphql(query)(SongList)
);
