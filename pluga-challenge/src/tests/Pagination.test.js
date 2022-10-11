import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from '../App';

describe('Testa Paginação na page Search', () => {

    test('Verifica se existem 6 páginas de ferramentas', async () => {
        render(<App />);

        const pageNums = await screen.findAllByTestId('paginationItem');

        expect(pageNums.length).toBe(6);
    });

    test('Verifica se a paginação funciona com o filtro de busca "a"', async () => {
        render(<App />);

        const searchbar = screen.getByRole('textbox', {  name: /search/i});
        userEvent.type(searchbar, 'a');

        const firstSearch = await screen.findAllByTestId('paginationItem');

        expect(firstSearch.length).toBe(3);
    });

    test('Verifica se a paginação funciona com o filtro de busca "aa"', async () => {
        render(<App />);

        const searchbar = screen.getByRole('textbox', {  name: /search/i});
        userEvent.type(searchbar, 'aa');

        const secondSearch = await screen.findAllByTestId('paginationItem');

        expect(secondSearch.length).toBe(1);
    });
});