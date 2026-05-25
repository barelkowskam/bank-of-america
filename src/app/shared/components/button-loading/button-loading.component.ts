import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'button-loading',
  templateUrl: './button-loading.component.html',
  styleUrls: ['./button-loading.component.scss']
})
export class ButtonLoadingComponent implements OnInit {

  @Input() loading = false;
  @Input() btnClass = '';
  @Input() raised = true;
  @Input() loadingText = 'Please wait';
  @Input() type: 'button' | 'submit' = 'submit';
  @Input() color: 'primary' | 'accent' | 'warn' = 'primary';

  constructor() { 
  }

  ngOnInit() {
  }

}
