import { PlayerBlock } from "../PlayerBlock/PlayerBlock";
import './TeamDetails.css';

const StatItem = ({ label, value }) => (
  <span>
    <div className='num'>{label}:</div>
    <div className='count'>{value}</div>
  </span>
);

export const TeamDetails = ({ team }) => {
  const { players, points, place, total_kills } = team;

  return (
    <div className="teamPlayers">
      <div className="players">
        {players.map(player => (
          <PlayerBlock key={player.username} player={player} />
        ))}
      </div>
      <div className="summary">
        <StatItem label="Points" value={`+${points}`} />
        <StatItem label="Место" value={place} />
        <StatItem label="Всего убийств" value={total_kills} />
      </div>
    </div>
  );
};