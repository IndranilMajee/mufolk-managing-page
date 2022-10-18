document.querySelector('#menu').addEventListener('click',function(){
    if(menu.classList.contains('icon'))
    {
        menu.classList.remove('icon');
        content.classList.remove('change');
    }
    else{
        menu.classList.add('icon');
        content.classList.add('change');


    }
});
