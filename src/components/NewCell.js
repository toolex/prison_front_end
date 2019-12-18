import React, {Component, Fragment} from 'react';
import Request from '../helpers/request'

class NewCell extends Component{

  constructor(props){
    super(props);
    this.state = {
      cellNumber: ""
    }

  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleCellNumberChange = this.handleCellNumberChange.bind(this);
}

  handleSubmit(event){
    event.preventDefault();
    const cellNumber = this.state.cellNumber

    this.props.onCellSubmit({
      cellNumber: cellNumber,
    });

    this.setState({
      cellNumber: "",
    })

  }

  handleCellNumberChange(event){
    this.setState({
      cellNumber: event.target.value
    })
  }

  render(){
    if(this.props.prisons.length === 0){
      return null
    }

      return (
        <Fragment>
          <form id="form1">
            Cell Number: <input type="int"
                         name="cellNumber"
                         value={this.state.cellNumber}
                         onChange={this.handleCellNumberChange}
                  />
            <br/>
              <button type="submit" value="Post" onClick={this.handleSubmit}>Submit</button>
          </form>

            </Fragment>
            )
  }
  }

  export default NewCell;
