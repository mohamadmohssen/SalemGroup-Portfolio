/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import Button from 'elements/Button';
import iconImg from 'assets/images/salem-group1.jfif';

export default function BrandIcon() {
  return (
     <Button
      className=""
      type="link"
      href="/"
    >
      
     <img className="iconImg" src={iconImg} alt="Build Website"/>
    {/* <p className="text-theme-blue text-4xl">
        Racx
        <span className="text-theme-purple">studio</span>
  </p> */}
    </Button>
  );
}
