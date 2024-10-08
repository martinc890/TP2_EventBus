const eventBus = require('./EventBus');

class Artist {
    constructor(name) {
        this.name = name;
    }

    uploadImage(imageDescription) {
        console.log(`${this.name} ha subido una nueva imagen: ${imageDescription}`);
        eventBus.emit('imageUploaded', { artist: this.name, image: imageDescription });
    }

    updateInfo(info) {
        console.log(`${this.name} ha actualizado su información: ${info}`);
        eventBus.emit('infoUpdated', { artist: this.name, info: info });
    }

    updateVoteStatus(status) {
        console.log(`${this.name} ha actualizado el estado de la votación: ${status}`);
        eventBus.emit('voteStatusUpdated', { artist: this.name, status: status });
    }
}

module.exports = Artist;
