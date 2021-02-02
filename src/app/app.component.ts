import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {FormGroup} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-forms';
  // question = new FormControl('', [Validators.required, Validators.email]);
  questionV = '';
  collection : any = [];
  answerV = '';
  panel = false;
  display = false;
  panelOpenState = false;
  colorState = '';
  save = true;
  incomplete = false;
  update = false;
  updatedItem;

  // add card form group 
  addCard = new FormGroup({
    question: new FormControl(''),
    answer: new FormControl(''),
    isChecked: new FormControl(''),
    isWrong: new FormControl(''),
  })
ngOnInit(){
  this.addCard.reset();
}

  // clear form 
  onClear(){
  this.addCard.reset();
}

  // add card to the card list 
  addCardList(){
    if(this.addCard.controls['question'].value===null){
      
      this.incomplete = true;
      return null;
    }
    else{
    // this.panel = true;
    // this.display = true;
    // console.log(this.addCard.controls['question'].value);
    this.incomplete = false;
    this.questionV = this.addCard.controls['question'].value;
    this.answerV = this.addCard.controls['answer'].value;
    this.collection.push(this.addCard.value);
    // console.log(this.collection);
    this.addCard.reset();
    }
}

// delete a card 
onDelete(i){
  this.collection.splice(i, 1);
}

// right guessed card 
onCheck(i){
  this.collection[i].isChecked = 'green';
}

// wrong guessed card 
onWrong(i){
  this.collection[i].isChecked = 'red'
}


// update a card redirect
onUpdate(i){
  this.questionV = this.collection[i].question; 
  this.answerV = this.collection[i].answer; 
  this.save = false;
  this.update = true;
  this.updatedItem = i;
  console.log(this.questionV, this.answerV)
  this.addCard = new FormGroup({
    question: new FormControl(this.questionV),
    answer: new FormControl(this.answerV),
    isChecked: new FormControl(''),
    isWrong: new FormControl(''),
  })

}

// edit the values of card to be updated
updateCard(){
  let data = this.updatedItem;
  for (let i = 0; i < this.collection.length; i++) {  
    if (i == data) {  
      this.collection[i].question = this.addCard.controls['question'].value;; 
      this.collection[i].answer =  this.addCard.controls['answer'].value;
    }  
  } 
  this.update = false;
  this.save = true;
}
}
