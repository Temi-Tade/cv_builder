function DELETE_DATA(el) {
    if (el.classList.contains("del_school_btn")) {
        let delBtns = [...document.querySelectorAll(".del_school_btn")];
        let i = delBtns.indexOf(el);
        schools.splice(i, 1);
        RENDER_DATA(schools, document.querySelector("#schools tbody"), document.querySelector('#school_count'));
    } else if (el.classList.contains("del_job_btn")) {
        let delBtns = [...document.querySelectorAll(".del_job_btn")];
        let i = delBtns.indexOf(el);
        works.splice(i, 1);
        RENDER_DATA(works, document.querySelector("#jobs tbody"), document.querySelector('#work_count'));
    } else {
        let delBtns = [...document.querySelectorAll(".del_ref_btn")];
        let i = delBtns.indexOf(el);
        refs.splice(i, 1);
        RENDER_DATA(refs, document.querySelector("#refs tbody"), document.querySelector('#ref_count'));
    }
}