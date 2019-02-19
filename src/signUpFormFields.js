import userTypeFormField from './userTypeFormField';

export default [
  ...userTypeFormField,
  {
    label: 'Email',
    name: 'email',
    type: 'input'
  },
  {
    label: 'First Name',
    name: 'firstName',
    type: 'input'
  },
  {
    label: 'Last Name',
    name: 'lastName',
    type: 'input'
  },
  {
    label: 'Password',
    name: 'password',
    type: 'input'
  }
];
