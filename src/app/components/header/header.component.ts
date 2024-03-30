import { Component, OnInit ,Output,EventEmitter } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
title:string="Task Tracker";
showAddTask:boolean=false;
subscription: Subscription;
  constructor(private uiservice:UiService,private route:Router) {
    this.subscription = this.uiservice.onToggle().subscribe((value) => this.showAddTask = value);
   }

  ngOnInit(): void {
  }
  toggleAddTask(){
   this.uiservice.toggleAddTask();
    console.log("toggle");
  }
  hasRoute(route: string) {
    return this.route.url === route;
  }
}
