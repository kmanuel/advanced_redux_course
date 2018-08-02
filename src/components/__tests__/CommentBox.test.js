import React from 'react';
import {mount} from 'enzyme';
import CommentBox from '../CommentBox';
import Root from '../../Root';

let wrapped;

beforeEach(() => {
    wrapped = mount(<Root><CommentBox /></Root>);
});

afterEach(() => {
    wrapped.unmount();
});

it('has a text area', () => {
    expect(wrapped.find('textarea').length).toEqual(1);
});

it('has 2 buttons', () => {
    expect(wrapped.find('button').length).toEqual(2);
});

describe('the textarea', () => {

    beforeEach(() => {
        const textarea = wrapped.find('textarea');
        textarea.simulate('change', {
            target: {
                value: 'new comment'
            }
        });
        wrapped.update();
    });

    it('has a textarea that users can type in', () => {
        expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
    });

    it('clears the textarea on form submit', () => {
        wrapped.find('form').simulate('submit');
        wrapped.update();

        expect(wrapped.find('textarea').prop('value')).toEqual('');
    });

});