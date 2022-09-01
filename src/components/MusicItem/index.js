import {AiOutlineDelete} from 'react-icons/ai'
import './index.css'

/* const data = [
  {
    id: 'e4b8e3b8-7776-4c09-8abc-ba328a8babe9',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-i-dont-care-img.png',
    name: "I Don't Care",
    genre: 'Pop',
    duration: '3:38',
  },
] */

const MusicItem = props => {
  const {musicData, deleteMusicItem} = props
  const {id, imageUrl, name, genre, duration} = musicData
  const onDeleteItem = () => {
    deleteMusicItem(id)
  }
  return (
    <li className="music-item-container">
      <div className="image-name-container">
        <img src={imageUrl} alt="track" className="music-img" />
        <div className="name-genre">
          <p className="name">{name}</p>
          <p className="genre">{genre}</p>
        </div>
      </div>
      <div className="duration-delete-container">
        <p className="duration">{duration}</p>
        <button type="button" onClick={onDeleteItem} testid="delete">
          <AiOutlineDelete color="#ffffff" />
        </button>
      </div>
    </li>
  )
}

export default MusicItem
