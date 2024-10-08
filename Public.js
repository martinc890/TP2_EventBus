const eventBus = require('./EventBus');

class Public {
    constructor(name) {
        this.name = name;
    }

    subscribeToArtist(artistName) {
        console.log(`${this.name} se ha suscrito a ${artistName}`);

        eventBus.on('imageUploaded', (data) => {
            if (data.artist === artistName) {
                console.log(`${this.name} recibió una nueva imagen de ${artistName}: ${data.image}`);
            }
        });

        eventBus.on('infoUpdated', (data) => {
            if (data.artist === artistName) {
                console.log(`${this.name} recibió una actualización de información de ${artistName}: ${data.info}`);
            }
        });

        eventBus.on('voteStatusUpdated', (data) => {
            if (data.artist === artistName) {
                console.log(`${this.name} recibió una actualización de votación de ${artistName}: ${data.status}`);
            }
        });
    }
}

module.exports = Public;
