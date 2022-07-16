import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { GoogleAuthProvider } from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { LoginService } from '../services/login.service';
import firebase from "firebase/compat/app";
import { Router } from '@angular/router';
import { AppService } from '../services/app.service';
import { MovieService } from '../services/movie.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

// import Swiper core and required modules
import SwiperCore, { A11y, EffectCoverflow, Keyboard, Manipulation, Navigation, Pagination, Scrollbar, Swiper, SwiperOptions, Virtual } from 'swiper';
import { TooltipComponent } from '@angular/material/tooltip';
import { SwiperComponent } from 'swiper/angular';
import { analyse } from 'jsquery';
SwiperCore.use([Keyboard, Pagination, Navigation, Virtual, Scrollbar, A11y, Manipulation, EffectCoverflow]);

declare var $: any;


@Component({
    selector: 'app-home-ui',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
    @ViewChild("swiperRef", { static: false }) sliderRef?: SwiperComponent;
    
    customOptions: OwlOptions = {
        touchDrag: true,
        dots: true,
        loop: true,
        autoplay: false,
        smartSpeed: 600,
        margin: 20,
        autoHeight: true,
        

        responsive: {
            0: {
                items: 2,
            },
            576: {
                items: 3,
            },
            768: {
                items: 3,
                margin: 30,
            },
            992: {
                items: 4,
                margin: 30,
            },
            1200: {
                items: 6,
                margin: 30,
                dots: false,
                mouseDrag: false,
                slideBy: 6,
                smartSpeed: 400,
            },
        }
    }

    slides = [
        { id: 1, img: "https://dummyimage.com/350x150/423b42/fff" },
        { id: 2, img: "https://dummyimage.com/350x150/2a2b7a/fff" },
        { id: 3, img: "https://dummyimage.com/350x150/1a2b7a/fff" },
        { id: 4, img: "https://dummyimage.com/350x150/7a2b7a/fff" }
    ];

    aboveTemplate = "<div  class=\"movie_description\"> This is the movie description<div>";


    public movie_list = [];
    public popular_top_movie = [];

    config: SwiperOptions = {
        slidesPerView: 'auto',
        freeMode: true,
        centeredSlides: true,
        grabCursor: true,
        loop: true,
        effect: 'coverflow',
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true
        },

        scrollbar: { draggable: true },
      };

    // onSwiper([swiper]: any) {
    //     console.log(swiper);
    // }

    onSlideChange() {
        console.log('slide change');
    }

    slideConfig = {"slidesToShow": 4, "slidesToScroll": 4, "infinite": true};

    constructor(public loginService: LoginService, public appService: AppService, public movieService: MovieService, public route: Router) {
        this.appService.ShowHeader();
        this.appService.ShowFooter();

        // Object.defineProperty(TooltipComponent.prototype, 'message', {
        //     set(v: any) {
        //         const el = document.querySelectorAll('.mat-tooltip');
         
        //         if (el) {
        //             el[el.length - 1].innerHTML = v;
        //         }
        //     },
        //  });
         
    }

    ngOnInit(): void {
     

        this.movieService.getTopRecentMovie(20).subscribe((result: any) => {
            
            this.movie_list = result['data'];
            
            if (this.sliderRef) {         
               this.sliderRef.swiperRef.removeAllSlides();
               
                console.log("I am here");

                for (let i = 0; i < this.movie_list.length; ++i) {
                    let templateHtml =  `<div class="home__card swiper-slide" (click)="watchMovie(${this.movie_list[i]})">
                    <img src="${this.movie_list[i]['home_preview_image_url']}" alt="">
                    <div>
                        <h2>${this.movie_list[i]['title']}</h2>
                        <ul>
                            <!-- <li>Free</li>
                            <li>Action</li> -->
                            <li>${new Date(this.movie_list[i]['release_date']).getFullYear()}</li>
                        </ul>
                    </div>
                    <button class="home__add" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16,2H8A3,3,0,0,0,5,5V21a1,1,0,0,0,.5.87,1,1,0,0,0,1,0L12,18.69l5.5,3.18A1,1,0,0,0,18,22a1,1,0,0,0,.5-.13A1,1,0,0,0,19,21V5A3,3,0,0,0,16,2Zm1,17.27-4.5-2.6a1,1,0,0,0-1,0L7,19.27V5A1,1,0,0,1,8,4h8a1,1,0,0,1,1,1Z"/></svg></button>
                    <span class="home__rating"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22,9.67A1,1,0,0,0,21.14,9l-5.69-.83L12.9,3a1,1,0,0,0-1.8,0L8.55,8.16,2.86,9a1,1,0,0,0-.81.68,1,1,0,0,0,.25,1l4.13,4-1,5.68A1,1,0,0,0,6.9,21.44L12,18.77l5.1,2.67a.93.93,0,0,0,.46.12,1,1,0,0,0,.59-.19,1,1,0,0,0,.4-1l-1-5.68,4.13-4A1,1,0,0,0,22,9.67Zm-6.15,4a1,1,0,0,0-.29.88l.72,4.2-3.76-2a1.06,1.06,0,0,0-.94,0l-3.76,2,.72-4.2a1,1,0,0,0-.29-.88l-3-3,4.21-.61a1,1,0,0,0,.76-.55L12,5.7l1.88,3.82a1,1,0,0,0,.76.55l4.21.61Z"/></svg> 9.1</span>
                    </div>`
                    console.log(templateHtml);
                    this.sliderRef.swiperRef.appendSlide(templateHtml);
                }
                // this.sliderRef.swiperRef.params.loopAdditionalSlides = this.movie_list.length;
                // this.sliderRef.swiperRef.params.loopedSlides = this.movie_list.length;
                // this.sliderRef.calcLoopedSlides()
               
                this.sliderRef.swiperRef.update();
                

                console.log (this.sliderRef.swiperRef.slides);
                console.log (this.sliderRef.swiperRef.params);
            }

         
            //console.log(this.movie_list);
        });

        this.movieService.getTopPopularMovie().subscribe((result: any) => {
            this.popular_top_movie = result['data'];
        });

        // const swiper = new Swiper('.swiper', {
        //     speed: 400,
        //     spaceBetween: 100,
        //     loop: true,
        //   });
    }

    watchMovie(movie: any, token: any) {
        console.log("Click click click click")
        movie['token'] = token;
        this.movieService.AddUserCurrentWatch(movie);
        this.route.navigateByUrl("/watch");
    }

    slickInit(e: any) {
        console.log('slick initialized');
      }
      
      breakpoint(e: any) {
        console.log('breakpoint');
      }
      
      afterChange(e: any) {
        console.log('afterChange');
      }
      
      beforeChange(e: any) {
        console.log('beforeChange');
      }

    ngAfterViewInit() {
        if (this.sliderRef) {  
            this.sliderRef.swiperRef.on('click', (swiper: any, event: any) => {
                console.log(event);
                console.log(swiper.activeIndex)

                // this.watchMovie(this.movie_list[Number(swiper.activeIndex)])
                this.loginService.GetToken().then((token) => {
                    this.movieService.maybeGetPlayLink(token, this.movie_list[Number(swiper.activeIndex)]['movie_id']).subscribe((result: any) => {
                        console.log(result);
                        this.watchMovie(this.movie_list[Number(swiper.activeIndex)], result['data']);
                        
                    }, (error) => {

                    })
                })
            }) ;    
        }

        setTimeout(function () {
            /*==============================
                Home carousel
                ==============================*/
            $('.home__carousel').owlCarousel({
                mouseDrag: true,
                touchDrag: true,
                dots: true,
                loop: true,
                autoplay: false,
                smartSpeed: 600,
                margin: 20,
                autoHeight: true,
                autoWidth: true,
                responsive: {
                    0: {
                        items: 2,
                    },
                    576: {
                        items: 2,
                        margin: 20,
                    },
                    768: {
                        items: 2,
                        margin: 30,
                        center: true,
                    },
                    1200: {
                        items: 6,
                        margin: 30,
                        center: true,
                        //mouseDrag: true,
                        dots: false,
                        startPosition: 1,
                        slideBy: 6,
                    },
                }
            });

            /*==============================
            Select
            ==============================*/
            $('.catalog__select').select2({
                minimumResultsForSearch: Infinity
            });

            /*==============================
            Carousel
            ==============================*/
            $('.section__carousel').owlCarousel({
                mouseDrag: true,
                touchDrag: true,
                dots: true,
                loop: true,
                autoplay: false,
                smartSpeed: 600,
                margin: 20,
                autoHeight: true,
                responsive: {
                    0: {
                        items: 2,
                    },
                    576: {
                        items: 3,
                    },
                    768: {
                        items: 3,
                        margin: 30,
                    },
                    992: {
                        items: 4,
                        margin: 30,
                    },
                    1200: {
                        items: 6,
                        margin: 30,
                        dots: false,
                        //mouseDrag: false,
                        slideBy: 6,
                        smartSpeed: 400,
                    },
                }
            });



            /*==============================
            Interview
            ==============================*/
            $('.section__interview').owlCarousel({
                mouseDrag: true,
                touchDrag: true,
                dots: true,
                loop: true,
                autoplay: false,
                smartSpeed: 600,
                margin: 20,
                autoHeight: true,
                responsive: {
                    0: {
                        items: 1,
                    },
                    576: {
                        items: 2,
                    },
                    768: {
                        items: 2,
                        margin: 30,
                    },
                    992: {
                        items: 3,
                        margin: 30,
                    },
                    1200: {
                        items: 3,
                        margin: 30,
                        dots: false,
                        //mouseDrag: false,
                        slideBy: 3,
                        autoplay: true,
                        autoplayTimeout: 5000,
                        autoplayHoverPause: true,
                    },
                }
            });

            /*==============================
            Series
            ==============================*/
            $('.section__series').owlCarousel({
                mouseDrag: true,
                touchDrag: true,
                dots: true,
                loop: true,
                autoplay: false,
                smartSpeed: 600,
                margin: 20,
                autoHeight: true,
                responsive: {
                    0: {
                        items: 2,
                    },
                    576: {
                        items: 3,
                    },
                    768: {
                        items: 3,
                        margin: 20,
                    },
                    992: {
                        items: 4,
                        margin: 20,
                    },
                    1200: {
                        items: 5,
                        margin: 20,
                        dots: false,
                        //mouseDrag: false,
                    },
                    1440: {
                        items: 5,
                        margin: 20,
                        dots: false,
                        //mouseDrag: false,
                    },
                }
            });

            /*==============================
            Live
            ==============================*/
            $('.section__live').owlCarousel({
                mouseDrag: true,
                touchDrag: true,
                dots: true,
                loop: true,
                autoplay: false,
                smartSpeed: 600,
                margin: 20,
                autoHeight: true,
                responsive: {
                    0: {
                        items: 1,
                    },
                    576: {
                        items: 2,
                    },
                    768: {
                        items: 2,
                        margin: 30,
                    },
                    992: {
                        items: 3,
                        margin: 30,
                    },
                    1200: {
                        items: 3,
                        margin: 30,
                        dots: false,
                        //mouseDrag: false,
                        slideBy: 3,
                    },
                }
            });

            /*==============================
            Partners
            ==============================*/
            $('.partners').owlCarousel({
                mouseDrag: false,
                touchDrag: false,
                dots: false,
                loop: true,
                autoplay: true,
                autoplayTimeout: 5000,
                autoplayHoverPause: true,
                smartSpeed: 600,
                margin: 20,
                responsive: {
                    0: {
                        items: 2,
                    },
                    576: {
                        items: 2,
                        margin: 30,
                    },
                    768: {
                        items: 3,
                        margin: 30,
                    },
                    992: {
                        items: 4,
                        margin: 30,
                    },
                    1200: {
                        items: 6,
                        margin: 30,
                    },
                }
            });
        }, 300);
    }
}


// mouseDrag: true,
// 		touchDrag: true,
// 		dots: true,
// 		loop: true,
// 		autoplay: false,
// 		smartSpeed: 600,
// 		margin: 20,
// 		autoHeight: true,
