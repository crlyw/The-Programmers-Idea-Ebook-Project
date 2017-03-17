var React = require("react");
var ReactDOM = require("react-dom");

class TimePicker extends React.Component {

  render() {
    return (
      <div className="timePickerWrapper">
        <div className="timePickerHeading">Time Picker</div>
        <div className="timePickerContent">

        </div>
      </div>
    )
  };
}

ReactDOM.render(<TimePicker/>,document.getElementById("project"));
