import { Container } from 'react-bootstrap'
import Header from './compopnents/Header'
import Footer from './compopnents/Footer'

const App = () => {
  return (
    <>
        <Header />
        <main className='py-3'>
            <Container>
                <h1>Bienvenu sur AntSeller !</h1>
            </Container>
        </main>
        <Footer />
    </>
  );
}

export default App;
