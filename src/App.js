import Header from './components/Header/Header';
import Questions from './components/Questions/Questions';
import Restaurant from './components/Restaurant/Restaurant';
import Footer from './Footer/Footer';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Restaurant></Restaurant>
      <Questions></Questions>
      <Footer></Footer>
    </div>
  );
}

export default App;
