import React from 'react'

function Pagetitle(props) {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className='fs-1 text-uppercase text-center display-1 my-3'>{props.title}</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default Pagetitle
