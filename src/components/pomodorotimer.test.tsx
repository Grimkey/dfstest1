import { PomodoroTimer } from './pomodorotimer';

it('minutes max at 60', () => {
  const timer = new PomodoroTimer(61, 0);
  expect(timer.Minutes()).toBe(60);
});

it('seconds max at 60', () => {
  const timer = new PomodoroTimer(0, 61);
  expect(timer.Seconds()).toBe(60);
});

it('can read minutes', () => {
  const timer = new PomodoroTimer(42, 57);
  expect(timer.Minutes()).toBe(42);
});

it('can read seconds', () => {
  const timer = new PomodoroTimer(42, 57);
  expect(timer.Seconds()).toBe(57);
});

it('timeout is false when time remains', () => {
  const timer = new PomodoroTimer(42, 57);
  expect(timer.IsTimedOut()).toBe(false);
});

it('timeout is true when time runs out', () => {
  const timer = new PomodoroTimer(0, 0);
  expect(timer.IsTimedOut()).toBe(true);
});

it('displays time remaining', () => {
  const timer = new PomodoroTimer(42, 57);
  expect(timer.ToString()).toBe('42:57');
});

it('displays no time remaining', () => {
  const timer = new PomodoroTimer(0, 0);
  expect(timer.ToString()).toBe('00:00');
});

it('nexttick does not change at zero', () => {
  const timer = new PomodoroTimer(0, 0);
  const actual = timer.NextTick();
  expect(actual.ToString()).toBe('00:00');
});

it('nexttick subtracts seconds if possible.', () => {
  const timer = new PomodoroTimer(0, 10);
  const actual = timer.NextTick();
  expect(actual.ToString()).toBe('00:09');
});

it('nexttick subtracts seconds if possible.', () => {
  const timer = new PomodoroTimer(0, 10);
  const actual = timer.NextTick().NextTick();
  expect(actual.ToString()).toBe('00:08');
});

it('nexttick subtracts minutes when no seconds', () => {
  const timer = new PomodoroTimer(2, 0);
  const actual = timer.NextTick();
  expect(actual.ToString()).toBe('01:59');
});
