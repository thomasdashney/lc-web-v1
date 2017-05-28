import React from 'react'

import css from './style.css'

export default () => (
  <div className={css.loadingSpinner} dangerouslySetInnerHTML={{ __html: `
    <svg width="40px" height="40px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <title>Spinner</title>
      <defs>
          <linearGradient x1="29.4703189%" y1="96.1828971%" x2="123.277693%" y2="37.7191608%" id="linearGradient-1">
              <stop stop-color="#FFFFFF" stop-opacity="0" offset="0%"></stop>
              <stop stop-color="#FFFFFF" offset="100%"></stop>
          </linearGradient>
          <path d="M715,1410 C719.970563,1410 724,1405.97056 724,1401 C724,1398.59881 723.059655,1396.41724 721.52713,1394.80348 C719.887269,1393.07668 717.56937,1392 715,1392 C710.029437,1392 706,1396.02944 706,1401 C706,1403.4771 707.000736,1405.72046 708.619971,1407.34785" id="path-2"></path>
          <mask id="mask-3" maskContentUnits="userSpaceOnUse" maskUnits="objectBoundingBox" x="-3" y="-3" width="24" height="24">
              <rect x="703" y="1389" width="24" height="24" fill="white"></rect>
              <use xlink:href="#path-2" fill="black"></use>
          </mask>
      </defs>
      <g id="Public-Views" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="IndividualMemberPurchase-Payment1" transform="translate(-703.000000, -1389.000000)" stroke="url(#linearGradient-1)" stroke-width="6">
              <use id="Spinner" mask="url(#mask-3)" transform="translate(715.000000, 1401.000000) rotate(190.000000) translate(-715.000000, -1401.000000) " xlink:href="#path-2"></use>
          </g>
      </g>
    </svg>
  `}} />
)
