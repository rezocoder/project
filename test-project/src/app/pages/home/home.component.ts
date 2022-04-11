import { Component, OnInit } from '@angular/core';
import { TranslateConfigService } from '../../services/translate-config.service';

@Component({
selector: 'app-home',
templateUrl: './home.component.html',
styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    public a = 2;
    public b = 1;
    item = '';

    loginUser(item: any) {
        console.log(item)
    }

constructor(private translate: TranslateConfigService) {}

changeDefaultLanguage(langType: string){
    this.translate.changeLanguage(langType);
    }

ngOnInit(): void {}
}


