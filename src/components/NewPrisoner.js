import React, {Component, Fragment} from 'react';

class NewPrisoner extends Component{

  constructor(props){
    super(props);
    this.state = {
      name: '',
      gang: '',
      cell: null,
      morale: 5
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleGangChange = this.handleGangChange.bind(this);
    this.handleCellChange = this.handleCellChange.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    const name = this.state.name.trim()
    const gang = this.state.gang.trim()
    const cell = this.state.cell
  }

  handleNameChange(event){
    this.setState({
      name: event.target.value
    })
  }

  handleGangChange(event){
    this.setState({
      gang: event.target.value
    })
  }

  handleCellChange(event){
    this.setState({
      cell: event.target.value
    })
  }


render(){


console.log(this.props)
  if(this.props.prisons.length === 0){
    return null
  }
  const cellList = this.props.prisons[0].cells.map((cell, index) => {
    return <option key={index}>{cell.id}</option>
  })

    return (
      <Fragment>
        <form onSubmit={this.props.handleSubmit}>
          Name: <input type="text"
                       name="name"
                       value={this.state.name}
                       onChange={this.handleNameChange}
                />
          <br/>
          Gang : <input type="text"
                        name="gang"
                        value={this.state.gang}
                        onChange={this.handleGangChange}
                        />
          <br/>
          Cell :<select value={this.state.cell} onChange={this.handleCellChange}>
            <option disabled selected>
            Cells
            </option>
              {cellList}
          </select>

        </form>
        <button type="submit" form="form1" value="Submit">Submit</button>
          </Fragment>
          )
}
}

export default NewPrisoner
