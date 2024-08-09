function ADD_NEW_SCHOOL(){
    DISPLAY_MODAL(`
        <h2>Add new school</h2>
        <form class="school" autocomplete="off" onsubmit="ADD_DATA(this, event)">
			<div class="field">
				<input type="text" id="school_name" name="school_name" placeholder="school name" required>
			</div>
			<div class="field">
				<label for="school_start">When did you start?
					<input type="month" id="school_start" name="school_start" required>
				</label>
			</div>
			<div class="field">
				<label for="school_stop">When did you leave there?
					<input type="month" id="school_stop" name="school_stop" required>
				</label>
			</div>
			<div class="field">
				<label for="school_query" class="present">
					<input type="checkbox" id="school_query" name="school_query" oninput="HANDLE_DATE(this)">Still attending?
				</label>
			</div>
			<div class="field new">
			    <button>Add</button>
            </div>
		</form>    
    `);
}

function ADD_NEW_WORK(){
    DISPLAY_MODAL(`
        <h2>Add new Job</h2>
        <form class="work" autocomplete="off" onsubmit="ADD_DATA(this, event)">
			<div class="field">
				<input type="text" id="work_name" name="work_name" placeholder="job title" required>
			</div>
			<div class="field">
				<label for="work_start">When did you start working there?
					<input type="month" id="work_start" name="work_start" required>
				</label>
			</div>
			<div class="field">
				<label for="work_stop">When did you stop working there?
					<input type="month" id="work_stop" name="work_stop" required>
				</label>
			</div>
			<div class="field">
				<label for="work_query" class="present">
					<input type="checkbox" id="work_query" name="work_query" oninput="HANDLE_DATE(this)">Still working there?
				</label>
			</div>
			<div class="field new">
			    <button>Add</button>
            </div>
		</form>    
    `);
}

function ADD_NEW_REF(){
    DISPLAY_MODAL(`
        <h2>Add new referee</h2>
        <form class="field ref" autocomplete="off" onsubmit="ADD_DATA(this, event)">
            <div class="field">
			    <input type="text" id="ref_name" name="ref_name" placeholder="Name" required>
            </div>
            <div class="field">
			    <input type="text" id="ref_occ" name="ref_occ" placeholder="job title" required>
            </div>
            <div class="ref-contact">
			    <div class="field">
			        <input type="tel" id="ref_tel" name="ref_tel" placeholder="phone number" required>
                </div>
                <div class="field">
			        <input type="email" id="ref_mail" name="ref_mail" placeholder="email address" required>
                </div>
            </div>
            <div class="field new">
			    <button>Add</button>
            </div>
		</form>
    `);
}

function ADD_DATA(source, event) {
	event.preventDefault();
	if (source.classList.contains("ref")) {
		let formData = new FormData(source);
		refs.push({
			ref_name: formData.get("ref_name"),
			ref_occ: formData.get("ref_occ"),
			ref_tel: formData.get("ref_tel"),
			ref_mail: formData.get("ref_mail")
		});
		source.reset();
		RENDER_DATA(refs, document.querySelector("#refs tbody"), document.querySelector('#ref_count'));
	} else if(source.classList.contains("work")) {
		let formData = new FormData(source);
		works.push({
			name: formData.get("work_name"),
			start: formData.get("work_start"),
			stop: formData.get("work_stop"),
			query: formData.get("work_query")
		});
		source.reset();
		RENDER_DATA(works, document.querySelector("#jobs tbody"), document.querySelector('#work_count'));
	} else if(source.classList.contains("school")) {
		let formData = new FormData(source);
		schools.push({
			name: formData.get("school_name"),
			start: formData.get("school_start"),
			stop: formData.get("school_stop"),
			query: formData.get("school_query")
		});
		source.reset();
		RENDER_DATA(schools, document.querySelector("#schools tbody"), document.querySelector('#school_count'));
	}
	MODBG.style.display = "none";
}

function RENDER_DATA(array, target, count) {
	target.innerHTML = "";
	count.innerHTML = array.length;
	if (target === document.querySelector("#refs tbody")) {
		array.forEach(val => {
			target.innerHTML += `
				<tr>
					<td>${val.ref_name}</td>
					<td>${val.ref_occ}</td>
					<td>${val.ref_tel}</td>
					<td>${val.ref_mail}</td>
					<td class='actions'>
						<button class="edit_ref_btn" type='button' onclick="EDIT_REF(this)">Edit</button>
						<button class='del_ref_btn' type='button' onclick='DELETE_DATA(this)'>Delete</button>
					</td>
				</tr>
			`
		})
	} else if (target === document.querySelector("#jobs tbody")) {
		array.forEach((val, i) => {
			if (val.stop === null) {
				works[i].stop = "";
			}
			target.innerHTML += `
				<tr>
					<td>${val.name}</td>
					<td>${val.start}</td>
					<td>${val.stop}</td>
					<td class='actions'>
						<button class="edit_job_btn" type='button' onclick="EDIT_JOB(this)">Edit</button>
						<button class='del_job_btn' type='button' onclick='DELETE_DATA(this)'>Delete</button>
					</td>
				</tr>
			`
		})	
	} else {
		array.forEach((val, i) => {
			if (val.stop === null) {
				schools[i].stop = "";
			}
			target.innerHTML += `
				<tr>
					<td>${val.name}</td>
					<td>${val.start}</td>
					<td>${val.stop}</td>
					<td class='actions'>
						<button class='edit_school_btn' type='button' onclick="EDIT_SCHOOL(this)">Edit</button>
						<button class='del_school_btn' type='button' onclick='DELETE_DATA(this)'>Delete</button>
					</td>
				</tr>
			`
		})
	}
}

function HANDLE_DATE(el){
	el.value = el.checked
	if (el.checked) {
		el.parentElement.parentElement.previousElementSibling.querySelector("input").disabled = el.checked;
	} else {
		el.parentElement.parentElement.previousElementSibling.querySelector("input").disabled = el.checked;
	}
}

//calculate dates, ensure present date is later than past date for school and job