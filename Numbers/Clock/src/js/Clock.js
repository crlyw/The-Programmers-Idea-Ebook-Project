var React = require("react");
var ReactDOM = require("react-dom");

class Clock extends React.Component{
  render(){
    return (
      <div>Clock test</div>
    )
  }
}

ReactDOM.render(<Clock/>, document.getElementById("project"));
