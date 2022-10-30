import {Component} from 'react'
import {v4} from 'uuid'
import './index.css'
import UserDetails from '../UserDetails'

class PasswordsApp extends Component {
  state = {
    websiteInput: '',
    usernameInput: '',
    passwordInput: '',
    detailsList: [],
    searchInput: '',
    isChecked: false,
  }

  onSubmitDetails = event => {
    event.preventDefault()
    const {websiteInput, usernameInput, passwordInput} = this.state
    const newUserList = {
      website: websiteInput,
      username: usernameInput,
      password: passwordInput,
      id: v4(),
    }

    this.setState(prevState => ({
      detailsList: [...prevState.detailsList, newUserList],
    }))
  }

  noList = () => {
    const ok = 'notgood'
    return (
      <div className="no-password-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
          alt="no passwords"
          className="no-password"
        />
        <p className="tag-no-password">No Passwords</p>
      </div>
    )
  }

  onToggleInput = () => {
    this.setState(prevState => ({
      isChecked: !prevState.isChecked,
    }))
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onChangeWebsite = event => {
    this.setState({websiteInput: event.target.value})
  }

  onClickPassword = event => {
    this.setState({passwordInput: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({usernameInput: event.target.value})
  }

  renderPasswordManager = () => {
    const {detailsList, searchInput} = this.state

    const filteredList = detailsList.filter(eachItem =>
      eachItem.website.includes(searchInput),
    )

    return (
      <ul className="password-container">
        {filteredList.map(eachItem => (
          <UserDetails key={eachItem.id} passwordDetails={eachItem} />
        ))}
      </ul>
    )
  }

  renderInputDetailsContainer = () => {
    const {websiteInput} = this.state
    return (
      <div className="input-details-container">
        <div className="inputs-container">
          <form onSubmit={this.onSubmitDetails}>
            <h1>Add New Password</h1>
            <div className="input-card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
                className="image"
              />
              <input
                type="text"
                className="input"
                placeholder="Enter Website"
                onChange={this.onChangeWebsite}
              />
            </div>
            <div className="input-card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
                className="image"
              />
              <input
                type="text"
                className="input"
                onChange={this.onChangeUsername}
                placeholder="Enter Username"
              />
            </div>
            <div className="input-card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
                className="image"
              />
              <input
                type="password"
                className="input"
                onChange={this.onClickPassword}
                placeholder="Enter Password"
              />
            </div>
            <button type="submit" className="add-button">
              Add
            </button>
          </form>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
          alt="password manager"
          className="password-img"
        />
      </div>
    )
  }

  render() {
    const {detailsList} = this.state
    const lengthOfUsers = detailsList.length
    return (
      <div className="app-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="main-logo"
        />
        {this.renderInputDetailsContainer()}
        <div className="userDetails-container">
          <div className="heading-search-container">
            <h1>
              Your Passwords <span className="count">{detailsList.length}</span>
            </h1>
            <div className="search-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="image"
              />
              <input
                onChange={this.onChangeSearchInput}
                type="search"
                className="input"
              />
            </div>
          </div>
          <hr />
          <div className="show-container">
            <input id="checkBox" type="checkbox" onClick={this.onToggleInput} />
            <label htmlFor="checkBox" className="show">
              Show Passwords
            </label>
          </div>
          {lengthOfUsers > 0 ? this.renderPasswordManager() : this.noList()}
        </div>
      </div>
    )
  }
}

export default PasswordsApp
