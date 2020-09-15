import defaultSettings from '@/settings'

const title = defaultSettings.title || 'Vue Admin SYH'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
