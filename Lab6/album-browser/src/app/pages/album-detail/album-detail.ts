import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { finalize } from 'rxjs';

import { AlbumService } from '../../services/album.service';
import { Album } from '../../models/album.model';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './album-detail.html',
  styleUrls: ['./album-detail.css'],
})
export class AlbumDetailComponent implements OnInit {
  albumId = 0;
  album: Album | null = null;

  loading = true;
  saving = false;
  errorMsg = '';
  editedTitle = '';

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
      .getAlbum(id)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe({
        next: (data: Album) => {
          this.album = data;
          this.editedTitle = data.title;
        },
        error: () => (this.errorMsg = 'Failed to load album details.'),
      });
  }

  save(): void {
    if (!this.album) return;

    const title = this.editedTitle.trim();
    if (!title) {
      this.errorMsg = 'Title cannot be empty.';
      return;
    }

    this.errorMsg = '';
    this.saving = true;

    const updated: Album = { ...this.album, title };

    this.albumService
      .updateAlbum(updated)
      .pipe(finalize(() => (this.saving = false)))
      .subscribe({
        next: (saved: Album) => {
          this.album = saved;
          this.editedTitle = saved.title;
        },
        error: () => (this.errorMsg = 'Save failed. Please try again.'),
      });
  }

  goBack(): void {
    this.router.navigate(['/albums']);
  }
}
