import { PropsWithChildren } from "react";
import { render } from "@testing-library/react";
import type { RenderOptions } from '@testing-library/react'
import type { PreloadedState } from '@reduxjs/toolkit'
import { Provider } from "react-redux";
import { setupStore } from "./app/store";
import type { RootState, AppStore } from "./app/store";

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>
  store?: AppStore
}

export const renderWithProviders = (
  ui: React.ReactElement,
  {
    preloadedState = {},
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {}
  ) => {
    function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
      return <Provider store={store}>{children}</Provider>
    }

    return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
  };
