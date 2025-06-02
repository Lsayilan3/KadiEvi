import { useEffect, useState } from 'react';
import metaDataMessages from '../metaData/metaData.json';

const localeMap = {
  '1': 'tr',
  '2': 'en',
  '3': 'it',
  '4': 'es',
  '5': 'ru',
  '6': 'ja',
  '7': 'de',
  '8': 'fr',
  '9': 'pt',
};

export default function useMetaData(page) {
  const [meta, setMeta] = useState({
    description: '',
    title: ''
  });

  useEffect(() => {
    // LocalStorage'den dili al
    const savedLocale = localStorage.getItem('Dil');
    // Varsayılan dil ayarla
    const currentLocale = localeMap[savedLocale] || 'tr';

    // Meta bilgilerini ayarla
    const pageMeta = metaDataMessages[page];
    if (pageMeta) {
      setMeta(pageMeta[currentLocale] || { description: '', title: '' });
    } else {
      setMeta({ description: '', title: '' });
    }

    // LocalStorage'deki dil değişikliklerini kontrol et
    const handleStorageChange = () => {
      const updatedLocale = localStorage.getItem('Dil');
      const updatedLocaleValue = localeMap[updatedLocale] || 'tr';
      setMeta((metaDataMessages[page] && metaDataMessages[page][updatedLocaleValue]) || { description: '', title: '' });
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [page]);

  return meta;
}
