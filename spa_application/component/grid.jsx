import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery'; 

var FlexGrid = React.createClass({

  handleClick: function(alignVal){
    $(".wj-state-selected").css("text-align",alignVal);
  },
  handleInput:function(e){
  ReactDOM.findDOMNode(this.refs.valuname).innerHTML=ReactDOM.findDOMNode(this.refs.name).value;
  },
  
  render: function() {
    return (
          <div >
          
          <input type="text" id="textValue" ref="name"/><button onClick={this.handleInput}>add</button>
          <p ref="valuname">{this.props.degaultData}</p>
          <span><button onClick={(e) => this.handleClick("left")}>Align-left</button>
          <button  onClick={(e) => this.handleClick("right")}>Align-right</button>
          <button  onClick={(e) => this.handleClick("center")}>align-center</button></span>
          <div ref="grid_01"></div>
        </div>
    );
  },

   getInitialState: function() {
    return {
      customAlign: 'center',
      // Grid options//{ readOnly: true }
      gridOpts: {
        selectionMode: wijmo.grid.SelectionMode.Cell,
        showSort: false,
        autoGenerateColumns: false,
        isReadOnly: true,
        columns: [
            {"header": "serial.NO", "binding":"id", "width":"*",align: this.customAlign},
            {"header": "Country", "binding":"country", "width":"*",align:'center'},
            {"header": "Amount", "binding":"amount", "width":"*",align:'center'}
        ],
        //note here that we are defining the formatter function here note that this calls the formatter in our script to actually apply the styling
        // the getAmountColor is the same funciton being called by both grids
        itemFormatter: function(panel, r, c, cell){
                // validate CellType and if correct column
                if (wijmo.grid.CellType.Cell == panel.cellType &&
                  panel.columns[c].binding == 'country') {

                  // get the cell's data
                  var cellData = panel.getCellData(r, c);

                  // set cell's foreground color
                  cell.style.color = "black";
                  cell.style.textAlign="center";
                }
                if (wijmo.grid.CellType.Cell == panel.cellType &&
                  panel.columns[c].binding == 'amount') {

                  // get the cell's data
                  var cellData = panel.getCellData(r, c);

                  // set cell's foreground color
                  cell.style.color = "black";
                  cell.style.textAlign="center";
                }
                if (wijmo.grid.CellType.Cell == panel.cellType &&
                  panel.columns[c].binding == 'id') {

                  // get the cell's data
                  var cellData = panel.getCellData(r, c);

                  // set cell's foreground color
                  cell.style.color = "black";
                  cell.style.textAlign="center";
                }
            },

      },

      // Default data
      grid_01_data: [
        {"id":0, "country":"Greece", "amount": 2000},
        {"id":1, "country":"USA", "amount": 100},
        {"id":2, "country":"UK", "amount": 750},
        {"id":3, "country":"Germany", "amount": 1500},
        {"id":4, "country":"Japan", "amount": 2000},
        {"id":5, "country":"Greece", "amount": 3000},
        {"id":6, "country":"india", "amount": 3000},
      ]

    };
  },

  //  Invoked once, both on the client and the server, immediately before the initial render occurs.    
  componentWillMount: function() 
  {

    // CollectionView with default data
    // Note: cv is created here so that "this.cv" is available throughout the lifecycle
    // Since we defined our data array in our getInitialState, we can reference it using the this.state call.   
    // Similiar to what we will do below with the options. 
    this.cv = new wijmo.collections.CollectionView( this.state.grid_01_data );
    this.cv.pageSize = 6;
  },
 
  // Invoked once, only on the client, immediately after the initial rendering occurs. 
  // At this point in the lifecycle, the component has a DOM representation which you can access via react.findDOMNode(this) 
  // If we want to integrate with other JS Frameworks, set timers using setTimeout or setInterval, or send AJAX requests, perform those operations in this method.  
  componentDidMount: function() 

  {
    // Create and connect the grid
    this.grid = new wijmo.grid.FlexGrid( ReactDOM.findDOMNode(this.refs.grid_01), this.state.gridOpts);
    this.grid.itemsSource = this.cv;

  },
  // Inovolked immediately after the component's updates are flushed to the DOM, this method is not called after initial render.
  // Use this an 
 
});
  FlexGrid.defaultProps={
  degaultData:"test"
}

export default FlexGrid;