
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../redux/actions'
//import * as types from '../../constants/ActionTypes'
import fetchMock from 'fetch-mock'
import expect from 'expect' 

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
  afterEach(() => {
    fetchMock.restore()
  })

  it('creates FETCH_TODOS_SUCCESS when fetching todos has been done', () => {
    fetchMock.getOnce('http://localhost:81/todoApp/api/todos', {
        body:{
      todolist: [ 
        {id:0,
        item:"First todo item"},
        {id:1,
        item:"Second todo item"},
        {id:2,
        item:"Third todo item"}
    ]}
}) 
    //   headers: { //'content-type': 'application/json',
    //   "x-Gateway-ApiKey": "2131",
    //   "csrf-token": "4324" }
    // })
    const expectedActions = [
      { type: "FETCH_DATA", body:{todolist: [ 
        {id:0,
        item:"First todo item"},
        {id:1,
        item:"Second todo item"},
        {id:2,
        item:"Third todo item"}
    ] }} 
    ]
    const store = mockStore({ todos: [] })

    return store.dispatch(actions.fetchData()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})