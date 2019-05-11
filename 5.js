function urut(){

    let a =[['b','a','c'],['k','h','j','i','l'],['g','d','f','e'],];
    let b = a.length; 
    let c
    let d = []

    for (let i = 0; i < b; i++){
        c = a[i].sort((a,b) => a > b ? -1 : 1)
        d.push(c[0])
    }

    d.forEach(item => {
        console.log(item); 
    })
}

urut();