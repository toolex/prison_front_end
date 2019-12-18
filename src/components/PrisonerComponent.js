import React, {Fragment} from 'react';
import FeedPrisoner from './FeedPrisoner';

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
          <p> Gang: - {prisoner.gang} </p>
          <p> Morale: - {prisoner.morale} </p>
          <FeedPrisoner handleFeedPrisoner={this.props.handleFeedPrisoner}/>
         </h3>
      )
    })}
    </Fragment>

  )
}

export default PrisonerComponent;
