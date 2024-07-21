import React from 'react'
import loading from './spinner.gif'

const spinner = () => {
  return (
    <div className="tx_center">
      <img src={loading} alt="" />
    </div>
  )
}

export default spinner