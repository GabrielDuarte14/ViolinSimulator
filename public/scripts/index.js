function mostraAlert() {
    Swal.fire({
        title: 'Sobre',
        icon: 'info',
        html: 'Feito por: <b>Gabriel Duarte</b>. <br> Inspirado em algo que vem diretamente da minha infância.' + '',
        showCloseButton: true,
        background: '#212121',
        color: '#fff',
        focusConfirm: false,
        confirmButtonText: 'Ok!',
    
    })
}