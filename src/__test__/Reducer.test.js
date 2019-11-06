import reducer from '../reducers';

describe('Reducer', () => {
  it('should return the initial state', () => {
      expect(JSON.stringify(reducer(undefined, {}))).toEqual(JSON.stringify(
          {
            articles:{}
          }
      ))
  })

  it('reducer test for GET_LATEST_NEWS',() => {
      let state ={
        articles:[]
      }
      state = reducer(state, {
          action: "GET_LATEST_NEWS"
      })
      expect(state).toEqual({
        articles:[]
      })
  })
})
