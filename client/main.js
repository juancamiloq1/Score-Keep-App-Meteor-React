import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

import { Players } from './../imports/api/players';

import TitleBar from './../imports/ui/TitleBar';
import AddPlayer from './../imports/ui/AddPlayer';

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


Meteor.startup( () => {
	Tracker.autorun( () => {
		let players = Players.find().fetch();
		let name = 'Juan Camilo Quintero';
		let title = 'Score Keep App';
		let jsx = (
			<div>
				<TitleBar title={title} subtitle='Creado por Juan Camilo Quintero'/>
				
				{renderPlayers(players)}

				<AddPlayer />
				
			</div>
		);
		ReactDOM.render( jsx, document.getElementById('app'));
	});	
});



