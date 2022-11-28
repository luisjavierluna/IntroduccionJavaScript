// Métodos de Propiedad

const reproductor = {
    reproducir: function(id) {
        console.log(`Reproduciendo Canción con el ID: ${id}`)
    },
    pausar: function() {
        console.log('Pausando...')
    },
    crearPlayList: function(nombre) {
        console.log(`Creando la playlist: ${nombre}`)
    },
    reproducirPlayList: function(nombre) {
        console.log(`Reproducir la playlist: ${nombre}`)
    }
}

reproductor.borrarCanción = function(id) {
    console.log(`Eliminando la canción: ${id}`)
}

reproductor.reproducir(3840)
reproductor.pausar()
reproductor.borrarCanción(20)
reproductor.crearPlayList('Heavy Metal')