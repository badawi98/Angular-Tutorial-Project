import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() shoppingEdit = new EventEmitter<{name : string , amount : number}>();

  constructor() { }

  ngOnInit(): void {
  }
  onAddItem(nameInput : HTMLInputElement , amountInput : HTMLInputElement){
    //console.log(nameInput.value);
    this.shoppingEdit.emit({name : nameInput.value , amount : +amountInput.value})
  }
}
