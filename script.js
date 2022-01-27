const pass = document.getElementById("pass");
const newPassword = document.getElementById("newPassword")

function generatePass(){
    newPassword.innerHTML = ''

    if(pass.value === ''){
        alert("Digite o tamanho da sua senha")
        return
    }

    let charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    let password = ''
    let i = 0; 

    for(n = charset.length; i < pass.value; i++){
        password += charset.charAt(Math.floor(Math.random() * n))

    }

    let result = document.createTextNode(password)
    return newPassword.appendChild(result)
}