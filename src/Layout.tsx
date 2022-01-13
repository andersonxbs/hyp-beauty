import { Link } from "react-router-dom";
import { useFlagsmith } from 'flagsmith-react';
import { useEffect, useState } from "react";

export default function Layout({ children }) {
  const { isLoading, getValue, hasFeature, identify, subscribe } = useFlagsmith()
  const [showAgenda, setShowAgenda] = useState(false)

  useEffect(() => {
    if(!isLoading) {
      identify('someone@somewhere.com')
    }

  }, [isLoading])

  const handleChange = () => {
    setShowAgenda(hasFeature('show_agenda'))
  }

  subscribe(handleChange)

  return (
    <div className="container">
      <div className="columns">
        <aside className="menu column is-3">
          <p className="menu-label">General</p>
          <ul className="menu-list">
            <li>
              <Link to="/">Dashboard de Beauty</Link>
            </li>
            { showAgenda &&
              <li>
                <Link to="/agenda">Agenda</Link>
              </li>
            }
          </ul>
        </aside>

        <main className="column is-9  ">
          <nav className="breadcrumb" aria-label="breadcrumbs">
            <ul>
              <li>
                <Link to="/">Hyperlocal</Link>
              </li>
              <li>
                <Link to="/">Beauty</Link>
              </li>
              <li className="is-active">
                <a href="#" aria-current="page">
                  ...
                </a>
              </li>
            </ul>
          </nav>
          {children}
        </main>
      </div>
    </div>
  );
}
