function btnDelete(selectedID) {
    var myRequest = new XMLHttpRequest();
    var info = "?enterID=" + selectedID;
    myRequest.open("GET", "../functionalphp/admin-delete-account.php" + info, true);
    myRequest.send();
    myRequest.onload = function() {
        var respond = this.responseText;
        location.reload();
    }
}

function btnModify(selectedID) {
    document.getElementById("targetID").value = selectedID;
    document.getElementById("modify").submit();
}

function btnAdd() {
    location.href = "admin-add-account.php";
}