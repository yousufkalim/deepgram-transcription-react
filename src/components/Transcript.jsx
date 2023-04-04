// Init
import React from 'react';
import { Store } from '../StoreContext';

// Component
export default function Transcript() {
  const store = Store();

  return (
    <div>
      {store.transcript && (
        <div className="transcript-container">
          <h2>Summary</h2>
          <br />
          <p>{store.summary}</p>
          <br />
          <br />
          <br />
          <h2>Transcript</h2>
          <br />
          {store.transcript?.split(/\n\n/).map((para) => {
            return (
              <>
                <p>{para}</p>
                <br />
              </>
            );
          })}
        </div>
      )}
    </div>
  );
}
