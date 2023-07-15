import { animate, keyframes, style, transition, trigger,  } from '@angular/animations';
import { Component, OnInit, Output, EventEmitter, HostListener} from '@angular/core';
import { Router } from '@angular/router';
import { fadeInOut, INavbarData } from './helper';
import { navbarData } from './nav-data';


interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],

animations: [
  fadeInOut,
  trigger('rotate', [
    transition(':enter', [
      animate('1000ms', keyframes([
        style({ transform: 'rotate(0deg)', offset: '0'}),
        style({ transform: 'rotate(2turn)', offset: '1'}),
      ]))
    ])
  ])
]
})
export class NavBarComponent implements OnInit {

@Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
collapsed = false;
screenwidth = 0;
navData = navbarData;
multiple: boolean = false;


@HostListener('window: resize', ['$event'])
onResize(event: any) {
if(this.screenwidth <= 768) {
  this.collapsed = false;
  this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenwidth});
}
}
constructor( public router: Router) { }

ngOnInit(): void {
  this.screenwidth = window.innerWidth;
}

toggleCollapse(): void {
  this.collapsed = !this.collapsed;
  this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenwidth});
}

closeSidenav(): void {
  this.collapsed = false;
  this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenwidth});
    }


    handleClick(item: INavbarData): void {

    item.expanded = !item.expanded;
    }

    getActiveClass(data: INavbarData): string {
      return this.router.url.includes(data.routeLink) ? 'active': '';
    }

    shrinkItems(item: INavbarData): void {
      if(!this.multiple) {
        for(let modelItem of this.navData) {
          if(item !== modelItem && modelItem.expanded) {
            modelItem.expanded = false;
          }
        }
      }
    }
}
// export class NavBarComponent {

//   isloggedIn:boolean | undefined;
//   loggedUser:any;
//   role!: string;
//   constructor(
//     //public authService:AuthService,
//     private router:Router) { }

//   ngOnInit(): void {

//   }
//   logout() {
//     this.isloggedIn= false;
//     this.loggedUser = undefined;
//    // this.roles = undefined;
//     localStorage.removeItem('loggedUser');
//     localStorage.removeItem('role');

//     localStorage.setItem('isloggedIn',String(this.isloggedIn));
//     this.router.navigate(['/login']);
//     }


// }
