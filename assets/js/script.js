$(document).ready(function(){
    itemMenuHover()
})

function itemMenuHover(){
    
    let itensMenu = document.getElementsByClassName('menu-item')

    for(i=0; i<itensMenu.length; i++){
        itensMenu[i].addEventListener('mouseover', function(){
            $(this).addClass('item-menu-hover')
            $(this).children().addClass('item-menu-hover-link');
        })

        itensMenu[i].addEventListener('mouseleave', function(){
            $(this).removeClass('item-menu-hover')
            $(this).children().removeClass('item-menu-hover-link');
        })
    }
}