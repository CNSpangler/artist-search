import React from 'react';
import { shallow } from 'enzyme';
import TrackList from './TrackList.jsx';

describe('TrackList component', () => {
  it('renders TrackList', () => {
    const wrapper = shallow(<TrackList releases={[
      {
        songId: 1234,
        songTitle: 'Fave Song'
      },
      {
        songId: 1235,
        songTitle: 'Hips Don\'t Lie'
      }
    ]}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
