$("#btEmailNewsletter").click(function () {
  fNewsletter();
});
$("#txtEmailNewsletter").keypress(function (event) {
    if (event.which == 13 || event.keyCode == 13)
        fNewsletter();
});
function fNewsletter() {
    oKey_Register = document.getElementById('txtEmailNewsletter');
    if (isEmailAddr(oKey_Register.value) == false) {
        swal("", document.getElementById('txtvdEmailError').value + " !", "warning");
        oKey_Register.focus();
        return false;
    }
    createAjax('/Request.aspx?Act=registeremail&Key=' + oKey_Register.value, 3);
}