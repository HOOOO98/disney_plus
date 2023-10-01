import styled from 'styled-components';
import './App.css';
import Nav from './components/Nav';

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url()("/images/home-background.png") center center / cover no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`

function App() {
  return (
    <div className="App">
      <Nav />
    </div>
  );
}

export default App;
