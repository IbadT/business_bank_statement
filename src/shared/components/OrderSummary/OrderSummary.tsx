import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FaCheck, FaTimes } from 'react-icons/fa';

interface OrderItem {
  id: string;
  name: string;
  price: number;
  selected: boolean;
  description?: string;
}

interface OrderSummaryProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OrderSummary = ({ isOpen, onClose }: OrderSummaryProps) => {
  const { t } = useTranslation();
  const [orderItems, setOrderItems] = useState<OrderItem[]>([
    {
      id: 'basic_report',
      name: 'Basic Bank Statement',
      price: 29.99,
      selected: true,
      description: 'Standard monthly report'
    },
    {
      id: 'advanced_analytics',
      name: 'Advanced Analytics',
      price: 19.99,
      selected: false,
      description: 'Detailed financial insights'
    },
    {
      id: 'priority_support',
      name: 'Priority Support',
      price: 9.99,
      selected: false,
      description: '24/7 customer support'
    },
    {
      id: 'data_export',
      name: 'Data Export',
      price: 14.99,
      selected: false,
      description: 'Export to Excel/PDF'
    },
    {
      id: 'api_access',
      name: 'API Access',
      price: 39.99,
      selected: false,
      description: 'Programmatic access to data'
    }
  ]);

  const [subtotal, setSubtotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [total, setTotal] = useState(0);

  // Calculate prices in real-time
  useEffect(() => {
    const selectedItems = orderItems.filter(item => item.selected);
    const newSubtotal = selectedItems.reduce((sum, item) => sum + item.price, 0);
    const newTax = newSubtotal * 0.1; // 10% tax
    const newTotal = newSubtotal + newTax;

    setSubtotal(newSubtotal);
    setTax(newTax);
    setTotal(newTotal);
  }, [orderItems]);

  const toggleItem = (id: string) => {
    setOrderItems(prev => 
      prev.map(item => 
        item.id === id ? { ...item, selected: !item.selected } : item
      )
    );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 max-h-[80vh] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">{t('order_summary')}</h2>
            <button 
              onClick={onClose}
              className="text-white hover:text-gray-200 transition-colors"
            >
              <FaTimes size={20} />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 max-h-96 overflow-y-auto">
          <div className="space-y-4">
            {orderItems.map((item) => (
              <div 
                key={item.id}
                className={`border rounded-xl p-4 transition-all duration-200 cursor-pointer ${
                  item.selected 
                    ? 'border-green-500 bg-green-50' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => toggleItem(item.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                      item.selected 
                        ? 'border-green-500 bg-green-500' 
                        : 'border-gray-300'
                    }`}>
                      {item.selected && <FaCheck className="text-white text-xs" />}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">{item.name}</h3>
                      {item.description && (
                        <p className="text-sm text-gray-500">{item.description}</p>
                      )}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-lg">${item.price.toFixed(2)}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer with pricing */}
        <div className="border-t bg-gray-50 p-6">
          <div className="space-y-2">
            <div className="flex justify-between text-gray-600">
              <span>Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Tax (10%):</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="border-t pt-2">
              <div className="flex justify-between text-lg font-bold">
                <span>Total:</span>
                <span className="text-green-600">${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
          
          <button className="w-full mt-4 bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-xl font-bold hover:from-green-600 hover:to-green-700 transition-all duration-200 shadow-lg">
            {t('pay_and_generate')}
          </button>
        </div>
      </div>
    </div>
  );
};
