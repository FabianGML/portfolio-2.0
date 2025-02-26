import { ui, defaultLang } from './ui'

export function getLangFromUrl (url: URL): string {
  const [, lang] = url.pathname.split('/')
  if (lang in ui) return lang as keyof typeof ui
  return defaultLang
}
