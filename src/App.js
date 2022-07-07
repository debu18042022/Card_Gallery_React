// import logo from './logo.svg';
import './App.css';
import "./style.css";
import Display from './Display';

const text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has ever since the 1500s text of the printing and typesetting industry has ever since the 1500s text of the printing.";
function App() {
  return (
    <div className="App">
      <h3 style={{textShadow:"20px 20px 15px #000",fontFamily:"cursive"}}>Card Gallery</h3>
      <Display color="blue" header="header" card_title="Primary Card " text1={text}/>
      <Display color="grey" header="header" card_title="Secondary Card " text1={text}/>
      <Display color="green" header="header" card_title="Success Card " text1={text}/>
      <Display color="red" header="header" card_title="Danger Card " text1={text}/>
      <Display color="black" header="header" card_title="BlackDark Card " text1={text}/>
      <Display color="blue" header="header" card_title="primary Card " text1={text}/>
      <Display color="grey" header="header" card_title="Secondary Card " text1={text}/>
      <Display color="violet" header="header" card_title="Secondary Card " text1={text}/>
    </div>
  );
}

export default App;