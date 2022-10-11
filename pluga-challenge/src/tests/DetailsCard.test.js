import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Testa componente DetailsCard', () => {

    test('Verifica se ao clicar em uma ferramenta, a modal de detalhes, referente à mesma, é exibida', async () => {
        render(<App />);

        const hotmartTool = await screen.findByRole('heading', { name: /hotmart/i })
        userEvent.click(hotmartTool);

        const lastVisitedText = await screen.findByText(/ÚLTIMAS FERRAMENTAS VISUALIZADAS/i);

        expect(lastVisitedText).toBeInTheDocument();
    });

    test('Verifica se o modal da ferramenta contém o link de acesso correto', async () => {
        render(<App />);

        const hotmartTool = await screen.findByRole('heading', { name: /hotmart/i })
        userEvent.click(hotmartTool);

        const hotmartLink = await screen.findByRole('link', { name: /acessar/i });

        expect(hotmartLink).toHaveAttribute('href', 'https://pluga.co/ferramentas/hotmart/');
    });

    test('Verifica se ao clicar em uma toolCard, a chave "visitedTools" no localStorage é atualizada', async () => {
        render(<App />);
        const hotmartObj = '[{\"app_id\":\"hotmart\",\"name\":\"Hotmart\",\"color\":\"#F04E23\",\"icon\":\"https://assets.pluga.co/apps/icons/hotmart/hotmart-icon.svg\",\"link\":\"https://pluga.co/ferramentas/hotmart/\"}]'

        const hotmartTool = await screen.findByRole('heading', { name: /hotmart/i })
        userEvent.click(hotmartTool);

        const returnFromLocalSotrage = localStorage.getItem('visitedTools');
        expect(returnFromLocalSotrage).toBe(hotmartObj);
    });
    
    test('Verifica se o comportamento da sessão de últimas ferramentas visualizadas é o esperado', async () => {
        render(<App />);

        const hotmartTool = await screen.findByRole('heading', { name: /hotmart/i })
        userEvent.click(hotmartTool);

        const calendlyTool = await screen.findByRole('heading', { name: /calendly/i })
        userEvent.click(calendlyTool);

        const symplaTool = await screen.findByRole('heading', { name: /sympla/i })
        userEvent.click(symplaTool);

        const twilioTool = await screen.findByRole('heading', { name: /twilio/i })
        userEvent.click(twilioTool);

        const returnFromLocalSotrage = JSON.parse(localStorage.getItem('visitedTools'));

        const twilioLink = await screen.findByRole('link', { name: /acessar/i });

        expect(twilioLink).toHaveAttribute('href', 'https://pluga.co/ferramentas/twilio/');
        expect(returnFromLocalSotrage.length).toBe(3);
    });
});