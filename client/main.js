import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

import { Players } from './../imports/api/players';

const renderPlayers = function(playersList) {
	return playersList.map( function(player) {
		return <p key={player._id}><strong><i>{player.name}</i></strong> has {player.score} point(s).</p>
	});
};

Meteor.startup(function() {
	Tracker.autorun( function(){
		let players = Players.find().fetch();
		let name = 'Juan Camilo Quintero';
		let title = 'Score Keep App';
		let jsx = (
			<div>
				<h1>{title}</h1>
				<p>Hola Component, me llamo <strong>{name}</strong></p>
				{renderPlayers(players)}
			</div>
		);
		ReactDOM.render( jsx, document.getElementById('app'));
	});

	Players.insert({
		name: 'JuanMArta HErnandez Ramirez',
		score: 90
  });
});



