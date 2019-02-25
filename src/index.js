import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import audioclick from './assets/Click_On.mp3'

let myEl = document.getElementById("start-button");

let hideMain = () => {
  let el = document.getElementById("start-page");
  let audio = new Audio(audioclick)
  audio.play();
  setTimeout(function(){ el.classList.add("hidden"); }, 1000);
  // console.log(el);
  ReactDOM.render(<App />, document.getElementById('root'));
}

myEl.addEventListener("click", hideMain);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
