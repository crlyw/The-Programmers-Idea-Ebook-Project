var React = require("react");
var ReactDOM = require("react-dom");

class Clock extends React.Component {

    getCurrentTime() {
        var date = new Date();
        var hours = date.getHours();
        if (hours < 10 && this.state.isTwentyFourHours) {
            hours = "0" + hours;
        }else if(!this.state.isTwentyFourHours){
            if(hours-12>=0){
              this.state.isTwelveHoursAM = false;
              hours = hours-12;
            }else{
              if(hours<10){
                hours = "0" + hours;
              }
            }
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
            isTwentyFourHours:true,
            isTwelveHoursAM:true
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
        this.timeMeasurePicker2StyleChange();
    }

    timeMeasurePicker1StyleChange(){
        var timeMeasurePicker1 = document.getElementById("picker1");
        var timeMeasurePicker2 = document.getElementById("picker2");
        timeMeasurePicker1.style.opacity = 1;
        timeMeasurePicker2.style.opacity = 0.3;
        this.setState({isTwentyFourHours:false});
    }

    timeMeasurePicker2StyleChange(){
      var timeMeasurePicker1 = document.getElementById("picker1");
      var timeMeasurePicker2 = document.getElementById("picker2");
      timeMeasurePicker1.style.opacity = 0.3;
      timeMeasurePicker2.style.opacity = 1;
      this.setState({isTwentyFourHours:true});
    }

    timeJudge(){
      if(this.state.isTwentyFourHours){
        return "";
      }else if(!this.state.isTwentyFourHours && this.state.isTwelveHoursAM){
        return <i>AM</i>
      }else{
        return <i>PM</i>
      }
    }

    render() {
        const settingsShow = this.state.clockSettingShow?
        <div>
          <h3>Settings</h3>
        </div>
        :
        "";

        const timeMeasure = this.timeJudge();

        return (
          <div className="wrapper">
            <div className="clocktime">
              <div className="timeMeasurePicker">
                <span id="picker1" href="#" className="timeMeasurePicker1" onClick={this.timeMeasurePicker1StyleChange.bind(this)}>12</span>
                <span id="picker2" href="#" className="timeMeasurePicker2" onClick={this.timeMeasurePicker2StyleChange.bind(this)}>24</span>
              </div>
              <div>
                <div className="clockIcon hvr-grow">
                  <span className="tooltiptext">Click and set Alarm</span>
                </div>
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
