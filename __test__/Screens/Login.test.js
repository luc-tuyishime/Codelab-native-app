import React from 'react';
import { shallow } from 'enzyme';
import LoginScreen from '../../src/screens/LoginScreen';

describe('LOGIN SCREEN', () => {
  describe('render the login page', () => {
    it('should match to snapshot', () => {
      const component = shallow(<LoginScreen />);
      expect(component).toMatchSnapshot();
    });
  });
});