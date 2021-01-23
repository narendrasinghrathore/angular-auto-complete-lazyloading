import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AutoCompleteLazyLoading {
  @Input() label: string = 'Search';
  @Input() placeholder: string = 'E.g Name';
  @Input() hint: string = 'Search by name';
  @Input() style: Partial<CSSStyleDeclaration> = {
    padding: '15px',
  };
  @Input() pageSize: number = 10;
  @Input() api: string =
    'https://api.instantwebtools.net/v1/passenger?page=0&size=10';

  pageIndex = 0;

  updatePageIndex() {
    this.pageIndex++;
  }

  resetPageIndex() {
    this.pageIndex = 0;
  }
}
