import Weather from './components/Weather'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <div className="tech-stack">
          <div className="logo-container">
            <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
              <img src="/vite.svg" className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank" rel="noreferrer">
              <img src="/react.svg" className="logo react" alt="React logo" />
            </a>
          </div>
          <h1>Weather App</h1>
          <div className="built-with">
            Built with React + Vite
          </div>
          <div className="card">
            <p>Get real-time weather information for any city</p>
          </div>
        </div>
      </header>
      <Weather />
      <footer className="app-footer">
        <p>© 2025 Weather App - Powered by OpenWeather API</p>
        <p className="tech-info">
          Built with React 18 | Vite | Axios
        </p>
      </footer>
    </div>
  )
}

export default App
