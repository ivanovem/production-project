import './Loader.scss'
import React from 'react'

export const Loader = (): JSX.Element => {
  return (
      <div className="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
      </div>
  )
}
