let apiUrl
const apiUrls = {
  development: 'http://localhost:4741',
  production: 'https://git.heroku.com/guarded-mountain-81036.git'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

export default apiUrl
