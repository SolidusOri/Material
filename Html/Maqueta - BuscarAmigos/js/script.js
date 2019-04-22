var users = [
    {
        name: 'Lucy',
        gender: 'F',
        hobby: 'pets',
        avatar: 'avatar1.png'        
    },
    {
        name: 'Betty',
        gender: 'F',
        hobby: 'pets',
        avatar: 'avatar2.png'
    },
    {
        name: 'Ronald',
        gender: 'M',
        hobby: 'music',
        avatar: 'avatar3.png'
    },
    {
        name: 'Christopher',
        gender: 'M',
        hobby: 'sports',
        avatar: 'avatar4.png'
    },
    {
        name: 'Ximena',
        gender: 'F',
        hobby: 'reading',
        avatar: 'avatar5.png'
    },
    {
        name: 'Paul',
        gender: 'M',
        hobby: 'shopping',
        avatar: 'avatar6.png'
    },
    {
        name: 'Charlie',
        gender: 'M',
        hobby: 'pets',
        avatar: 'avatar7.png'
    },
];
//esto es un arreglo, el cual tiene una estructura JSON, campo : valor


window.addEventListener('load', function(){
//load, evento q se activa despues de cargar la pagina

    function buscar(){
        //get hobby
        var hobbyField = document.getElementById('hobby');
        //console.log(hobbyField);
        var hobby = hobbyField.value;
        console.log(hobby);

        //get gender
        var genderField = document.getElementById('gender');
        var seleccionado = genderField.selectedIndex;
        var gender = genderField.options[seleccionado].value;
        console.log(gender);

        var resultsHTML = '';
        var numUsers = users.length;//esto lo hacemos fuera de for por un tema de recursos

        for(var i=0; i<numUsers; i++){
            if(gender == 'A' || gender == users[i].gender){
                if(hobby == '' || hobby == users[i].hobby){
                    resultsHTML += '<div class="person-row">\
                            <img src="images/'+ users[i].avatar +'" />\
                            <div class="person-info">\
                            <div>'+ users[i].name +'</div>\
                            <div>'+ users[i].hobby +'</div>\
                            </div>\
                            <button>Add as friend</button>\
                            </div>';
                }
            } 
        }

        results.innerHTML = resultsHTML;
        //pasamos el html al dom
    };


    var results = document.getElementById('results');
    var searchBtn = document.getElementById('searchBtn');
    searchBtn.addEventListener('click', buscar);

    buscar();//busca cuando se carga la pagina
});
