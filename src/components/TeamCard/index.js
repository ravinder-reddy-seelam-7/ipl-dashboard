// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {eachItem} = props
  const {id, name, teamImageUrl} = eachItem
  return (
    <li className="team-card-container">
      <Link to={`/team-matches/${id}`}>
        <img src={teamImageUrl} alt={name} className="team-card-image" />
        <p className="team-name">{name}</p>
      </Link>
    </li>
  )
}

export default TeamCard
