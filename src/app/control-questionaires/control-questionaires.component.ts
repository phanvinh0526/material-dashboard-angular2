import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-control-questionaires',
  templateUrl: './control-questionaires.component.html',
  styleUrls: ['./control-questionaires.component.scss']
})
export class ControlQuestionairesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}


// // Floating button activity
// $('#float-btn').on("click", function(e){
//   let hVal = $(this).attr("href"); // get current value
//   console.log(hVal);

//   // check condition
//   if(hVal == '#first'){
//       hVal = '#second';
//   }else{
//       hVal = '#first';
//   }
//   // update new val
//   console.log(hVal);
//   $(this).attr("href", hVal);

//   // Animation
//   e.preventDefault();
//   $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');

// });