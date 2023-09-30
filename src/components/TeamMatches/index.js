// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {
    teamMatchesData: {},
    recentMatches: [],
    teamMatchesLoaderState: true,
    latestMatch: {},
  }

  componentDidMount() {
    this.fetchingTeamMatchesData()
  }

  fetchingTeamMatchesData = async () => {
    const {match} = this.props
    const {params} = match
    const response = await fetch(`https://apis.ccbp.in/ipl/${params.id}`)
    const data = await response.json()

    const updatedData = {
      teamBannerUrl: data.team_banner_url,
    }

    const latestMatchDetails = data.latest_match_details

    const updatedLatestMatchDetails = {
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      date: latestMatchDetails.date,
      firstInnings: latestMatchDetails.first_innings,
      id: latestMatchDetails.id,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      matchStatus: latestMatchDetails.match_status,
      result: latestMatchDetails.result,
      secondInnings: latestMatchDetails.second_innings,
      umpires: latestMatchDetails.umpires,
      venue: latestMatchDetails.venue,
    }

    const recentMatchesData = data.recent_matches.map(eachItem => ({
      competingTeam: eachItem.competing_team,
      competingTeamLogo: eachItem.competing_team_logo,
      date: eachItem.date,
      firstInnings: eachItem.first_innings,
      id: eachItem.id,
      manOfTheMatch: eachItem.man_of_the_match,
      matchStatus: eachItem.match_status,
      result: eachItem.result,
      secondInnings: eachItem.second_innings,
      umpires: eachItem.umpires,
      venue: eachItem.venue,
    }))

    this.setState({
      teamMatchesData: updatedData,
      recentMatches: recentMatchesData,
      teamMatchesLoaderState: false,
      latestMatch: updatedLatestMatchDetails,
    })
  }

  render() {
    const {
      teamMatchesLoaderState,
      teamMatchesData,
      recentMatches,
      latestMatch,
    } = this.state
    const {match} = this.props
    const {params} = match
    const {teamBannerUrl} = teamMatchesData
    let bgStyling
    switch (params.id) {
      case 'RCB':
        bgStyling = 'RCB'
        break
      case 'KKR':
        bgStyling = 'KKR'
        break
      case 'KXP':
        bgStyling = 'KXP'
        break
      case 'CSK':
        bgStyling = 'CSK'
        break
      case 'RR':
        bgStyling = 'RR'
        break
      case 'MI':
        bgStyling = 'MI'
        break
      case 'SH':
        bgStyling = 'SH'
        break
      case 'DC':
        bgStyling = 'DC'
        break
      default:
        bgStyling = null
        break
    }

    return (
      <div className={`team-matches-bg-container ${bgStyling}`}>
        {teamMatchesLoaderState ? (
          <div testid="loader" className="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div>
            <div className="team-matches-banner-container">
              <img
                src={teamBannerUrl}
                alt="team banner"
                className="banner-image"
              />
            </div>
            <h1 className="latest-matches-heading">Latest Matches</h1>
            <div className="latest-match-container">
              <LatestMatch latestMatch={latestMatch} />
            </div>
            <ul className="match-cards-container">
              {recentMatches.map(eachItem => (
                <MatchCard eachItem={eachItem} key={eachItem.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}
export default TeamMatches
