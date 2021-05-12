import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { SessionRoutingModule } from './session-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FilterPipe } from '../shared/pipe/filter.pipe';
import { SessionComponent } from './session.component';


@NgModule({
  declarations: [SessionComponent],
  imports: [
    CommonModule,
    FormsModule,
    SessionRoutingModule,
    SharedModule
  ],
  providers: [FilterPipe]
})
export class SessionModule { }
