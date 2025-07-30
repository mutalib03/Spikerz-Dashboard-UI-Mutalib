import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    SidebarComponent
  ],
  templateUrl: 'app.html',
  styleUrls: ['./app.scss']
})
export class AppComponent {
  protected isSidebarCollapsed = false;
  protected isMobileSidebarOpen = false;

  protected onNavigationChange(itemId: string): void {
    console.log('Navigation changed to:', itemId);
   
  }

  protected onSidebarToggle(isCollapsed: boolean): void {
    this.isSidebarCollapsed = isCollapsed;
  }

  protected onMobileSidebarToggle(isOpen: boolean): void {
    this.isMobileSidebarOpen = isOpen;
    

    if (isOpen) {
      document.body.classList.add('sidebar-open');
    } else {
      document.body.classList.remove('sidebar-open');
    }
  }

  protected onToggleMobileSidebar(): void {
    this.isMobileSidebarOpen = !this.isMobileSidebarOpen;
    this.onMobileSidebarToggle(this.isMobileSidebarOpen);
  }

  protected onCloseMobileSidebar(): void {
    if (this.isMobileSidebarOpen) {
      this.isMobileSidebarOpen = false;
      this.onMobileSidebarToggle(false);
    }
  }
}