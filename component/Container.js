import { RegionCountryList } from "../component/regionCountryList";

import { getCountries } from "../actions/action-get-countries";


import { connect } from "react-redux";


const mapStateToProps = (state) => { 
 
    return { 
        result: state.event.result, 
        error: state.event.error, 
    }; 
}; 
const mapDispatchProps = (dispatch) => ({ 
    getCountries: (name) => dispatch(getCountries(name)) 
}); 
export default connect(mapStateToProps, mapDispatchProps)(RegionCountryList); 
