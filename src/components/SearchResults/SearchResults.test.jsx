import React from 'react';
import { shallow } from 'enzyme';
import SearchResults from './SearchResults.jsx';

describe('SearchResults component', () => {
  it('renders SearchResults', () => {
    const wrapper = shallow(<SearchResults releases={[
      {
        artistId: '1234',
        artistName: 'name',
        artistBorn: 'born',
        artistDied: 'died'  
      },
      {
        artistId: '1235',
        artistName: 'name',
        artistBorn: 'born',
        artistDied: 'died'  
      }
    ]}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
