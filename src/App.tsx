import { Route, Routes } from 'react-router'
import './App.css'
import { 
  HelpPage, 
  BusinssBankStatementPage, 
  PDFsPage, 
  ReferralProgramPage, 
  SettingsPage, 
  WalletAndSubscriptionPage, 
  HomePage, 
  PersonalBankStatementPage 
} from './pages'
import { Layout } from './shared/components/Layout'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="business-bank-statement" element={<BusinssBankStatementPage />} />
        <Route path="personal-bank-statement" element={<PersonalBankStatementPage />} />
        <Route path="help" element={<HelpPage />} />
        <Route path="pdfs" element={<PDFsPage />} />
        <Route path="referral-program" element={<ReferralProgramPage />} />
        <Route path="settings" element={<SettingsPage />} />
        <Route path="wallet-and-subscription" element={<WalletAndSubscriptionPage />} />
      </Route>
    </Routes>
  )
}

export default App
