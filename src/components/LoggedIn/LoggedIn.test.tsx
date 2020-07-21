import React, { Children } from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import { MemoryRouter, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from 'theme';
import LoggedIn from './LoggedIn';

describe('LoggedIn', function() {
    let container: HTMLDivElement | null = null;
    const OLD_ENV = process.env

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);

        // clear module registry to clear cache of required ones
        // this is to isolate the local state so when running other tests, we do not conflict
        // https://stackoverflow.com/questions/48033841/test-process-env-with-jest
        jest.resetModules();
        process.env = {...OLD_ENV}; // make a copy
    });

    afterEach(() =>{
        // cleanup
        if (container) {
            unmountComponentAtNode(container);
            container.remove();
        }
        container = null;
        jest.restoreAllMocks();
        process.env = OLD_ENV; // restore old env
    });
    
    it('should render', () => {
        const children = <h1>hi</h1>;
        ReactTestUtils.act(
            () => {
                render(
                    <ThemeProvider theme={theme}>
                        <MemoryRouter initialEntries={['/']}>
                            <Route path='/'>
                                <LoggedIn 
                                    children={children}
                                />
                            </Route>
                        </MemoryRouter>
                    </ThemeProvider>,
                    container
                );
            }
        );
    });

    // https://stackoverflow.com/questions/49096093/how-do-i-test-a-jest-console-log
    it('should log if redirecting NODE_ENV != development', 
        () => {
            const consoleSpy = jest.spyOn(console, 'log');
            const children = <h1>hi</h1>;
            ReactTestUtils.act(
                () => {
                    render(
                        <ThemeProvider theme={theme}>
                            <MemoryRouter initialEntries={['/']}>
                                <Route path='/'>
                                    <LoggedIn
                                        children={children}
                                    />
                                </Route>
                            </MemoryRouter>
                        </ThemeProvider>,
                        container
                    );
                }
            );

            expect(consoleSpy).toHaveBeenCalledWith('redirecting');
        }
    );
});