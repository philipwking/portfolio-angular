import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor() { }

  public show:number = 1;

  toggle(id:number){
    this.show = id;
  }

  ngOnInit(): void {
  }

}
