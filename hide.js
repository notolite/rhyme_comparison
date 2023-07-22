document.getElementById("hidebutton").addEventListener("click", () => {
    setRowspan();
})
window.onload = () => {
    setRowspan();
}
function setRowspan() {
    const putrow = Array.from(document.getElementsByClassName("普通話"));
    const guarow = Array.from(document.getElementsByClassName("広州話"));
    const korrow = Array.from(document.getElementsByClassName("朝鮮語"));
    const rows = document.getElementsByTagName("table")[0].rows;
    let hide = 5;
    setrowmain(rows, hide);
    const 官話 = document.forms.hide.row[0].checked;
    const 粤語 = document.forms.hide.row[1].checked;
    const 韓語 = document.forms.hide.row[2].checked;
    if (!官話) { putrow.forEach(item => item.classList.add("hidden")); hide--; } else { putrow.forEach(item => item.classList.remove("hidden")); }
    if (!粤語) { guarow.forEach(item => item.classList.add("hidden")); hide--; } else { guarow.forEach(item => item.classList.remove("hidden")); }
    if (!韓語) { korrow.forEach(item => item.classList.add("hidden")); hide--; } else { korrow.forEach(item => item.classList.remove("hidden")); }
    setrowmain(rows, hide);
}

function setrowmain(rows, hide) {
    for (let i = 0; i < 9; i++) {
        rows[i * 5 + 3].cells[0].setAttribute("rowSpan", hide);
    }
}