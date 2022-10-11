import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from '../App';

describe('Testa se é possível pesquisar ferramentas da pluga', () => {

    test('Verifica se existe uma barra de pesquisa', () => {
        render(<App />);

        const searchbar = screen.getByRole('textbox', {  name: /search/i});

        expect(searchbar).toBeInTheDocument();
    });

    test('Verifica se é possível buscar ferramentas pela barra de pesquisa', async () => {
        render(<App />);

        const searchbar = screen.getByRole('textbox', {  name: /search/i});
        userEvent.type(searchbar, 'om');

        const result1 = await screen.findByText(/OMIE/i);
        const result2 = await screen.findByText(/WOOCOMMERCE/i);
        const result3 = await screen.findByText(/INTERCOM/i);

        expect(searchbar.value).toBe('om');
        expect(result1).toBeInTheDocument();
        expect(result2).toBeInTheDocument();
        expect(result3).toBeInTheDocument();
    });

    test('Verifica se ao pesquisar ferramenta inexistente retorna a mensagem correta', async () => {
        render(<App />);

        const searchbar = screen.getByRole('textbox', {  name: /search/i});
        userEvent.type(searchbar, 'twitter');

        const toolNotFound = await screen.findByText(/Voltar para página inicial/i);

        expect(searchbar.value).toBe('twitter');
        expect(toolNotFound).toBeInTheDocument();
    });
});