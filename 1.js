function biodata(name,address,hobbies,is_married,highSchool,
    university,profesional,basic){
    let errornya = []

    let objek = {
        name,
        address,
        hobbies,
        is_married,
        school: {
            highSchool,
            university
        },
        skill: [
            {
                profesional
            },
            {
                basic
            }
        ]
    }

    if (!(typeof name == 'string')) {
        errornya.push('name bukan tipe data string')
    }
    if (!(typeof address == 'string')) {
        errornya.push('address bukan tipe data string')
    } 
    if (!(Array.isArray(hobbies))) {
        errornya.push('hobi bukan tipe data array')
    }
    if (!(typeof is_married== 'boolean')) {
        errornya.push('is_married bukan tipe data boolean')
    } 
    if (!(typeof highSchool == 'string')) {
        errornya.push('highSchool bukan tipe data string')
    } 
    if (!(typeof university == 'string')) {
        errornya.push('university bukan tipe data string')
    }
    if (!(typeof profesional == 'string')) {
        errornya.push('skill profesional bukan tipe data string')
    } 
    if (!(typeof basic == 'string')) {
        errornya.push('skill basic bukan tipe data string')
    } 

    if (errornya.length != 0){
        return JSON.stringify({errornya})
    }

    return JSON.stringify(objek)

}

console.log(biodata('Muhammad Juwarno','Jatirejo Suruh, Kab. Semarang',['Membaca','Nonton Film'], false,'SMK N 1 Tengaran','-','Visual Basic','PHP & JS'))