import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './compopnents/Header'
import Footer from './compopnents/Footer'
import HomeScreen from './screens/HomeScreen'

const App = () => {
  return (
    <Router>
        <Header />
        <main className='py-3'>
            <Container>
                <Route path='/' component={HomeScreen} exact />
            </Container>
        </main>
        <Footer />
    </Router>
  );
}

export default App;
