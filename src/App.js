import React from 'react'
import styled from 'styled-components'

import navigationBgUrl from './images/navigation_bg.jpg'
import mainBgUrl from './images/main_bg.jpg'

const Navigation = styled.div`
  background-image: url('${navigationBgUrl}');
  height: 100%;
  width: 333px;
  display: inline-block;
  top: 0;
  left: 0;
  position: absolute;
`

const Main = styled.div`
  background-image: url('${mainBgUrl}');
  background-size: 100% 1865px;
  height: 100%;
  position: absolute;
  left: 332px;
  top: 0;
  right: 0;
`

const App = () => (
  <div>
    <Navigation />
    <Main />
  </div>
)

export default App
