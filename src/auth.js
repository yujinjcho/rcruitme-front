const key = 'X-Auth-Token';

const header = () => ({
  [key]: localStorage.getItem('token')
});

const save = token =>
  localStorage.setItem('token', token);

const saveFromHeaders = headers =>
  save(headers.get(key));

export default {
  key,
  header,
  saveFromHeaders
};
