import React from 'react';
import { shallow } from 'enzyme';
import Discography from './Discography.jsx';

describe('Discography component', () => {
  it('renders Discography', () => {
    const wrapper = shallow(<Discography releases={[
      {
        releaseId: 1234,
        releaseTitle: 'Jock Jamz',
        releaseDate: 1985
      },
      {
        releaseId: 1234,
        releaseTitle: 'Jock Jamzz',
        releaseDate: 1986
      }
    ]}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
