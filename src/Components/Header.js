import React from 'react'

function PageTitle() {
  return (
    <div>
      <h1 className='header'><b>Header</b></h1>
      <select>
        <option value="all">All Tasks</option>
        <option value="Incomplete">Incomplete</option>
        <option value="Complete">Complete</option>
      </select>
      </div>
  )
}

export default PageTitle