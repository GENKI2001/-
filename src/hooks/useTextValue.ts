import { useCallback, useState } from 'react';

interface UseTextValueProps {
  value: string;
  handleChange: (value: string) => void;
  handleReset: () => void;
}

const useTextValue = (init?: string): UseTextValueProps => {
  const [value, setValue] = useState<string>(init ?? '');

  const handleChange = useCallback((newValue: string) => {
    setValue(newValue);
  }, []);

  const handleReset = useCallback(() => {
    setValue('');
  }, []);

  return { value, handleChange, handleReset };
};

export default useTextValue;
