import React from "react";
import {render, cleanup, getByTestId} from '@testing-library/react';
import '@testing-library/jest-dom';
import Navigation from "..";

const categories = [
    {name: 'test', decription: 'test'}
]

const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();

afterEach(cleanup);

describe('Nav component', () => {
    it('render', () => {
        render(<Navigation
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
            />);
    })

    it('matches snapshot', () => {
        const { asFragment } = render(<Navigation
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
        />);
        expect(asFragment()).toMatchSnapshot();
    })
})

// test that rendering displays proper nav component name
describe('contains category name on nav bar', () => {
    it('render and test content', () => {
        const { getByTestId } = render(<Navigation
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
        />);
        expect(getByTestId('test')).toHaveTextContent('test');
    })
})