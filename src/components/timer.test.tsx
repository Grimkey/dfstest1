import * as React from 'react';
import { shallow, mount } from 'enzyme';

import Timer from './timer';

it('basic create timer', () => {
  const expected = <div>00:00</div>;

  const wrapper = shallow(<Timer minutes={0} seconds={0} />);
  expect(wrapper.contains(expected)).toBe(true);
});

it('timer can move 1 second', () => {
  const expected = '00:59';
  jest.useFakeTimers();

  const wrapper = mount(<Timer minutes={0} seconds={60} />);
  jest.runTimersToTime(1000);
  expect(wrapper.text()).toContain(expected);
});
