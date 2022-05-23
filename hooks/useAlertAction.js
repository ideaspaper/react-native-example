import { useState } from 'react';

const useAlertAction = () => {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  return [show, setShow, message, setMessage, status, setStatus];
};

export default useAlertAction;
