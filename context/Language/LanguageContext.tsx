import { createContext, useContext } from "react";
import { Language } from "../../interface";

export interface LanguageContextProps {
	languageTexts: Language;
	currentLanguage: string;
	setCurrentLanguage: (language: "portugues" | "english") => void;
}

export const LanguageContext = createContext({} as LanguageContextProps);

export const useLanguage = () => {
	return useContext(LanguageContext);
};
