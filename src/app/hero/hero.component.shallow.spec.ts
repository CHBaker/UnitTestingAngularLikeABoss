import { HeroComponent } from './hero.component';
import { TestBed, ComponentFixture } from "@angular/core/testing";
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('Hero Component (shallow)', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [HeroComponent],
            schemas: [NO_ERRORS_SCHEMA]
        })
        this.fixture = <ComponentFixture<HeroComponent>>TestBed.createComponent(HeroComponent)
    })

    it('should have the correct hero', () => {
        this.fixture.componentInstance.hero = { id:1, name: 'regular guy', strength: 500 };

        expect(this.fixture.componentInstance.hero.name).toEqual('regular guy');
    })

    it('should have the hero name inside an anchor tag', () => {
        this.fixture.componentInstance.hero = { id: 1, name: 'regular guy', strength: 500 };
        this.fixture.detectChanges();

        expect(this.fixture.debugElement.query(By.css('a')).nativeElement.textContent).toContain('regular guy');
    })

    it('should have the correct id in the template', () => {
        this.fixture.componentInstance.hero = { id: 1, name: 'regular guy', strength: 500 };
        this.fixture.detectChanges();

        expect(this.fixture.debugElement.query(By.css('span')).nativeElement.textContent).toEqual(this.fixture.componentInstance.hero.id.toString());
    })
})
