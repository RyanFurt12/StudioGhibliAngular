import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {dataFake} from '../../data/dataFake'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover:string = ""
  contentTitle:string = ""
  contentDescription:string = ""
  private id:string | null = "0"

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
     this.id = value.get("id")
    )
    
    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null){
    if(id == null) return;
    const result = dataFake.filter((value: { id: string; }) => value.id == id)[0]

    if(result == undefined) setTimeout(() => {
      this.setValuesToComponent(id)
    }, 500);
    else {
      this.photoCover = result.movie_banner
      this.contentTitle = result.title
      this.contentDescription = result.description
    }
  }

}
