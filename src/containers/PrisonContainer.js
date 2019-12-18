import React, {Component, Fragment} from 'react'
import Request from '../helpers/request.js'
import CellComponent from '../components/CellComponent'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NewPrisoner from '../components/NewPrisoner'
import FeedPrisoner from '../components/FeedPrisoner'
import NavBar from '../components/NavBar'
import NewCell from '../components/NewCell'

class PrisonContainer extends Component{
  constructor(props) {
    super(props);
    this.state = {
      prisons: []
    }
    this.handlePrisonerSubmit = this.handlePrisonerSubmit.bind(this)
    this.handleCellSubmit = this.handleCellSubmit.bind(this)
    this.handlePost = this.handlePost.bind(this)
    this.handleCellDelete = this.handleCellDelete.bind(this)
    this.handlePrisonerDelete = this.handlePrisonerDelete.bind(this)
    this.handleFeedPrisoner = this.handleFeedPrisoner.bind(this)
  }

    componentDidMount() {
    const request = new Request();
    request.get('/prisons').then((data) => {
      this.setState({prisons: data})
    })
  }

  handlePost(prisoner){
    const request = new Request()
    request.post('/prisoners', prisoner)
    .then(()=>{
      window.location = '/prisoners'
    })
  }

  handlePrisonerSubmit(submittedPrisoner){
    const currentPrisons = this.state.prisons
    currentPrisons[0].cells.forEach((cell)=> {
      if(cell.id === submittedPrisoner.cell){
        cell.prisoners.push(submittedPrisoner)
      }
    })
  }

  handleCellSubmit(submittedCell){
    this.state.prisons.forEach((prison)=> {
        prison.cells.push(submittedCell)
      }
    )
  }

  handleCellDelete(event){
    const updatedPrisons = this.state.prisons.map((prison)=> {
        prison.cells = prison.cells.filter(cell => {
          return cell.id !== parseInt(event.target.value)
        })
        return prison
      })
    this.setState({prisons: updatedPrisons})
  }

  handlePrisonerDelete(event){
    const updatedPrisons = this.state.prisons.map((prison)=> {
      prison.cells.map(cell => {
        cell.prisoners = cell.prisoners.filter(prisoner => {
              return prisoner.id !== parseInt(event.target.value)
            })
      })
        return prison
      })
      console.log("updatedPrisons is", updatedPrisons);
    this.setState({prisons: updatedPrisons})
}
    handleFeedPrisoner(event){
      const id = event.target.value
      const request = new Request();
      request.patch('/api/prisoners/' + id, {morale: 10} )
      .then((response) => {
        request.get('/prisons').then((data) => {
          this.setState({prisons: data})
        })
      })
  }

  render(){
    return (
      <Router>
        <Fragment>
            <NavBar/>
            <Switch>
            <Route exact path="/" render={() => <CellComponent handleFeedPrisoner={this.handleFeedPrisoner} onPrisonerDelete={this.handlePrisonerDelete} onCellDelete={this.handleCellDelete} prisons={this.state.prisons}/>}/>
            <Route path="/newprisoner" render={() => <NewPrisoner onPrisonerSubmit={this.handlePrisonerSubmit} prisons={this.state.prisons} />} />
            <Route path="/newcell" render={() => <NewCell onCellSubmit={this.handleCellSubmit} prisons={this.state.prisons} />} />
          </Switch>
      </Fragment>
    </Router>
    )
  }

}

export default PrisonContainer;
