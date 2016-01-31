import qs from 'query-string';

/*
* Shared Utility for sending messages to client app using javascript bridge
*/
const Querystring = {

  parse() {    
    let qsValue = location.search || location.hash.substring(location.hash.indexOf('?'));

  	return qs.parse(qsValue);
  }
}

export default Querystring;
