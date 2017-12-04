TODO
====

[X] Create the TODO
[X] Cleanup
    [X] Say Hello World
    [X] Remove unnecessary code
    [X] Change github API for myAPI
    [X] Change proxy to https://jsonplaceholder.typicode.com

[X] Thinking in React
    https://reactjs.org/docs/thinking-in-react.html
    [X] Create a mock for.
        - Welcome: it should be welcome, list of Posts, and input search
        - Post: it should show title, body, comments
    [X] Create Component ListPosts
    [X] Create Component Welcome
    [X] Create Component Search
    [X] Create Component Post
    [X] Create Component Comments
    [X] Create Component ViewRoot

[X] View: First Redux Component/Container
    [X] Create a reducer for view
    [X] Create action `setView(root, id)`
    [X] Create selectors `getViewRoot(state)` and `getViewId(state)`
    [X] Create Container CurrentViewRoot
        https://redux.js.org/docs/basics/UsageWithReact.html
    [X] Create Component Link
    [X] Create Container ViewLink
    [X] Simplificate mapDispatchToProps in ViewLink

[X] Posts: First EPIC
    [X] Create a reducer for posts
    [X] Create actions `fetchPosts()`, `fetchPostsFulfilled(payload)`
    [X] Create selector `getPostsList(state)`
    [X] On App start fetch posts if none present
    [X] Create Epic `fetchPostsEpic`
    [X] Create Container ListAllPosts
    [X] Create Container CurrentPost

[X] Posts Comments: Fetching under demmand EPIC
    [X] Create a reducer for comments
    [X] Create action `fetchComments(postId)`
    [X] Create action `fetchCommentsFulfilled(payload)`
    [X] Implement reduce for `fetchCommentsFulfilled(payload)`
    [X] Create selector `getCommentsList(state)` 
    [X] Create selector `getPostCommentsList(state, { postId })`
    [X] Create Epic `onViewPostFetchCommentsEpic`
    [X] Create Epic `fetchCommentsEpic`
    [X] Create Container CurrentPostComments

[X] Searching: Create a complex selector
    [X] Create reducer for search
    [X] Create action `setSearch(search)`
    [X] Create selectors `getSearch(state)`
    [X] Create selectors `getSearchPostsList(state)`
    [X] Update Container ListAllPosts to ListSearchPosts
    [X] Create Container CurrentSearch

[ ] Bootstrap Styling
    https://react-bootstrap.github.io/components.html
    [ ] Make welcome a Jumbotron
        https://react-bootstrap.github.io/components.html#jumbotron
    [ ] Stylize Search with InputAddOn
        https://react-bootstrap.github.io/components.html#forms-input-addons
    [ ] Stylize List of Posts
    [ ] Stylize Post
    [ ] Stylize Comments with Media Objects
        https://react-bootstrap.github.io/components.html#media-objects
    [ ] Create Gravatar Component
        How to Gravatar: https://en.gravatar.com/site/implement/images/

        
    