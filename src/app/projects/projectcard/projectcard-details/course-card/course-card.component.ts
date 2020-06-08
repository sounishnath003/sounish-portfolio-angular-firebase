import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css'],
})
export class CourseCardComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    $(document).ready(() => {
      this._toggleGetTouchButton();
    });
  }

  _toggleGetTouchButton() {
    $('.close-btn').click(() => {
      $('.social-panel-container').toggleClass('visible');
    });

    $('.floating-btn').click(function () {
      $('.social-panel-container').removeClass('visible').addClass('visible');
    });
  }
}
