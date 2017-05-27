import React, { Component } from 'react'
import MediaQuery from 'react-responsive'

import { trackPageView } from 'services/analytics'
import css from './style.scss'
import releases from './releases'
import MusicButton from './MusicButton'

@trackPageView()
class Music extends Component {
  render () {
    return (
      <div>
        {releases.map((release, index) => {
          const { title, date, imageSrc, links } = release

          const coverJsx = (
            <div className={css.cover}>
              <div className={css.coverContainer}>
                <img src={imageSrc} alt={title} />
                <div className={css.credits}>
                  <p>
                    Written and Performed by Lost Cousins
                  </p>
                  <p>
                    Produced, Engineered & Mixed by Darryl Neudorf
                  </p>
                  <p>
                    Mastered by Peter J. Moore
                  </p>
                  <p>
                    Artwork by Mady Newey
                  </p>
                </div>
              </div>
            </div>
          )

          const linksJsx = (
            <div className={css.links}>
              {links.map(({ type, url }) => (
                <MusicButton type={type} to={url} key={type} />
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
