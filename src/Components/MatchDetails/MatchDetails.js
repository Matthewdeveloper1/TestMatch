import { TeamDetails } from "../TeamDetails/TeamDetails";
import './MatchDetails.css'


export const MatchDetails = ({ match, isOpen }) => (
  <div className={`dropdown ${isOpen ? 'open' : ''}`}>
    <div className="grid">
      <TeamDetails team={match.homeTeam} />
      <TeamDetails team={match.awayTeam} />
    </div>
  </div>
);