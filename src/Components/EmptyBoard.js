import React from 'react'
import { emptyBoardText } from '../Constants/Constants'

function EmptyBoard() {
  return (
    <div className='empty-board'>{emptyBoardText}</div>
  )
}

export default EmptyBoard