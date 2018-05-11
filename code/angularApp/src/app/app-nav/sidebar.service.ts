import { Injectable } from '@angular/core';

@Injectable()
export class SidebarService {

    visible = false;


    hide() { this.visible = false; }

    show() { this.visible = true; console.log('visi');
    }

    toggle() { this.visible = !this.visible; }

    doSomethingElseUseful() { }


}
