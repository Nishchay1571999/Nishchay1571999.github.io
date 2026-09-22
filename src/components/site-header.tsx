'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRef, useState } from 'react';
import { profile } from '@/content/site';

const links = [
  { href: '/work', label: 'Work' },
  { href: '/open-source', label: 'Open source' },
  { href: '/about', label: 'About' },
  { href: profile.resume, label: 'Résumé' },
  { href: '/contact', label: 'Contact' },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLElement>(null);

  function closeMenu(restoreFocus = false) {
    setOpen(false);
    if (restoreFocus) buttonRef.current?.focus();
  }

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link
          href="/"
          className="wordmark"
          aria-label="Nishchay Bhatt, home"
          onClick={() => closeMenu()}
        >
          <span className="mark" aria-hidden="true">
            NB<span>/</span>
          </span>
          <span>Nishchay Bhatt</span>
        </Link>
        <button
          className="menu-button"
          ref={buttonRef}
          aria-expanded={open}
          aria-controls="site-navigation"
          onClick={() => {
            if (open) closeMenu(true);
            else {
              setOpen(true);
              requestAnimationFrame(() =>
                navRef.current?.querySelector('a')?.focus(),
              );
            }
          }}
        >
          {' '}
          {open ? 'Close −' : 'Menu +'}{' '}
        </button>
        <nav
          id="site-navigation"
          ref={navRef}
          aria-label="Main navigation"
          className={`site-nav ${open ? 'is-open' : ''}`}
          onKeyDown={(event) => {
            if (event.key === 'Escape') closeMenu(true);
          }}
        >
          {links.map(({ href, label }) => {
            const active =
              pathname === href ||
              (href === '/work' && pathname.startsWith('/work/'));
            return href.endsWith('.pdf') ? (
              <a key={href} href={href} download onClick={() => closeMenu()}>
                {label}
                <span aria-hidden="true"> ↗</span>
              </a>
            ) : (
              <Link
                key={href}
                href={href}
                aria-current={active ? 'page' : undefined}
                className={href === '/contact' ? 'nav-contact' : undefined}
                onClick={() => closeMenu()}
              >
                {label}
                {href === '/contact' && <span aria-hidden="true"> ↗</span>}
              </Link>
            );
          })}
        </nav>
        <noscript>
          <style>
            {
              '.menu-button{display:none}.site-nav{display:flex!important;flex-wrap:wrap}'
            }
          </style>
        </noscript>
      </div>
    </header>
  );
}
