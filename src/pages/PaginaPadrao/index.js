import { Outlet } from 'react-router-dom';
import Menu from '../../componentes/Menu/Menu';

export default function PaginaPadrao() {
    return (
        <main>
            <Menu/>
            <Outlet />
        </main>
    );
}