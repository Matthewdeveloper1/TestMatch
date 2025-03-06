import photo from '../../Images/image.png';
import './PlayerBlock.css'

export const PlayerBlock = ({ player }) => (
  <div className="playerBlock">
    <span className='DropUser'>
      <div className='player'>
        <img src={photo} alt="Player" />
        <h3>{player.username}</h3>
      </div>
      <div className='player'>
        <div className='num'>убийств:</div>
        <div className='count'>{player.kills}</div>
      </div>
    </span>
  </div>
);