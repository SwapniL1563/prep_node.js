// Authentication - process of verifying the identity of client or user before accessing the resources

// Types:
//  Stateful auth - auth where server store session data(state) for each logged-in user., in memeory or db

// Flow:
// user logs in -> server creates a session -> seesion id is sent back to client ( using cookies ) -> on each further req, client send the session ID -> server looks it up and validate with db -> if valid then allow user to access resource

// Adv: Easy to implement, server can invalidate a session anytime
// Dis: server must keep track of session -> less scalable
//  more memory intensive 

// Real Life Analogy:
// just like u go to parking mall, u give parking ticket(info) to parking staff(server) he wrote down ur car no,name in his book(create session) and gave u back the ticket(session id)
// when u came back to get ur car he takes the ticket(session id in cookies) from u and check it in his book(storage/db) if validate u get the car again 

// Stateless auth - auth where serve doesn't store user session. Instead req info(like user id,role,expiry) is stored in token (JWT) sent to client w/o need to store in server and look up in db

// Flow:
// user logs in -> server generates a JWT token -> token is then send back to client -> client stors it in (localstorage,cookies)
// On each further req -> client send this token -> server verifies the token using signature -> if valid get access to resources

// Adv: scales easily (no server-side session storage)
// no extra db call hence no memory usage
// works well with REST API'

// Dis: Bigger payload
// harder to invalidate before expiry

// Real Life Analogy:
// just like u go to parking mall, u give parking ticket(info) to parking staff(server) he put a stamp on ur ticket and gives u back(jwt)
// when u came back to get ur car he takes the ticket(token) from u and checks if has stamp from u(verify) if validate u get the car again 

// what are cookies?
// cookies are small piece of data stored in browser, sent with every req to server
// often used to stored session id or jwts
// set by server using Set-cookies Header
// eg. Set-Cookie: sessionId=abc12;HttpOnly
// just like a stamp on ur hand at amusement park


// diff betwwen authentiction and authorization?
// Authentication: The process of verifying the identity of a user or system.
// eg.Logging in with username/password
// check credentials / tokens

// Authorization: The process of verifying whether an authenticated user has permission to access a resource or perform an action.
// eg. Accessing admin panel
// check roles / permissions