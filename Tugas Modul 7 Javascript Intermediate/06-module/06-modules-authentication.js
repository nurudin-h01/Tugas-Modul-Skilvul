export function validateLoginData(email, password) {
    let reg_email = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let reg_password = /[A-Za-z\d\!\@\#\$\%\^\&\*]{8,}/;

    let message = "";
    if (!email.match(reg_email)) {
        message = "tolong masukan email yang valid";
    } else if (password.match(reg_password)) {
        message = "Welcome to The Jungle";
    } else {
        message = "tolong masukan password sesuai ketentuan";
    }
    alert(message);
    return message;
}