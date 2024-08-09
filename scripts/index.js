const MODAL = document.querySelector("#modal")
const MODBG = document.querySelector("#modbg")
const INPUTS = [...document.querySelectorAll('input'), document.querySelector("#desc")]
const FORM = document.querySelector('#cv') 
let USER_DATA = {}
let schools = [];
let works = [];
let refs = [];
let CV;

const DISPLAY_MODAL = (text) => {
	MODBG.style.display = "block"
	MODAL.innerHTML = text
	window.onclick = (e) => {
		if (e.target === MODBG) {
			MODBG.style.display = "none"
		}
	}
}

console.log(USER_DATA);

// fname: undefined, lname: undefined, oname: undefined, dob: undefined, gndr: undefined, nationality: undefined, langs: undefined, desc: undefined, addr: undefined,
// 	mails: undefined, tels: undefined, schools: [], works: [], certs: undefined, research: undefined, volunteers: undefined, skills: undefined, hobbs: undefined, refs: []