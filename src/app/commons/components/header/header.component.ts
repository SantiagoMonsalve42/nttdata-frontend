import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../services/theme/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLigth: boolean=true;
  constructor(private theme: ThemeService) { }
  ngOnInit(): void {
  }
  public switchTheme(): void {

    if (this.theme.current === 'light') {
      this.isLigth=false;
      this.theme.current = 'dark';
    } else {
      this.isLigth=true;
      this.theme.current = 'light';
    }
  }

}
