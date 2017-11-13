TODO
====

[X] Create the TODO
[ ] Cleanup
    [X] Say Hello World
    [ ] Remove unnecessary code
    [ ] Change github API for myAPI
    [ ] Change proxy to https://jsonplaceholder.typicode.com

[ ] Thinking in React
    https://reactjs.org/docs/thinking-in-react.html
    [ ] Create a mock for.
        - Welcome: it should be welcome, list of Posts, and input search
        - Post: it should show title, body, user author, link to user author
    [ ] Create Component ListPosts
    [ ] Create Component Welcome
    [ ] Create Component Search
    [ ] Create Component Post
    [ ] Create Component Comments
    [ ] Create Component ViewRoot

[ ] View: First Redux Component/Container
    [ ] Create a reducer for view
    [ ] Create action `setView(root, id)`
    [ ] Create selectors `getViewRoot(state)` and `getViewId(state)`
    [ ] Create Container CurrentViewRoot
        https://redux.js.org/docs/basics/UsageWithReact.html
    [ ] Create Component Link
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

        
    