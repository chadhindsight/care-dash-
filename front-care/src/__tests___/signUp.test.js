import React from 'react';
import { render } from '@testing-library/react';
import SignUp from '../components/user/SignUp';

describe('Sign up flow', ()=>{
    test('Should input email',()=>{
        const component = render(<SignUp />)
        const inputNode = component.getByPlaceholderText('username')
        expect(inputNode.value).toBe('')
    })

    test('Should input password', () => {
        const component = render(<SignUp />)
        const inputNode = component.getByPlaceholderText('password')
        expect(inputNode.value).toBe('')
    })
})