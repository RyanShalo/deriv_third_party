import React from 'react';

const circles = [
    { label: 'Trend', color: '#90EE90' }, // Light green
    { label: 'Volatility', color: '#90EE90' },
    { label: 'Volume', color: '#90EE90' },
];

export default function TraderAnalysisCircles() {
    return (
        <div style={{ display: 'flex', gap: 16, marginBottom: 16 }}>
            {circles.map(circle => (
                <div
                    key={circle.label}
                    style={{
                        width: 64,
                        height: 64,
                        borderRadius: '50%',
                        background: circle.color,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#333',
                        fontWeight: 'bold',
                        flexDirection: 'column',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                    }}
                >
                    <span>{circle.label}</span>
                </div>
            ))}
        </div>
    );
}
