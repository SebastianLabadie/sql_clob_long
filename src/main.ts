import './style.css'
import { setupInput } from './counter'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
  	<input placeholder="sql" type="text" id="txtSql" />
    <input placeholder="string" type="text" id="txtString" />
	<input placeholder="lineas" type="number" id="txtLines" />
	<button id="btnSplitTxt">Crear sql</button>
  </div>
`

setupInput(document.querySelector<HTMLButtonElement>('#btnSplitTxt')!)
