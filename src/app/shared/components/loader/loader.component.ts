import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromLoaderSelectros from '../../../reducers/loader-store/selectors/loader.selectors';

@Component({
  selector: 'atos-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit {
  isLoading$: Observable<boolean> = this.store.pipe(
    select(fromLoaderSelectros.getIsLoading)
  );
  constructor(private store: Store) {}

  ngOnInit(): void {}
}
