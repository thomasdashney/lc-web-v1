import React from 'react'
import styled from 'styled-components'

import { Navigation } from './sections/navigation'
import { Tour } from './sections/tour'

import mainBgUrl from './images/main_bg.jpg'

const Main = styled.div`
  background-image: url('${mainBgUrl}');
  background-size: 100% 1865px;
  @media screen and (max-width: 1200px) {
    background-size: auto;
  }
  height: 100%;
  position: absolute;
  left: 332px;
  top: 0;
  right: 0;
`

const App = () => (
  <div>
    <Navigation />
    <Main>
      <Tour />
    </Main>
  </div>
)

export default App
