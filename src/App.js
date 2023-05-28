
import HomePage from './HomePage';
import ThemeProvider from './contextApi/context';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import './index.css';

function App() {
  return (
      <ThemeProvider >
      <HomePage />
      </ThemeProvider>
  )
}
export default App;




