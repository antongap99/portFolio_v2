import { FC, ReactNode } from 'react';
import cn from 'classnames';
import style from './layout.module.css';
interface LayoutProps {
    children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <div className={cn(style.layout)}>
            {children}
        </div>
    );
};

export default Layout;