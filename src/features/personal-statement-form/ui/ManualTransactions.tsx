import { useTranslation } from "react-i18next";
import { SectionHeader } from "@/shared/ui/section-header";
import { HELP_TEXT_PLACEHOLDER } from "@/shared/config";
import { defaultManualTransactionsState, depositeTypeList } from "../config/defaults";
import { usePersonalStatementStep } from "../model/store";
import { TransactionTable, type TransactionColumn } from "./TransactionTable";

const typeOptions = depositeTypeList.map((item) => ({ id: item.id, label: item.name }));

const topUpColumns: TransactionColumn[] = [
  { key: "type", labelKey: "expense_type", placeholderKey: "select_type", kind: "select", options: typeOptions },
  { key: "amount", labelKey: "deposit_amount", placeholderKey: "amount", kind: "text" },
  { key: "counterparty", labelKey: "counterparty_name", placeholderKey: "name", kind: "text" },
  { key: "date", labelKey: "deposit_date", placeholderKey: "select", kind: "date" },
];

const expenseColumns: TransactionColumn[] = [
  { key: "type", labelKey: "deposit_type", placeholderKey: "select_type", kind: "select", options: typeOptions },
  { key: "amount", labelKey: "expense_amount", placeholderKey: "amount", kind: "text" },
  { key: "date", labelKey: "expense_date", placeholderKey: "select", kind: "date" },
];

export const ManualTransactions = () => {
  const { t } = useTranslation();
  const [data, setData] = usePersonalStatementStep("manualTransactions", defaultManualTransactionsState);

  return (
    <div className="form-container">
      <div className="form-section">
        <SectionHeader title={t("manual_top_ups")} helpText={HELP_TEXT_PLACEHOLDER} />
        <TransactionTable
          columns={topUpColumns}
          rows={data.topUps}
          onChange={(topUps) => setData((prev) => ({ ...prev, topUps }))}
        />
      </div>

      <div className="form-section">
        <SectionHeader title={t("manual_expenses")} helpText={HELP_TEXT_PLACEHOLDER} />
        <TransactionTable
          columns={expenseColumns}
          rows={data.expenses}
          onChange={(expenses) => setData((prev) => ({ ...prev, expenses }))}
        />
      </div>
    </div>
  );
};
