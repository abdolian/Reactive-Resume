import { StrictMode, useEffect } from "react";
import * as ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { router } from "./router";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

// TODO: MASOOD
const Lang = ({ children }: any) => {
  useEffect(() => {
    try {
      const lang = (new URLSearchParams(window.location.search)).get('lang');
      if (!lang) return;
      window.localStorage.setItem('locale', lang);
    } catch { }
  }, [])
  return children
}

root.render(
  <StrictMode>
    <Lang>
      <RouterProvider router={router} />
    </Lang>
  </StrictMode>,
);
