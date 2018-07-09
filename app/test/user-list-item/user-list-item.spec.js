/* eslint-disable */ //disable lint because 'describe' does not need to be defined in this scope.
const React = require('react');
const { shallow, mount, render } = require('enzyme');
const UserListItemRedux = require('../../shared/components/user-list-item');
const renderer = require('react-test-renderer');

describe('UserForm component tests', () => {
    const UserListItem = UserListItemRedux.__get__('UserListItem');

  it('should render correctly', () => {
    const mockedUser = {
        firstname: 'Bob', 
        surname: 'Marley',
        contact_number: '123',
        email: 'bob@marley.com',
    }
    const output = shallow(<UserListItem user={mockedUser} />);
    expect(output).toMatchSnapshot();
  });
});