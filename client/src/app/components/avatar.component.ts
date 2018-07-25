import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'app-avatar',
    template: `
        <input type="file" (change)="onFileChanged($event)"/>
        <pre>{{ file?.name }}</pre>
        <button (click)="upload();">Upload</button>
        `
})

export class AvatarComponent {
    file: File;

    constructor(private http: Http) {}

    onFileChanged(event) {
        this.file = event.target.files[0];
        console.log(this.file);
    }

    upload() {
        const formData = new FormData();
        formData.append('image', this.file, this.file.name);
        this.http.post('http://localhost:3000/avatar', formData)
        .toPromise()
        .then(() => alert('Upload thanh cong'))
        .catch((error) => console.log(error));
    }
}
