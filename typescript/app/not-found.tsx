import React from 'react';

export default function NotFound() {
  return (
    <main
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        fontFamily: 'sans-serif',
        background: '#0f172a',
        color: '#f8fafc',
      }}
    >
      <div>
        <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Flowhub</h1>
        <p style={{ fontSize: '1.125rem' }}>Nothing to see here.</p>
      </div>
    </main>
  );
}
