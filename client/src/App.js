import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import LeftName, { setLeftName,removeLeftName } from './Redux/slice/leftName'
import LeftTable from './Pages.js/LeftTable'
import RightTable from './Pages.js/RightTable'
const App = () => {

  const leftname = useSelector((state) => state.leftName.value)
  const dispatch = useDispatch();

  return (
   <>
    <div className='flex flex-row gap-5 justify-center mt-10'>
    <LeftTable/>
    <RightTable/>
    </div>

   </>
  )
}

export default App