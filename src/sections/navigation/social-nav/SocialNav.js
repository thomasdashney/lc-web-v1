import React from 'react'

import css from './style.scss'

import facebookImageUrl from './icons/facebook.png'
import instagramImageUrl from './icons/instagram.png'
import twitterImageUrl from './icons/twitter.png'
import youtubeImageUrl from './icons/youtube.png'
import soundcloudImageUrl from './icons/soundcloud.png'
import bandsintownImageUrl from './icons/bandsintown.png'

const socialLinks = [
  {
    src: facebookImageUrl,
    alt: 'Facebook',
    to: 'http://www.facebook.com/lostcousinsband'
  },
  {
    src: instagramImageUrl,
    alt: 'Instagram',
    to: 'http://www.instagram.com/lostcousinsband'
  },
  {
    src: twitterImageUrl,
    alt: 'Twitter',
    to: 'http://www.twitter.com/lostcousinsband'
  },
  {
    src: youtubeImageUrl,
    alt: 'Youtube',
    to: 'http://www.youtube.com/user/lostcousinsband'
  },
  {
    src: soundcloudImageUrl,
    alt: 'Soundcloud',
    to: 'http://www.soundcloud.com/lostcousinsband'
  },
  {
    src: bandsintownImageUrl,
    alt: 'Bandsintown',
    to: 'http://www.bandsintown.com/lostcousins'
  }
]

const SocialNav = () => (
  <ul className={css.socialLinks}>
    {socialLinks.map(({ to, src, alt }, index) => (
      <li key={index}>
        <a href={to} target='_blank'>
          <img src={src} alt={alt} />
        </a>
      </li>
    ))}
  </ul>
)

export default SocialNav
