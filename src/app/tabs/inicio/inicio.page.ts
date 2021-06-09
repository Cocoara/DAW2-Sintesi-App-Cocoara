import { Component, OnInit } from '@angular/core';
import { HomeInfo } from 'src/app/models/homeInfo';
import { Noticias } from 'src/app/models/noticias';
import { User } from 'src/app/models/user';
import { HomeInfoService } from 'src/app/services/homeInfo.service';
import { NoticiasService } from 'src/app/services/noticias.service';
import { SessionService } from 'src/app/services/session.service';

// import { PopoverController } from '@ionic/angular';
// import { PopoverComponent } from '../../../../component/popover/popover.component';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  public homeinfo: HomeInfo[] = [];
  public userGroup: User[] = [];
  public noticias: Noticias[] = [];

  group_id = this.session.user.group;   
  
  constructor(private homeinfoService: HomeInfoService, private noticiasService: NoticiasService, public session: SessionService,) {
    this.noticiasService.retrieveNoticiasFromHttp(this.group_id);
    this.noticiasService.noticias.subscribe(
      (onoticias: Noticias[]) => {
        this.noticias = onoticias;
      });

      this.homeinfoService.retrieveHomeinfoFromHttp();
    this.homeinfoService.homeinfo.subscribe(
      (oHomeinfo: HomeInfo[]) => {
        this.homeinfo = oHomeinfo;
      });
      


  
  }

  ngOnInit() {
  }


}
