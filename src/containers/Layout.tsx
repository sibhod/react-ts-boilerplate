import { CSSProperties, useEffect } from 'react';
import { Outlet } from 'react-router';
import { Link, useMatch, useNavigate } from 'react-router-dom';

const mainStyle: CSSProperties = {
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
};

const headerStyle: CSSProperties = {
  height: 100,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'aquamarine',
  color: 'darkcyan',
};

const navStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 10,
};

const navItemStyle: CSSProperties = {
  fontSize: 20,
};

const sectionStyle: CSSProperties = {
  flex: 1,
  margin: 'auto',
  padding: 30,
  minHeight: 300,
};

export function Layout() {
  const navigate = useNavigate();
  const isRoot = useMatch('/');

  useEffect(() => {
    isRoot && navigate('page-1', { replace: true });
  }, [isRoot, navigate]);

  return (
    <main style={mainStyle}>
      <header style={headerStyle}>
        <nav style={navStyle}>
          <Link to='page-1' style={navItemStyle}>
            Page 1
          </Link>
          <Link to='page-2' style={navItemStyle}>
            Page 2
          </Link>
          <Link to='page-3' style={navItemStyle}>
            Page 3
          </Link>
          <Link to='page-4' style={navItemStyle}>
            Page 4
          </Link>
        </nav>
      </header>
      <section style={sectionStyle}>
        <Outlet />
      </section>
    </main>
  );
}
