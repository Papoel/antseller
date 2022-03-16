import { Container } from 'react-bootstrap'
import Header from './compopnents/Header'
import Footer from './compopnents/Footer'
import HomeScreen from './screens/HomeScreen'

const App = () => {
  return (
    <>
        <Header />
        <main className='py-3'>
            <Container>
                <HomeScreen />
            </Container>
        </main>
        <Footer />
    </>
  );
}

export default App;
