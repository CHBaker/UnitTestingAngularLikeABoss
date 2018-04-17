import { HeroesComponent } from './heroes.component';
import { TestBed, ComponentFixture } from "@angular/core/testing";
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('Heroes Component (shallow)', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [HeroesComponent],
            schemas: [NO_ERRORS_SCHEMA]
        })
        this.fixture = <ComponentFixture<HeroesComponent>>TestBed.createComponent(HeroesComponent)
    })

    it('should set heroes correctly from service', () => {

    })

})
