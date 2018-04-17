import { of } from 'rxjs/observable/of';
import { HeroService } from './../hero.service';
import { HeroesComponent } from './heroes.component';

describe('HerosComponent Isolated', () => {
    let component: HeroesComponent;
    let heroes;
    let mockHeroService: jasmine.SpyObj<HeroService>;

    beforeEach(() => {
        heroes = [
            { id:1, name: 'SpiderDude', strength: 8 },
            { id:2, name: 'Wonderful Woman', strength: 24 },
            { id:3, name: 'Regular Man', strength: 2 },
        ]

        mockHeroService = jasmine.createSpyObj(['deleteHero']);
        component = new HeroesComponent(mockHeroService);
    })

    describe('deleteHero()', () => {

        it('should delete selected hero from heros list', () => {
            mockHeroService.deleteHero.and.returnValue(of(true))
            component.heroes = heroes;
            const hero = heroes[0]

            component.delete(hero);

            expect(component.heroes.indexOf(hero)).toEqual(-1);
            expect(mockHeroService.deleteHero).toHaveBeenCalled();
        })
    })
})
