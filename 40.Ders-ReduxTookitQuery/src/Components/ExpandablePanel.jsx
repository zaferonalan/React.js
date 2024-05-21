import React from 'react'
import { GoChevronLeft,GoChevronDown } from "react-icons/go";

const ExpandablePanel = ({ children, header }) => {
  return (
    <div className='panelDiv'>
      <div className='topArrangement'>
        <div className='topArrangement'>{header}</div>
        <div>
          <GoChevronLeft/>
        </div>
      </div>  
      
      {children}
    </div>
  )
}

export default ExpandablePanel