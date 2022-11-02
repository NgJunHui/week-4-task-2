require('file-loader?name=[name].[ext]!./index.html');
import { StrictMode } from "react";
import React from 'react';
import { createRoot } from "react-dom/client";
import { RecoilRoot } from 'recoil';
import App from "./App";

const rootElement = document.getElementById("app");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <RecoilRoot>
    <App />
    </RecoilRoot>
  </StrictMode>
);
