import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Players } from './../api/players';

export default class Player extends Component{
	render(){
		return (
			<p key={this.props.player._id}>
				<strong><i>{this.props.player.name}</i></strong> tiene {this.props.player.score} punto(s).
				<button onClick={() => Players.update({_id: this.props.player._id},  {$inc:{ score: 1 }} )}>+1</button>
				<button onClick={() => Players.update(this.props.player._id,  {$inc:{ score: -1 }} )}>-1</button>
				<button onClick={() => Players.remove({ _id: this.props.player._id})}>X</button>
			</p>
		);
	}
}

Player.propTypes = {
	player: PropTypes.object.isRequired
};
