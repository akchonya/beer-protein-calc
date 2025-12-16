import { useState } from "react";

const i18n = {
  ua: {
    title: "🍺 Калькулятор пивного білка",
    gender: "Стать",
    male: "Чоловік",
    female: "Жінка",
    any: "Не хочу вказувати",
    age: "Вік",
    height: "Зріст (см)",
    weight: "Вага (кг)",
    activity: "Рівень активності",
    goal: "Мета",
    beer: "Тип пива",
    lightBeer: "Світле",
    darkBeer: "Темне",
    protein: "Добова норма білка",
    beerNeed: "Потрібно пива",
    bottles: "пляшок по 0.5 л",
    disclaimer: "* Жартівливий калькулятор. Не є рекомендацією.",
    activityOptions: {
      sedentary: "Сидячий спосіб життя",
      light: "Легка активність (прогулянки)",
      moderate: "Середня (спорт 2–3 р/тиждень)",
      high: "Висока (регулярні тренування)",
      extreme: "Дуже висока (щоденні тренування)"
    },
    goalOptions: {
      maintain: "Підтримка",
      lose: "Схуднення",
      gain: "Набір мʼязів"
    },
    beerTooltip: "Для прикладу взято пшеничне пиво і мілк стаут з \"Травню\"."
  },
  en: {
    title: "🍺 Beer Protein Calculator",
    gender: "Gender",
    male: "Male",
    female: "Female",
    any: "Prefer not to say",
    age: "Age",
    height: "Height (cm)",
    weight: "Weight (kg)",
    activity: "Activity level",
    goal: "Goal",
    beer: "Beer type",
    lightBeer: "Light",
    darkBeer: "Dark",
    protein: "Daily protein need",
    beerNeed: "Beer required",
    bottles: "0.5L bottles",
    disclaimer: "* Joke calculator. Not a recommendation.",
    activityOptions: {
      sedentary: "Sedentary lifestyle",
      light: "Light activity (walking)",
      moderate: "Moderate (sport 2-3x/week)",
      high: "High (regular training)",
      extreme: "Very high (daily training)"
    },
    goalOptions: {
      maintain: "Maintain",
      lose: "Lose weight",
      gain: "Gain muscle"
    },
    beerTooltip: "Examples are based on wheat beer and milk stout from \"Traven\"."
  }
};

export default function BeerProteinCalculator() {
  const [lang, setLang] = useState<"ua" | "en">("ua");
  const t = i18n[lang];

  const [gender, setGender] = useState("");
  const [age, setAge] = useState<number | "">("");
  const [height, setHeight] = useState<number | "">("");
  const [weight, setWeight] = useState<number | "">("");
  const [activity, setActivity] = useState("");
  const [goal, setGoal] = useState("");
  const [beerType, setBeerType] = useState("");

  const isReady = age && height && weight && activity && goal && beerType;

  // Protein per kg depending on goal
  const baseProtein = {
    maintain: 1.2,
    lose: 1.4,
    gain: 1.7
  }[goal] || 0;

  // Activity multiplier
  const activityFactor = {
    sedentary: 0.9,
    light: 1.0,
    moderate: 1.1,
    high: 1.2,
    extreme: 1.3
  }[activity] || 0;

  // Gender adjustment
  const genderFactor = gender === "male" ? 1.05 : gender === "female" ? 0.95 : 1.0;

  const dailyProtein = isReady
    ? Number(weight) * baseProtein * activityFactor * genderFactor
    : 0;

  // Beer protein assumption based on styles
  // Wheat beer ~5 g/L, Milk Stout ~4 g/L
  const beerProteinPerLiter = beerType === "dark" ? 4 : 5;
  const litersNeeded = dailyProtein / beerProteinPerLiter;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md space-y-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">{t.title}</h1>
          <select value={lang} onChange={e => setLang(e.target.value as "ua" | "en")} className="border rounded p-1 text-sm">
            <option value="ua">UA</option>
            <option value="en">EN</option>
          </select>
        </div>

        <select value={gender} onChange={e => setGender(e.target.value)} className="border rounded p-2 w-full">
          <option value="" disabled hidden>{t.gender}</option>
          <option value="male">{t.male}</option>
          <option value="female">{t.female}</option>
          <option value="any">{t.any}</option>
        </select>

        <input type="number" placeholder={t.age} value={age} onChange={e => setAge(e.target.value === "" ? "" : +e.target.value)} className="border rounded p-2 w-full" />
        <input type="number" placeholder={t.height} value={height} onChange={e => setHeight(e.target.value === "" ? "" : +e.target.value)} className="border rounded p-2 w-full" />
        <input type="number" placeholder={t.weight} value={weight} onChange={e => setWeight(e.target.value === "" ? "" : +e.target.value)} className="border rounded p-2 w-full" />

        <select value={activity} onChange={e => setActivity(e.target.value)} className="border rounded p-2 w-full">
          <option value="" disabled hidden>{t.activity}</option>
          <option value="sedentary">{t.activityOptions.sedentary}</option>
          <option value="light">{t.activityOptions.light}</option>
          <option value="moderate">{t.activityOptions.moderate}</option>
          <option value="high">{t.activityOptions.high}</option>
          <option value="extreme">{t.activityOptions.extreme}</option>
        </select>

        <select value={goal} onChange={e => setGoal(e.target.value)} className="border rounded p-2 w-full">
          <option value="" disabled hidden>{t.goal}</option>
          <option value="maintain">{t.goalOptions.maintain}</option>
          <option value="lose">{t.goalOptions.lose}</option>
          <option value="gain">{t.goalOptions.gain}</option>
        </select>

        <div className="space-y-1">
  <div className="flex items-center gap-2">
    <select value={beerType} onChange={e => setBeerType(e.target.value)} className="border rounded p-2 w-full">
      <option value="" disabled hidden>{t.beer}</option>
      <option value="light">{t.lightBeer}</option>
      <option value="dark">{t.darkBeer}</option>
    </select>

    <div className="relative group">
      <span className="cursor-pointer text-gray-400 font-bold">?</span>
      <div className="absolute right-0 top-6 w-64 bg-black text-white text-xs rounded-lg p-2 opacity-0 group-hover:opacity-100 transition pointer-events-none">
        {t.beerTooltip}
      </div>
    </div>
  </div>
</div>

        {isReady && (
          <div className="bg-gray-50 rounded-xl p-4 text-center space-y-2">
            <p>{t.protein}</p>
            <p className="text-2xl font-bold">{dailyProtein.toFixed(0)} г</p>
            <p className="mt-2">{t.beerNeed}</p>
            <p className="text-xl">🍺 {litersNeeded.toFixed(1)} л</p>
            <p className="text-sm text-gray-600">≈ {(litersNeeded / 0.5).toFixed(0)} {t.bottles}</p>
          </div>
        )}

        <p className="text-xs text-gray-400 text-center">{t.disclaimer}</p>
      </div>
    </div>
  );
}
