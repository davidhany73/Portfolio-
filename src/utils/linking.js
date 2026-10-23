import { Linking } from 'react-native'

export const LINKEDIN_URL = 'https://www.linkedin.com/in/david-hany-naeam-a9485032b'
export const GITHUB_URL = 'https://github.com/davidhany10'
export const EMAIL_ADDRESS = '202201324@pua.edu.eg'
export const PHONE_NUMBER = '+20 121 222 2818'

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
