import { Header } from './'
import { connect } from 'react-redux'
import { AppState, AppDispatch } from 'rdx/index'
import { logoutRequest } from 'rdx/ducks/user'
import { bindActionCreators } from 'redux'
import * as userSelectors from 'rdx/ducks/user/selectors'

const mapStateToProps = (state: AppState) => ({
  user: userSelectors.getUser(state),
})

const mapDispatchToProps = (dispatch: AppDispatch) =>
  bindActionCreators(
    {
      logoutRequest,
    },
    dispatch,
  )

export const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header)

export type StateProps = ReturnType<typeof mapStateToProps>
export type DispatchProps = ReturnType<typeof mapDispatchToProps>
export type ReduxToProps = StateProps & DispatchProps
