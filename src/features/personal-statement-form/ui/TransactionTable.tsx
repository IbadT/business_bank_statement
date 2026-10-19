import { useTranslation } from "react-i18next";
import { GoPlus } from "react-icons/go";
import { InputCalendar, InputField } from "@/shared/ui/input";
import { Select, type SelectOption } from "@/shared/ui/select";
import type { TransactionRow } from "../model/types";

export interface TransactionColumn {
  key: string;
  labelKey: string;
  placeholderKey: string;
  kind: "select" | "text" | "date";
  options?: SelectOption[];
}

interface TransactionTableProps {
  columns: TransactionColumn[];
  rows: TransactionRow[];
  onChange: (rows: TransactionRow[]) => void;
}

const cellClass = "rounded-none shadow-none bg-transparent";

export const TransactionTable = ({ columns, rows, onChange }: TransactionTableProps) => {
  const { t } = useTranslation();
  const gridStyle = { gridTemplateColumns: `repeat(${columns.length}, minmax(0, 1fr))` };

  const setCell = (index: number, key: string, value: string) =>
    onChange(rows.map((row, i) => (i === index ? { ...row, [key]: value } : row)));

  return (
    <div className="flex flex-col gap-4">
      <div className="bg-white rounded-2xl border border-gray-200 overflow-x-auto">
        <div className="min-w-[560px]">
          <div className="grid" style={gridStyle}>
            {columns.map((col) => (
              <div key={col.key} className="px-4 py-4 text-sm font-bold border-r last:border-r-0 border-gray-200">
                {t(col.labelKey)}
              </div>
            ))}
          </div>
          {rows.map((row, index) => (
            <div key={index} className="grid border-t border-gray-200" style={gridStyle}>
              {columns.map((col) => (
                <div key={col.key} className="border-r last:border-r-0 border-gray-200">
                  {col.kind === "select" && (
                    <Select
                      className={cellClass}
                      placeholder={t(col.placeholderKey)}
                      value={row[col.key] ?? ""}
                      name={col.key}
                      options={col.options ?? []}
                      onChange={(e) => setCell(index, col.key, e.target.value)}
                    />
                  )}
                  {col.kind === "text" && (
                    <InputField
                      className={cellClass}
                      placeholder={t(col.placeholderKey)}
                      value={row[col.key] ?? ""}
                      name={col.key}
                      onChange={(e) => setCell(index, col.key, e.target.value)}
                    />
                  )}
                  {col.kind === "date" && (
                    <InputCalendar
                      className={cellClass}
                      placeholder={t(col.placeholderKey)}
                      value={row[col.key] ?? ""}
                      name={col.key}
                      onChange={(e) => setCell(index, col.key, e.target.value)}
                    />
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={() => onChange([...rows, {}])}
        className="w-full flex items-center justify-center gap-2 bg-[var(--primary-yellow-color)] rounded-xl py-3 font-bold cursor-pointer hover:opacity-90 transition-opacity"
      >
        <GoPlus size={22} />
        {t("add_line")}
      </button>
    </div>
  );
};
