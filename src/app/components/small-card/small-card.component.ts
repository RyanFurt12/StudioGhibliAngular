import { Component, Input, OnInit } from '@angular/core';
import { dataFake } from '../../data/dataFake'

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})

export class SmallCardComponent implements OnInit {
  @Input()
  Id:number= 0
  data:any = {}

  title:string = 'Loading'
  image:string = ''
  year:string = '20XX'

  constructor() { }

  ngOnInit(): void {
    this.data = dataFake.filter((value: { id: number; }) => value.id == this.Id)[0] 
    this.title = this.data.title
    this.image = this.data.image
    this.year = this.data.release_date
  }

}
