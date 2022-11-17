import React from 'react'
import './Music.scss'
import Covers from '../../../Assets/covers.jpg'
import Micro from '../../../Assets/microphone.svg'
import Album from '../../../Assets/albums.svg'
import More from '../../../Assets/more.svg'

const Music = () => {
  return (
    <div className="discoverContainer">
        <h1>Discover new music</h1>
        <div className="iconContainer">
            <div className="item"><img src={Micro} alt="charts"></img>Charts</div>
            <div className="item"><img src={Album} alt="album"></img>Albums</div>
            <div className="item"><img src={More} alt="more"></img>More</div>
        </div>
        <p>By joining you can benefit by listening to the latest albums released.</p>
        <img src={Covers} className="coversPicture" alt="covers"></img>
    </div>
  )
}

export default Music