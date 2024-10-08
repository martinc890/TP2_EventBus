const Artist = require('./Artist');
const Public = require('./Public');

// Crear artistas
const artist1 = new Artist('Ana González');
const artist2 = new Artist('Carlos Pérez');

// Crear público
const public1 = new Public('Juan');
const public2 = new Public('María');

// El público se suscribe a los artistas
public1.subscribeToArtist('Ana González');
public2.subscribeToArtist('Carlos Pérez');

// Los artistas suben imágenes, actualizan información y el estado de las votaciones
artist1.uploadImage('Escultura en proceso - Metal');
artist1.updateInfo('Escultura titulada "Libertad", estará lista en 2 días');
artist1.updateVoteStatus('Votación: 85% completada, 1200 votos recibidos');

artist2.uploadImage('Escultura en proceso - Mármol');
artist2.updateInfo('Escultura "Fuerza" - Detalles finales en proceso');
artist2.updateVoteStatus('Votación: 50% completada, 600 votos recibidos');