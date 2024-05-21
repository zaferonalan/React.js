import { useState } from 'react'
import { GoChevronLeft,GoChevronDown } from "react-icons/go";

const ExpandablePanel = ({ children, header }) => {
const [expandet, setExpandet] = useState(false)

  const handleClick = () => {
    setExpandet(!expandet)
  }

  return (
    <div className='panelDiv'>
      <div className='topArrangement'>
        <div className='topArrangement'>{header}</div>
        <div onClick={handleClick}>
          {expandet ? <GoChevronDown/> : <GoChevronLeft/>}
          
        </div>
      </div>  

      {/*! expandet true olduğu müddetçe. Soru işaretiyle de yapılabilir */}
      { expandet && <div> {children} </div>}  

    </div>
  )
}

export default ExpandablePanel