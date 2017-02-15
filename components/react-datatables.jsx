import React from 'react';
import * as dataApi from '../api/data-api';
var $ = require('jquery');
var dt = require( 'datatables.net' )( window, $ );

class ReactDatatable extends React.Component {

  componentWillMount(){
      
  }

  componentDidMount(){
        dataApi.getData().then(function(response){
           $('#example').DataTable( {
                data: response.data,
                columns: [
                    { title: "Name" },
                    { title: "Position" },
                    { title: "Office" },
                    { title: "Extn." },
                    { title: "Start date" },
                    { title: "Salary" }
                ]
            } );
        });
  }

  render() {
      return (
         <div>
           <table id="example" className="display" width="100%"></table>
         </div>
      );
   }
}

export default ReactDatatable;