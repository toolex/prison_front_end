import React, {Component, Fragment} from 'react';
import Request from '../helpers/request'

class NewPrisoner extends Component{

  constructor(props){
    super(props);
    this.state = {
      name: '',
      gang: '',
      cell: {id: null},
      morale: 5,
      prisonerToPost: null
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleGangChange = this.handleGangChange.bind(this);
    this.handleCellChange = this.handleCellChange.bind(this);
  }

  componentDidMount() {
  const request = new Request();
  request.get('/prisons').then((data) => {
    this.setState({prisonerToPost: data})
  })
}

  handleSubmit(event){
    event.preventDefault();
    const name = this.state.name.trim()
    const gang = this.state.gang.trim()
    const cell = this.state.cell

    this.props.onPrisonerSubmit({
      name: name,
      morale: this.state.morale,
      gang: gang,
      cell: {id:2}
    });

    this.setState({
      name: '',
      gang: '',
      cell: null,
    })

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


  if(this.props.prisons.length === 0){
    return null
  }
  const cellList = this.props.prisons[0].cells.map((cell, index) => {
    return <option key={index}>{cell.id}</option>
  })

    return (
      <Fragment>
        <form id="form1">
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
            <button type="submit" value="Post" onClick={this.handleSubmit}>Submit</button>
        </form>

          </Fragment>
          )
}
}

export default NewPrisoner
