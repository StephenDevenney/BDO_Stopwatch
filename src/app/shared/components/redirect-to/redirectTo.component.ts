import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'redirect-to',
  templateUrl: './redirectTo.component.html'
})
export class RedirectToComponent implements OnInit {

  constructor(private router: Router,
              private httpClient: HttpClient) { }

  ngOnInit(): void {
    
  }

}
