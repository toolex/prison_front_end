import React, {Fragment} from 'react';
import PrisonerComponent from './PrisonerComponent';

const CellComponent = (props) => {
  if(props.prisons.length === 0){
    return (<p>Loading...</p>)
  }
  console.log("cell component has cells?", props.prisons[0]);
  const cells = props.prisons[0].cells.map((cell) => cell)


  return(
    <Fragment>
    {cells.map((cell, index) => {
      return (
        <Fragment>
        <h1></h1>
        <h1 key={index} className = 'cellBox'> {cell.id}
          <PrisonerComponent onPrisonerDelete={props.onPrisonerDelete} prisons={props.prisons} cell={cell} handleFeedPrisoner={props.handleFeedPrisoner}/>
         </h1>
         <button type="submit" value={cell.id} onClick={props.onCellDelete}> Delete Cell</button>

        </Fragment>

      )
    })}
    </Fragment>
  )

}


export default CellComponent;
