import { InMemoryCache, IntrospectionFragmentMatcher } from 'apollo-cache-inmemory'

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData: {
    __schema: {
      types: []
    }
  }
})
export default ({ req, app }) => {
  return {
    httpEndpoint: process.env.BACKEND_URL || 'https://lily-brdn.herokuapp.com/graphql',
    // httpEndpoint: process.env.BACKEND_URL || 'http://localhost:1337/graphql',
    cache: new InMemoryCache({ fragmentMatcher })
  }
}
