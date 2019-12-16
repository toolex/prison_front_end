import React, {Component, Fragment} from 'react'
import Request from '../helpers/request.js'
import CellComponent from '../components/CellComponent'

class PrisonContainer extends Component{
  constructor(props) {
    super(props);
    this.state = {
      prisons: []
    }
  }

  componentDidMount(){
    const request = new Request()
    request.get('/prisons')
    .then((data)=>{
      this.setState({prisons: data})
    })
  }

  render(){
    return (
      <Fragment>
      <CellComponent prisons={this.state.prisons}/>
      </Fragment>
    )
  }

}

export default PrisonContainer;
