import { LoginScreen } from './'
import { connect } from 'react-redux'
import { AppState, AppDispatch } from 'rdx/index'
import { loginRequest } from 'rdx/ducks/user'
import { bindActionCreators } from 'redux'

const mapStateToProps = (state: AppState) => ({})

const mapDispatchToProps = (dispatch: AppDispatch) =>
  bindActionCreators(
    {
      loginRequest,
    },
    dispatch,
  )

export const LoginScreenContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginScreen)

export type StateProps = ReturnType<typeof mapStateToProps>
export type DispatchProps = ReturnType<typeof mapDispatchToProps>
export type ReduxToProps = StateProps & DispatchProps
