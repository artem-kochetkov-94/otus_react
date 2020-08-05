import { connect } from 'react-redux'
import { AppState, AppDispatch } from 'rdx/index'
import { bindActionCreators } from 'redux'
import { People, peopleActions, peopleSelectors } from './'

const mapStateToProps = (state: AppState) => ({
  isFetching: peopleSelectors.isFetching(state),
  isFetched: peopleSelectors.isFetched(state),
  people: peopleSelectors.getPeople(state),
})

const mapDispatchToProps = (dispatch: AppDispatch) =>
  bindActionCreators(
    {
      fetchPeopleRequest: peopleActions.fetchPeopleRequest,
    },
    dispatch,
  )

export const PeopleContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(People)

export type StateProps = ReturnType<typeof mapStateToProps>
export type DispatchProps = ReturnType<typeof mapDispatchToProps>
export type ReduxToProps = StateProps & DispatchProps
