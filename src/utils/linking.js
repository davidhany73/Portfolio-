import { Linking } from 'react-native'
import { portfolioData } from '../data/portfolioData'

export const LINKEDIN_URL = portfolioData.socialLinks.linkedin
export const GITHUB_URL = portfolioData.socialLinks.github
export const EMAIL_ADDRESS = portfolioData.personalInfo.email
export const PHONE_NUMBER = portfolioData.personalInfo.phone

export const openUrl = async (url) => {
  try {
    if (Linking && typeof Linking.openURL === 'function') {
      const supported = await Linking.canOpenURL(url).catch(() => true)
      if (supported) {
        return Linking.openURL(url)
      }
    }
  } catch (err) {
    // fallback
  }
  if (typeof window !== 'undefined') {
    window.open(url, '_blank', 'noopener,noreferrer')
  }
}

export const openLinkedIn = () => openUrl(LINKEDIN_URL)
export const openGitHub = () => openUrl(GITHUB_URL)
