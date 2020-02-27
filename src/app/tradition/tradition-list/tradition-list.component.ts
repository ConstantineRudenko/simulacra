import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {ContentService} from '../../content.service';
import {MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';
import {Tradition} from '../../data-model/tradition';

@Component({
  selector: 'app-tradition-list',
  templateUrl: './tradition-list.component.html',
  styleUrls: ['./tradition-list.component.css']
})
export class TraditionListComponent implements OnInit {
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private contentService: ContentService) {
  }

  columnsToDisplay: string[] = ['name', 'attribute', 'source'];
  dataSource: MatTableDataSource<Tradition>;
  selection: SelectionModel<Tradition>;

  ngOnInit() {
    const data = this.contentService.getTraditionList();
    this.dataSource = new MatTableDataSource<Tradition>(data);
    this.dataSource.sort = this.sort;
    this.dataSource.filterPredicate = (d: Tradition, filterString: string) => {
      if (!filterString) {
        return true;
      }
      return d.name.toLowerCase().includes(filterString.toLowerCase());
    };

    this.selection = new SelectionModel<Tradition>(false, null);
  }

  select(row: Tradition) {
    this.selection.select(row);
  }

  applyFilter(filter: string) {
    this.dataSource.filter = filter;
  }

}
