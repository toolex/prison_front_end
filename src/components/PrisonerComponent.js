import React, {Fragment} from 'react';
import FeedPrisoner from './FeedPrisoner';
import MovePrisoner from './MovePrisoner';

const PrisonerComponent = (props)=>{

  if(props.cell.length === 0){
    return (<p>Loading...</p>)
  }

  const prisoners = props.cell.prisoners.map(prisoner => prisoner)

  return(
    <Fragment>
    {prisoners.map((prisoner, index)=> {
      return (
        <h3 key={index} className = 'prisonerBox'>
          Prisoner Name: {prisoner.name}
          <p> Gang: {prisoner.gang} </p>
          <p> Morale: {prisoner.morale} </p>
          <FeedPrisoner prisoner = {prisoner} handleFeedPrisoner={props.handleFeedPrisoner}/>
          <MovePrisoner prisons = {props.prisons} onHandleMovePrisoner={props.onHandleMovePrisoner} />
          <button type="submit" value={prisoner.id} onClick={props.onPrisonerDelete}> Delete {prisoner.name}</button>
         </h3>
      )
    })}
    </Fragment>

  )
}

export default PrisonerComponent;
