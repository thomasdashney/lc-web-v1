import React, { Component } from 'react'
import MediaQuery from 'react-responsive'

import { trackPageView } from 'services/analytics'
import css from './style.css'
import releases from './releases'
import MusicButton from './MusicButton'
import { SpotifyPlayer } from 'shared/components/SpotifyPlayer'

@trackPageView()
class Music extends Component {
  render () {
    return (
      <div>
        {releases.map((release, index) => {
          const { title, date, imageSrc, links, credits, spotifyURI } = release

          const coverJsx = (
            <div className={css.cover}>
              <div className={css.coverContainer}>
                <img src={imageSrc} alt={title} />
                <div className={css.credits}>
                  {credits.map((credit, index) => (
                    <p key={index}>{credit}</p>
                  ))}
                </div>
              </div>
            </div>
          )

          const linksJsx = (
            <div className={css.links}>
              <div className={css.playerWrapper}>
                <SpotifyPlayer songUri={spotifyURI} />
              </div>
              {links.map(({ type, url }) => (
                <MusicButton releaseTitle={title} type={type} to={url} key={type} />
              ))}
            </div>
          )

          return (
            <div className={css.release} key={index}>
              <h2 className={css.title}>
                {title}
              </h2>
              <h3 className={css.date}>
                {date}
              </h3>
              <MediaQuery maxWidth='1260px'>
                {coverJsx}
                {linksJsx}
              </MediaQuery>
              <MediaQuery minWidth='1261px'>
                {linksJsx}
                {coverJsx}
              </MediaQuery>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Music
