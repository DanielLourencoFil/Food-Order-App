import React from "react";
import { LanguagesTypes } from "../../interface/language";
import { useLanguage } from "../../context/Language/LanguageContext";

interface BtnProps {
	language: LanguagesTypes;
	text: string;
}

export const ChangeLanguageBtn = ({ language, text }: BtnProps) => {
	const { setCurrentLanguage } = useLanguage();

	return <button onClick={() => setCurrentLanguage(language)}>{text}</button>;
};
