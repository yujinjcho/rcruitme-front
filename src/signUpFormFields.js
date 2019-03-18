import userTypeFormField from './userTypeFormField';

export default [
  ...userTypeFormField,
  {
    label: 'Email',
    name: 'email',
    tagType: 'input'
  },
  {
    label: 'First Name',
    name: 'firstName',
    tagType: 'input'
  },
  {
    label: 'Last Name',
    name: 'lastName',
    tagType: 'input'
  },
  {
    label: 'Password',
    name: 'password',
    tagType: 'input'
  }
];
