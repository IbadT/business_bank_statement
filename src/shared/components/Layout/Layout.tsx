import { Outlet, Link, useLocation } from 'react-router'
import './Layout.css'
import { CiSettings } from "react-icons/ci";
import { TbHelpHexagon } from "react-icons/tb";
import { IoWalletOutline } from "react-icons/io5";
import { PiFilePdf } from "react-icons/pi";
import { PiShareNetwork } from "react-icons/pi";
import { LayoutHeader } from './LayoutHeader';
import { LayoutBalance } from './LayoutBalance';
import { useTranslation } from 'react-i18next';




const Layout = () => {
  const location = useLocation()
  const { t } = useTranslation();

  const navigation = [
    { path: '/pdfs', label: t('pdf'), icon: <PiFilePdf size={18}/> },
    { path: '/wallet-and-subscription', label: t('wallet'), icon: <IoWalletOutline size={18}/> },
    { path: '/referral-program', label: t('referral'), icon: <PiShareNetwork size={18}/> },
    { path: '/help', label: t('help'), icon: <TbHelpHexagon size={18}/> },
    { path: '/settings', label: t('settings'), icon: <CiSettings size={20}/> },
  ]

  return (
    <div className="layout">
      <aside className="sidebar">
        <LayoutHeader />
        <LayoutBalance />
        <nav className="navigation">
          {navigation.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link ${location.pathname === item.path ? 'active' : ''} flex items-center gap-2`}
            >
                {item.icon} {item.label}
            </Link>
          ))}
        </nav>
      </aside>
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  )
}


export default Layout
