# Gutendex Books

A modern web application for browsing and discovering books from the Gutendex API. Built with clean UI/UX principles and responsive design.

## Features

- **Browse by Genre**: Explore books organized by different literary genres
- **Search Functionality**: Search for specific books within each genre
- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Infinite Scroll**: Load more books as you scroll through the catalog
- **Book Details**: View book covers, titles, and author information

## Project Structure

```
Gutendex-books/
├── src/
│   ├── components/
│   │   ├── BookCard.jsx      # Book display component
│   │   ├── GenreCard.jsx     # Genre selection component
│   │   ├── Header.jsx        # Navigation header
│   │   └── SearchBar.jsx     # Search functionality
│   ├── pages/
│   │   ├── Home.jsx          # Home/landing page with genre selection
│   │   └── Books.jsx         # Books listing page with infinite scroll
│   ├── services/
│   │   └── api.js            # Gutendex API integration
│   ├── data/
│   │   └── genres.js         # Genre data
│   ├── styles/
│   │   └── main.css          # Global styles and responsive design
│   ├── assets/               # Images and icons
│   ├── App.jsx               # Main app component
│   └── main.jsx              # Entry point
├── public/                   # Static assets
├── index.html                # HTML template
├── package.json              # Dependencies and scripts
├── vite.config.js            # Vite configuration
├── eslint.config.js          # ESLint configuration
└── README.md                 # This file
```

## Design System

### Color Palette
- **Primary Purple**: `#5E56E7` - Main accent color
- **Background Light**: `#F8F7FF` - Primary background
- **Background Gray**: `#F0F0F6` - Secondary background
- **Text Dark**: `#333333` - Primary text color
- **Text Gray**: `#A0A0A0` - Secondary text color
- **White**: `#FFFFFF` - Card backgrounds

### Typography
- **Font Family**: Montserrat
- **Headings**: 600 font-weight
- **Body**: 400 font-weight

## Setup Instructions

1. Clone the repository or download the project files
2. Open `index.html` in your web browser

## Usage

### Home Page
- Select a genre from the available options
- Each genre card displays an icon and name
- Click any genre to view books in that category

### Books Page
- View a grid of books with cover images, titles, and authors
- Use the search bar to filter books within the genre
- Scroll down to load more books
- Click the back button to return to the home page

## API Integration

This application uses the [Gutendex API](https://gutendex.com/books) to fetch book data:
- Base URL: `https://gutendex.com/books`
- Supports filtering by topic/genre
- Supports search queries

## Responsive Breakpoints

- **Desktop**: 1025px and above
- **Tablet**: 769px - 1024px (4 columns)
- **Mobile**: 421px - 768px (3 columns)
- **Small Mobile**: 420px and below (2 columns)

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Future Enhancements

- Book detail modal with full information
- Favorites/bookmarks feature
- User ratings and reviews
- Dark mode
- Advanced filtering options
- Reading list management

## Acknowledgments

This project was developed with professional guidance from AI (GitHub Copilot, Gemini) for:
- **Project Boilerplate & Structure**: Initial setup and component architecture
- **Styling & CSS**: Design implementation and responsive layout refinement
- **Git Workflow Support**: Assistance with version control issues and repository management
- **Documentation & README**: Content structure and documentation creation

**Core Implementation**: The most complex feature—**Infinite Scroll with Debounced Search**—combines Intersection Observer API, pagination logic, and state management. This was implemented with hints and guidance, showcasing advanced React patterns including useCallback, useRef, and proper cleanup handlers to prevent memory leaks.

## License

This project is open source and available for educational purposes.

## Resources

- [Gutendex API Documentation](https://gutendex.com/)
- [Montserrat Font](https://fonts.google.com/specimen/Montserrat)