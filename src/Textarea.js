import React, { useState, useEffect, useRef } from 'react';
import { MDBInputGroup } from 'mdb-react-ui-kit';
import sendImage from './send.png';

const Textarea = () => {
  // State variable to store the input value
  const [inputValue, setInputValue] = useState('');

  // Reference to the textarea element
  const textareaRef = useRef(null);

  // Adjust the textarea height whenever the input value changes
  useEffect(() => {
    adjustTextareaHeight();
  }, [inputValue]);

  // Event handler for input change
  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  // Adjust the height of the textarea based on its content
  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  // Check if the input is empty
  const isInputEmpty = inputValue.trim().length === 0;

  // Inline style for the send image
  const imageStyle = isInputEmpty ? { filter: 'grayscale(100%)' } : {};

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '5px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: '999',
        width: '60%',
        boxShadow: 'blue 0px 0px 0px 2px , rgb(255, 255, 255) 10px -10px 0px -3px, rgb(31, 193, 27) 10px -10px, rgb(255, 255, 255) 20px -20px 0px -3px, rgb(255, 217, 19) 20px -20px, rgb(255, 255, 255) 30px -30px 0px -3px, rgb(255, 156, 85) 30px -30px, rgb(255, 255, 255) 40px -40px 0px -3px, rgb(255, 85, 85) 40px -40px',
      }}
    >
      <MDBInputGroup tag="form" className='w-auto' style={{ margin: '0 auto' }}>
        <div style={{ position: 'relative', width: '100%' }}>
          {/* Send image */}
          <img
            src={sendImage}
            alt="Paper Plane"
            style={{
              position: 'absolute',
              top: '50%',
              right: '10px',
              transform: 'translateY(-50%)',
              width: '25px',
              height: '25px',
              ...imageStyle, // Apply the dynamic inline styles
            }}
          />

          {/* Textarea input */}
          <textarea
            className='form-control text-left'
            placeholder="Type query"
            aria-label="Search"
            value={inputValue}
            onInput={handleInput}
            ref={textareaRef}
            style={{
              resize: 'none',
              width: '100%',
              paddingTop: '6px',
              paddingBottom: '6px',
              paddingRight: '30px',
            }}
          />
        </div>
      </MDBInputGroup>
    </div>
  );
};

export default Textarea;
