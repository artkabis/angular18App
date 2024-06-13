import { Component } from '@angular/core';
import { VideoGame } from '../../models/Video-game';
import { TableGamesComponent } from '../table-games/table-games.component';

@Component({
  selector: 'app-list-games',
  standalone: true,
  imports: [TableGamesComponent],
  templateUrl: './list-games.component.html',
  styleUrl: './list-games.component.scss'
})
export class ListGamesComponent {
  videoGamesList: VideoGame[] = [
    {
      nom: 'Mario',
      dateSortie: new Date(1985, 1, 1)
    },
    {
      nom: 'Zelda',
      dateSortie: new Date(1986, 1, 1)
    },
    {
      nom: 'Sonic',
      dateSortie: new Date(1991, 1, 1)
    },
    {
      nom: 'Megaman',
      dateSortie: new Date(1987, 1, 1)
    },
    {
      nom: 'Contra',
      dateSortie: new Date(1987, 1, 1)
    },
    {
      nom: 'Pacman',
      dateSortie: new Date(1980, 1, 1)
    },
  ];

}
