export class PomodoroTimer {
  private minutes: number;
  private seconds: number;

  constructor(minutes: number, seconds: number) {
    this.minutes = minutes < 60 ? minutes : 60;
    this.seconds = seconds < 60 ? seconds : 60;
  }

  IsTimedOut(): boolean {
    return this.minutes === 0 && this.seconds === 0;
  }

  Minutes(): number {
    return this.minutes;
  }

  Seconds(): number {
    return this.seconds;
  }

  NextTick(): PomodoroTimer {
    if (this.IsTimedOut()) {
      return this;
    }

    if (this.seconds > 0) {
      return new PomodoroTimer(this.minutes, --this.seconds);
    }

    return new PomodoroTimer(--this.minutes, 59);
  }

  ToString(): string {
    return `${this.NumStr(this.minutes)}:${this.NumStr(this.seconds)}`;
  }

  private NumStr(num: number): string {
      return num < 10 ?  `0${num}` : `${num}`;
  }
}
