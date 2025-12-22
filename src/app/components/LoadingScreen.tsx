import React from 'react';

export function LoadingScreen() {
  return (
    <div id="ira-loading-root-9x7a">
      <div className="ira-loader-box-9x7a">
        <div className="ira-spinner-9x7a"></div>
        <p className="ira-loading-text-9x7a">Loading portfolio…</p>
      </div>

      <style>{`
        #ira-loading-root-9x7a {
          position: fixed;
          inset: 0;
          background: #0F172A;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 99999;
        }

        .ira-loader-box-9x7a {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }

        .ira-spinner-9x7a {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          border: 4px solid rgba(14,165,164,0.2);
          border-top-color: #0EA5A4;
          animation: ira-spin-9x7a 1s linear infinite;
        }

        .ira-loading-text-9x7a {
          color: #94A3B8;
          font-size: 0.95rem;
          letter-spacing: 0.04em;
        }

        @keyframes ira-spin-9x7a {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
