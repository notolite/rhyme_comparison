document.getElementById("searchbutton").addEventListener("click", () => {
    let keyword = document.forms.search.entry.value;
    let dialect = document.forms.search.dialect.value;
    search(keyword, dialect);
})
function search(keyword, dialect) {
    let targettable = document.getElementsByTagName("table")[0];
    let hit = 0;
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 28; j++) {
            if (i > 3 && i < 7 && j > 19) { continue; }
            let targetcell = targettable.rows[6 * i + parseInt(dialect)].cells[j];
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
    document.getElementById("result").innerText = "検索結果は" + hit + "件です。";
}