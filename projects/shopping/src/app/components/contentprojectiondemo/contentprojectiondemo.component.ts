import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';


@Component({
  selector: 'app-contentprojectiondemo',
  templateUrl: './contentprojectiondemo.component.html',
  styleUrls: ['./contentprojectiondemo.component.css']
})
export class ContentprojectiondemoComponent implements OnInit {

  isVisible:boolean =true;

  thenBlock:TemplateRef<any>|null =null;

 @ViewChild('firstBlock', {static:true}) firstBlock:TemplateRef<any>|null =null;

 @ViewChild('secondBlock', {static:true}) secondBlock:TemplateRef<any>|null =null;


  constructor() { }

  ngOnInit(): void {

    this.thenBlock = this.firstBlock;
  }

  onButtonToggle(){
    this.thenBlock=(this.thenBlock==this.firstBlock? this.secondBlock:this.firstBlock)
  }

}
