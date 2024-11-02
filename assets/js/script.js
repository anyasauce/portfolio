let disableAccess = true;

function disableShortcuts(e) {
    if (disableAccess) {
        if (e.key === "F12" || (e.ctrlKey && e.key === "u")) {
            e.preventDefault();
            return false;
        }
    }
}

function disableContextMenu(e) {
    if (disableAccess) {
        e.preventDefault();
    }
}

document.addEventListener("keydown", disableShortcuts);
document.addEventListener("contextmenu", disableContextMenu);

function toggleAccess() {
    disableAccess = !disableAccess;
    alert(disableAccess ? "Access disabled" : "Access enabled");
}