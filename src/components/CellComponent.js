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
        <th></th><br></br>
        <th></th><th></th>
        <th className = 'cellNumber' >Cell {cell.id}</th><th><button className = 'deleteCell' type="submit" value={cell.id} onClick={props.onCellDelete}>Delete Cell</button></th>
        <h1 key={index} className = 'cellBox'>
        <PrisonerComponent onHandleMovePrisoner={props.onHandleMovePrisoner} onPrisonerDelete={props.onPrisonerDelete} prisons={props.prisons} cell={cell} handleFeedPrisoner={props.handleFeedPrisoner}/>
        </h1>
        <th></th><br></br>
        </Fragment>
      )
    })}

    </Fragment>
  )

}


export default CellComponent;
