import { PlayerBlock } from "../PlayerBlock/PlayerBlock";
import './TeamDetails.css'



export const TeamDetails = ({ team }) => (
  <div className="teamPlayers">
    <div className="players">
      {team.players.map(player => (
        <PlayerBlock key={player.username} player={player} />
      ))}
    </div>
    <div className="summary">
      <span>
        <div className='num'>Points:</div>
        <div className='count'>+{team.points}</div>
      </span>
      <span className='divider'>
        <div className='num'>Место:</div>
        <div className='count'>{team.place}</div>
      </span>
      <span>
        <div className='num'>Всего убийств:</div>
        <div className='count'>{team.total_kills}</div>
      </span>
    </div>
  </div>
);