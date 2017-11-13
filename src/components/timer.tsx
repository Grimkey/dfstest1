import * as React from 'react';
import './header.css';
import { PomodoroTimer } from './pomodorotimer';

export interface TimerProps {
  minutes: number;
  seconds: number;
}

export interface TimerState {
  countdown: PomodoroTimer;
}

class Timer extends React.Component<TimerProps, TimerState> {
  private timerID: number;

  constructor(props: TimerProps) {
    super(props);
    this.state = {
      countdown: new PomodoroTimer(props.minutes, props.seconds)
    } as Readonly<TimerState>;
  }

  componentDidMount() {
    // When running in Node, there is an overload that returns NodeJS.Timer
    // which we can't use in the browser, so this forces the browser-friendly version.
    // tslint:disable-next-line:no-any
    this.timerID = setInterval(() => this.tick() as any, 1000 as any);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return <div>{this.state.countdown.ToString()}</div>;
  }

  private tick() {
    // Get todays date and time
    const countDown = this.state.countdown;
    this.setState({ countdown: countDown.NextTick() });
  }
}

export default Timer;
