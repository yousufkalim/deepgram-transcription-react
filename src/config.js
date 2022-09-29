let baseUrl = 'http://localhost:5000/api';

if (window.location.host === 'reactapp-dev.falconweb.app') {
  baseUrl = 'https://reactapp-api-dev.falconweb.app/api';
} else if (window.location.host === 'reactapp-qa.falconweb.app') {
  baseUrl = 'https://reactapp-api-qa.falconweb.app/api';
} else if (window.location.host === 'reactapp-staging.falconweb.app') {
  baseUrl = 'https://reactapp-api-staging.falconweb.app/api';
} else if (window.location.host === 'reactapp-prod.falconweb.app/') {
  baseUrl = 'https://reactapp-api-prod.falconweb.app/api';
}

module.exports = { baseUrl };
