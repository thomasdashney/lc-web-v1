import styled from 'styled-components'

import navigationBgUrl from './navigation_bg.jpg'

const Navigation = styled.div`
  background-image: url('${navigationBgUrl}');
  height: 100%;
  width: 333px;
  display: inline-block;
  top: 0;
  left: 0;
  position: absolute;
`

export default Navigation
