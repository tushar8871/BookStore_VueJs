import { shallowMount } from '@vue/test-utils';
import App from '../../src/App.vue'
import { createWrapper } from './TestHelpers';

// let wrapper;
let wrapperNew = createWrapper(App);

beforeEach(() => {
    wrapperNew = shallowMount(App, {
        propsData: {},
        mocks: {},
        stubs: {},
        methods: {},
    });
});

afterEach(() => {
    wrapperNew.destroy();
});

describe('App', () => {
    test('is a Vue instance', () => {
        expect(wrapperNew.isVueInstance).toBeTruthy();
    });
});
