import React, {Fragment} from 'react';

const PrisonerComponent = (props)=>{

  if(props.cell.length === 0){
    return (<p>Loading...</p>)
  }

  const prisoners = props.cell.prisoners.map(prisoner => prisoner)

  return(
    <Fragment>
    {prisoners.map((prisoner, index)=> {
      return (
        <h3 key={index} className = 'prisonerBox'> {prisoner.name} - {prisoner.gang} </h3>
      )
    })}
    </Fragment>
  )
}

export default PrisonerComponent;
