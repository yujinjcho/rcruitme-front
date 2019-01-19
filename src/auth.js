import { parse } from 'qs';

const key = 'X-Auth-Token';

const header = () => ({
  [key]: localStorage.getItem('token')
});

const save = token =>
  localStorage.setItem('token', token);

const saveFromHeaders = headers =>
  save(headers.get(key));

const saveFromQueryString = query =>
  save(parse(query, { ignoreQueryPrefix: true }).token);

const removeFromHeader = () =>
  localStorage.removeItem('token');

export default {
  key,
  header,
  saveFromHeaders,
  saveFromQueryString,
  removeFromHeader
};
