import './index.css'

const EmojiCard = props => {
  const {emojisDetails, onClickEmoji} = props
  const {id, emojiName, emojiUrl} = emojisDetails

  return (
    <li className="emoji-card">
      <button className="emoji-button" onClick={() => onClickEmoji(id)}>
        <img src={emojiUrl} alt={emojiName} className="emoji-image" />
      </button>
    </li>
  )
}

export default EmojiCard
