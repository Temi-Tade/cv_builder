const MODAL = document.querySelector("#modal")
//document.querySelectorAll returns a node list,convert it to an array with JS notation in order to perfrom .some() operation
const INPUTS = [...document.querySelectorAll('input'), document.querySelector("#desc")]
const FORM = document.querySelector('form')
let USER_DATA = {
	fname, lname, oname, dob, gndr, nationality, langs, desc, addr: undefined,
	mails: [], tels: [], schools: [], works: [], certs: [], research: [], volunteers:[], skills: [], hobbs :[], refs: []
}

const DISPLAY_MODAL = (text) => {
	MODAL.style.top = '2.5rem'
	MODAL.innerHTML = text
	setTimeout(()=> {
		MODAL.style.top = '-20rem'
	}, 3000)
}