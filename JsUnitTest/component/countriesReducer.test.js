// 
import ACTION_TYPES from '../../actions/actionTypes'
import countriesReducer from '../../reducers/countriesReducer'
const INITIAL_STATE = {
    result: [],
    error: null
}
describe(' reducers countriesReducer', () => {
    
    it("should return default state", ()=>{
       const newstate = countriesReducer(INITIAL_STATE,{});
       expect(newstate).toEqual(INITIAL_STATE);
    })
    it("Success",()=>{
       
        const newstate =countriesReducer(INITIAL_STATE,{
            type:ACTION_TYPES.FETCH_SUCCESS,
            payload:['wartortle']
        });
        expect(newstate).toEqual({
            ...INITIAL_STATE , 
            result:['wartortle']
          }  )
    })
 
    it('failure', ()=>{
        const newstate =countriesReducer(INITIAL_STATE,{
            type:ACTION_TYPES.FETCH_FAIL,
            payload:""
        });
        expect(newstate).toEqual({
            ...INITIAL_STATE , 
            error:""
          })
    })
})