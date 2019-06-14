import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from 'comments/components/App';
import CommentBox from 'comments/components/CommentBox';
import CommentList from 'comments/components/CommentList';

let wrapped; 

// only appears before everything in this file
beforeEach(() => {
    wrapped = shallow(<App />);
});

it('shows a comment box', () => {
    expect(wrapped.find(CommentBox).length).toEqual(1);
})

it('shows a comment list', () => {
    expect(wrapped.find(CommentList).length).toEqual(1);
})