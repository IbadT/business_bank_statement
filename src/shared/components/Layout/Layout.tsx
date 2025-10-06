import { Outlet, Link, useLocation } from 'react-router'
import './Layout.css'
import { CiSettings } from "react-icons/ci";
import { TbHelpHexagon } from "react-icons/tb";
import { IoWalletOutline } from "react-icons/io5";
import { PiFilePdf } from "react-icons/pi";
import { PiShareNetwork } from "react-icons/pi";
import { LanguageSwitch } from '../LanguageSwitch';
import { GoPlus } from "react-icons/go";




const Layout = () => {
  const location = useLocation()

  const navigation = [
    // { path: '/', label: 'Home' },
    { path: '/pdfs', label: 'PDFs', icon: <PiFilePdf size={18}/> },
    { path: '/wallet-and-subscription', label: 'Wallet and subscription', icon: <IoWalletOutline size={18}/> },
    { path: '/referral-program', label: 'Referral program', icon: <PiShareNetwork size={18}/> },
    { path: '/help', label: 'Help', icon: <TbHelpHexagon size={18}/> },
    { path: '/settings', label: 'Settings', icon: <CiSettings size={20}/> },
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


export const LayoutHeader = () => {
    return (
        <div className="flex justify-between items-center p-3 gap-2 relative overflow-visible">
            <div className="flex items-center justify-between gap-2 w-full">
                <div className='font-bold text-xl'>LOGO</div>
                <div style={{color: 'var(--primary-yellow-text-color-yellow)'}}>To Home</div>
            </div>

            <LanguageSwitch />

        </div>
    )
};




export const LayoutBalance = () => {
    return (
        <div className="h-[170px] relative rounded-t-3xl bg-white" style={{boxShadow: '0 4px 20px rgba(0, 0, 0, 0.07)'}}>
            
            <div className=" rounded-t-3xl px-4 py-3 h-[75px] relative overflow-visible">
                <div className="flex justify-between items-start h-full">
                    <div className="flex flex-col justify-between h-full">
                        <div style={{color: 'var(--primary-gray-text-color)'}}>Balance</div>
                        <div className="font-bold text-xl flex items-center gap-1">$10,100 <GoPlus size={32} /></div>
                    </div>
                    
                    <div className="absolute -right-3 top-0 h-full flex items-end">
                        <img 
                            src="/bank_man.webp" 
                            alt="Bank character" 
                            className="h-[78px] w-auto object-contain object-bottom translate-x-2"
                        />
                    </div>
                </div>
            </div>

            <div className="h-[95px] px-4 py-2 border-t border-gray-200 flex flex-col justify-between">
                <div style={{color: 'var(--primary-gray-text-color)'}}>Barcodes</div>
                <div className='font-bold text-xl'>Unlimited in 140h</div>
                <div className="flex">
                    <div style={{ backgroundColor: 'var(--primary-yellow-color)'}} className="rounded-full h-6 px-2 flex items-center justify-center">∞ in 148h</div>
                </div>
            </div>

        </div>
    )
}




export default Layout
