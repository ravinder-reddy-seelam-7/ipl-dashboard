// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatch} = props

  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    result,
    secondInnings,
    umpires,
    venue,
  } = latestMatch
  return (
    <div className="match-sub-container">
      <div className="match-first-container">
        <p className="competing-team">{competingTeam}</p>
        <p className="date">{date}</p>
        <p className="venue">{venue}</p>
        <p className="result">{result}</p>
      </div>
      <div className="team-logo-container">
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="team-logo"
        />
      </div>
      <hr className="line" />
      <div className="team-stats-lg-container">
        <p className="lg-heading">First Innings</p>
        <p className="lg-text">{firstInnings}</p>
        <p className="lg-heading">Second Innings</p>
        <p className="lg-text">{secondInnings}</p>
        <p className="lg-heading">Man Of The Match</p>
        <p className="lg-text">{manOfTheMatch}</p>
        <p className="lg-heading">Umpires</p>
        <p className="lg-text">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
