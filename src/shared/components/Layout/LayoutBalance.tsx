import { GoPlus } from "react-icons/go";
import { useTranslation } from 'react-i18next';

export const LayoutBalance = () => {
    const { t } = useTranslation();
    return (
        <div className="h-[170px] relative rounded-t-3xl bg-white" style={{boxShadow: '0 4px 20px rgba(0, 0, 0, 0.07)'}}>
            
            <div className=" rounded-t-3xl px-4 py-3 h-[75px] relative overflow-visible">
                <div className="flex justify-between items-start h-full">
                    <div className="flex flex-col justify-between h-full">
                        <div style={{color: 'var(--primary-gray-text-color)'}}>{t('balance')}</div>
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
                <div style={{color: 'var(--primary-gray-text-color)'}}>{t('barcodes')}</div>
                <div className='font-bold text-xl'>{t('unlimited')}</div>
                <div className="flex">
                    <div style={{ backgroundColor: 'var(--primary-yellow-color)'}} className="rounded-full h-6 px-2 flex items-center justify-center">{t('infinity')}</div>
                </div>
            </div>

        </div>
    );
};