import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

import { Players } from './../imports/api/players';

import TitleBar from './../imports/ui/TitleBar';

const renderPlayers = (playersList) => {
	return playersList.map( (player) => {
		return (
			<p key={player._id}>
				<strong><i>{player.name}</i></strong> tiene {player.score} punto(s).
				<button onClick={() => Players.update({_id: player._id},  {$inc:{ score: 1 }} )}>+1</button>
				<button onClick={() => Players.update(player._id,  {$inc:{ score: -1 }} )}>-1</button>
				<button onClick={() => Players.remove({ _id: player._id})}>X</button>
			</p>
		)
	});
};

const handleSubmit = (e) => {
	let playerName = e.target.playerName.value;

	e.preventDefault();

	if ( playerName ) {
		e.target.playerName.value= '';
		Players.insert({ 
			name: playerName, 
			score: 0 
		});
	}
};

Meteor.startup( () => {
	Tracker.autorun( () => {
		let players = Players.find().fetch();
		let name = 'Juan Camilo Quintero';
		let title = 'Score Keep App';
		let jsx = (
			<div>
				<TitleBar title={title}/>
				<p>Hola Component, me llamo <strong>{name}</strong></p>
				{renderPlayers(players)}
				<form onSubmit={handleSubmit}>
					<input type="text" name="playerName" placeholder="Nombre del jugador"/>
					<button>Añadir Jugador</button>
				</form>
			</div>
		);
		ReactDOM.render( jsx, document.getElementById('app'));
	});	
});



