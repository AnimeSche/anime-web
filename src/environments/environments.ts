const host = location.protocol + '//' + location.host;

const backendUrl = getUrl()
function getUrl() {
  return 'https://yammering-teresina-anime24-ca6f2ff6.koyeb.app'
}

export const environment = {
  production: false,
  backendUrl: backendUrl,
  apiUrl: backendUrl + '/api'
}

export const settings = {
  title: 'Anime Scheduler | ',
  isLoggedIn: false,
}
