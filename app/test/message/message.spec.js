
/* eslint-disable */ //disable lint because 'describe' does not need to be defined in this scope.
const React = require('react');
const { shallow, mount, render } = require('enzyme');
const Message = require('../../shared/components/message');
const renderer = require('react-test-renderer');

describe('Message Component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <Message type="alert-success" text="The new user has been added." />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
})