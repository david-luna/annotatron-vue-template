/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// Helper interfaces
interface SubscriptionLike {
  unsubscribe(): void;
}
interface ObservableLike {
  subscribe(handler: (value: unknown) => void): SubscriptionLike;
}

// Declare backend global var
declare var backend: {
  dispatchCommand: ({ type: string, payload: unknown }) => void;
  dispatchQuery: ({ type: string, payload: unknown }) => void;
  results$: ObservableLike,
  errors$: ObservableLike,
  events$: ObservableLike,
};
