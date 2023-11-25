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

class School {
	constructor(count, index) {
		this.count = [...document.querySelector('#school_list').querySelectorAll("input[type=text]")].length
		this.index = 1
	}
	
	create = () => {
		//this.count += 1
		this.index += 1
		document.querySelector("#school_list").innerHTML += `
			<div class="field school">
				<input type="text" id="school${this.index}" placeholder="school name">
				<label for="school_start1">When did you start?
					<input type="month" id="school_start${this.index}" placeholder="school ${this.index} start date">
				</label>
				<label for="school_stop${this.index}">When did you leave there?
					<input type="month" id="school_stop${this.index}" placeholder="school ${this.index} stop date">
				</label>
				<label for="school_query${this.index}" class="present">
					<input type="checkbox" id="school_query${this.index}">Still attending?
				</label>
				
				<div class = "field remove">
					<button id='remove_school' type="button" class="fa-solid fa-trash remove">Remove</button> 
				</div>
			<hr>
			</div>
		`;
		
		document.querySelectorAll(".remove").forEach((val, ind) => {
			val.onclick = () => {
				val.parentElement.parentElement.remove()
			}
		})
	}
}

const ADD_NEW_SCHOOL = () => {
	let school = new School()
	school.create()
}