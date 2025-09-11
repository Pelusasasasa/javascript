import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { enviromentsComponent } from './concepts/01-enviroment'
import { demoComponent } from './concepts/demo'
import { callbacksComponent } from './concepts/02-callbacks'
import { promisesComponent } from './concepts/03-promises'
import { promiseRaceComponent } from './concepts/04-promises-race'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      
    </div>
  </div>
`
const element = document.querySelector('.card');
// callbacksComponent(element);
promiseRaceComponent(element)