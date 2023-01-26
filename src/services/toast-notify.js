import toast from 'react-hot-toast';

export const toastNotifyError = function (text) {
  return toast(text, {
    style: {
      fontSize: '16px',
      border: '1px solid #be1b16',
      padding: '10px',
      color: '#be1b16',
    },
    position: 'top-right',
  });
};

export const toastNotifyInfo = function (text) {
  return toast(text, {
    style: {
      fontSize: '16px',
      border: '1px solid #020071',
      padding: '10px',
      color: '#020071',
    },
    position: 'top-right',
  });
};
