import React,{Component} from 'react';
import './Main.scss';
import { Button,ListItem,OrderedList,Tile,Form, FormGroup,TextInput } from "carbon-components-react";
import store from './index'
import TodoList from './todolist.js'
import AddTodo from './AddTodo'
import { fetchData } from './redux/actions'

import {connect} from 'react-redux'
import * as actions from './redux/actions'
import {bindActionCreators} from 'redux'

class Main extends Component{
  constructor(){
      super()
  }
  
  componentDidMount() {
    this.props.fetchData()  

  }
  render(){
    return (
      
      <div className="App">
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

export default connect(mapStateToProps,mapDispatchToProps)(Main)

//export default Main;
