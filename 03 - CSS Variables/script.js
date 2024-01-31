const inputs = document.querySelectorAll('input')
inputs.forEach(input=>{
    input.addEventListener('input',(e)=>{
        const root = document.documentElement
        const element = e.target
        root.style.setProperty(
            `--${element.name}`, 
            `${(element.value)}${(element.name !== 'base')?'px':''}`
            )
    })
})