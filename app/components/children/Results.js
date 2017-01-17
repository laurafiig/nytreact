// Include React
var React = require("react");

// This is the History component. It will be used to show a log of  recent searches.
var Results = React.createClass({
  // Here we describe this component's render method
  
  render: function() {
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Search Results</h3>
        </div>
        <div className="panel-body text-center">
          <p></p>
          {/* Here we use a map function to loop through an array in JSX */}
         {/*
          {this.props.results.map(function(search, i) {
            return (
              <p key={i}>{search.title}</p>
            );
          })}
          */}
                 
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Results;
