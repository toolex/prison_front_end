import React, {Component, Fragment} from 'react';
import Request from '../helpers/request'

class NewCell extends Component{

  constructor(props){
    super(props);
    this.state = {
      id: '',
      prisoners: []
    }

  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleIdChange = this.handleIdChange.bind(this);
}

  handleSubmit(event){
    event.preventDefault();
    const id = this.state.id

    this.props.onCellSubmit({
      id: Number(id),
      prisoners: this.state.prisoners
    });

    this.setState({
      id: "",
    })

  }

  handleIdChange(event){
    this.setState({
      id: event.target.value
    })
  }

  render(){
    if(this.props.prisons.length === 0){
      return null
    }

      return (
        <Fragment>
        <br>
        </br>
          <form id="form1">
            Cell Number: <input type="int"
                         name="id"
                         value={this.state.id}
                         onChange={this.handleIdChange}
                  />
            <br/>
              <button type="submit" value="Post" onClick={this.handleSubmit}>Submit</button>
          </form>

            </Fragment>
            )
  }
  }

  export default NewCell;
