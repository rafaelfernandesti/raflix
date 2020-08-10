const URL_BACKEND = window.location.hostname === 'localhost'
  ? 'http://localhost:8080'
  : 'https://raflix-app.herokuapp.com';

export default {
  URL_BACKEND,
};
