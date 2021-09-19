import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoItemsService {
  constructor() { }

  articles:any[] = [
    {
      id: 1,
      creatorName: `Demo Creator 1`,
      creatorAddress: `City 1, State 1`,
      creatorIcon: `../../../../../assets/images/D.PNG`,
      coverImage: `../../../../../assets/images/demo-image.PNG`,
      title: `Demo Article 1`,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed  ut labore et dolore magna aliqua.`
    },
    {
      id: 2,
      creatorName: `Demo Creator 2`,
      creatorAddress: `City 2, State 2`,
      creatorIcon: `../../../../../assets/images/D.PNG`,
      coverImage: `../../../../../assets/images/demo-image.PNG`,
      title: `Demo Article 2`,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed  ut labore et dolore magna aliqua.`
    },
    {
      id: 3,
      creatorName: `Demo Creator 3`,
      creatorAddress: `City 3, State 3`,
      creatorIcon: `../../../../../assets/images/D.PNG`,
      coverImage: `../../../../../assets/images/demo-image.PNG`,
      title: `Demo Article 3`,
      description: `Lorem ipsum dolor sit amet, consectetur , sed do eiusmod incididunt ut labore et dolore magna aliqua.`
    }
  ];
}
