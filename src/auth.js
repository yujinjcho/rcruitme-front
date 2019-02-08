import query from './query';

const key = 'X-Auth-Token';

const header = () => ({
  [key]: localStorage.getItem('token')
});

const save = token =>
  localStorage.setItem('token', token);

const saveFromHeaders = headers =>
  save(headers.get(key));

const saveFromQueryString = () =>
  save(query.parameters().token);

const logOut = () =>
  localStorage.removeItem('token');

const loggedIn = () =>
  localStorage.getItem('token') !== null

export default {
  key,
  header,
  saveFromHeaders,
  saveFromQueryString,
  logOut,
  loggedIn,
};
