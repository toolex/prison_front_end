import React, {Fragment, Component} from 'react';

class MovePrisoner extends Component{
  constructor(props){
    super(props);
    this.state = {
      cell: null,
    }
  }

  handleClick(event){
    event.preventDefault();
    console.log(event.target.value);
    const cell = this.state.cell

    this.props.onHandleMovePrisoner({
      cell: Number(cell)
    });

    this.setState({
      cell: null
    })
  }

render(){
  const cellList = this.props.prisons[0].cells.map((cell, index) => {
    return <option key={index}>{cell.id}</option>
  })

  return (
    <Fragment>
    <form>
    Select Cell :<select value={this.state.cell}>
      <option disabled selected>
      Cells
      </option>
        {cellList}
    </select>
    <button type="submit" value={this.state.cell} onClick={this.handleClick} >Move</button>
    </form>

    </Fragment>
  )

}
}
export default MovePrisoner
