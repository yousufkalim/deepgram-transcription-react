let baseUrl = 'http://localhost:5000/api/v1';

if (window.location.host === 'transcription-dev.falconweb.app') {
  baseUrl = 'https://transcription-api-dev.falconweb.app/api/v1';
} else if (window.location.host === 'transcription-qa.falconweb.app') {
  baseUrl = 'https://transcription-api-qa.falconweb.app/api/v1';
} else if (window.location.host === 'transcription-staging.falconweb.app') {
  baseUrl = 'https://transcription-api-staging.falconweb.app/api/v1';
} else if (window.location.host === 'transcription-prod.falconweb.app/') {
  baseUrl = 'https://transcription-api-prod.falconweb.app/api/v1';
}

module.exports = { baseUrl };
