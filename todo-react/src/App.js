import Main from './Main'
import {connect} from 'react-redux'
import * as actions from './redux/actions'
import {withRouter} from 'react-router'
import {bindActionCreators} from 'redux'



function mapStateToProps(state){
    return {
        list: state.list
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(actions,dispatch)
}
const App = connect(mapStateToProps,mapDispatchToProps)(Main)


export default App