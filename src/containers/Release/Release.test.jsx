import React from 'react';
import { shallow } from 'enzyme';
import Release from './Release.jsx';

describe('Release component', () => {
  it('renders Release', () => {
    const wrapper = shallow(<Release songs={[
      {
        songId: 1234,
        songTitle: 'Help'
      },
      {
        songId: 1235,
        songTitle: 'Halp'
      }
    ]}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
