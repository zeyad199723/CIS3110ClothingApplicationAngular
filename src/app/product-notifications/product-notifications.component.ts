import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';


@Component({
  selector: 'app-product-notifications',
  templateUrl: './product-notifications.component.html',
  styleUrl: './product-notifications.component.css'
})
export class ProductNotificationsComponent {
    @Input() product: Product | undefined;
    @Output() notify = new EventEmitter();

}
