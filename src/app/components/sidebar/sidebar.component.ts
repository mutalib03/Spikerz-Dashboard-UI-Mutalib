import { Component, Output, EventEmitter, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NAVIGATION_ITEMS, BOTTOM_NAVIGATION_ITEMS, NAVIGATION_LABELS } from '../../constants/sidebar.constants';
import { UserProfile, LabelKey, NavigationItem } from '../../models/sidebar.types';


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @Output() navigationChange = new EventEmitter<string>();
  @Output() sidebarToggle = new EventEmitter<boolean>();
  @Output() mobileSidebarToggle = new EventEmitter<boolean>();

  protected readonly navigationItems = NAVIGATION_ITEMS;
  protected readonly bottomNavigationItems = BOTTOM_NAVIGATION_ITEMS;
  
  protected isCollapsed = false;
  protected isMobile = false;
  protected isMobileSidebarOpen = false;
  protected userProfile: UserProfile = {
    name: 'Mutalib',
    role: 'Adebayo',
    avatar: '/assets/images/default-avatar.png'
  };

  constructor(private readonly router: Router) {
    this.checkScreenSize();
  }

  @HostListener('window:resize')
  protected onResize(): void {
    this.checkScreenSize();
  }

  protected getLabel(key: LabelKey): string {
    return NAVIGATION_LABELS[key];
  }

  protected getItemLabel(translationKey: string): string {
    return NAVIGATION_LABELS[translationKey as LabelKey] || translationKey;
  }

  protected getIconPath(icon: string): string {
    return `/${icon}`;
  }

  protected onNavigationItemClick(item: NavigationItem): void {
    this.updateActiveState(item.id);
    this.navigationChange.emit(item.id);
    this.router.navigate([item.route]);
    

    if (this.isMobile && this.isMobileSidebarOpen) {
      this.isMobileSidebarOpen = false;
      this.mobileSidebarToggle.emit(this.isMobileSidebarOpen);
    }
  }

  protected onToggleSidebar(): void {
    if (this.isMobile) {
      
      this.isMobileSidebarOpen = !this.isMobileSidebarOpen;
      this.mobileSidebarToggle.emit(this.isMobileSidebarOpen);
    } else {
      this.isCollapsed = !this.isCollapsed;
      this.sidebarToggle.emit(this.isCollapsed);
    }
  }

  protected onLogout(): void {
    this.router.navigate(['/login']);
  }

  private checkScreenSize(): void {
    this.isMobile = window.innerWidth <= 768;

    if (!this.isMobile) {
      this.isMobileSidebarOpen = false;
      this.mobileSidebarToggle.emit(false);
    } else {
      this.isCollapsed = false; 
    }
  }

  private updateActiveState(activeItemId: string): void {
    this.navigationItems.forEach(item => {
      item.isActive = item.id === activeItemId;
    });
    
    this.bottomNavigationItems.forEach(item => {
      item.isActive = item.id === activeItemId;
    });
  }
}