import { useState, useMemo, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import type { OrderSummaryDropdownProps, OrderItem } from "../model/types";
import { orderItemsList } from "../config/order-items";
import { cn } from "@/shared/lib/cn";
import { useClickOutside } from "@/shared/lib/click-outside";

export const OrderSummaryDropdown = ({ isOpen, onClose }: OrderSummaryDropdownProps) => {
  const { t } = useTranslation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [orderItems, setOrderItems] = useState<OrderItem[]>(orderItemsList);

  const subtotal = useMemo(
    () => orderItems.filter(item => item.selected).reduce((sum, item) => sum + item.price, 0),
    [orderItems],
  );

  const toggleItem = (id: string) => {
    setOrderItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, selected: !item.selected } : item
      )
    );
  };

  useClickOutside(dropdownRef, onClose, isOpen);

  if (!isOpen) return null;

  return (
    <div
      ref={dropdownRef}
      className='absolute top-full right-0 w-80 max-w-[calc(100vw-2rem)] bg-white rounded-md shadow-md z-50 border border-gray-200 mt-1'
    >
      <div className="p-2">
        <div>
          {orderItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-3 hover:bg-gray-50 cursor-pointer rounded-lg transition-colors duration-200"
              onClick={() => toggleItem(item.id)}
            >
              <div className="flex items-center gap-3">
                <div className={cn(
                  "w-5 h-5 rounded border-2 flex items-center justify-center transition-all",
                  item.selected ? 'border-[var(--primary-yellow-color)] bg-[var(--primary-yellow-color)]' : 'border-gray-300'
                )}>
                  {item.selected && <div className="w-2 h-2 bg-white rounded-full"></div>}
                </div>
                <div>
                  <div className="font-medium text-gray-800">{t(item.name_key)}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-semibold text-gray-900">${item.price.toFixed(2)}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-200 mt-4 pt-4">
          <div className="flex justify-between items-center">
            <span className="font-bold text-lg">{t('total')}:</span>
            <span className="font-bold text-xl text-[var(--primary-yellow-color)]">${subtotal.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
