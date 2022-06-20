import React from 'react'

function DataDisplay(props) {
  if (!props.statusFlag) {
    return(
      <div>
        <img className='mt-3' src="https://i.pinimg.com/originals/32/45/0b/32450ba5ee9609faafecac80d2d83422.jpg" alt="Obi Wan showing visible confusion" srcset="" />
        <h3>Estos no son los droides que está buscando.</h3>
      </div>
    )
  }

  return (
    <div>
      <ul>
        {
          Object.keys(props.apiResponse).slice(0, 5).map((key, index) => {
            return(
              <li key={index}>{ key }: { props.apiResponse[key] }</li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default DataDisplay