import { of } from 'rxjs/observable/of';
import { HeroService } from './../hero.service';
import { HeroesComponent } from './heroes.component';
import { TestBed, ComponentFixture } from "@angular/core/testing";
import { NO_ERRORS_SCHEMA, Component, Input } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
    selector: 'app-hero',
    template: '<div></div>'
})
class MockHeroComponent {
    @Input() hero;
}

describe('Heroes Component (shallow)', () => {
    let heroes;
    let mockHeroService: jasmine.SpyObj<HeroService>;

    beforeEach(() => {
        heroes = [
            { id:1, name: 'SpiderDude', strength: 8 },
            { id:2, name: 'Wonderful Woman', strength: 24 },
            { id:3, name: 'Regular Man', strength: 2 },
        ]
        mockHeroService = jasmine.createSpyObj(['getHeroes']);

        TestBed.configureTestingModule({
            declarations: [HeroesComponent, MockHeroComponent],
            providers: [
                { provide: HeroService, useValue: mockHeroService}
            ],
            schemas: [NO_ERRORS_SCHEMA]
        })
        this.fixture = <ComponentFixture<HeroesComponent>>TestBed.createComponent(HeroesComponent)
    })

    describe('ngOnInit()', () => {

        it('should set heroes correctly from service', () => {
            mockHeroService.getHeroes.and.returnValue(of(heroes));
            this.fixture.detectChanges()

            expect(this.fixture.componentInstance.heroes.length).toEqual(3);
        })

    })

})
