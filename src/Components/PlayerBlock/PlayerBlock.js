import photo from '../../Images/image.png';
import './PlayerBlock.css';

const PlayerStats = ({ label, value }) => (
  <div className='player'>
    <div className='num'>{label}:</div>
    <div className='count'>{value}</div>
  </div>
);

export const PlayerBlock = ({ player }) => {
  const { username, kills } = player;

  return (
    <div className="playerBlock">
      <span className='DropUser'>
        <div className='player'>
          <img src={photo} alt="Player" />
          <h3>{username}</h3>
        </div>
        <PlayerStats label="убийств" value={kills} />
      </span>
    </div>
  );
};