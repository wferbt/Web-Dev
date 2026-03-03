import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize } from 'rxjs';

import { AlbumService } from '../../services/album.service';
import { Photo } from '../../models/photo.model';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './album-photos.html',
  styleUrls: ['./album-photos.css'],
})
export class AlbumPhotosComponent implements OnInit {
  albumId = 0;
  photos: Photo[] = [];
  loading = true;
  errorMsg = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumId = id;

    if (!id || Number.isNaN(id)) {
      this.loading = false;
      this.errorMsg = 'Invalid album id.';
      return;
    }

    this.albumService
      .getAlbumPhotos(id)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe({
        next: (data: Photo[]) => (this.photos = data),
        error: () => (this.errorMsg = 'Failed to load photos.'),
      });
  }

  goBack(): void {
    this.router.navigate(['/albums', this.albumId]);
  }
}
