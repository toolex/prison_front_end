import React, {Fragment} from 'react';
import PrisonerComponent from './PrisonerComponent'

const FeedPrisoner = (props) =>{

  return (
    <button value={props.prisoner.id} onClick={props.handleFeedPrisoner}>Feed {props.prisoner.name}</button>
  )

}

export default FeedPrisoner
