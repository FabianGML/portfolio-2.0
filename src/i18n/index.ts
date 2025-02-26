import spanish from '@/i18n/es.json'
import english from '@/i18n/en.json'
import type { Experience, Project } from '@/types/experience/experienceTypes'

const LANGUAGES = {
  SPANISH: 'es',
  ENGLISH: 'en'
}

interface Translations {
  DESCRIPTION: string
  TITLE: string
  HERO: {
    DESCRIPTION_FIRST: string
    DESCRIPTION_STRONG: string
    DESCRIPTION_SECOND: string
  }
  EXP: {
    title: string
    EXPERIENCE: Experience[]
  }
  PROJECTS_SECTION: {
    title: string
    websiteTooltip: string
    githubTooltip: string
    projects: Project[]
  }
  ABOUT_ME: {
    bento1Title: string
    bento1Description: string
    bento1Description2: string
    bento1Accent: string
  }
}

export function getI18N ({ currentLocale = 'es' }: { currentLocale?: string | undefined }): Translations {
  if (currentLocale === LANGUAGES.SPANISH) return spanish
  if (currentLocale === LANGUAGES.ENGLISH) return english
  return spanish
}
