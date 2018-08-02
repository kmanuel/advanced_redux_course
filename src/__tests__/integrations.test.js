import React from 'react';
import {mount} from 'enzyme';
import Root from '../Root';
import App from '../components/App';
import moxios from 'moxios';

beforeEach(() => {
    moxios.install();
    moxios.stubRequest('https://jsonplaceholder.typicode.com/comments', {
        status: 200,
        response: [
            {
                postId: 1,
                id: 1,
                name: "id labore ex et quam laborum",
                email: "Eliseo@gardner.biz",
                body: "laudantium enim quasi est quidem magnam voluptate ipsam eos tempora quo necessitatibus dolor quam autem quasi reiciendis et nam sapiente accusantium"
            },
            {
                postId: 1,
                id: 2,
                name: "quo vero reiciendis velit similique earum",
                email: "Jayne_Kuhic@sydney.com",
                body: "est natus enim nihil est dolore omnis voluptatem numquam et omnis occaecati quod ullam at voluptatem error expedita pariatur nihil sint nostrum voluptatem reiciendis et"
            }
        ]
    });
});

afterEach(() => {
    moxios.uninstall();
});

it('can fetch a list of comments and display them', (done) => {
    const wrapped = mount(
        <Root>
            <App />
        </Root>
    );

    wrapped.find('.fetch-comments').simulate('click');

    moxios.wait(() => {
        wrapped.update();
        expect(wrapped.find('li').length).toEqual(2);
        done();
    });

});