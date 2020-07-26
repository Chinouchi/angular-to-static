import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private title: Title, private meta: Meta) { }

  ngOnInit(): void {
    this.title.setTitle('Angular Static Web App - The easiest way to get a static website');
    this.meta.addTag({
      name: 'description',
      content: 'The best way to get a static web site easily discoverable by search engine is to use the pre-render Angular application using built-in SSR at build time'
    })
  }

}
