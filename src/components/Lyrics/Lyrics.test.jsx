import React from 'react';
import { shallow } from 'enzyme';
import Lyrics from './Lyrics.jsx';

describe('Lyrics component', () => {
  it('renders Lyrics', () => {
    const wrapper = shallow(<Lyrics />);
    expect(wrapper).toMatchSnapshot();
  });
});
