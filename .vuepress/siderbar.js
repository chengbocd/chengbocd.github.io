const { createSideBarConfig } = require('./util')
const GIT_PATH = '/blogs/git'
const OTHER_PATH = '/blogs/other'
const REDIS = '/blogs/redis'


module.exports = {
  [GIT_PATH]: [createSideBarConfig('git', GIT_PATH)],
  [OTHER_PATH]: [createSideBarConfig('工具', OTHER_PATH)],
  [REDIS]: [createSideBarConfig('redis', REDIS)],
}
