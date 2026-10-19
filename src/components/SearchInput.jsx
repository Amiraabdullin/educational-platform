import React, { useRef, forwardRef, useImperativeHandle } from 'react';

const SearchInput = forwardRef((props, ref) => {
  const inputRef = useRef(null);

  useImperativeHandle(ref, () => ({
    focus: () => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }
  }));

  return (
    <input 
      type="text" 
      className="search-input" 
      ref={inputRef}
      {...props}
    />
  );
});

export default SearchInput;