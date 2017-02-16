import PolestarModule from './polestar'
import PolestarController from './polestar.controller';
import PolestarComponent from './polestar.component';
import PolestarTemplate from './polestar.html';
import PolestarService from './polestar.service';

describe('Polestar', () => {
    let $rootScope, makeController;

    beforeEach(window.module(PolestarModule));
    // beforeEach(window.module(PolestarService));
    beforeEach(inject((_$rootScope_) => {
        $rootScope = _$rootScope_;
        makeController = () => {
            return new PolestarController(PolestarService);
        };
    }));

    describe('Module', () => {
        // top-level specs: i.e., routes, injection, naming
    });

    describe('Component', () => {
        // component/directive specs
        let component = PolestarComponent;

        it('includes the intended template', () => {
            expect(component.template).to.equal(PolestarTemplate);
        });

        it('invokes the right controller', () => {
            expect(component.controller).to.equal(PolestarController);
        });
    });
});
