import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';

import { AlbumService } from '../../services/album.service';
import { Album } from '../../models/album.model';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './albums.html',
  styleUrls: ['./albums.css'],
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];
  loading = true;
  errorMsg = '';
  deletingId: number | null = null;

  constructor(private albumService: AlbumService, private router: Router) {}

  ngOnInit(): void {
    this.albumService
      .getAlbums()
      .pipe(finalize(() => (this.loading = false)))
      .subscribe({
        next: (data: Album[]) => (this.albums = data),
        error: () => (this.errorMsg = 'Failed to load albums. Try again later.'),
      });
  }

  openAlbum(id: number): void {
    this.router.navigate(['/albums', id]);
  }

  deleteAlbum(id: number, event: MouseEvent): void {
    event.stopPropagation();
    this.deletingId = id;

    this.albumService
      .deleteAlbum(id)
      .pipe(finalize(() => (this.deletingId = null)))
      .subscribe({
        next: () => {
          this.albums = this.albums.filter((a) => a.id !== id);
        },
        error: () => {
          this.errorMsg = 'Delete failed. Please try again.';
        },
      });
  }
}
