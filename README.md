# Weather App

A simple, elegant weather application built with Node.js and Express that uses the OpenWeather API to display real-time weather information.

## Features

- Real-time weather data retrieval
- Clean, modern UI with glassmorphism design
- Responsive layout
- Error handling
- Environment variable configuration

## Prerequisites

- Node.js (v12 or higher)
- npm (Node Package Manager)
- OpenWeather API key

## Installation

1. Clone the repository:

```bash
git clone <your-repository-url>
cd apifile
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:
   - Copy `.env.example` to `.env`
   - Replace `your_api_key_here` with your OpenWeather API key

```bash
cp .env.example .env
```

4. Start the server:

```bash
node api.js
```

5. Visit `http://localhost:3000` in your browser

## Project Structure

```
apifile/
├── public/
│   └── style.css
├── .env
├── .env.example
├── .gitignore
├── api.js
├── index.html
└── README.md
```

## Environment Variables

- `OPENWEATHER_API_KEY`: Your OpenWeather API key
- `PORT`: Port number for the server (default: 3000)

## API Reference

This project uses the [OpenWeather API](https://openweathermap.org/api) to fetch weather data.

## Dependencies

- express
- body-parser
- dotenv

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- OpenWeather API for providing weather data
- Glassmorphism design inspiration
