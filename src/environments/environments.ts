const host = location.protocol + '//' + location.host;

const backendUrl = getUrl(true)
function getUrl(local: boolean) {
  if (local) {
    return 'http://localhost:8000'
  }
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
