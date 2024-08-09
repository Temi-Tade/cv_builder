function EDIT_SCHOOL(el) {
	let editBtns = [...document.querySelectorAll(".edit_school_btn")];
	let i = editBtns.indexOf(el);
    DISPLAY_MODAL(`
        <h2>Edit school</h2>
        <form class="edit_school" autocomplete="off">
            <div class="field">
                <input type="text" id="school_name" name="school_name" placeholder="school name" value='${schools[i].name}' required>
            </div>
            <div class="field">
                <label for="school_start">When did you start?
                    <input type="month" id="school_start" name="school_start" required value=${schools[i].start}>
                </label>
            </div>
            <div class="field">
                <label for="school_stop">When did you leave there?
                    <input type="month" id="school_stop" name="school_stop" required ${schools[i].query && "disabled"} value=${schools[i].stop}>
                </label>
            </div>
            <div class="field">
                <label for="school_query" class="present">
                    <input type="checkbox" id="school_query" name="school_query" ${schools[i].query && "checked"} oninput="HANDLE_DATE(this)">Still attending?
                </label>
            </div>
            <div class="field new">
                <button>Add</button>
            </div>
        </form>    
    `)

    let form = document.querySelector("form.edit_school");
    form.onsubmit = (e) => {
        e.preventDefault();
        MODBG.style.display = "none";
        let formData = new FormData(form);
        schools[i] = {
			name: formData.get("school_name"),
			start: formData.get("school_start"),
			stop: formData.get("school_stop"),
			query: formData.get("school_query")
		};
        form.reset();
        RENDER_DATA(schools, document.querySelector("#schools tbody"), document.querySelector('#school_count'));
    }
}

function EDIT_JOB(el) {
	let editBtns = [...document.querySelectorAll(".edit_job_btn")];
	let i = editBtns.indexOf(el);
    DISPLAY_MODAL(`
        <h2>Edit Job</h2>
        <form class="edit_job" autocomplete="off">
            <div class="field">
                <input type="text" id="work_name" name="work_name" placeholder="work name" value='${works[i].name}' required>
            </div>
            <div class="field">
                <label for="work_start">When did you start?
                    <input type="month" id="work_start" name="work_start" required value=${works[i].start}>
                </label>
            </div>
            <div class="field">
                <label for="work_stop">When did you leave there?
                    <input type="month" id="work_stop" name="work_stop" required ${works[i].query && "disabled"} value=${works[i].stop}>
                </label>
            </div>
            <div class="field">
                <label for="work_query" class="present">
                    <input type="checkbox" id="work_query" name="work_query" ${works[i].query && "checked"} oninput="HANDLE_DATE(this)">Still attending?
                </label>
            </div>
            <div class="field new">
                <button>Add</button>
            </div>
        </form>    
    `)

    let form = document.querySelector("form.edit_job");
    form.onsubmit = (e) => {
        e.preventDefault();
        MODBG.style.display = "none";
        let formData = new FormData(form);
        works[i] = {
			name: formData.get("work_name"),
			start: formData.get("work_start"),
			stop: formData.get("work_stop"),
			query: formData.get("work_query")
		};
        form.reset();
        RENDER_DATA(works, document.querySelector("#jobs tbody"), document.querySelector('#work_count'));
    }
}

function EDIT_REF(el) {
	let editBtns = [...document.querySelectorAll(".edit_ref_btn")];
	let i = editBtns.indexOf(el);
    DISPLAY_MODAL(`
        <h2>Edit referee</h2>
        <form class="field edit_ref" autocomplete="off">
            <div class="field">
			    <input type="text" id="ref_name" name="ref_name" placeholder="Name" value='${refs[i].ref_name}' required>
            </div>
            <div class="field">
			    <input type="text" id="ref_occ" name="ref_occ" placeholder="occupation" value='${refs[i].ref_occ}' required>
            </div>
            <div class="ref-contact">
			    <div class="field">
			        <input type="tel" id="ref_tel" name="ref_tel" placeholder="phone number" value='${refs[i].ref_tel}'>
                </div>
                <div class="field">
			        <input type="email" id="ref_mail" name="ref_mail" placeholder="email address" value='${refs[i].ref_mail}' required>
                </div>
            </div>
            <div class="field new">
			    <button>Add</button>
            </div>
		</form>   
    `)

    let form = document.querySelector("form.edit_ref");
    form.onsubmit = (e) => {
        e.preventDefault();
        MODBG.style.display = "none";
        let formData = new FormData(form);
        refs[i] = {
			ref_name: formData.get("ref_name"),
			ref_occ: formData.get("ref_occ"),
			ref_tel: formData.get("ref_tel"),
			ref_mail: formData.get("ref_mail")
		};
        form.reset();
        RENDER_DATA(refs, document.querySelector("#refs tbody"), document.querySelector('#ref_count'));
    }
}