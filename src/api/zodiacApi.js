// import axios from "axios";

// export const getZodiacDescription = async (sign, language) => {
// 	const lang = language === "ru" ? "original" : "translated";
// 	const response = await axios.post("https://poker247tech.ru/get_horoscope/", {
// 		sign,
// 		language: lang,
// 		period: "today",
// 	});
// 	return response.data.horoscope;
// };
export async function translateText(text, sourceLang, targetLang) {
	try {
		const response = await fetch(
			`https://lingva.ml/api/v1/${sourceLang}/${targetLang}/${encodeURIComponent(
				text
			)}`
		);
		const data = await response.json();
		return data.translation; // Полученный перевод
	} catch (error) {
		return "Error translating text:", error;
	}
}
