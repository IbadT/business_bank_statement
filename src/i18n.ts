import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      welcome: "Welcome",
      toHome: "To Home",
      language: "Language",
      balance: "Balance",
      barcodes: "Barcodes",
      unlimited: "Unlimited in 140h",
      infinity: "∞ in 148h",
      pdf: "PDF",
      wallet: "Wallet",
      referral: "Referral",
      help: "Help",
      settings: "Settings",
      businss_bank_statement: "Businss Bank Statement",
      company_details: "Company Details",
      financial_and_owners: "Financial and Owners",
      clients_and_payment_gateways: "Clients & Payment Gateways",
      contractors: "Contractors",
      contractor_name: "Contractor Name",
      top_ups_and_expenses: "Top-ups & Expenses",
      review_and_checkout: "Review & Checkout",

      pay_and_generate: "Pay & Generate",

      profile: "Profile",
      company_name: "Company Name",
      state: "State",
      city: "City",
      address: "Address",
      zip_code: "Zip Code",
      account_number: "Account Number",

      financial_snapshot: "Financial Snapshot",
      owner_info: "Owner Info",
      monthly_net_profit_percent: "Monthly Net Profit (%)",
      industry: "Industry (NAICS)",
      owner_name: "Owner Name",
      monthly_turnover: "Monthly Turnover ($)",
      business_model: "Business Model",

      clients: "Clients",
      payment_gateways: "Payment Gateways",

      save_draft: "Save Draft",
      order_summary: "Order Summary",
      continue: "Continue",

      basic_bank_statement: "Basic Bank Statement",
      advanced_analytics: "Advanced Analytics",
      priority_support: "Priority Support",
      data_export: "Data Export",
      api_access: "API Access",

      total: "Total",

      month_and_year: "Month and Year",
      cvv: "CVV",
      quick_month_list: "Quick Month List",
      opening_balance: "Opening Balance",
      closing_balance: "Closing Balance",
      linked_card_number: "Linked Card Number",
      linked_card_holder_name: "Linked Card Holder Name",
      start_month: "Start Month",
      end_month: "End Month",
      optional: "Optional; auto-generated if empty",
      expense_type: "Expense Type",
      expenses_date: "Expenses Date",
      expenses_counter_party: "Expenses Counter Party",
      expenses_amount: "Expenses Amount",

      counter_party: "Counter Party",
      optional_auto_generated: "Optional; auto-generated if empty",
    }
  },
  ru: {
    translation: {
      welcome: "Добро пожаловать",
      toHome: "На главную",
      language: "Язык",
      balance: "Баланс",
      barcodes: "Штрих-коды",
      unlimited: "Безлимитно за 140ч",
      infinity: "∞ за 148ч",
      pdf: "PDF",
      wallet: "Кошелёк",
      referral: "Реферал",
      help: "Помощь",
      settings: "Настройки",
      businss_bank_statement: "Банковский отчёт",
      company_details: "Детали компании",
      financial_and_owners: "Финансы и владельцы",
      clients_and_payment_gateways: "Клиенты и платежные gateway",
      contractors: "Контрагенты",
      contractor_name: "Имя контрагента",
      top_ups_and_expenses: "Пополнения и расходы",
      review_and_checkout: "Обзор и оплата",
      profile: "Профиль",
      company_name: "Название компании",
      state: "Регион",
      city: "Город",
      address: "Адрес",
      zip_code: "Почтовый индекс",
      account_number: "Номер счета",

      pay_and_generate: "Оплатить и сгенерировать",

      financial_snapshot: "Финансовый снимок",
      owner_info: "Информация о владельце",
      monthly_net_profit_percent: "Ежемесячная чистая прибыль (%)",
      industry: "Industry (NAICS)",
      owner_name: "Имя владельца",
      monthly_turnover: "Ежемесячный оборот ($)",
      business_model: "Бизнес-модель",

      clients: "Клиенты",
      payment_gateways: "Платежные gateway",

      save_draft: "Сохранить черновик",
      order_summary: "Сводка заказа",
      continue: "Продолжить",

      basic_bank_statement: "Базовый банковский отчёт",
      advanced_analytics: "Расширенный анализ",
      priority_support: "Приоритетная поддержка",
      data_export: "Экспорт данных",
      api_access: "API доступ",

      total: "Итого",

      month_and_year: "Месяц и год",
      cvv: "CVV",
      quick_month_list: "Быстрый список месяцев",
      opening_balance: "Начальный баланс",
      closing_balance: "Конечный баланс",
      linked_card_number: "Номер связанной карты",
      linked_card_holder_name: "Имя владельца связанной карты",
      start_month: "Начальный месяц",
      end_month: "Конечный месяц",
      optional: "Необязательно; автоматически генерируется, если пусто",
      expense_type: "Тип расхода",
      expenses_date: "Дата расхода",
      expenses_counter_party: "Контрагент расхода",
      expenses_amount: "Сумма расхода",
      amount: "Сумма",
      counter_party: "Контрагент",
      date: "Дата",
      optional_auto_generated: "Необязательно; автоматически генерируется, если пусто",
    }
  },
  fr: {
    translation: {
      welcome: "Bienvenue",
      toHome: "Accueil",
      language: "Langue",
      balance: "Solde",
      barcodes: "Codes-barres",
      unlimited: "Illimité en 140h",
      infinity: "∞ en 148h",
      pdf: "PDF",
      wallet: "Portefeuille",
      referral: "Référence",
      help: "Aide",
      settings: "Paramètres",
      businss_bank_statement: "Déclaration de banque",
      company_details: "Détails de la société",
      financial_and_owners: "Finances et propriétaires",
      clients_and_payment_gateways: "Clients et passerelles de paiement",
      contractors: "Contractants",
      contractor_name: "Nom du contractant",
      top_ups_and_expenses: "Ajouts et dépenses",
      review_and_checkout: "Révision et paiement",
      profile: "Profil",
      company_name: "Nom de la société",
      state: "Région",
      city: "Ville",
      address: "Adresse",
      zip_code: "Code postal",
      account_number: "Numéro de compte",

      pay_and_generate: "Payer et générer",

      financial_snapshot: "Aperçu financier",
      owner_info: "Informations sur le propriétaire",
      monthly_net_profit_percent: "Bénéfice net mensuel (%)",
      industry: "Industry (NAICS)",
      owner_name: "Nom du propriétaire",
      monthly_turnover: "Chiffre d'affaires mensuel ($)",
      business_model: "Modèle de business",

      clients: "Clients",
      payment_gateways: "Passerelles de paiement",

      save_draft: "Enregistrer le brouillon",
      order_summary: "Récapitulatif de la commande",
      continue: "Continuer",

      basic_bank_statement: "Basic Bank Statement",
      advanced_analytics: "Advanced Analytics",
      priority_support: "Priority Support",
      data_export: "Data Export",
      api_access: "API Access",

      total: "Total",

      month_and_year: "Month and Year",
      cvv: "CVV",
      quick_month_list: "Quick Month List",
      opening_balance: "Opening Balance",
      closing_balance: "Closing Balance",
      linked_card_number: "Linked Card Number",
      linked_card_holder_name: "Linked Card Holder Name",
      start_month: "Start Month",
      end_month: "End Month",
      optional: "Optional; auto-generated if empty",
      expense_type: "Expense Type",
      expenses_date: "Expenses Date",
      expenses_counter_party: "Expenses Counter Party",
      expenses_amount: "Expenses Amount",
      amount: "Amount",
      date: "Date",
      counter_party: "Counter Party",
      optional_auto_generated: "Optional; auto-generated if empty",
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
