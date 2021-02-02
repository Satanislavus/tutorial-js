// mój pomysł polega na tym, żeby od razu tablicę z hasłami przebudować na uppercase i działać wtedy na uppercase do końca.
// z drugiej strony zamianę wielkości znaków można dokonać na samym końcu w momencie sprawdzania hasła... i to chyba będzie zręczniejsze rozwiazanie

// czemu poniżej jest tyle komentarzy; otóż zadanie zajęło mi dużo czasu i komentarze obejmują moją własne rozwiązania, które polgały na stworzeniu nowej tablicy z hasłami (zmieniona wielkość liter) oraz porównaniu jej z inputem usera. Tutaj pojawił się problem bo porównywac można rzeczy równe (hasła byý stringami, a wpisy usera traktowane jako any). Aktualny kod jest po lekkich poprawkach po obejrzeniu tutorialu.

const inputField=document.getElementById('pass')
const div= document.getElementById('newDiv')
const passwords=["pierwszE", "druGIE"]
// const upperCasedPasswords=passwords.map(password => password.toUpperCase())

const acceptMessage=["pierwsze hasło jest poprawne", "drugie hasło jest poprawne"]
const denyMessage="Podane hasło jest niepoprawne"

const checkPassword= function(e) {
    // let userContent=[`${e.target.value}`]
    // let newContent = e.target.value.toString()
    
    passwords.forEach((password, index) => {
        if (password.toUpperCase()===e.target.value.toUpperCase()) {
            div.textContent=acceptMessage[index]
        } else {
            div.textContent=denyMessage
        }
    })
   
}

inputField.addEventListener("input", checkPassword)








