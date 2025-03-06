import './MatchCard.css';
import { Icon } from '../../Icon';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { MatchDetails } from '../MatchDetails/MatchDetails';

const MatchCard = ({ match, index, openMatches, toggleDropdown }) => {
  const isOpen = openMatches[index];

  const matchClass = match.status === 'Ongoing' ? 'ongoing' : match.status === 'Finished' ? 'finished' : 'none';

  const handleToggle = () => {
    toggleDropdown(index);
  };

  return (
    <div className={`block`}>
      <div className={`MatchCard ${isOpen ? 'open' : ''}`}>
        <div onClick={handleToggle} className='mainBlock'>
          <div className='HomeTeam'>
            <Icon />
            {match.homeTeam.name}
          </div>
          <div className='TimeBlock'>
            <div className='score'>{match.homeScore} : {match.awayScore}</div>
            <div className={`status ${matchClass}`}>{match.status}</div>
          </div>
          <div className='awayTeam'>
            {match.awayTeam.name}
            <Icon />
            <span className="toggleButton">
              <KeyboardArrowUpIcon className={`arrowIcon ${isOpen ? 'rotated' : ''}`} />
            </span>
          </div>
        </div>
        <MatchDetails match={match} isOpen={isOpen} />
      </div>
    </div>
  );
};

export default MatchCard;