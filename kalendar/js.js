// let div = document.createElement('div');
// div.style.background = 'red'
// div.className = 'originalDiv'
// div.innerHTML = '<strong>Hii all!</strong>'
// // console.log(div.style.length); ?????
// document.body.append(div)

const mouth = [
    ['January', 31],['February', 28],['March', 31],['April', 30],['May', 31],
    ['June', 30],['July', 31],['August' , 31],['September' , 30],
    ['October', 31],['November', 30],['December', 31]
]

const learningDiv = () => {
    mouth.forEach(m =>  {
    
        let divMain = document.createElement('divMain')
        let div1 = document.createElement('div')
        let div2 = document.createElement('div')
        let div3 = document.createElement('div')
        divMain.style.margin = '5px'
        divMain.style.display = 'inline-block'
    
        divMain.innerHTML = `<p>${m[0]}</p>` 
    
        for (let index = 1; index <= m[1]; index++) {   //как это преобразовать в форич*
            let div = document.createElement('div')
            div.style.margin = '10px'
            div.style.display = 'inline-block'
            div.innerHTML = `<strong>  ${index}</strong>`

            if(index <= 10) {
                div1.append(div)
            }
            if(index >10 && index <21){
                div2.append(div)
            }
            if(index >20 && index <= 31) {
                div3.append(div)
            }                        
        }
        divMain.append(div1, div2, div3)
        document.body.append(divMain)
    })
}






learningDiv(); 