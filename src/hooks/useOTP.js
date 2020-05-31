import { useEffect, useState } from 'react';

const useOTP = ref => {
  const [code, setCode] = useState();
  const isSupport = 'OTPCredential' in window;

  useEffect(() => {
    if (!ref.current) return;
    ref.current.autocomplete = 'one-time-code';
  }, [ref.current]);

  useEffect(() => {
    if (!isSupport) return;
    const controller = new AbortController();
    navigator.credentials
      .get({
        otp: {
          transport: ['sms']
        },
        signal: controller.signal
      })
      .then(({ code }) => setCode(code));
    return () => {
      if (isSupport) {
        controller.abort();
      }
    };
  }, [isSupport, setCode]);

  return code;
};

export default useOTP;
