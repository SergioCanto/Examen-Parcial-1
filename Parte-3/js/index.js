function add(){
    
    let espacio = document.getElementsByClassName('seccionComments');
    let btn = document.getElementById('submit');

    btn.addEventListener('click', function(event){
        event.preventDefault();
        
        let name = document.getElementsByClassName('userName');
        let comment = getElementById('userComment');

        if(name != "" && comment != ""){
            espacio.innerHTML(<div class="comUser">
                name.value();
            </div>
            <div class="comComment">
                comment.value();
            </div>);
        }

    });

}

add();