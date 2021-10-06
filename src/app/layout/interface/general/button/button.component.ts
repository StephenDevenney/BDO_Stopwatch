import { Component, EventEmitter, Injector, Input, OnInit, Output } from '@angular/core';
import { BaseComponent } from '../../../../shared/components/base.component';

@Component({
  selector: 's-button',
  templateUrl: './button.component.html'
})
export class ButtonUIComponent extends BaseComponent implements OnInit {
  
  public isLoaded: boolean = false;
  @Input() buttonType: string;
  @Output() onClick = new EventEmitter<any>();

  constructor(private injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.isLoaded = true;
  }

  onClickButton(event) {
    this.onClick.emit(event);
  }
}
