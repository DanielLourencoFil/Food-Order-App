import { ReactNode, useEffect, useState } from "react";
import { LanguageContext } from "./LanguageContext";
import { Language, LanguagesTypes } from "../../interface";
import { languagesDataTexts } from "../../data";
// import { portugues, english } from "../../data/languagesDataTexts";

type Props = {
	children: ReactNode;
};

export const LanguageProvider = ({ children }: Props) => {
	const defaultLanguage = "english";

	const [currentLanguage, setCurrentLanguage] =
		useState<LanguagesTypes>(defaultLanguage);

	const [languageTexts, setLanguageTexts] = useState<Language>(
		languagesDataTexts["english"]
	);

	useEffect(() => {
		setLanguageTexts(languagesDataTexts[currentLanguage]);
	}, [currentLanguage]);

	return (
		<LanguageContext.Provider
			value={{ languageTexts, currentLanguage, setCurrentLanguage }}
		>
			{children}
		</LanguageContext.Provider>
	);
};
