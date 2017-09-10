import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

import { Players } from './../imports/api/players';

const renderPlayers = (playersList) => {
	return playersList.map( (player) => {
		return <p key={player._id}><strong><i>{player.name}</i></strong> has {player.score} point(s).</p>
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
				<h1>{title}</h1>
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



