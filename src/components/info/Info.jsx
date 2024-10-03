import React from 'react';
import cl from './info.module.css';

const Info = () => {
  return (
      <div>
        <p className={cl.info}>
          telegram - @harastw <br/>
          email - uitrinken1@gmail.com <br/>
          github - https://github.com/harastw
        </p>
      </div>
  );
};

export default Info;
