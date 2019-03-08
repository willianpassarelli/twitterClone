import React, { Component } from 'react';

import Like from '../like.svg';
import './Tweet.css'
import api from '../services/api';

export default class Tweet extends Component {
  handleLike = async () => {
      const { _id } = this.props.tweet;

      await api.post(`likes/${_id}`);
    };

  render() {
    const { tweet } = this.props;
    return (
        <li className="tweet">
            <strong>{tweet.author}</strong>
            <p>{tweet.content}</p>
            <button type="button" onClick={this.handleLike}>
                <img src={Like} alt="Like" />
                {tweet.likes}
            </button>
        </li>
    );
  }
}
