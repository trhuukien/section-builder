import { memo } from 'react';

function ModalProduct({isShowPopup, setIsShowPopup}) {
  console.log('re-render-modalProduct');
  return (
    <>
      <div id="popup" className={isShowPopup ? "active" : "hidden"}>
        <div className='sticky'>
          <button id="closePopup" onClick={() => setIsShowPopup(!isShowPopup)}>Close</button>
        </div>

        <div>
        <p>This is a popup!</p>
          <p>This is a popup!</p>
          <p>This is a popup!</p>
          <p>This is a popup!</p>
          <p>This is a popup!</p>
          <p>This is a popup!</p>
          <p>This is a popup!</p>
          <p>This is a popup!</p>
          <p>This is a popup!</p>
          <p>This is a popup!</p>
          <p>This is a popup!</p>
          <p>This is a popup!</p>
          <p>This is a popup!</p>
          <p>This is a popup!</p>
          <p>This is a popup!</p>
          <p>This is a popup!</p>
          <p>This is a popup!</p>
          <p>This is a popup!</p>
          <p>This is a popup!</p>
          <p>This is a popup!</p>
          <p>This is a popup!</p>
          <p>This is a popup!</p>
          <p>This is a popup!</p>
          <p>This is a popup!</p>
          <p>This is a popup!</p>
          <p>This is a popup!</p>
          <p>This is a popup!</p>
          <p>This is a popup!</p>
          <p>This is a popup!</p>
          <p>This is a popup!</p>
          <p>This is a popup!</p>
          <p>This is a popup!</p>
          <p>This is a popup!</p>
          <p>This is a popup!</p>
          <p>This is a popup!</p>
          <p>This is a popup!</p>
          <p>This is a popup!</p>
          <p>This is a popup!</p>
          <p>This is a popup!</p>
          <p>This is a popup!</p>
          <p>This is a popup!</p>
          <p>This is a popup!</p>
          <p>This is a popup!</p>
          <p>This is a popup!</p>
          <p>This is a popup!</p>
          <p>This is a popup!</p>
          <p>This is a popup!</p>
          <p>This is a popup!</p>
          <p>This is a popup!</p>
          <p>This is a popup!</p>
          <p>This is a popup!</p>
          <p>This is a popup!</p>
          <p>This is a popup!</p>
          <p>This is a popup!</p>
          <p>This is a popup!</p>
          <p>This is a popup!</p>
          <p>This is a popup!</p>
          <p>This is a popup!</p>
          <p>This is a popup!</p>
          <p>This is a popup!</p>
          <p>This is a popup!</p>
          <p>This is a popup!</p>
          <p>This is a popup!</p>
          <p>This is a popup!</p>
          
        </div>
      </div>
      <div id="overlay" className={isShowPopup ? "active" : "hidden"}></div>
    </>
  );
}

export default memo(ModalProduct);