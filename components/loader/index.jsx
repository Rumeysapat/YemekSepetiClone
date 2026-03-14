import { LoaderCircle } from 'lucide-react';
import React from 'react';

const index = (designs) => {
  return (
    <div className={`flex items-center justify-center my-20 ${designs}`}>
      <div className="box inline-flex items-center gap-3 px-6 py-3">
        <LoaderCircle className="animate-spin size-8 text-red-500" />
      </div>
    </div>
  );
};

export default index;
