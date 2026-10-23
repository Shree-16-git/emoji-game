import './index.css'

const WinOrLoseCard = props => {
  const {score, isWon, onPlayAgain} = props

  const imgUrl = isWon
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  const wonOrLose = isWon ? 'You Won' : 'You Lose'

  return (
    <div className="card-cont">
      <div className="text-cont">
        <h1 className="head">{wonOrLose}</h1>
        <p className="para">Best Score</p>
        <p className="score">{score}/12</p>
        <button type="button" className="play-again-btn" onClick={onPlayAgain}>
          Play Again
        </button>
      </div>

      <img src={imgUrl} className="img-des" alt="win or lose" />
    </div>
  )
}
export default WinOrLoseCard
