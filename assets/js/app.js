const sounds = ['applause', 'boo', 'gasp', 'suspense', 'tada', 'terror', 'victory', 'wait', 'whip', 'wrong'];

sounds.forEach(sound => {
    const btn = document.createElement('button');
    btn.classList.add('btn');
    /* crea un elemento button y le agraga la clase btn */


    btn.innerText = sound;
    /* a cada botón creado, le agrega como texto el elemento del array */

    btn.addEventListener('click', () => {
        stopSongs();
        document.getElementById(sound).play();
    })
    /* cada boton creado tiene una funcion que detecta el click, y primero ejecuta la función stopSongs, y después selecciona el elemento específico de la etiqueta audio en el html y la seleciona por id usando el elemento que esté usando el forEach, ya que cada nombre del array, coincide con cada id de los elementos audio  */

    document.getElementById('buttons').appendChild(btn);
    /* por cada elemento de array, crea un elemento y lo agrega a el elemento div button */
})

function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound);

        song.pause();
        song.currentTime = 0;
        /* detiene la reproducción del audio y la resetea a 0 */
    })
}