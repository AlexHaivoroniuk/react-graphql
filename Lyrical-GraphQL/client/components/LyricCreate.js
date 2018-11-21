import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';


class LyricCreate extends Component {
  constructor(props) {
    super(props);

    this.state = { content: '' };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
      event.preventDefault();

      this.props.mutate({
          variables: {
              songId: this.props.songId,
              content: this.state.content,
          }
      }).then(() => this.setState({ content: ''}))
  }



  render() {
    return (
        <form onSubmit={this.onSubmit}>
            <label htmlFor="lyric">Add a Lyric</label>
            <input 
                type="text" 
                id="lyric" 
                onChange={event => this.setState({ content: event.target.value })} 
                value={this.state.content}
            />
        </form>
    )
  }
}

const mutation = gql`
    mutation AddLyricToSong($content: String!, $songId: ID!) {
        addLyricToSong(content: $content, songId: $songId) {
            id
            lyrics {
                id
                content
                likes
            }
        }
    }
`;


export default graphql(mutation)(LyricCreate);