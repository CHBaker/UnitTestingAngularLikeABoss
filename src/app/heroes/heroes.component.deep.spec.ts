import { HeroComponent } from './../hero/hero.component';
import { of } from 'rxjs/observable/of';
import { HeroService } from './../hero.service';
import { HeroesComponent } from './heroes.component';
import { TestBed, ComponentFixture } from "@angular/core/testing";
import { NO_ERRORS_SCHEMA, Component, Input } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('Heroes Component (deep)', () => {
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
            declarations: [HeroesComponent, HeroComponent],
            providers: [
                { provide: HeroService, useValue: mockHeroService}
            ],
            schemas: [NO_ERRORS_SCHEMA]
        })
        this.fixture = <ComponentFixture<HeroesComponent>>TestBed.createComponent(HeroesComponent)
    })

    describe('intial rendering', () => {

        it('should render each hero as a HeroComponent', () => {
            mockHeroService.getHeroes.and.returnValue(of(heroes));
            this.fixture.detectChanges();

            const heroComponents = this.fixture.debugElement
                .queryAll(By.directive(HeroComponent))

            expect(heroComponents.length).toEqual(3);

            for (let i = 0; i < heroComponents.length; i++) {
                expect(heroComponents[i].componentInstance.hero).toBe(heroes[i])
            }
        })

    })

    it(`should call heroService.deleteHero when the HeroComponent
        when the heroComponent's delete button is clicked`, () => {
        mockHeroService.getHeroes.and.returnValue(of(heroes));
        this.fixture.detectChanges();

        spyOn(this.fixture.componentInstance, 'delete');
        let heroComponents = this.fixture.debugElement
                             .queryAll(By.directive(HeroComponent));

        // alternate, trigger click event
        // heroComponents[0].query(By.css('button'))
        //     .triggerEventHandler('click', { stopPropagation: () => {} });

        // manually emit the event
        (<HeroComponent>heroComponents[0].componentInstance).delete.emit(undefined);

        expect(this.fixture.componentInstance.delete).toHaveBeenCalledWith(heroes[0]);
    })

})
