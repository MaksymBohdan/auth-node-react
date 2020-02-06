import { useState } from 'react';

const UploadDialogContainer = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [callback, setCallback] = useState(null);

  const hide = () => setIsOpen(false);

  const show = cb => () => {
    setIsOpen(true);
    setCallback(() => cb);
  };

  const confirm = (...args) => {
    callback(args);
    hide();
  };

  return children({
    isOpen,
    show,
    hide,
    confirm,
  });
};

export default UploadDialogContainer;
