import './style.css'
import { setupBtnSql ,setupBtnArray} from './counter'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
  	<input placeholder="sql" type="text" id="txtSql" />
    <input placeholder="string" type="text" id="txtString" />
	<input placeholder="lineas" type="number" id="txtLines" />
	<button id="btnSplitTxt">Crear sql</button>
	<div>
		<input placeholder="array coordenadas" type="text" id="txtArrCoords" />
		<button id="btnArrayCoords">Crear Array Coordenadas</button>
	</div>
  </div>
`

setupBtnSql(document.querySelector<HTMLButtonElement>('#btnSplitTxt')!)
setupBtnArray(document.querySelector<HTMLButtonElement>('#btnArrayCoords')!)
