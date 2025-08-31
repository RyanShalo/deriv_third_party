import React, { useState } from 'react';

export default function CopyTradingPanel() {
    const [token, setToken] = useState('');
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div style={{ border: '1px solid #90EE90', borderRadius: 8, padding: 16, marginTop: 16, width: 280 }}>
            <h3>Copy Trading</h3>
            <input
                type='text'
                placeholder='Paste Deriv Token here'
                value={token}
                onChange={e => setToken(e.target.value)}
                style={{ width: '100%', padding: 8, marginBottom: 8 }}
            />
            <button
                onClick={handleCopy}
                disabled={!token}
                style={{
                    background: '#90EE90',
                    color: '#333',
                    border: 'none',
                    padding: '8px 16px',
                    borderRadius: 4,
                    cursor: token ? 'pointer' : 'not-allowed',
                }}
            >
                {copied ? 'Copying...' : 'Copy Trades'}
            </button>
        </div>
    );
}
