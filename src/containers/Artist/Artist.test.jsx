import React from 'react';
import { shallow } from 'enzyme';
import Artist from './Artist.jsx';

describe('Artist component', () => {
  it('renders Artist', () => {
    const wrapper = shallow(<Artist releases={[
      {
        releaseId: 1234,
        releaseTitle: 'title',
        releaseDate: '1995-07-11'
      },
      {
        releaseId: 1235,
        releaseTitle: 'title2',
        releaseDate: '1997-07-12'
      }
    ]}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
