'use client';

import { useEffect } from 'react';

const BootstrapClient = () => {
  useEffect(() => {
    // Load Bootstrap JavaScript on the client side
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return null;
};

export default BootstrapClient; 