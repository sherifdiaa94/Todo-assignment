import React,{Component} from 'react';
import './Main.scss';
 import { Tile} from "carbon-components-react";
 import TodoList from './todolist.js'
 import AddTodo from './AddTodo'
import {connect} from 'react-redux'
import * as actions from './redux/actions'
import {bindActionCreators} from 'redux'

class App extends Component{
  constructor(){
      super()
  }
  
  componentDidMount() {
    this.props.fetchData()  

  }
  render(){
    return (
      
      <div className="App" data-test="Mainheader">
        <Tile className="Title-header">
          Todo List
        </Tile>
        <AddTodo {...this.props}/>
        <TodoList {...this.props}/>
        
      </div>

    );
  }
}

function mapStateToProps(state){
  return {
      list: state.list
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return { onFetchData: () => dispatch(fetchData()) }
// }
function mapDispatchToProps(dispatch){
  return bindActionCreators(actions,dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(App)

//export default Main;
