import React, {Component, Fragment} from 'react'
import Request from '../helpers/request.js'
import CellComponent from '../components/CellComponent'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NewPrisoner from '../components/NewPrisoner'
import FeedPrisoner from '../components/FeedPrisoner'
import NavBar from '../components/NavBar'

class PrisonContainer extends Component{
  constructor(props) {
    super(props);
    this.state = {
      prisons: []
    }
    this.handlePrisonerSubmit = this.handlePrisonerSubmit.bind(this)
    this.handlePost = this.handlePost.bind(this)
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
            <NavBar />
            <Switch>
            <Route exact path="/" render={() => <CellComponent prisons={this.state.prisons} handleFeedPrisoner={this.handleFeedPrisoner}/>}/>
            <Route path="/newprisoner" render={() => <NewPrisoner onPrisonerSubmit={this.handlePrisonerSubmit} prisons={this.state.prisons} />} />
          </Switch>
      </Fragment>
    </Router>
    )
  }

}

export default PrisonContainer;
