import { useCallback, useRef } from "react";
import { create } from "zustand";

type Updater<T> = T | ((prev: T) => T);

interface StepStoreState {
  values: Record<string, unknown>;
  setValue: (key: string, value: unknown) => void;
  reset: () => void;
}

/**
 * Хранилище значений шагов многошаговой формы.
 * `useStepState(key, initial)` работает как `useState`, но значение переживает
 * размонтирование шага (переключение между шагами не теряет введённые данные).
 */
export const createStepStore = () => {
  const useStore = create<StepStoreState>((set) => ({
    values: {},
    setValue: (key, value) => set((s) => ({ values: { ...s.values, [key]: value } })),
    reset: () => set({ values: {} }),
  }));

  const useStepState = <T,>(key: string, initial: T): [T, (next: Updater<T>) => void] => {
    const stored = useStore((s) => s.values[key]) as T | undefined;
    const initialRef = useRef(initial);

    const setState = useCallback(
      (next: Updater<T>) => {
        const prev = (useStore.getState().values[key] as T | undefined) ?? initialRef.current;
        const value = typeof next === "function" ? (next as (p: T) => T)(prev) : next;
        useStore.getState().setValue(key, value);
      },
      [key],
    );

    return [stored ?? initial, setState];
  };

  const resetSteps = () => useStore.getState().reset();

  return { useStepState, resetSteps };
};
