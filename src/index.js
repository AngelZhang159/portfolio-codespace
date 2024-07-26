import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

import App from "./App";

i18next.init({
	interpolation: { escapeValue: false }, // React already does escaping
});

const container = document.getElementById("app");
const root = createRoot(container);

root.render(
	<StrictMode>
		<I18nextProvider i18n={i18next}>
			<App />
		</I18nextProvider>
	</StrictMode>
);
