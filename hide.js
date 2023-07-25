document.getElementById("hidebutton").addEventListener("click", () => {
    hideMain();
})
window.onload = () => {
    hideMain();
}
function hideMain() {
    const putrow = Array.from(document.getElementsByClassName("普通話"));
    const guarow = Array.from(document.getElementsByClassName("広州話"));
    const korrow = Array.from(document.getElementsByClassName("朝鮮語"));
    const jparow = Array.from(document.getElementsByClassName("漢音"));
    const rows = document.getElementsByTagName("table")[0].rows;
    let hide = 6;
    setRowSpan(rows, hide);
    const 官話 = document.forms.hide.row[0].checked;
    const 粤語 = document.forms.hide.row[1].checked;
    const 韓語 = document.forms.hide.row[2].checked;
    const 漢音 = document.forms.hide.row[3].checked;
    if (!官話) { addHideAttribute(putrow); hide--; } else { removeHideAttribute(putrow); }
    if (!粤語) { addHideAttribute(guarow); hide--; } else { removeHideAttribute(guarow); }
    if (!韓語) { addHideAttribute(korrow); hide--; } else { removeHideAttribute(korrow); }
    if (!漢音) { addHideAttribute(jparow); hide--; } else { removeHideAttribute(jparow); }
    setRowSpan(rows, hide);
}

function setRowSpan(rows, hide) {
    for (let i = 0; i < 9; i++) {
        rows[i * 6 + 3].cells[0].setAttribute("rowSpan", hide);
    }
}
function addHideAttribute(rows) {
    rows.forEach(item => item.classList.add("hidden"));
}
function removeHideAttribute(rows) {
    rows.forEach(item => item.classList.remove("hidden"));
}