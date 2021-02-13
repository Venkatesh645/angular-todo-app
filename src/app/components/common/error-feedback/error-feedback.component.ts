import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-error-feedback',
  templateUrl: './error-feedback.component.html',
  styleUrls: ['./error-feedback.component.css']
})
export class ErrorFeedbackComponent implements OnInit {

  @Input() control: any;
  @Input() submitted: boolean;
  @Input() controlName: string;

  constructor() { }

  ngOnInit(): void {
  }

}
