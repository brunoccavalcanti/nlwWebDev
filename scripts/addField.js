//Procurar um botão
document.querySelector("#add-time")

//Quando clicar no botão
.addEventListener('click', colneField)

//Executar uma ação
function colneField() {
        //Duplicar os campos
        const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

        //Limpar os campos de hora
        const fields = newFieldContainer.querySelectorAll('input')
        
        fields.forEach(function(field){
            field.value = ""
        })

        //Colocar na página
        document.querySelector('#schedule-items').appendChild(newFieldContainer)

}
    