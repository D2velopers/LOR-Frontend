import React from 'react';

export default function Detail({
  match: {
    params: { cardId },
  },
}) {
  return <div>Card {`${cardId}`}</div>;
}
