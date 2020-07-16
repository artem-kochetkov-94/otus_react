import React from 'react'
import { TodoListWithData } from 'src/components/TodoList/TodoListWithData'
import { LogoutContainer } from 'src/modules/login'
import { AuthorizedOnlyContainer } from 'src/modules/login'
import { DynamicModuleLoader } from 'redux-dynamic-modules'
import { getLoginModule } from 'src/modules/login'

export const AppScreen: React.FC<{}> = () => {
  return (
    <DynamicModuleLoader modules={[getLoginModule()]}>
      <AuthorizedOnlyContainer>
        <LogoutContainer />
        <TodoListWithData />
      </AuthorizedOnlyContainer>
    </DynamicModuleLoader>
  )
}
