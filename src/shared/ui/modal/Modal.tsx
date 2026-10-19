import { createRoot } from 'react-dom/client';
import { createContext, useContext } from 'react';
import type { ReactNode } from 'react';

const ModalCloseContext = createContext<() => void>(() => {});

export const useModalClose = () => useContext(ModalCloseContext);

interface OpenModalOptions {
  children: ReactNode;
}

export const openModal = ({ children }: OpenModalOptions) => {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);

  const close = () => {
    root.unmount();
    document.body.removeChild(container);
  };

  root.render(
    <ModalCloseContext.Provider value={close}>
      <div
        className="fixed inset-0 bg-[#F8F8F8CC] flex items-center justify-center z-[100] p-4"
        onClick={(e) => { if (e.target === e.currentTarget) close(); }}
      >
        <div
          className="bg-white rounded-[24px] p-6 w-full max-w-[550px] flex flex-col gap-12 max-h-[90vh] overflow-y-auto"
          style={{ boxShadow: '0px -1px 30px 0px rgba(198,198,198,0.25)' }}
        >
          {children}
        </div>
      </div>
    </ModalCloseContext.Provider>
  );

  return { close };
};
