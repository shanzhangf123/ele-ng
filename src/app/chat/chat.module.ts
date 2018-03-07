import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat.component';
import { BaseModule } from '../../base/base.module';

@NgModule({
  imports: [
    BaseModule,
    CommonModule
  ],
  declarations: [ChatComponent],
  exports:[ChatComponent]
})
export class ChatModule { }
