import React, {Component, Fragment} from 'react'
import Request from '../helpers/request.js'
import CellComponent from '../components/CellComponent'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NewPrisoner from '../components/NewPrisoner'

class PrisonContainer extends Component{
  constructor(props) {
    super(props);
    this.state = {
      prisons: []
    }
    this.handlePrisonerSubmit = this.handlePrisonerSubmit.bind(this)
  }

  componentDidMount(){
    const request = new Request()
    request.get('/prisons')
    .then((data)=>{
      this.setState({prisons: data})
    })
}

// getCellFromPrisoner(Prisoner){
//
// }

  handlePrisonerSubmit(submittedPrisoner){
    const currentPrisons = this.state.prisons
    console.log(submittedPrisoner.cell);
    console.log(currentPrisons);
    currentPrisons[0].cells.forEach((cell)=> {
      console.log(cell.id);
      if(cell.id === submittedPrisoner.cell){
        console.log("HI");
        cell.prisoners.push(submittedPrisoner)
      }
    })
    // currentPrisons[0].cells.getCellFromPrisoner(submittedPrisoner)
    // const selectedCell = submittedPrisoner.cell
    console.log(currentPrisons);
  //  this.setState({prisons: currentPrisons})
  }




  render(){
    return (
      <Router>
        <Fragment>
            <a href="http://localhost:3000/newprisoner" className="formButton">Add Prisoner</a>
            <Switch>
            <Route exact path="/" render={() => <CellComponent prisons={this.state.prisons}/>}/>
            <Route path="/newprisoner" render={() => <NewPrisoner onPrisonerSubmit={this.handlePrisonerSubmit} prisons={this.state.prisons} />} />
          </Switch>
      </Fragment>
    </Router>
    )
  }

}

export default PrisonContainer;
