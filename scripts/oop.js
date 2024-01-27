class School {
	constructor(count, index) {
		this.count = [...document.querySelector('#school_list').querySelectorAll("input[type=text]")].length
		this.index = 1
	}
	
	create = () => {
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
		
		document.querySelector("#school_list").querySelectorAll(".remove").forEach((val, ind) => {
			val.onclick = () => {
				val.parentElement.parentElement.remove()
			}
		})
	}
}

class Work extends School {
	constructor(count, index){
		super(index)
		this.count = [...document.querySelector('#work_list').querySelectorAll("input[type=text]")].length
	}
	
	create = () => {
		this.index += 1
		document.querySelector("#work_list").innerHTML += `
			<div class="field work">
				<input type="text" id="work${this.index}" placeholder="work name">
				<label for="work_start${this.index}">When did you start?
					<input type="month" id="work_start${this.index}" placeholder="work ${this.index} start date">
				</label>
				<label for="work_stop${this.index}">When did you leave there?
					<input type="month" id="work_stop${this.index}" placeholder="work ${this.index} stop date">
				</label>
				<label for="work_query${this.index}" class="present">
					<input type="checkbox" id="work_query${this.index}">Still attending?
				</label>
					
				<div class = "field remove">
					<button id='remove_work' type="button" class="fa-solid fa-trash remove">Remove</button> 
				</div>
				<hr>
			</div>
			`;
	
			document.querySelector("#work_list").querySelectorAll(".remove").forEach((val, ind) => {
				val.onclick = () => {
					val.parentElement.parentElement.remove()
				}
			})
	}
}

class Referee extends School{
	constructor(count, index){
		super(index)
		this.count = [...document.querySelector('#ref_list').querySelectorAll("input[type=text]")].length
	}
	
	create = () => {
		this.index += 1
		document.querySelector("#ref_list").innerHTML += `
			<div class="field ref">
				<input type="text" id="ref${this.index}" placeholder="referee name, email address, phone number">
			</div>
			<div class="field remove">
				<button id='remove_ref' type="button" class="fa-solid fa-trash remove">Remove</button> 
			</div>
			<hr>
		`;
		
		document.querySelector("#ref_list").querySelectorAll(".remove").forEach((val, ind) => {
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

const ADD_NEW_WORK = () => {
	let work = new Work()
	work.create()
}

const ADD_NEW_REF = () => {
	let ref = new Referee()
	ref.create()
}

