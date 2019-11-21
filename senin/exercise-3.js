    var nama = 'Aditya Nugroho Subono';
    var peran = 'Tabib';
    console.log('Selamat datang di Dunia Proxytia, '+nama);
    if (nama ==='' && peran ==='') {
        console.log('Nama Harus Diisi')
    }else if (peran === ''){
        console.log('Hallo '+nama+', pilih peranmu untuk memulai game!')
    }else if (peran === 'Ksatria') {
        console.log('Hallo '+ peran +' '+ nama +', kamu dapat menyerang dengan senjatamu!')
    } else if (peran === 'Tabib') {
        console.log('Hallo ' + peran +' '+ nama +', kamu akan membantu temanmu yang terluka.')
    } else if (peran === 'Penyihir') {
        console.log('Hallo '+ peran +' '+ nama +', ciptakan keajaiban yang membantu kemenanganmu!')
}