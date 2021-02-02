const inputField = document.getElementById('pass')
const password = "haslo"
const wrongPasswordMessage = "podane hasło jest nieprawidłowe"
const hiddenMessage="to jest prawidłowe hasło"

inputField.addEventListener('input', (e)=> {
    const typedInput = e.target.value
    if (typedInput===password) {
        document.getElementById('hiddenMessageDiv').textContent=hiddenMessage
    } else {
        console.log(wrongPasswordMessage)
        }

    typedInput=""

})

inputField.addEventListener('focus', (e) => {
    e.target.classList.add('active');
   })

