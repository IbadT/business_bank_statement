type ChangeTarget = { target: { name: string; value: string } };

/** Обработчик изменения поля для состояния-объекта: `onChange={fieldChange(setData)}`. */
export const fieldChange =
  <T extends object>(setData: (updater: (prev: T) => T) => void) =>
  (e: ChangeTarget) =>
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
