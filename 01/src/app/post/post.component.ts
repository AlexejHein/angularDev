import { Component, 
         Input,
         EventEmitter, 
         Output, 
         OnInit, OnChanges, DoCheck, SimpleChanges, AfterContentInit, 
         AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements  OnInit, OnChanges, 
DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input('img') postImg = '';
  @Output() imgSelected = new EventEmitter<string>();

  constructor() { 
    console.log('constructor() called', this.postImg);
  }

  ngOnInit() {
    console.log('ngOnInit() called', this.postImg);
  }
  ngDoCheck(): void {
    console.log('ngDoCheck() called');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges() called', changes);
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit() called');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked() called');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit() called');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked() called');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy() called');
  }
}
