import React from 'react'
import { connect } from 'react-redux'
import { AppState, AppDispatch } from 'rdx/index'
import { loginRequest } from 'rdx/ducks/user'
import { bindActionCreators } from 'redux'
import { Redirect } from 'react-router-dom'
import * as userSelectors from 'rdx/ducks/user/selectors'

interface AuthorizedOnlyProps {
  isAuthorized: boolean
  isAuthorizationLoading: boolean
  redirectPath?: string
  children: []
}

const AuthorizedOnly: React.FC<AuthorizedOnlyProps> = (props) => {
  const {
    isAuthorized,
    isAuthorizationLoading,
    redirectPath = '/login',
  } = props

  if (isAuthorizationLoading) {
    return <div>Checking if user is authorized</div>
  }

  if (!isAuthorized) {
    return <Redirect to={redirectPath} />
  }

  return props.children
}

const mapStateToProps = (state: AppState) => ({
  isAuthorized: userSelectors.isAuthorized(state),
  isAuthorizationLoading: userSelectors.isAuthorizationLoading(state),
})

const mapDispatchToProps = (dispatch: AppDispatch) =>
  bindActionCreators(
    {
      loginRequest,
    },
    dispatch,
  )

export const AuthorizedOnlyContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AuthorizedOnly)

export type StateProps = ReturnType<typeof mapStateToProps>
export type DispatchProps = ReturnType<typeof mapDispatchToProps>
export type ReduxToProps = StateProps & DispatchProps
