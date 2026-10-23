import './index.css'

const NavBar = props => {
  const {score, topScore, isWon} = props
  return (
    <nav className="navbar">
      <div className="navbar-logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="navbar-title">Emoji Game</h1>
      </div>

      {isWon ? (
        ''
      ) : (
        <div className="score-container">
          <p className="score-text">Score: {score}</p>
          <p className="score-text">Top Score: {topScore}</p>
        </div>
      )}
    </nav>
  )
}

export default NavBar
