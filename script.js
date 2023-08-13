let dialectnum = 7; //方言追加時はここを変更
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
    const jgorow = Array.from(document.getElementsByClassName("呉音"));
    const rows = document.getElementsByTagName("table")[0].rows;
    let hide = dialectnum;
    setRowSpan(rows, hide);
    const 官話 = document.forms.hide.h_row[0].checked;
    const 粤語 = document.forms.hide.h_row[1].checked;
    const 韓語 = document.forms.hide.h_row[2].checked;
    const 漢音 = document.forms.hide.h_row[3].checked;
    const 呉音 = document.forms.hide.h_row[4].checked;
    if (!官話) { addHideAttribute(putrow); hide--; } else { removeHideAttribute(putrow); }
    if (!粤語) { addHideAttribute(guarow); hide--; } else { removeHideAttribute(guarow); }
    if (!韓語) { addHideAttribute(korrow); hide--; } else { removeHideAttribute(korrow); }
    if (!漢音) { addHideAttribute(jparow); hide--; } else { removeHideAttribute(jparow); }
    if (!呉音) { addHideAttribute(jgorow); hide--; } else { removeHideAttribute(jgorow); }
    setRowSpan(rows, hide);
}

function setRowSpan(rows, hide) {
    for (let i = 0; i < 9; i++) {
        rows[i * dialectnum + 3].cells[0].setAttribute("rowSpan", hide);
    }
}
function addHideAttribute(rows) {
    rows.forEach(item => item.classList.add("hidden"));
}
function removeHideAttribute(rows) {
    rows.forEach(item => item.classList.remove("hidden"));
}
document.getElementById("searchbutton").addEventListener("click", () => {
    let keyword = document.forms.search.entry.value;
    let dialects = new Array();
    for (let i = 0; i < dialectnum - 2; i++) {
        if (document.forms.search.s_row[i].checked) {
            dialects.push(document.forms.search.s_row[i].value);
        }
    }
    search(keyword, dialects);
});
document.getElementById("clearbutton").addEventListener("click", () => {
    clearresults();
});
function clearresults() {
    Array.from(document.getElementsByTagName("table")[0].rows).forEach(row => {
        Array.from(row.cells).forEach(cell => {
            cell.classList.remove("hitcells");
        })
    })
    document.getElementById("result").innerText = "";
}
function search(keyword, dialects) {
    let targettable = document.getElementsByTagName("table")[0];
    let hit = 0;
    dialects.forEach(dialect => {
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 28; j++) {
                if (i > 3 && i < 7 && j > 19) { continue; }
                let targetcell = targettable.rows[dialectnum * i + parseInt(dialect) + 2].cells[j];
                let targettext = targetcell.innerText;
                targettext = " " + targettext.replaceAll(/([\[\]\(\)"',])/g, "").replaceAll(/\n/g, " ") + " ";
                if (targettext.includes(" " + keyword + " ")) {
                    targetcell.classList.add("hitcells");
                    hit++;
                } else {
                    targetcell.classList.remove("hitcells");
                }
            }
        }
    })
    document.getElementById("result").innerText = "検索結果は" + hit + "件です。";
}