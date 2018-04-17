import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { HeroService } from './hero.service';
import { Data } from '@angular/router';
import { inject } from '@angular/core/testing';
// describe('heroService', () => {
//     let matchingHero;
//     let httpClient: HttpClient;

//     beforeEach(() => {
//         mockMessageService = { add: () => {} };

//         TestBed.configureTestingModule({

//         })

//     })

//     describe('getHero', () => {

//         it('should call get with correct URL',
//             inject([HeroService], (service: HeroService) => {
//                 const testData: Data = { id: 4, name: 'Rubberman' };

//                 service.getHero(4).subscribe(hero => matchingHero = hero);

//                 const req = httpTestingController.expectOne('api/heroes/4')
//                 req.flush(testData);
//                 httpTestingController.verify();

//             }));
//     })
// })
