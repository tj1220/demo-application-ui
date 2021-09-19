import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-card-article',
  templateUrl: './card-article.component.html',
  styleUrls: ['./card-article.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CardArticleComponent implements OnInit {
  @Input() article: any = {};
  public liked: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public toggleLike = (): void => {
    this.liked = !this.liked;
  };
  public heartIcon = (): string => {
    return this.liked ? "k-icon k-i-heart" : "k-icon k-i-heart-outline";
  };

}
