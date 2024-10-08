import aries from "../icons/aries.webp";
import aquarius from "../icons/aquarius.webp";
import cancer from "../icons/cancer.webp";
import gemini from "../icons/gemini.webp";
import taurus from "../icons/taurus.webp";
import leo from "../icons/leo.webp";
import virgo from "../icons/virgo.webp";
import libra from "../icons/libra.webp";
import scorpio from "../icons/scorpio.webp";
import sagittarius from "../icons/sagittarius.webp";
import capricorn from "../icons/capricorn.webp";
import pisces from "../icons/pisces.webp";

const zodiacSignsRus = [
	{ sign: "aries", name: "Овен", period: "21 марта - 19 апреля", icon: aries },
	{
		sign: "taurus",
		name: "Телец",
		period: "20 апреля - 20 мая",
		icon: taurus,
	},
	{
		sign: "gemini",
		name: "Близнецы",
		period: "21 мая - 20 июня",
		icon: gemini,
	},
	{
		sign: "cancer",
		name: "Рак",
		period: "21 июня - 22 июля",
		icon: cancer,
	},
	{
		sign: "leo",
		name: "Лев",
		period: "23 июля - 22 августа",
		icon: leo,
	},
	{
		sign: "virgo",
		name: "Дева",
		period: "23 августа - 22 сентября",
		icon: virgo,
	},
	{
		sign: "libra",
		name: "Весы",
		period: "23 сентября - 22 октября",
		icon: libra,
	},
	{
		sign: "scorpio",
		name: "Скорпион",
		period: "23 октября - 21 ноября",
		icon: scorpio,
	},
	{
		sign: "sagittarius",
		name: "Стрелец",
		period: "22 ноября - 21 декабря",
		icon: sagittarius,
	},
	{
		sign: "capricorn",
		name: "Козерог",
		period: "22 декабря - 19 января",
		icon: capricorn,
	},
	{
		sign: "aquarius",
		name: "Водолей",
		period: "20 января - 18 февраля",
		icon: aquarius,
	},
	{
		sign: "pisces",
		name: "Рыбы",
		period: "19 февраля - 20 марта",
		icon: pisces,
	},
];

const zodiacSignsEng = [
	{ sign: "aries", name: "Aries", period: "March 21 - April 19", icon: aries },
	{ sign: "taurus", name: "Taurus", period: "April 20 - May 20", icon: taurus },
	{ sign: "gemini", name: "Gemini", period: "May 21 - June 20", icon: gemini },
	{ sign: "cancer", name: "Cancer", period: "June 21 - July 22", icon: cancer },
	{ sign: "leo", name: "Leo", period: "July 23 - August 22", icon: leo },
	{
		sign: "virgo",
		name: "Virgo",
		period: "August 23 - September 22",
		icon: virgo,
	},
	{
		sign: "libra",
		name: "Libra",
		period: "September 23 - October 22",
		icon: libra,
	},
	{
		sign: "scorpio",
		name: "Scorpio",
		period: "October 23 - November 21",
		icon: scorpio,
	},
	{
		sign: "sagittarius",
		name: "Sagittarius",
		period: "November 22 - December 21",
		icon: sagittarius,
	},
	{
		sign: "capricorn",
		name: "Capricorn",
		period: "December 22 - January 19",
		icon: capricorn,
	},
	{
		sign: "aquarius",
		name: "Aquarius",
		period: "January 20 - February 18",
		icon: aquarius,
	},
	{
		sign: "pisces",
		name: "Pisces",
		period: "February 19 - March 20",
		icon: pisces,
	},
];

const horoscopes = [
	"Сегодня вам предстоит важное решение. Доверьтесь интуиции и не бойтесь брать на себя ответственность.",
	"Завтра благоприятный день для новых начинаний. Смело воплощайте в жизнь свои идеи, удача на вашей стороне.",
	"Ваши усилия скоро будут вознаграждены. Ожидайте приятных новостей и возможности укрепить свои позиции.",
	"Сегодня лучше избегать конфликтов. Держитесь подальше от споров и сосредоточьтесь на своих целях.",
	"Не забывайте о балансе между работой и отдыхом. Ваше здоровье требует внимания, уделите ему время.",
	"В ближайшее время вас ждёт интересная встреча. Она может повлиять на ваши планы и открыть новые горизонты.",
	"Сегодня отличный день для творчества. Дайте волю фантазии и не бойтесь проявить свою креативность.",
	"Вам стоит уделить внимание финансовым вопросам. Пересмотрите бюджет и избегайте лишних расходов.",
	"Ваши близкие нуждаются в вашей поддержке. Найдите время для общения и поделитесь своей заботой.",
	"Сегодня вам будет полезно отдохнуть и восстановить силы. Расслабьтесь и не перенапрягайтесь.",
	"Завтра звёзды обещают вам успех в личной жизни. Не упустите шанс укрепить отношения или завести новые знакомства.",
	"В ближайшие дни стоит избегать рисков. Действуйте осторожно и тщательно продумывайте каждый шаг.",
	"Сегодняшний день принесет вам новые возможности. Будьте открыты к переменам и не бойтесь экспериментировать.",
	"Ваши планы могут потребовать корректировки. Будьте готовы к неожиданным поворотам и сохраняйте гибкость.",
	"Сегодня хороший день для самосовершенствования. Начните учить что-то новое или займитесь своим хобби.",
	"Ваша энергия на пике, используйте её для достижения целей. Однако не забывайте про отдых.",
	"Сегодня вы можете встретить человека, который сыграет важную роль в вашей жизни. Будьте внимательны к новым знакомствам.",
	"Сегодня стоит уделить внимание долгосрочным планам. Продумайте свои шаги на будущее и не спешите с выводами.",
	"Завтра вас ждёт неожиданное предложение. Примите его, даже если сначала оно покажется вам рискованным.",
	"Сегодня удача на вашей стороне, особенно в финансовых вопросах. Вложение денег может принести хорошие результаты.",
	"Завтра постарайтесь не брать на себя слишком много обязательств. Вам нужно немного передохнуть и восстановить силы.",
	"Сегодня вы можете ощутить приток вдохновения. Используйте его для реализации своих идей.",
	"Завтра вам предстоит важная встреча. Подготовьтесь заранее и настройтесь на конструктивный диалог.",
	"Сегодня не стоит принимать поспешные решения. Лучше взвесьте все за и против перед тем, как действовать.",
	"Завтра ваши усилия на работе будут замечены и оценены по достоинству. Возможно, вас ждёт повышение.",
	"Сегодня подходящий день для того, чтобы привести в порядок дела. Разберите накопившиеся задачи и начните с чистого листа.",
	"Ваша интуиция будет особенно сильна в ближайшие дни. Доверяйте своим чувствам и не бойтесь следовать за ними.",
	"Сегодня будьте готовы к неожиданным переменам. Они могут изменить ваши планы, но принесут пользу в будущем.",
	"Завтра у вас появится шанс укрепить отношения с кем-то важным. Найдите время для общения и проявите внимание.",
	"Сегодняшний день будет удачным для завершения старых дел. Не откладывайте на потом то, что можно сделать сейчас.",
];

export { zodiacSignsRus, zodiacSignsEng, horoscopes };
