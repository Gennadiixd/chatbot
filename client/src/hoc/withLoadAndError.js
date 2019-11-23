import React from 'react';
import LoadAndError from './loadAndError'

export default function WithLoadAndError(Wrapped) {
  return (props) => {
    return (
      <LoadAndError>
        <Wrapped {...props} />
      </LoadAndError>
    )
  }
}
