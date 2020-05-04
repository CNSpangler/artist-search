import React from 'react';
import { shallow } from 'enzyme';
import Artist from './Artist.jsx';

describe('Artist component', () => {
  it('renders Artist', () => {
    const wrapper = shallow(<Artist releases={[
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
