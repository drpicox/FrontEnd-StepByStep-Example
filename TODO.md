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

[ ] View: First Redux Component/Container
    [X] Create a reducer for view
    [X] Create action `setView(root, id)`
    [X] Create selectors `getViewRoot(state)` and `getViewId(state)`
    [X] Create Container CurrentViewRoot
        https://redux.js.org/docs/basics/UsageWithReact.html
    [X] Create Component Link
    [ ] Create Container ViewLink

[ ] Posts: First EPIC
    [ ] Create a reducer for posts
    [ ] Create actions `fetchPosts()`, `fetchPostsFulfill(payload)`
    [ ] Create selector `getPostsList(state)`
    [ ] Create Epic `fetchPostsEpic`
    [ ] Create Container ListAllPosts
    [ ] On App start fetch posts if none present
    [ ] Create Container CurrentPost

[ ] Posts Comments: Fetching under demmand EPIC
    [ ] Create a reducer for comments
    [ ] Create actions `fetchComments()`, `fetchCommentsFulfill(payload)`
    [ ] Create selectors `getCommentsList(state)` 
        and `getPostCommentsList(state, { postId })`
    [ ] Create Epic `onViewPostFetchCommentsEpic`
    [ ] Create Epic `fetchCommentsEpic`
    [ ] Create Container CurrentPostComments

[ ] Searching: Create a complex selector
    [ ] Create reducer for search
    [ ] Create action `setSearch(search)`
    [ ] Create selectors `getSearch(state)` and `getSearchPostsList(state)`
    [ ] Update Container ListAllPosts to ListSearchPosts
    [ ] Create Container CurrentSearch

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

        
    