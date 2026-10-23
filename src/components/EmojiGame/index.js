/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {
    emojisList: this.props.emojisList,
    score: 0,
    topScore: 0,
    clickedEmojis: [],
    isWon: false,
    isGameOver: false,
  }

  onClickEmoji = id => {
    const {emojisList, score, topScore, clickedEmojis} = this.state

    if (clickedEmojis.includes(id)) {
      this.setState({
        isGameOver: true,
      })
      return
    }

    const newScore = score + 1
    const newTopScore = Math.max(topScore, newScore)
    const newClickedEmojis = [...clickedEmojis, id]

    this.setState(prevState => ({
      emojisList: [...prevState.emojisList].sort(() => Math.random() - 0.5),
      clickedEmojis: newClickedEmojis,
      score: newScore,
      topScore: newTopScore,
      isWon: newScore === this.props.emojisList.length,
      isGameOver: newScore === this.props.emojisList.length,
    }))
  }

  onPlayAgain = () => {
    this.setState({
      emojisList: [...this.props.emojisList],
      clickedEmojis: [],
      score: 0,
      isGameOver: false,
      isWon: false,
    })
  }

  render() {
    const {emojisList, score, topScore, isGameOver, isWon} = this.state
    return (
      <div className="bg-cont">
        <NavBar score={score} topScore={topScore} isWon={isWon} />
        {isGameOver ? (
          <WinOrLoseCard
            score={score}
            isWon={isWon}
            onPlayAgain={this.onPlayAgain}
          />
        ) : (
          <div className="emoji-game-container">
            <ul className="emoji-list">
              {emojisList.map(eachEmoji => (
                <EmojiCard
                  key={eachEmoji.id}
                  emojisDetails={eachEmoji}
                  onClickEmoji={this.onClickEmoji}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default EmojiGame
