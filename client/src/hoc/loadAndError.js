import React, { Fragment, useEffect } from 'react';
import Spinner from '../components/spinner';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { initChatAC } from '../redux/chat/actions';

const LoadAndErrorHandler = ({ initChat, loading, error, children }) => {
  useEffect(() => {
    initChat();
  }, [])
  //TODO: add error boundry
  if (loading) {
    return <Spinner />
  } else if (error) {
    return <Spinner />
  } else {
    return (
      <Fragment>
        {children}
      </Fragment>
    )
  }
}
//TODO: try to create universal initializer
const mapDispatchToProps = (dispatch) => {
  return {
    initChat: bindActionCreators(initChatAC, dispatch)
  }
}

const mapStateToProps = (state) => {
  return {
    error: state.chat.error,
    loading: state.chat.isoading
  }
}

export default (connect(mapStateToProps, mapDispatchToProps)(LoadAndErrorHandler))