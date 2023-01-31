// window.addEventListener(load,function(){
    
    let name = prompt('Ismingizni kiriting')
    let age = +prompt('Yoshingizni kiriting')
    let tugulganYil = 2022 - age
    let oy = age * 12
    let hafta = ((age * 365) / 7)
    let kun = age * 365
    let soat = kun * 24
    let daqiqa = soat * 60
    let sekund = daqiqa * 60

        const result = `Qadrli ${name}. <br> Siz ${tugulganYil} yilda tug'ilgansiz. <br>  Va siz ${oy} oy yashagansiz, <br> siz ${hafta} hafta, <br> siz ${kun}  kun, <br> siz ${soat} soat, <br> siz ${daqiqa} daqiqa, <br> siz ${sekund} sekund <br> yashagansiz umringizuzoq bolsin deymiz, ${name} !!!`

 document.write(result)

// })
