import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

import { Players } from './../imports/api/players';

Tracker.autorun( function(){
    console.log('Players List: ', Players.find().fetch());
});

const players = [
    {
        _id: 'id_1',
        name: 'Lauren Smith',
        score: 4
    },{
        _id: 'id_2',
        name: 'Juan Camilo Quintero',
        score: 7
    },{
        _id: 'id_3',
        name: 'Laura Hernandez',
        score: 2
    },{
        _id: 'id_4',
        name: 'Clara Fernandez',
        score: 5
    }
];

const renderPlayers = function(playersList) {
    return playersList.map( function(player) {
        return <p key={player._id}><strong><i>{player.name}</i></strong> has {player.score} point(s).</p>
    });
};

Meteor.startup(function() {
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



