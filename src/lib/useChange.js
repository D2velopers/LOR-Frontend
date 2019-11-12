import { useState } from 'react';

export default function useChange(init = [], limit = 0) {
  const [value, setValue] = useState(init);
  function onChange(e) {
    const deduplication = value.filter(el => el !== e);
    if (value.length !== deduplication.length) {
      setValue(deduplication);
    } else {
      const next = deduplication.concat(e);
      limit > 0 ? next.length <= limit && setValue(next) : setValue(next);
    }
  }
  return { value, onChange };
}
