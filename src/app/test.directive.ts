import {Directive, OnInit, ElementRef, HostListener, Renderer, HostBinding} from '@angular/core';
@Directive({
    selector: '[testDirective]'
})

export class testDirective implements OnInit {

    @HostBinding('class.open') isActive = false;
    constructor(private el: ElementRef, private RN: Renderer){}
    ngOnInit(){
    }
    @HostListener('click') onclick(){
       this.isActive = !this.isActive; 
    }
}
