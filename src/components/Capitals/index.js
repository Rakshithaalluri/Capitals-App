import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {activeId: countryAndCapitalsList[0].id}

  onCapital = event => {
    this.setState({activeId: event.target.value})
  }

  render() {
    const {activeId} = this.state

    const activeCountryCapital = countryAndCapitalsList.find(
      eachCountry => eachCountry.id === activeId,
    )

    return (
      <div className="container">
        <div className="capital-container">
          <div className="question-container">
            <h1 className="heading"> Countries And Capitals </h1>
            <div className="question-capital">
              <select className="country" onChange={this.onCapital}>
                {countryAndCapitalsList.map(eachCapital => (
                  <option key={eachCapital.id} value={eachCapital.id}>
                    {eachCapital.capitalDisplayText}
                  </option>
                ))}
              </select>
              <p className="country-question"> is capital of which country? </p>
            </div>
            <p className="answer"> {activeCountryCapital.country} </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Capitals
