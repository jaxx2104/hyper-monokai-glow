import { backgrourd, foreground, cursor, colors } from './theme.js'
import fs from 'fs'
import path from 'path'

const styles = fs.readFileSync(
  path.join(__dirname, 'assets/styles.css'),
  'utf8'
)

//exports.onWindow = browserWindow => browserWindow.setVibrancy('dark')
exports.decorateConfig = config => {
  const theme = {
    backgroundColor: backgrourd,
    foregroundColor: foreground,
    cursorColor: cursor,
    colors,
    css: styles
  }
  return Object.assign({}, config, theme)
}
