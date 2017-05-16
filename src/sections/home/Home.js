import React from 'react'

import css from './style.scss'
import gardenPhotoUrl from './lc_garden.jpg'

export default () => (
  <div className={css.home}>
    <img src={gardenPhotoUrl} alt='Lost Cousins' />
    <p>
      Family isn’t always bound by blood. In the case of Lost Cousins
      it is bound through the kindred connection found in their unique
      blend of psychedelic soul rock. Coming together as students in
      Kingston, ON, Dylan Cantlon Hay, Cam Duffin, Lloyd McArton and
      Thomas Dashney had humble beginnings at house concerts and basement
      performances, where they became known for their high-energy live
      shows and memorable songwriting.
    </p>
    <p>
      The group released their debut EP Not Now What We Were in April of
      2015, uprooting them from their Kingston student house to their new
      home of Toronto, where they found themselves land in the Top 10 of
      CBC Music’s Searchlight competition. The collection of songs
      demonstrates the band’s journey of coming into its own, combining
      influences from the past with soulful lyrics that express growth
      and transformation.
    </p>
    <p>
      For the past two years, Lost Cousins have toured extensively through
      Canada and the United States, including performances at WayHome Music
      & Arts Festival and CityFolk Festival, as well as opening for acts
      such as The Strumbellas, Hollerado, and The Wooden Sky. This May,
      the band is touring eastern Canada and the U.S. for a string of dates
      in support of Saskatchewan indie rock act Close Talker. After spending
      the winter writing and refining new material in the spare bedroom
      studio in their east Toronto home, the band is set to release a single
      for their song “Quarters” this coming June. Following the release, the
      summer will see Lost Cousins making appearances at festivals such as
      NxNE Port Lands and Hillside Festival.
    </p>
  </div>
)
