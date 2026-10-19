import type { ChangeEvent } from "react";

/** Синтетическое change-событие для кастомных контролов (календарь, select, генератор). */
export const createChangeEvent = (name: string, value: string) =>
  ({ target: { name, value } }) as ChangeEvent<HTMLInputElement>;
