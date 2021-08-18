import { Injectable } from '@angular/core';
import { screenWidths } from '../shared/enums';

@Injectable({
  providedIn: 'root'
})
export class AppResponsiveService {
  constructor() { }

  currentWidth: number;
  setWidth = (width: number) => this.currentWidth = width;

  isLargePC = (): boolean => this.currentWidth > screenWidths.xl;
  isPC = (): boolean => this.currentWidth <= screenWidths.xl;
  isTabHorizontal = (): boolean => this.currentWidth <= screenWidths.lg;
  isTabVertical = (): boolean => this.currentWidth <= screenWidths.md;
  isMobile = (): boolean => this.currentWidth <= screenWidths.sm;
  isSmallMobile = (): boolean => this.currentWidth <= screenWidths.xs;
}
