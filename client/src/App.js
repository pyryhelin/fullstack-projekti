import { useState } from 'react';
import './App.css';
import CreateBlogModal from './components/modal';


function submitChat(text){
  let outputfield = document.getElementById("output");
  if(text.length > 0)
    outputfield.value += text + "\n\n"; 
  
  clear(document.getElementById("input"));
  
  outputfield.scrollTop = outputfield.scrollHeight;
}

function clear(element){
  element.value = "";
}


function App() {

  const [modalOpen, setModalOpen] = useState(false);


  return (
    <div className="App">
      <header className="App-header">
        <p>
          ChatBot
        </p>
        <textarea className="outputfield" id="output"></textarea>
        <textarea className="inputfield" id="input"></textarea>
        <div className="buttons"> 
        <button onClick={() => {
          console.log(document.getElementById("input").value);
          submitChat(document.getElementById("input").value)
          }}>
          submit
        </button>
        <button onClick={() => {
          clear(document.getElementById("output"));
          clear(document.getElementById("input"));
          }}>
          clear
        </button>
        </div>
        <button onClick={() => {
          setModalOpen(true)
          console.log("modal");
          }}>
          modal
        </button>
      </header>
      
    </div>
  );
}

export default App;
