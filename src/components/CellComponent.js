import React, {Fragment} from 'react';
import 

const CellComponent = (props) => {
  if(props.prisons.length === 0){
    return (<p>Loading...</p>)
  }

  return(
    <Fragment>
    {console.log(props.prisons[0].cells)}
    {props.prisons[0].cells.map((cell, index) => {
      return (
        <h1 key={index} className = 'cellBox'> {cell.id} </h1>
      )
    })}
    <PrisonerComponent prisons={this.state.prisons}/>
    </Fragment>
  )

}

export default CellComponent;
