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
        <Fragment>
        <h3 key={index} className = 'prisonerBox'> {prisoner.name} - {prisoner.gang} </h3>
        <button type="submit" value={prisoner.id} onClick={props.onPrisonerDelete}> Delete Prisoner</button>
        </Fragment>
      )
    })}
    </Fragment>
  )
}

export default PrisonerComponent;
