import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';

const players = [
    {
        _id: 'id_1',
        name: 'Lauren',
        score: 4
    },{
        _id: 'id_2',
        name: 'Funaca',
        score: 7
    },{
        _id: 'id_3',
        name: 'Laura',
        score: 2
    },{
        _id: 'id_3',
        name: 'Clara',
        score: 5
    }
];

const renderPlayers = function(playersList) {
    return [<p key="1">1</p>, <p key="2">2</p>, <p key="3">3</p>];
};

Meteor.startup(function() {
    let name = 'juancamilo';
    let title = 'Titulo';
    let jsx = (
        <div>
            <h1>{title}</h1>
            <h3>HOLA COMPONENTE, me llamo {name}!</h3>
            {renderPlayers(players)}
        </div>
    );
    ReactDOM.render( jsx, document.getElementById('app'));
});



