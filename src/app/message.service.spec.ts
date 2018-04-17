import { MessageService } from './message.service';
describe('MessageService', () => {

    it('should have an empty message array to start', () => {
        let service = new MessageService();

        expect(service.messages.length).toEqual(0);
    })

    describe('add()', ()=> {

        it('should add a message to the array', () => {
            let service = new MessageService();

            service.add('yo dood, this a test');

            expect(service.messages.length).toEqual(1);
        })
    })

    describe('clear()', () => {

        it('should make the messages array empty', () => {
            let service = new MessageService();

            service.clear();

            expect(service.messages.length).toEqual(0);
        })
    })
})
