// Write your code here
import './index.css'

const MatchCard = props => {
  const {eachItem} = props
  console.log(eachItem)
  const {competingTeam, competingTeamLogo, matchStatus, result} = eachItem

  let statusStyling

  if (matchStatus === 'Won') {
    statusStyling = 'greenStyle'
  } else {
    statusStyling = 'redStyle'
  }

  return (
    <li className="match-card-container">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="competing-team-log"
      />
      <p className="head">{competingTeam}</p>
      <p className="card-result">{result}</p>
      <p className={`status ${statusStyling}`}>{matchStatus}</p>
    </li>
  )
}
export default MatchCard
