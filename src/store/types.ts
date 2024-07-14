// src/store/types.ts
export interface AppState {
  count: number;
}

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

interface IncrementAction {
  type: typeof INCREMENT;
}

interface DecrementAction {
  type: typeof DECREMENT;
}

export type AppActionTypes = IncrementAction | DecrementAction;
