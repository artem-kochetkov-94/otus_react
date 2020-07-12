import { Login, loginActions } from './'
import { connect } from 'react-redux'
import { AppState, AppDispatch } from 'rdx/index'
import { bindActionCreators } from 'redux'

const mapStateToProps = (state: AppState) => ({})

const mapDispatchToProps = (dispatch: AppDispatch) =>
  bindActionCreators(
    {
      loginRequest: loginActions.loginRequest,
    },
    dispatch,
  )

export const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login)

export type StateProps = ReturnType<typeof mapStateToProps>
export type DispatchProps = ReturnType<typeof mapDispatchToProps>
export type ReduxToProps = StateProps & DispatchProps
