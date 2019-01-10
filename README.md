![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================

## 13-rest-server

### Author: Tanner Seramur

### Links and Resources
* [repo](http://xyz.com)
* [travis](http://xyz.com)
* [back-end](http://xyz.com) (when applicable)
* [front-end](http://xyz.com) (when applicable)

### Modules
* `handleGetPosts.js`
* `handleGetPost.js`
* `handlePostPost.js`
* `handlePutPost.js`
* `handleDeletePost.js`
##### Exported Values and Methods
* `handleGetPosts.();`
* `handleGetPost.();`
* `handlePostPost.();`
* `handlePutPost.();`
* `handleDeletePost.();`



#### API Server Functionality
* Completes the server's CRUD functionality
  * Implements DELETE
  * Implements PUT
* Implements data integrity checking
  * Creates a constructor that all input for new and updated records (POST and PUT) can be run through.
  * This constructor returns a properly formatted and validated object (type checked, and required fields)
  * Only with a good object, is a write operation allowed to occur
* Adds support for a second model (with it's own routes and database)

### Setup
#### `.env` requirements
* `PORT` - Port Number 3000

#### Running the app
* `npm i` to install dependencies
* `npm start`
* endpoint: passing tests