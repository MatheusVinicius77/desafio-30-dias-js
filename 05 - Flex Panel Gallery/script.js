const panels = document.querySelectorAll('.panel')


panels.forEach((panel)=>{

    function toggleClick(){
        this.classList.toggle('open')
    }  
    panel.addEventListener('click',toggleClick)
})
