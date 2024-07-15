import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
//import {Activity} from '../../Activity.js';
import { ActivityService } from '../activity.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { User } from '../user';

@Component({
    selector: 'app-activities',
    standalone: true,
    imports: [FormsModule, CommonModule, HeaderComponent],
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})
export class FormComponent{
    isDropdownOpen = false;

    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    }
    
    
    username:string='';
    time:number=0;
    @ViewChild('dropdown') dropdown?: ElementRef;
    workout?:string;
    userData: {username:string, time:number, workout:string}[] = []

    getValue(){
        this.workout = this.dropdown?.nativeElement.value;
        JSON.stringify(this.workout)
        let data = localStorage.getItem('users')
        
        if(data != null){
            this.userData = JSON.parse(data)
        }
        //let data = localStorage.getItem('userData')
        var currentUser = {
            username: this.username,
            time: this.time,
            workout: this.workout!
        }
        

        this.userData.push(currentUser)
        localStorage.setItem('users', JSON.stringify(this.userData))

        alert("Data submitted succesfully")
        // if (data != null) {
        //     //this.userData = JSON.parse(data)
            
        // } else {
        //     var currentUser = {
        //         username: this.username,
        //         time: this.time,
        //         workout: this.workout!
        //     }
            
    
        //     this.userData.push(currentUser)
        //     localStorage.setItem('userData', JSON.stringify(this.userData))
        // }
        
        
        
    }
}

