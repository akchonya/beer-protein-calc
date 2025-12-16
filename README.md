# 🍺 Beer Protein Calculator

A humorous calculator that determines how much beer you'd need to drink to meet your daily protein requirements. Built with React, TypeScript, and Tailwind CSS.

## Features

- 🧮 Calculates daily protein needs based on:
  - Gender
  - Age
  - Height and weight
  - Activity level
  - Fitness goals (maintain, lose weight, gain muscle)
- 🍺 Supports different beer types (light and dark) with varying protein content
- 🌍 Bilingual support (Ukrainian and English)
- 📱 Responsive design
- ⚡ Fast and lightweight

## Disclaimer

⚠️ **This is a joke calculator and is NOT a medical or nutritional recommendation.** Please do not use beer as your primary protein source!

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS v4** - Styling
- **PostCSS** - CSS processing

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd beer-protein-calc
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint

## How It Works

The calculator uses the following formula:

1. **Base protein requirement** (per kg of body weight):
   - Maintain: 1.2g/kg
   - Lose weight: 1.4g/kg
   - Gain muscle: 1.7g/kg

2. **Activity multiplier**:
   - Sedentary: 0.9x
   - Light activity: 1.0x
   - Moderate activity: 1.1x
   - High activity: 1.2x
   - Extreme activity: 1.3x

3. **Gender adjustment**:
   - Male: 1.05x
   - Female: 0.95x
   - Prefer not to say: 1.0x

4. **Beer protein content**:
   - Light beer (Wheat): ~5g/L
   - Dark beer (Milk Stout): ~4g/L

## Project Structure

```
beer-protein-calc/
├── src/
│   ├── App.tsx          # Main calculator component
│   ├── main.tsx         # Application entry point
│   └── index.css        # Tailwind CSS imports
├── public/              # Static assets
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── tailwind.config.js   # Tailwind configuration
├── postcss.config.js    # PostCSS configuration
└── vite.config.ts       # Vite configuration
```

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## License

This project is open source and available under the MIT License.
