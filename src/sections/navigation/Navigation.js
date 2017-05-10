import React from 'react'
import styled from 'styled-components'

import navigationBgUrl from './navigation_bg.jpg'

import Logo from './logo/Logo'
import NavigationLinks from './navigation-links/NavigationLinks'
import SocialNav from './social-nav/SocialNav'

const Navigation = styled.div`
  background-image: url('${navigationBgUrl}');
  height: 100%;
  width: 333px;
  display: inline-block;
  top: 0;
  left: 0;
  position: absolute;
`

export default () => (
  <Navigation>
    <Logo />
    <NavigationLinks />
    <SocialNav />
  </Navigation>
)
