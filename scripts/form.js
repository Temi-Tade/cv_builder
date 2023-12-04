FORM.onsubmit = (e) => {
	e.preventDefault()
	let is_input_valid = INPUTS.some((val, ind) => val.value.trim().length > 0)
	if (is_input_valid) {
		for (var value in INPUTS) {
			if (INPUTS[value].value.trim().length === 0) {
				DISPLAY_MODAL(`${INPUTS[value].placeholder.toUpperCase()} is empty`)
				break;
				return
			} else {
				continue
			}
		}
	}
}

