export const ROUTES = {
  home: '/',
  signIn: '/sign-in',
  signUp: '/sign-up',
  newsArticle: '/news/:id',
  businessBankStatement: '/business-bank-statement',
  personalBankStatement: '/personal-bank-statement',
  doctorNotice: '/doctor-notice',
  einNotice: '/ein-notice',
  invoices: '/invoices',
  spectrum: '/spectrum',
  hippoHomeInsurance: '/hippo-home-insurance',
  employmentLetter: '/employment-letter',
  geicoVehicleInsurance: '/geico-vehicle-insurance',
  articlesOfIncorporation: '/articles-of-incorporation',
  damageReport: '/damage-report',
  discussion: '/discussion',
  faq: '/faq',
  help: '/help',
  helpTicket: '/help/ticket/:id',
  pdfs: '/pdfs',
  referralProgram: '/referral-program',
  settings: '/settings',
  information: '/information',
  informationProfile: '/information/:id',
  notifications: '/notifications',
  wallet: '/wallet-and-subscription',
  walletBuy: '/wallet-and-subscription/buy',
  residentialLeaseAgreement: '/residential-lease-agreement',
  universityDiploma: '/university-diploma',
  deathCertificate: '/death-certificate',
} as const

export const helpTicketPath = (id: string | number) => `/help/ticket/${id}`

export const newsArticlePath = (id: string | number) => `/news/${id}`
export const informationProfilePath = (id: string) => `/information/${id}`
