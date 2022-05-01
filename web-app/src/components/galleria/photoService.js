import './photos.json'

export class PhotoService {

    getImages() {
        return fetch('./photos.json').then(res => res.json())
                .then(d => d.data);
    }
}