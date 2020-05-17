const prod = process.env.NODE_ENV === 'production'
const serviceBaseUrl = process.env.SERVICE_BASE_URL ? process.env.SERVICE_BASE_URL : 'http://localhost:9000'

module.exports = {
  target: 'serverless',
  distDir: 'build',
  publicRuntimeConfig: {
    prod,
    serviceBaseUrl
  },
}
