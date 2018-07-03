import { Component, OnInit } from '@angular/core';
import {GalleriaModule} from 'primeng/galleria';
import { ButtonModule } from 'primeng/button';
import { GalleryModule, Gallery, GalleryItem } from 'ng-gallery';

@Component({
  selector: 'archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class Archive implements OnInit {

  constructor(public gallery: Gallery) { }

  images: GalleryItem[];
  images40s: GalleryItem[];
  images50s: GalleryItem[];
  images60s: any[];
  images70s: any[];
  images80s: any[];
  images90s: any[];
  images00s: any[];
  images10s: any[];

  ngOnInit() {
    this.images = [];
    this.images40s = [
      {src:'assets/images/40s/1945.gif',  thumbnail:'assets/images/40s/1945.gif', text:'Poster from 1945 Choral and Instrumental Concert.'},
      {src:'assets/images/40s/1947.gif',  thumbnail:'assets/images/40s/1947.gif', text:'Poster from 1947 Elijah Concert.'},
      {src:'assets/images/40s/1949.gif',  thumbnail:'assets/images/40s/1949.gif', text:'Poster from 1949 First Choral Festival.'}
    ];
    this.images50s = [
      {src:'assets/images/50s/1951.gif',  thumbnail:'assets/images/50s/1951.gif', text:'Poster from 1951 Festival of Britain Concert.'},
      {src:'assets/images/50s/1953.gif',  thumbnail:'assets/images/50s/1953.gif', text:'Poster from 1953 Merrie England Concert.'},
      {src:'assets/images/50s/1959.gif',  thumbnail:'assets/images/50s/1959.gif', text:'Poster from 1959 Concert.'}
    ];
    this.images60s = [
      {src:'assets/images/60s/1964.gif',  thumbnail:'assets/images/60s/1964.gif', text:'Poster from 1964 Concert.'},
      {src:'assets/images/60s/1965.gif',  thumbnail:'assets/images/60s/1965.gif', text:'Poster from 1965 Concert.'},
      {src:'assets/images/60s/1969.gif',  thumbnail:'assets/images/60s/1969.gif', text:'Poster from 1969 Concert.'}
    ];
    this.images70s = [
      {src:'assets/images/70s/1972.gif',  thumbnail:'assets/images/70s/1972.gif', text:'Poster from 1972 Barrow Grove School Concert.'},
      {src:'assets/images/70s/1973.gif',  thumbnail:'assets/images/70s/1973.gif', text:'Poster from 1973 St John Passion Concert.'},
      {src:'assets/images/70s/1975.gif',  thumbnail:'assets/images/70s/1975.gif', text:'Poster from 1975 Concert.'},
      {src:'assets/images/70s/1976.gif',  thumbnail:'assets/images/70s/1976.gif', text:'Poster from 1976 Festival Week Concert.'}
    ];
    this.images80s = [
      {src:'assets/images/80s/1983.gif',  thumbnail:'assets/images/80s/1983.gif', text:'Poster from 1983 Swale Festival Week Concert.'},
      {src:'assets/images/80s/1986_2.gif',  thumbnail:'assets/images/80s/1986_2.gif', text:'Poster from 1986 Spring Concert.'},
      {src:'assets/images/80s/1986.gif',  thumbnail:'assets/images/80s/1986.gif', text:'Review of 1986 Concert.'},
      {src:'assets/images/80s/1987.gif',  thumbnail:'assets/images/80s/1987.gif', text:'Posters of 1987 Elijah, Supper and Christmas Concerts.'}
    ];
    this.images90s = [
      {src:'assets/images/90s/1990.gif',  thumbnail:'assets/images/90s/1990.gif', text:'Review of 1990 Concert.'},
      {src:'assets/images/90s/1992.gif',  thumbnail:'assets/images/90s/1992.gif', text:'Review of 1992 Concert.'},
      {src:'assets/images/90s/1993_2.gif',  thumbnail:'assets/images/90s/1993_2.gif', text:'Poster of 1993 Requiem Te Deum Concert.'},
      {src:'assets/images/90s/1993.gif',  thumbnail:'assets/images/90s/1993.gif', text:'Review of 1993 Concert.'},
      {src:'assets/images/90s/1994_1.gif',  thumbnail:'assets/images/90s/1994_1.gif', text:'Photo of the choir from 1994.'},
      {src:'assets/images/90s/1994_2.gif',  thumbnail:'assets/images/90s/1994_2.gif', text:'Poster from 1994 of Celebration Pops'},
      {src:'assets/images/90s/1996_2.gif',  thumbnail:'assets/images/90s/1996_2.gif', text:'Review of 1996 Concert.'},
      {src:'assets/images/90s/1996.gif',  thumbnail:'assets/images/90s/1996.gif', text:'Poster of 1996 Mozart Requiem Concert.'},
      {src:'assets/images/90s/1999xmas_2.gif',  thumbnail:'assets/images/90s/1999xmas_2.gif', text:'Poster of Music for Christmas 1999 Concert.'}
    ];
    this.images00s = [
      {src:'assets/images/00s/2000spring.gif',  thumbnail:'assets/images/00s/2000spring.gif', text:'Poster of 2000 Millennium Music Makers Concert.'},
      {src:'assets/images/00s/2000xmas.gif',  thumbnail:'assets/images/00s/2000xmas.gif', text:'Poster of 2000 Christmas Concert.'},
      {src:'assets/images/00s/spring2001.gif',  thumbnail:'assets/images/00s/spring2001.gif', text:'Poster of 2001 Elijah Concert.'},
      {src:'assets/images/00s/xmas2001.gif',  thumbnail:'assets/images/00s/xmas2001.gif', text:'Poster of 2001 Music for Christmas Concert.'},
      {src:'assets/images/00s/xmas2002.gif',  thumbnail:'assets/images/00s/xmas2002.gif', text:'Poster of 2002 Music for Christmas Concert.'},
      {src:'assets/images/00s/2002xmasreview1.jpg',  thumbnail:'assets/images/00s/2002xmasreview1.jpg', text:'Review of 2002 Christmas Concert.'},
      {src:'assets/images/00s/2002xmasreview2.jpg',  thumbnail:'assets/images/00s/2002xmasreview2.jpg', text:'Picture of the 2002 Christmas Concert.'},
      {src:'assets/images/00s/200205review.jpg',  thumbnail:'assets/images/00s/200205review.jpg', text:'Review of 2002 Concert.'},
      {src:'assets/images/00s/200305poster.gif',  thumbnail:'assets/images/00s/200305poster.gif', text:'Poster of 2003 of Carmina Burana Choruses Concert.'},
      {src:'assets/images/00s/200305review.jpg',  thumbnail:'assets/images/00s/200305review.jpg', text:'Review of 2003 Concert.'},
      {src:'assets/images/00s/200312kaa.jpg',  thumbnail:'assets/images/00s/200312kaa.jpg', text:'Poster from 2003 Kent Air Ambulance Concert.'},

      {src:'assets/images/00s/200312review.jpg',  thumbnail:'assets/images/00s/200312review.jpg', text:'Review of 2003 Christmas Concert.'},
      {src:'assets/images/00s/200405poster.jpg',  thumbnail:'assets/images/00s/200405poster.jpg', text:'Poster of 2004 Diamond Jubilee Concert.'},
      {src:'assets/images/00s/20051217programme.jpg',  thumbnail:'assets/images/00s/20051217programme.jpg', text:'Programme of 2005 Christmas Concert.'},
      {src:'assets/images/00s/200512MatthewRogers.jpg',  thumbnail:'assets/images/00s/200512MatthewRogers.jpg', text:'Text snippet by Matthew Rogers from 2005.'},
      {src:'assets/images/00s/2006spring.jpg',  thumbnail:'assets/images/00s/2006spring.jpg', text:'Poster from 2006 Gloria Poulenc Reqiuem Faure Concert.'},
      {src:'assets/images/00s/200512WintersweetMatthewRogers.jpg',  thumbnail:'assets/images/00s/200512WintersweetMatthewRogers.jpg', text:'Text snipper by Matthrew Rogers regarding Wintersweet from 2005.'},
      {src:'assets/images/00s/20060513newspaperarticle.jpg',  thumbnail:'assets/images/00s/20060513newspaperarticle.jpg', text:'Article of the society from 2006.'},
      {src:'assets/images/00s/20061216programme.jpg',  thumbnail:'assets/images/00s/20061216programme.jpg', text:'Programme of 2006 Christmas Concert.'},
      {src:'assets/images/00s/2006xmas.jpg',  thumbnail:'assets/images/00s/2006xmas.jpg', text:'Poster of 2006 Christmas Concert.'},
      {src:'assets/images/00s/200707SwaleFestival.jpg',  thumbnail:'assets/images/00s/200707SwaleFestival.jpg', text:'Poster of 2007 Swale Festival Concert.'},
      {src:'assets/images/00s/20071215programme.jpg',  thumbnail:'assets/images/00s/20071215programme.jpg', text:'Programme of 2007 Christmas Concert.'},
      {src:'assets/images/00s/200805programme.jpg',  thumbnail:'assets/images/00s/200805programme.jpg', text:'Poster of 2008 Handel - Saul Concert.'},
      {src:'assets/images/00s/20081101programme.jpg',  thumbnail:'assets/images/00s/20081101programme.jpg', text:'Poster of 2008 Karl Jenkins Reqiuem Concert.'},
      {src:'assets/images/00s/200905programme.jpg',  thumbnail:'assets/images/00s/200905programme.jpg', text:'Poster of 2009 Puccini and Bizet Concert'},
    ]
    this.images10s = [
      {src:'assets/images/10s/201005.jpg', thumbnail:'assets/images/10s/201005.jpg', text:'Poster of 2010 Concert.'},
      {src:'assets/images/10s/201012.jpg', thumbnail:'assets/images/10s/201012.jpg', text:'Poster of 2010 Christmas Concert.'},
      {src:'assets/images/10s/201105Elijah.jpg', thumbnail:'assets/images/10s/201105Elijah.jpg', text:'Poster of 2011 Elijah Concert.'},
      {src:'assets/images/10s/2011Christmasposter.jpg',  thumbnail:'assets/images/10s/2011Christmasposter.jpg', text:'Poster of 2011 Christmas Concert.'},
      {src:'assets/images/10s/201205.jpg', thumbnail:'assets/images/10s/201205.jpg', text:"Poster of 2012 Brahms' Requiem Concert."},
      {src:'assets/images/10s/2012_Christmas_Poster.jpg', thumbnail:'assets/images/10s/2012_Christmas_Poster.jpg', text:'Poster of 2012 Christmas Concert.'},
      {src:'assets/images/10s/2013.jpg', thumbnail:'assets/images/10s/2013.jpg', text:'Poster of 2013 Christmas Concert.'},
      {src:'assets/images/10s/201305.jpg', thumbnail:'assets/images/10s/201305.jpg', text:'Poster of 2013 St John Passion Concert.'},
      {src:'assets/images/10s/201310.jpg', thumbnail:'assets/images/10s/201310.jpg', text:'Poster of 2013 Concert.'},
      {src:'assets/images/10s/201410.jpg', thumbnail:'assets/images/10s/201410.jpg', text:'Poster of 2014 Concert.'},
      {src:'assets/images/10s/2014.jpg', thumbnail:'assets/images/10s/2014.jpg', text:'Poster of 2014 Christmas Concert.'},
      {src:'assets/images/10s/201504.jpg', thumbnail:'assets/images/10s/201504.jpg', text:'Poster of 2015 Spring Concert.'},
      {src:'assets/images/10s/201507.jpg', thumbnail:'assets/images/10s/201507.jpg', text:'Poster of 70th Anniversary Concert from 2015.'},
      {src:'assets/images/10s/201511.jpg', thumbnail:'assets/images/10s/201511.jpg', text:'Poster of 2015 Evening at the Opera Concert.'},
      {src:'assets/images/10s/2015.jpg', thumbnail:'assets/images/10s/2015.jpg', text:'Poster of 2015 Christmas Concert.'},
      {src:'assets/images/10s/201605Haydn.jpg', thumbnail:'assets/images/10s/201605Haydn.jpg', text:"Poster of 2016 Haydn's Creation Concert."},
      {src:'assets/images/10s/SOCSChristmasConcertPoster2016_Draft2.png', thumbnail:'assets/images/10s/SOCSChristmasConcertPoster2016_Draft2.png', text:"Poster of 2016 Christmas Concert."},
      {src:'assets/images/10s/SOCSChristmasPoster2017.jpg', thumbnail:'assets/images/10s/SOCSChristmasPoster2017.jpg', text:"Poster of 2017 Christmas Concert."},
      {src:'assets/images/10s/concertposterApril2018.jpg', thumbnail:'assets/images/10s/concertposterApril2018.jpg', text:"Poster of 2018 Spring Concert."},
    ]
    this.images = this.images40s;
    this.gallery.load(this.images);
  }

  go40(){
    this.images = this.images40s;
    this.gallery.load(this.images);
    this.gallery.set(0);
  }

  go50(){
    this.images = this.images50s;
    this.gallery.load(this.images);
    this.gallery.set(0);
  }

  go60(){
    this.images = this.images60s;
    this.gallery.load(this.images);
    this.gallery.set(0);
  }
  go70(){
    this.images = this.images70s;
    this.gallery.load(this.images);
    this.gallery.set(0);
  }
  go80(){
    this.images = this.images80s;
    this.gallery.load(this.images);
    this.gallery.set(0);
  }

  go90(){
    this.images = this.images90s;
    this.gallery.load(this.images);
    this.gallery.set(0);
  }

  go00(){
    this.images = this.images00s;
    this.gallery.load(this.images);
    this.gallery.set(0);
  }

  go10(){
    this.images = this.images10s;
    this.gallery.load(this.images);
    this.gallery.set(0);
  }
}
