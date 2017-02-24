import React from 'react';
import * as userApi from './api/user-api';
import * as dataApi from './api/data-api';
import ReactDatatable from 'table-react';
//import ReactDatatable from './components/react-datatables.jsx';
var T = require('i18n-react').default;

class App extends React.Component {

  componentWillMount(){
    // userApi.getUsers();
  }

  componentDidMount(){
    var _self = this;
      dataApi.getData().then(function(response){
          _self.userData = response.data;
          _self.coloumns = [
                    { title: "Name" },
                    { title: "Position" },
                    { title: "Office" },
                    { title: "Extn." },
                    { title: "Start date" },
                    { title: "Salary" }
                ];
          _self.forceUpdate();
        });
  }

  render() {
      return (
         <div>
           <ReactDatatable data={this.userData} columns={this.coloumns} />
         </div>
      );
   }
}

export default App;