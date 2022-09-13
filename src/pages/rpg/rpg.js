import React from 'react';
import {Link, Navigate, useNavigate} from 'react-router-dom';

import Button from '../../components/button/button'
import ScoreBoard from '../../components/scoreboard/scoreboard'

import './rpg.css'


function Rpg(){

    return(
        <div className="flex-row rpg-page">
            <div className="flex-col rpg-left">
                
                <div className="rpg-play">
                    <Button buttonName="Start New Game" value="/game" className="primary-button" id="rpg-nav"/>
                </div>
                <div className="rpg-heroes"></div>
            </div>
            <div className="flex-col rpg-right">
                <p className="page-text">Sprawling RPG is a turn-based combat game where you will create a player by selecting a Name and a Class.<br></br><br></br>
                    Starting at Level 01, you will encounter one enemy after another. Defeating each enemy will reward the player with EXP, and by acquiring enough 
                    of it you will increase in Level.<br></br><br></br>
                    As your level increases, so, too, does the strength of the enemy. The game will continue until the difficuly of the enemy is too great to be vanquished.<br></br><br></br>
                    You can ATTACK, use MAGIC, or HEAL (and so can the enemy)<br></br><br></br>
                    Some classes are stronger at ATTACK or MAGIC, and some enemies are weaker to ATTACK and to MAGIC. It's up to you to determine what the best course of action is.<br></br><br></br>
                    And although you can HEAL, there is a chance for it to fail, and it may cause you to waste your turn.<br></br><br></br>
                    Good Luck!
                </p>
            </div>
        </div>
    )
}

export default Rpg;