FORM.onsubmit = (e) => {
	e.preventDefault();
	let is_input_valid = INPUTS.some((val) => val.value.trim().length === 0);
	// if (is_input_valid) {
	// 	let empty = [];
	// 	if (document.querySelector("#gndr").value === "") {
	// 		empty.push("GENDER");
	// 	}
	// 	for (var val of INPUTS) {
	// 		if (val.value.trim().length === 0) {
	// 			INPUTS.filter(val => val.value.trim().length === 0).map(val => empty.push(val.placeholder.toUpperCase()));
	// 			let message = empty.length > 1 ? `The following fields are empty: \n\n${empty}` : `The following field is empty: \n\n${empty}`;
	// 			alert(message);
	// 			break;
	// 		} else {
	// 			continue;
	// 		}
	// 	}
	// }else{
	// 	let dataArrays = [{array: schools, name: "Education History"}, {array: works, name: "Work History"}, {array: refs, name: "Referees"}].filter(val => val.array.length === 0);
	// 	let emptyDataArrays = [];
	// 	for (const i of dataArrays) {
	// 		if (i.array.length === 0) {
	// 			emptyDataArrays.push(i.name);
	// 		}
	// 	}

	// 	if (emptyDataArrays.length !== 0) {
	// 		alert(`${emptyDataArrays.join(", ")} not found`);
	// 		return;
	// 	}
		
	// 	var formData = new FormData(FORM);
	// 	for (let [key, val] of [...formData.entries()]) {
	// 		Object.defineProperty(USER_DATA, key, {value: val});
	// 	}
		
	// 	Object.defineProperties(USER_DATA, {
	// 		education_history: {value: schools},
	// 		referees: {value: refs},
	// 		work_history: {value: works}
	// 	})

	// 	console.log(USER_DATA);
	// 	GENERATE_CV(USER_DATA);
	// }

	var formData = new FormData(FORM);
	for (let [key, val] of [...formData.entries()]) {
		Object.defineProperty(USER_DATA, key, {value: val});
	}
		
	Object.defineProperties(USER_DATA, {
		education_history: {value: schools},
		referees: {value: refs},
		work_history: {value: works}
	});

	console.log(USER_DATA);

	document.querySelector("#preview").style.display = "block";
	document.querySelector("#cv").style.display = "none";

	document.querySelector("#user_name").innerHTML = `${USER_DATA.fname} ${USER_DATA.oname} ${USER_DATA.lname}`;
	document.querySelector("#user_gndr").innerHTML = USER_DATA.gndr === "male" ? "M" : "F";

	document.querySelector("#user_desc").innerHTML = `${USER_DATA.desc}`;

	document.querySelector("#user_bio_data").innerHTML = `
		<tr>
			<th>Date of Birth</th>
			<td>${new Date(USER_DATA.dob).toDateString()}</td>
		</tr>
		<tr>
			<th>Nationality</th>
			<td>${USER_DATA.nationality}</td>
		</tr>
		<tr>
			<th>Languages Spoken</th>
			<td>${USER_DATA.langs}</td>
		</tr>
	`;

	document.querySelector("#user_contact_info").innerHTML = `
		<tr>
			<th>Email Address</th>
			<td>${USER_DATA.email}</td>
		</tr>
		<tr>
			<th>Phone Number</th>
			<td>${USER_DATA.tel}</td>
		</tr>
		<tr>
			<th>Home Address</th>
			<td>${USER_DATA.address}</td>
		</tr>
	`;

	USER_DATA.education_history.forEach(val => {
		document.querySelector("#user_education_history").innerHTML += `
			<tr>
				<td>${val.name}</td>
				<td>${new Date(val.start).toDateString()}</td>
				<td>${val.stop ? new Date(val.stop).toDateString() : "Till Date"}</td>
			</tr>
	`;
	})

	USER_DATA.work_history.forEach(val => {
		document.querySelector("#user_work_history").innerHTML += `
			<tr>
				<td>${val.name}</td>
				<td>${new Date(val.start).toDateString()}</td>
				<td>${val.stop ? new Date(val.stop).toDateString() : "Till Date"}</td>
			</tr>
	`;
	});

	const LIST_INFO = (info, target) => {
		let infoArr = [eval(info.innerHTML)];

		infoArr.forEach(val => {

		});
	}
};