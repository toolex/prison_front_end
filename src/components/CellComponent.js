import React, {Fragment} from 'react';
import PrisonerComponent from './PrisonerComponent';

const CellComponent = (props) => {
  if(props.prisons.length === 0){
    return (<p>Loading...</p>)
  }
  const cells = props.prisons[0].cells.map((cell) => cell)


  return(
    <Fragment>
    {cells.map((cell, index) => {
      return (
        <Fragment>
        <h1></h1>
        <h1 key={index} className = 'cellBox'> {cell.id}
          <PrisonerComponent cell={cell}/>
         </h1>

        </Fragment>

      )
    })}
    </Fragment>
  )

}


export default CellComponent;
