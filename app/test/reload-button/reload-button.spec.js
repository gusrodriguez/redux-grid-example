/* eslint-disable */ //disable lint because 'describe' does not need to be defined in this scope.
const React = require('react');
const { shallow, mount, render } = require('enzyme');
const ReloadButtonRedux = require('../../shared/components/reload-button');
const renderer = require('react-test-renderer');

describe('ReloadButton component tests', () => {
  // rewire injects __get__ and __set__ methods to all the modules.
  // These can then be used to extract and set top level private variables.
  // In this instance, we extract the private ReloadButton class
  const ReloadButton = ReloadButtonRedux.__get__('ReloadButton');

  it('should render correctly', () => {
    const output = shallow(<ReloadButton />);
    expect(output).toMatchSnapshot();
  });
});