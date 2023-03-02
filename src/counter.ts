

export function setupInput(element: HTMLButtonElement) {
	element.addEventListener('click', () => {
		const txtString = document.querySelector<HTMLInputElement>('#txtString')!.value
		const txtLines = parseInt(document.querySelector<HTMLInputElement>('#txtLines')!.value)
		let txtSql = document.querySelector<HTMLInputElement>('#txtSql')!.value

		//lines splitted by number  of characters
		const lines = txtString.match(new RegExp(`.{1,${txtLines}}`, 'g'))
		
		//por cada linea se agrega al sql comoo blob
		lines?.forEach((line:string,idx:number) => {
			if (idx === 0) {
				txtSql += `\n TO_CLOB('${line}')`
			}else{
				txtSql += `\n || TO_CLOB('${line}')`
			}
		})

		//agregar al sql el parentesis final
		txtSql += `\n );`
		
		console.log(`lines `,lines)


		//copiar texto al portapapeles
		navigator.clipboard.writeText(txtSql)
	})
  }
  
