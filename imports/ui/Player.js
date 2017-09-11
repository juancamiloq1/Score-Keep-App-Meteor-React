import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Players } from './../api/players';

export default class Player extends Component{
	render(){
		return (
			<div key={this.props.player._id} className="item">
				<p>
					<strong><i>{this.props.player.name}</i></strong> tiene {this.props.player.score} punto(s).
				</p>
				<button className="button button--round" onClick={() => Players.update({_id: this.props.player._id},  {$inc:{ score: 1 }} )}>+1</button>
				<button className="button button--round" onClick={() => Players.update(this.props.player._id,  {$inc:{ score: -1 }} )}>-1</button>
				<button className="button button--round" onClick={() => Players.remove({ _id: this.props.player._id})}>X</button>
			</div>
		);
	}
}

Player.propTypes = {
	player: PropTypes.object.isRequired
};
