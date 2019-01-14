const key = 'X-Auth-Token';

const header = () => ({
  [key]: localStorage.getItem('token')
});

const save = res =>
  localStorage.setItem('token', res.headers.get(key));

export default {
  key,
  header,
  save
};
