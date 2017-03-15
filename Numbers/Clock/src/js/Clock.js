var React = require("react");
var ReactDOM = require("react-dom");

class Clock extends React.Component {

    getCurrentTime() {
        var date = new Date();
        var hours = date.getHours();
        if (hours < 10) {
            hours = "0" + hours;
        }
        var minutes = date.getMinutes();
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        var secounds = date.getSeconds();
        if (secounds < 10) {
            secounds = "0" + secounds;
        }
        var result = hours + ":" + minutes + ":" + secounds;

        this.setState({
            currentTime: result
        });
    }

    constructor() {
        super();
        this.state = {
            currentTime: "",
            clockSettingShow:false,
            timeMeasure:false
        };
    };

    componentWillMount() {
        clearInterval(this.state.intervalId);
        this.getCurrentTime();
    }

    componentDidMount() {
        var intervalId = setInterval(() => {
            this.getCurrentTime();
        }, 1000);
        this.setState({
            intervalId: intervalId
        });
    }

    render() {
        const settingsShow = this.state.clockSettingShow?
        <div>
          <h3>Settings</h3>
        </div>
        :
        "";

        const timeMeasure = this.state.timeMeasure?
        <span>
          AM
        </span>
        :
        "";
        return (
          <div className="wrapper">
            <div className="clocktime">
              <div className="timeMeasurePicker">
                <button className="timeMeasurePicker1">12</button>
                <button className="timeMeasurePicker2">24</button>
              </div>
              <div>
                <div className="clockIcon hvr-grow"></div>
                {this.state.currentTime}
                {timeMeasure}
              </div>
              {settingsShow}
            </div>
          </div>
        )
    }
}

ReactDOM.render( < Clock / >,document.getElementById("project"));
