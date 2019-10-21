import React from 'react';

export default function Detail({
  match: {
    params: { deckId },
  },
}) {
  return <div>Deck {`${deckId}`}</div>;
}
