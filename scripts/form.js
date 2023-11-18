//document.querySelectorAll returns a node list,convert it to an array with JS notation in order to perfrom .some() operation
const INPUTS = [...document.querySelectorAll('input')]
const FORM = document.querySelector('form')

//alert(INPUTS)

FORM.onsubmit = (e) => {
	e.preventDefault()
	let is_input_valid = INPUTS.some((val, ind) => val.value.trim().length > 0)
	if (is_input_valid) {
		for (var value in INPUTS) {
			if (INPUTS[value].value.trim().length === 0) {
				alert(`${INPUTS[value]. placeholder} is empty`)
				break;
			} else {
				continue
			}
		}
	} else {
		alert(0)
	}
}

x = [1,2,37,88,7,6,6]

y = x.some((val, ind) => val > 5)
//alert(y)