function buttonToggle(where, pval, nval) {
    var table = document.getElementById(where.attributes.rel.value);
    where.value = (where.value == pval) ? nval : pval;
    table.style.display = (table.style.display == 'block') ? 'none' : 'block';
}