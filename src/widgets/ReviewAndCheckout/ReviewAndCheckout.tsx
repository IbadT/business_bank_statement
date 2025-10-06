import { useTranslation } from "react-i18next";
import { HeaderButtons } from "../../shared/components";

export const ReviewAndCheckout = () => {
    const { t } = useTranslation();
    return (
        <div className="flex flex-col gap-6 max-w-2/3">
            <div className="flex flex-col gap-3">
                <div className="font-medium text-xl">{t('review_and_checkout')}</div>

                <HeaderButtons text={t('pay_and_generate')} color="primary"  />
            </div>
        </div>
    )
}