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
              if(hours<10){
                hours = "0" + hours;
              }
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

        if(this.checkAlarmTime()){
          document.getElementById("audio").play();
          setTimeout(() => {
              document.getElementById("audio").pause();
          }, 20000);
        }
    }

    checkAlarmTime(){
      var hours = parseInt(this.state.currentTime.split(":")[0]);
      var minutes = parseInt(this.state.currentTime.split(":")[1]);
      var secounds = parseInt(this.state.currentTime.split(":")[2]);
      if(!this.state.isTwelveHoursAM){
        hours = hours + 12;
      }
      if(this.state.clockTime!=""){
        var clockHours = parseInt(this.state.clockTime.split(":")[0]);
        var clockMinutes = parseInt(this.state.clockTime.split(":")[1]);
        if(this.state.clockTime.includes("PM")){
          clockHours = clockHours+12;
        }
      }

      if(hours == clockHours && minutes == clockMinutes && secounds == 0){
        return true;
      }
      return false;
    }

    constructor() {
        super();
        this.state = {
            currentTime: "",
            clockSettingShow:false,
            isTwentyFourHours:true,
            isTwelveHoursAM:true,
            isTimerPickerShowed:false,
            hoursSetting:"00",
            minutesSetting:"00",
            twelveHourSetting:"AM",
            isClockTimeSetted:true,
            clockTime:""
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
        var picker1ToolTip = document.getElementById("picker1ToolTip");
        var picker2ToolTip = document.getElementById("picker2ToolTip");
        timeMeasurePicker1.style.opacity = 1;
        timeMeasurePicker2.style.opacity = 0.3;
        picker1ToolTip.style.opacity = 1;
        picker2ToolTip.style.opacity = 1;
        this.setState({isTwentyFourHours:false});
    }

    timeMeasurePicker2StyleChange(){
        var timeMeasurePicker1 = document.getElementById("picker1");
        var timeMeasurePicker2 = document.getElementById("picker2");
        var picker1ToolTip = document.getElementById("picker1ToolTip");
        var picker2ToolTip = document.getElementById("picker2ToolTip");
        timeMeasurePicker1.style.opacity = 0.3;
        timeMeasurePicker2.style.opacity = 1;
        picker1ToolTip.style.opacity = 1;
        picker2ToolTip.style.opacity = 1;
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

    popUpTimePicker(){
      if(this.state.clockTime!=""){
        document.getElementById("mask").style.visibility="visible";
        return;
      }
      if(!this.state.isTimerPickerShowed){
        document.getElementById("clockTimeWarpper").style.height="280px";
        document.getElementById("timePickerPopup").style.visibility="visible";
        document.getElementById("timePickerPopup").style.opacity=1;
        this.setState({isTimerPickerShowed:true});
      }else{
        document.getElementById("clockTimeWarpper").style.height="80px";
        document.getElementById("timePickerPopup").style.visibility="hidden";
        document.getElementById("timePickerPopup").style.opacity=0;
        this.setState({isTimerPickerShowed:false});
      }
    }

    addHours(){
      document.getElementById("hourDownArrow").style.borderTop="15px solid #000";
      var hours = parseInt(this.state.hoursSetting);
      if(hours===11){
        document.getElementById("hourUpArrow").style.borderBottom="15px solid #9e9e9e";
        return;
      }
      hours = hours + 1;
      if(hours<10){
        hours = "0" +hours;
      }else{
        hours = "" + hours;
      }
      if(parseInt(hours)===11){
        document.getElementById("hourUpArrow").style.borderBottom="15px solid #9e9e9e";
        this.setState({hoursSetting : hours});
        return;
      }
      this.setState({hoursSetting : hours});
    }

    subtractHours(){
      var hours = parseInt(this.state.hoursSetting);
      if(hours===0){
        document.getElementById("hourDownArrow").style.borderTop="15px solid #9e9e9e";
        return;
      }
      document.getElementById("hourUpArrow").style.borderBottom="15px solid #000";
      hours = hours - 1;
      if(hours<10){
        hours = "0" +hours;
      }else{
        hours = "" + hours;
      }
      if(parseInt(hours)===0){
        document.getElementById("hourDownArrow").style.borderTop="15px solid #9e9e9e";
        this.setState({hoursSetting : hours});
        return;
      }
      this.setState({hoursSetting : hours});
    }

    addMinutes(){
      document.getElementById("minuteDownArrow").style.borderTop="15px solid #000";
      var minutes = parseInt(this.state.minutesSetting);
      if(minutes===59){
        document.getElementById("minuteUpArrow").style.borderBottom="15px solid #9e9e9e";
        return;
      }
      minutes = minutes + 1;
      if(minutes<10){
        minutes = "0" +minutes;
      }else{
        minutes = "" + minutes;
      }
      if(parseInt(minutes)===59){
        document.getElementById("minuteUpArrow").style.borderBottom="15px solid #9e9e9e";
        this.setState({minutesSetting : minutes});
        return;
      }
      this.setState({minutesSetting : minutes});
    }

    subtractMinutes(){
      var minutes = parseInt(this.state.minutesSetting);
      if(minutes===0){
        document.getElementById("minuteDownArrow").style.borderTop="15px solid #9e9e9e";
        return;
      }
      document.getElementById("minuteUpArrow").style.borderBottom="15px solid #000";
      minutes = minutes - 1;
      if(minutes<10){
        minutes = "0" +minutes;
      }else{
        minutes = "" + minutes;
      }
      if(parseInt(minutes)===0){
        document.getElementById("minuteDownArrow").style.borderTop="15px solid #9e9e9e";
        this.setState({minutesSetting : minutes});
        return;
      }
      this.setState({minutesSetting : minutes});
    }

    twelveHourChangeToAM(){
      if(this.state.twelveHourSetting=="AM"){
        document.getElementById("hourClockUpArrow").style.borderBottom="15px solid #000";
        document.getElementById("hourClockDownArrow").style.borderTop="15px solid #9e9e9e";
        return;
      }
      document.getElementById("hourClockUpArrow").style.borderBottom="15px solid #000";
      document.getElementById("hourClockDownArrow").style.borderTop="15px solid #9e9e9e";
      this.setState({twelveHourSetting:"AM"});
    }

    twelveHourChangeToPM(){
      if(this.state.twelveHourSetting=="PM"){
        document.getElementById("hourClockUpArrow").style.borderBottom="15px solid #9e9e9e";
        document.getElementById("hourClockDownArrow").style.borderTop="15px solid #000";
        return;
      }
      document.getElementById("hourClockUpArrow").style.borderBottom="15px solid #9e9e9e";
      document.getElementById("hourClockDownArrow").style.borderTop="15px solid #000";
      this.setState({twelveHourSetting:"PM"});
    }

    cancelTimePick(){
      if(this.state.isTimerPickerShowed){
        document.getElementById("clockTimeWarpper").style.height="80px";
        document.getElementById("timePickerPopup").style.visibility="hidden";
        document.getElementById("timePickerPopup").style.opacity=0;
        this.setState({isTimerPickerShowed:false});
        this.setState({hoursSetting:"00"});
        this.setState({minutesSetting:"00"});
        this.setState({twelveHourSetting:"AM"});

        //Reset
        document.getElementById("hourUpArrow").style.borderBottom="15px solid #000";
        document.getElementById("hourDownArrow").style.borderTop="15px solid #9e9e9e";

        document.getElementById("minuteUpArrow").style.borderBottom="15px solid #000";
        document.getElementById("minuteDownArrow").style.borderTop="15px solid #9e9e9e";

        document.getElementById("hourClockUpArrow").style.borderBottom="15px solid #000";
        document.getElementById("hourClockDownArrow").style.borderTop="15px solid #9e9e9e";
      }
    }

    confirmClockTime(){
      var hours = this.state.hoursSetting;
      var minutes = this.state.minutesSetting;
      var twelveHourSetting = this.state.twelveHourSetting;
      this.setState({clockTime:hours + " : " + minutes + " " + twelveHourSetting});
      document.getElementById("clockTime").style.display = "block";
      document.getElementById("clockTime").style.animation = "myScale 1.2s";
      this.cancelTimePick();
    }

    comfirmCancel(){
      document.getElementById("clockTimeWarpper").style.height="80px";
      document.getElementById("timePickerPopup").style.visibility="hidden";
      document.getElementById("timePickerPopup").style.opacity=0;
      this.setState({isTimerPickerShowed:false});
      this.setState({hoursSetting:"00"});
      this.setState({minutesSetting:"00"});
      this.setState({twelveHourSetting:"AM"});
      this.setState({clockTime:""});

      document.getElementById("mask").style.visibility="hidden";

      //Reset
      document.getElementById("clockTime").style.display = "none";

      document.getElementById("hourUpArrow").style.borderBottom="15px solid #000";
      document.getElementById("hourDownArrow").style.borderTop="15px solid #9e9e9e";

      document.getElementById("minuteUpArrow").style.borderBottom="15px solid #000";
      document.getElementById("minuteDownArrow").style.borderTop="15px solid #9e9e9e";

      document.getElementById("hourClockUpArrow").style.borderBottom="15px solid #000";
      document.getElementById("hourClockDownArrow").style.borderTop="15px solid #9e9e9e";
    }

    comfirmNotCancel(){
      document.getElementById("mask").style.visibility="hidden";
    }

    render() {
        const settingsShow = this.state.clockSettingShow?
        <div>
          <h3>Settings</h3>
        </div>
        :
        "";

        const timeMeasure = this.timeJudge();

        const clockTimeSetted = this.state.isClockTimeSetted?
        <div id="clockTime" className="myClockTime">
          <span className="clockTimeIcon">
            <i className="fa fa-clock-o fa-2x" aria-hidden="true"></i>
            <span id="picker1ToolTip" className="tooltiptext">Clock will alarm at<br/>{this.state.clockTime}</span>
          </span>
        </div>
        :
        "";

        return (
          <div className="wrapper">
            <div id="clockTimeWarpper" className="clocktime">
              {clockTimeSetted}
              <div className="timeMeasurePicker">
                <span id="picker1" href="#" className="timeMeasurePicker1" onClick={this.timeMeasurePicker1StyleChange.bind(this)}>
                  12
                  <span id="picker1ToolTip" className="tooltiptext">12 Hours Time Set</span>
                </span>
                <span id="picker2" href="#" className="timeMeasurePicker2" onClick={this.timeMeasurePicker2StyleChange.bind(this)}>
                  24
                  <span id="picker2ToolTip" className="tooltiptext">24 Hours Time Set</span>
                </span>
              </div>
              <div>
                <div className="clockIcon hvr-grow" onClick={this.popUpTimePicker.bind(this)}>
                  <span className="tooltiptext">Click and set Alarm</span>
                </div>
                {this.state.currentTime}
                {timeMeasure}
              </div>
              <div id="timePickerPopup" className="timePickerWrapper">
                <div className="timePickerHeading">
                  Time Picker
                  <div id="confirm" onClick={this.confirmClockTime.bind(this)}></div>
                  <div id="cancel" onClick={this.cancelTimePick.bind(this)}></div>
                </div>
                <div className="timePickerContent">

                  <div className="hour picker">
                    <div className="hourUpArrow">
                      <div id="hourUpArrow" className="upArrow" onClick={this.addHours.bind(this)}></div>
                    </div>
                    <div className="hourText text">{this.state.hoursSetting}</div>
                    <div className="hourDownArrow">
                      <div id="hourDownArrow" className="downArrow" onClick={this.subtractHours.bind(this)}></div>
                    </div>
                  </div>

                  <div className="minute picker">
                    <div className="minuteUpArrow">
                      <div id="minuteUpArrow" className="upArrow" onClick={this.addMinutes.bind(this)}></div>
                    </div>
                    <div className="minuteText text">{this.state.minutesSetting}</div>
                    <div className="minuteDownArrow">
                      <div id="minuteDownArrow" className="downArrow" onClick={this.subtractMinutes.bind(this)}></div>
                    </div>
                  </div>

                  <div className="hourClock picker">
                    <div className="hourClockUpArrow">
                      <div id="hourClockUpArrow" className="upArrow" onClick={this.twelveHourChangeToPM.bind(this)}></div>
                    </div>
                    <div className="hourClockText text">{this.state.twelveHourSetting}</div>
                    <div className="hourClockDownArrow">
                      <div id="hourClockDownArrow" className="downArrow" onClick={this.twelveHourChangeToAM.bind(this)}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="mask" className="mask">
              <div className="maskHeading">
                You have already setted the alarm time, do you want to cancel it?
              </div>
              <span className="yesButton" onClick={this.comfirmCancel.bind(this)}>YES</span>
              <span className="noButton" onClick={this.comfirmNotCancel.bind(this)}>NO</span>
            </div>
            <div className="audio">
              <audio controls loop id="audio">
                <source src="../src/audio/Pager_Beeps.mp3" type="audio/mpeg"/>
                Your browser does not support the audio tag.
              </audio>
            </div>
          </div>
        )
    }
}

ReactDOM.render( < Clock / >,document.getElementById("project"));
