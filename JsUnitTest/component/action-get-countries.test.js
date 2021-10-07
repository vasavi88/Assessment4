import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { getCountries }  from "../../../src/actions/action-get-Countries";
 
const middleware = [thunk];
const mockStore = configureStore(middleware);
const mock = new MockAdapter(axios);
const store = mockStore();
 
describe("getCountries actions", () => {
  it("dispatches getCountries after a successfull API requets", () => {
    mock
      .onGet("https://pokeapi.co/api/v2/pokemon/wartortle")
      .reply(200, { data: [{ name: "torrent" }, { name: "rain-dish" }] });
    const Newstate = store.dispatch(getCountries()).then(() => {
      console.log(store.getCountries("wartortle"));
      let expectedActions = [
        {
          type: "ACTION_TYPES.FETCH_SUCCESS,",
          payload: { data: [{ name: "torrent" }, { name: "rain-dish" }] },
        },
        
        expect(Newstate).toEqual(expectedActions)
      ];
    })
})

})
it('dispatches FETCH_FAIL after a FAILED API requets', () => {
  mock.onGet("https://pokeapi.co/api/v2/pokemon/ty").reply(400, { error: { message: 'error message' } });
 const Newstate =store.dispatch(getCountries()).catch(() => {
      let expectedActions = [

          {
              type: 'ACTION_TYPES.FETCH_FAIL',
              payload: { error: { message: 'error message' } }
          }
      ]
      expect(Newstate).toEqual(expectedActions);
  });
});
