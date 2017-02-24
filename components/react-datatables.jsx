var React = require('react');
var $ = require('jquery');
var dt = require( 'datatables.net' );
import styles from '../css/table.css';

var ReactDatatable = React.createClass({

  componentWillReceiveProps: function( nextProps ){
     if(nextProps.data.length > 0 && nextProps.columns.length > 0){
       nextProps.config['data'] = nextProps.data;
       nextProps.config['columns'] = nextProps.columns;
        $('#rv-datatable').DataTable( nextProps.config );
     }
  },

  componentDidMount: function(){
    
    if(this.props.data.length > 0 && this.props.columns.length > 0){
        this.props.config['data'] = this.props.data;
        this.props.config['columns'] = this.props.columns;
        $('#rv-datatable').DataTable( this.props.config );
    }
  },

	render: function() {
		return React.createElement(
        'div',
        null,
        React.createElement('table', { id: 'rv-datatable', className: 'display', width: '100%' })
      );
	}
});

ReactDatatable.defaultProps = {
  data: [],
  columns: [],
  config:{}
};

ReactDatatable.propTypes = {
  data: React.PropTypes.array.isRequired,
  columns: React.PropTypes.array.isRequired,
}

export default ReactDatatable;