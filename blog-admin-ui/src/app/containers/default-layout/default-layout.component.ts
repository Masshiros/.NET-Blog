import { Component, OnInit } from '@angular/core';

import { navItems } from './_nav';
import { TokenStorageService } from 'src/app/shared/services/token-storage.service';
import { Router } from '@angular/router';
import { UrlConstants } from 'src/app/shared/constants/url.constant';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss'],
})
export class DefaultLayoutComponent implements OnInit {
  public navItems = [];

  constructor(
    private tokenService: TokenStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const user = this.tokenService.getUser();

    if (user == null) {
      this.router.navigate([UrlConstants.LOGIN]);
    }
    console.log(user.permissions);
    const permissions = JSON.parse(user.permissions);

    for (let index = 0; index < navItems.length; index++) {
      for (
        let childIndex = 0;
        childIndex < navItems[index].children?.length;
        childIndex++
      ) {
        if (
          navItems[index].children[childIndex].attributes &&
          permissions.filter(
            (x: any) =>
              x == navItems[index].children[childIndex].attributes['policyName']
          ).length == 0
        ) {
          navItems[index].children[childIndex].class = 'hidden';
        }
      }
    }
    this.navItems = navItems;
  }
}
