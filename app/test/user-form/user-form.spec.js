/* eslint-disable */ //disable lint because 'describe' does not need to be defined in this scope.
const React = require('react');
const { shallow, mount, render } = require('enzyme');
const USerFormRedux = require('../../shared/components/user-form');
const renderer = require('react-test-renderer');

describe('UserForm component tests', () => {
    const UserForm = USerFormRedux.__get__('UserForm');

  it('should render correctly', () => {
    const output = shallow(<UserForm />);
    expect(output).toMatchSnapshot();
  });
});