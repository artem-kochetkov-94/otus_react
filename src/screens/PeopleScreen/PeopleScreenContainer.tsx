import { PeopleScreen } from './'
import { connect } from 'react-redux'
import { AppState, AppDispatch } from 'rdx/index'
import { fetchPeople } from 'rdx/ducks/people'
import * as peopleSelectors from 'rdx/ducks/people/selectors'
import { bindActionCreators } from 'redux'

const mapStateToProps = (state: AppState) => ({
  isFetching: peopleSelectors.isFetching(state),
  isFetched: peopleSelectors.isFetched(state),
  people: peopleSelectors.getPeople(state),
})

const mapDispatchToProps = (dispatch: AppDispatch) =>
  bindActionCreators(
    {
      fetchPeople,
    },
    dispatch,
  )

export const PeopleScreenContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PeopleScreen)

export type StateProps = ReturnType<typeof mapStateToProps>
export type DispatchProps = ReturnType<typeof mapDispatchToProps>
export type ReduxToProps = StateProps & DispatchProps
