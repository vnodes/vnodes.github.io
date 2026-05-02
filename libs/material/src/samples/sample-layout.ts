import { Component, input } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { LayoutAppComponent, LayoutAppModule } from "@vnodes/material/layout-app";
import { NavListItem } from "@vnodes/material/list";
import { ListNavComponent } from "@vnodes/material/list-nav";

@Component({
    imports: [LayoutAppComponent, LayoutAppModule, ListNavComponent, MatButtonModule, MatIconModule],
    template: `
    <vn-layout type="app">

        <!-- Sidenavs -->
        <ng-container vnSidenavTop>
            <vn-list title="Top List" type="nav" [items]="items()"></vn-list>
        </ng-container>

        <ng-container vnSidenav>
            <vn-list title="Sidenav Center" type="nav" [items]="items()"></vn-list>
        </ng-container>

        <ng-container vnSidenavBottom>
            <vn-list title="Bottom List" type="nav" [items]="items()"></vn-list>
        </ng-container>


        <!-- Toolbar  -->
        <ng-container vnToolbarLeft>
                <button matIconButton> <mat-icon>home</mat-icon></button>
                <button matIconButton> <mat-icon>info</mat-icon></button>
                <button matIconButton> <mat-icon>apps</mat-icon></button>
        </ng-container>
        <ng-container vnToolbar>
                <button matIconButton> <mat-icon>home</mat-icon></button>
                <button matIconButton> <mat-icon>info</mat-icon></button>
                <button matIconButton> <mat-icon>apps</mat-icon></button>
        </ng-container>
        <ng-container vnToolbarRight>
                <button matIconButton> <mat-icon>home</mat-icon></button>
                <button matIconButton> <mat-icon>info</mat-icon></button>
                <button matIconButton> <mat-icon>apps</mat-icon></button>
        </ng-container>

        <!-- Status bar -->
        <ng-container vnStatusbarLeft>
                <button matIconButton> <mat-icon>home</mat-icon></button>
                <button matIconButton> <mat-icon>info</mat-icon></button>
                <button matIconButton> <mat-icon>apps</mat-icon></button>
        </ng-container>
        <ng-container vnStatusbar>
                <button matIconButton> <mat-icon>home</mat-icon></button>
                <button matIconButton> <mat-icon>info</mat-icon></button>
                <button matIconButton> <mat-icon>apps</mat-icon></button>
        </ng-container>
        <ng-container vnStatusbarRight>
                <button matIconButton> <mat-icon>home</mat-icon></button>
                <button matIconButton> <mat-icon>info</mat-icon></button>
                <button matIconButton> <mat-icon>apps</mat-icon></button>
        </ng-container>



        <ng-container vnContentTop>
            <div>Top content</div>
        </ng-container>
        <ng-container vnContent>
            <div>Content</div>
        </ng-container>
        <ng-container vnContentBottom>
            <div>Bottom content</div>
        </ng-container>
        
    </vn-layout>
    `
})
export class SampleLayoutComponent {
    items = input<NavListItem[]>([
        { title: "home", route: ['home'], icon: "home" },
        { title: "about", route: ['about'], icon: "info" },
        { title: "services", route: ['services'], icon: "apps" },
    ])
}