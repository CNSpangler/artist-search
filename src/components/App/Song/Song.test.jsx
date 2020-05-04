import React from 'react';
import { shallow } from 'enzyme';
import Song from './Song.jsx';

describe('Song component', () => {
  it('renders Song', () => {
    const wrapper = shallow(<Song songTitle="Song Title" songLyrics="No Lyrics Found" />);
    expect(wrapper).toMatchSnapshot();
  });
});
