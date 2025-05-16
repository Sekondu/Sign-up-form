const form=document.querySelector("form");
form.addEventListener("submit", (event) =>
{
    event.preventDefault();
    const password=document.querySelector("#password").value;
    const confirm_password=document.querySelector("#confirm-password").value;
    const confirm=document.querySelector("#confirm-password");
    if(password!=confirm_password)
    {
        confirm.setCustomValidity("Passwords do not Match!");
    }
});