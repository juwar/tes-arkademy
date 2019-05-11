function cetak(){
    let kata = ['P','R','O','G','R','A','M','M','E','R']
    let lihat = []
    let bendera = ''
    let p = kata.length
    let p2 = p / 2
    let p3 = p2 -1


    for (let i = 0; i < p; i++){
        lihat.push(i);
    }

    for (let i = 0; i < p2; i++){
        for (let b = 0; b < i; b++){
            bendera += '= '
        }
        bendera += kata[i] + ' '
        for (let c = i; c < p3; c++){
            bendera += '= '
        }


        for (let c = i; c < p3; c++){
            bendera += '= '
        }
        bendera += kata[i] + ' '
        for (let b = 0; b < i; b++){
            bendera += '= '
        }
        bendera += '\n'
    }

    for (let i = 0; i < p2; i++){
        for (let c = i; c < p3; c++){
            bendera += '= '
        }
        bendera += kata[i+p2] + ' '
        for (let b = 0; b < i; b++){
            bendera += '= '
        }


        for (let b = 0; b < i; b++){
            bendera += '= '
        }
        bendera += kata[i+p2] + ' '
        for (let c = i; c < p3; c++){
            bendera += '= '
        }
        bendera += '\n'
    }

    return bendera
    
}

console.log(cetak())