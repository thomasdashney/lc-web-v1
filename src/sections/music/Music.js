import React from 'react'
import MediaQuery from 'react-responsive'

import css from './style.scss'
import releases from './releases'
import MusicButton from './MusicButton'

const Music = () => (
  <div>
    {releases.map((release, index) => {
      const { title, year, imageSrc, links } = release

      const coverJsx = (
        <div className={css.cover}>
          <img src={imageSrc} alt={title} />
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
          <h4 className={css.title}>
            {title}, {year}
          </h4>
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

export default Music
