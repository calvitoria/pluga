import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from '../App';

describe('Testa componente header', () => {

    test('Verifica link para o repositório da aplicação', () => {
        render(<App />);

        const linkToGithub = screen.getByRole('link', { name: />_code/i });
        userEvent.click(linkToGithub);

        expect(linkToGithub).toBeInTheDocument();
        expect(linkToGithub).toHaveAttribute('href', 'https://github.com/calvitoria/pluga-challenge');
    });

    test('Verifica link/icon para o site oficial da pluga', () => {
        render(<App />);

        const linkIconPluga = screen.getByTestId('logoPluga');
        userEvent.click(linkIconPluga);

        expect(linkIconPluga).toBeInTheDocument();
        expect(linkIconPluga).toHaveAttribute('href', 'https://pluga.co/');


    });
});

