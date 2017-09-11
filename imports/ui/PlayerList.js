import React from 'react';
import PropTypes from 'prop-types';

import Player from './Player';

export default class PlayerList extends React.Component{
    renderPlayers(){
        if (this.props.players.lenght === 0){
            return <h3>Añade tu primer jugador para comenzar!</h3>;
        } else {
            return this.props.players.map( (player) => {
                return <Player key={player._id} player={player}/>;
            });
        }
    }
    render(){
        return(
            <div>
                {this.renderPlayers()}
            </div>
        );
    }
};

PlayerList.propTypes = {
	players: PropTypes.array.isRequired
};
