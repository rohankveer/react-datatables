import React from 'react';
import * as userApi from './api/user-api';
import ReactDatatable from './components/react-datatables.jsx'
var T = require('i18n-react').default;

class App extends React.Component {

  componentWillMount(){
    // userApi.getUsers();
  }

  render() {
      return (
         <div>
           <ReactDatatable />
         </div>
      );
   }
}

export default App;