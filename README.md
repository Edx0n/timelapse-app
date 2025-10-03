# Timelapse - World Clock Application

<img width="1372" height="898" alt="image" src="https://github.com/user-attachments/assets/92f1edb2-44fa-4041-8503-17777c756fd3" />


A beautiful and modern React application that displays real-time clocks for countries and timezones around the world.

![Timelapse App](https://img.shields.io/badge/React-18.2-blue)
![Zustand](https://img.shields.io/badge/Zustand-4.4-purple)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.3-cyan)

## Features

- **Real-time Updates**: All clocks update every second automatically
- **Search Functionality**: Search by country, city, region, or timezone
- **Favorite Timezones**: Mark your frequently used timezones as favorites
- **Beautiful UI**: Modern design built with ShadCN UI components and Tailwind CSS
- **60+ Timezones**: Coverage of major cities and countries worldwide
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Dark Mode Ready**: Prepared for dark mode support
- **Persistent Storage**: Your favorites are saved locally

## Tech Stack

- **React 18.2** - UI library
- **Vite** - Build tool and dev server
- **Zustand** - State management
- **date-fns & date-fns-tz** - Date and timezone handling
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon set
- **ShadCN UI** - High-quality UI components

## Getting Started

### Prerequisites

- Node.js 16.x or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/timelapse-app.git
cd timelapse-app
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

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
timelapse-app/
├── src/
│   ├── components/        # React components
│   │   ├── ui/           # ShadCN UI components
│   │   ├── Header.jsx
│   │   ├── SearchBar.jsx
│   │   └── TimeZoneCard.jsx
│   ├── constants/        # App constants
│   │   └── timezones.js
│   ├── store/            # Zustand store
│   │   └── timeStore.js
│   ├── utils/            # Utility functions
│   │   └── cn.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## State Management

The app uses Zustand for state management with the following features:

- **Current Time**: Updates every second
- **Search Query**: Filter timezones by search term
- **Favorites**: Persistent favorite timezones
- **Computed Timezones**: Automatically formats time for each timezone

## Features in Detail

### Search

Search across:
- Country names
- City names
- Timezone identifiers
- Regions (Americas, Europe, Asia, Oceania, Africa)

### Timezone Cards

Each timezone card displays:
- City and country name
- Current time (HH:mm:ss format)
- Current date
- UTC offset
- Region
- Favorite toggle button

### Persistent Storage

Favorite timezones are automatically saved to localStorage and restored on page load.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.

## Author

Built with ❤️ using React, Zustand, and ShadCN UI

## Acknowledgments

- [ShadCN UI](https://ui.shadcn.com/) for the beautiful component designs
- [Lucide Icons](https://lucide.dev/) for the icon set
- [date-fns](https://date-fns.org/) for date manipulation
- [Zustand](https://github.com/pmndrs/zustand) for simple state management

