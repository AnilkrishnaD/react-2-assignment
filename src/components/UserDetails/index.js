import './index.css'

const UserDetails = props => {
  const {passwordDetails} = props
  const {website, username, password, id, isChecked} = passwordDetails
  console.log(website)
  console.log(id)

  const starsImage = (
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      alt="starts"
      className="image"
    />
  )

  const displayText = isChecked ? password : starsImage

  return (
    <li className="list-item">
      <div>
        <p className="initial-card">{username[0]}</p>
      </div>
      <div className="user-details">
        <p>{website}</p>
        <p>{username}</p>
        <p>{displayText}</p>
      </div>
      <div>
        <button type="button" className="button-delete">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
            className="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default UserDetails
