const { createSideBarConfig } = require('./util')
const OTHER_PATH = '/blogs/other'
const REDIS = '/blogs/redis'
const PHP = '/blogs/php'
const GO = '/blogs/go'
const MYSQL = '/blogs/mysql'
const KAFKA = '/blogs/kafka'


module.exports = {
  [OTHER_PATH]: [createSideBarConfig('工具', OTHER_PATH)],
  [REDIS]: [createSideBarConfig('redis', REDIS)],
  [PHP]: [createSideBarConfig('php', PHP)],
  [GO]: [createSideBarConfig('go', GO)],
  [KAFKA]: [createSideBarConfig('kafka', KAFKA)]
}
