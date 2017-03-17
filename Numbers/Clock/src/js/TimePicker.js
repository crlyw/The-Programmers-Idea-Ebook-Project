var React = require("react");
var ReactDOM = require("react-dom");

class TimePicker extends React.Component {

  render() {
    return (
      <div className="timePickerWrapper">
        <div className="timePickerHeading">Time Picker</div>
        <div className="timePickerContent">

          <div className="hour picker">
            <div className="hourUpArrow">
              <div className="upArrow"></div>
            </div>
            <div className="hourText text">00</div>
            <div className="hourDownArrow">
              <div className="downArrow"></div>
            </div>
          </div>

          <div className="minute picker">
            <div className="minuteUpArrow">
              <div className="upArrow"></div>
            </div>
            <div className="minuteText text">00</div>
            <div className="minuteDownArrow">
              <div className="downArrow"></div>
            </div>
          </div>

          <div className="hourClock picker">
            <div className="hourClockUpArrow">
              <div className="upArrow"></div>
            </div>
            <div className="hourClockText text">AM</div>
            <div className="hourClockDownArrow">
              <div className="downArrow"></div>
            </div>
          </div>

        </div>
      </div>
    )
  };
}
