import { Component, OnInit } from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  animations: [
    trigger('welcomeFadeIn', [
      state('in', style({
        opacity: 1
      })),
      transition(':enter', [
        style({opacity: 0}),
        animate(2000)
      ])
    ]),

    trigger('subtextFadeIn', [
      state('in', style({
        opacity: 1
      })),
      transition(':enter', [
        style({opacity: 0}),
        animate(2000)
      ])
    ])
  ]
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
