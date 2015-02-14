define({
  "name": "API Documentation",
  "version": "1.0.0",
  "description": "Write a short description",
  "title": "Feedify API Documentation",
  "url": "https://api.feedlabs.com/v1/",
  "header": {
    "title": "Principles",
    "content": "<h1 id=\"principles\">Principles</h1>\n<h3 id=\"http-methods\">HTTP Methods</h3>\n<ul>\n<li><strong>GET</strong> - Retrieve the JSON representation of a resource.</li>\n<li><strong>POST</strong> - Create a new resource using the provided JSON representation.</li>\n<li><strong>PUT</strong> - Replace a resource with the provided JSON representation.</li>\n<li><strong>DELETE</strong> - Remove a resource.</li>\n</ul>\n<h3 id=\"json\">JSON</h3>\n<p>All entities are represented in JSON. The following rules and conventions apply:</p>\n<ul>\n<li>When sending JSON to the server via <strong>POST</strong> or <strong>PUT</strong>, make sure to specify the correct content type request header: <strong>Content-Type: application/json</strong></li>\n<li>Invalid fields will be rejected rather than ignored. If, for example, you attempt to create a new entity and misspell one of the fields, or if you attempt to update an existing entity and include a field that cannot be modified, the server will respond with a 400 status code and an error message stating which field was invalid.</li>\n<li>The fields in the JSON documents returned by the server are in no particular order, and it may change. Do not depend on the order of the fields.</li>\n</ul>\n<h3 id=\"pretty-printing\">Pretty Printing</h3>\n<p>By default, extraneous whitespace is stripped from the JSON returned by the server. To ask for pretty-printed JSON, simply append the <strong>pretty=true</strong> query parameter to any request. Note that all the examples in this document show pretty-printed JavaScript for clarity, although the example URLs do not contain this additional query parameter.</p>\n<h3 id=\"response-codes\">Response Codes</h3>\n<p>Responses utilize the standard HTTP response codes, including:</p>\n<table>\n<thead>\n<tr>\n<th>Code</th>\n<th>Meaning</th>\n<th>Notes</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>200</td>\n<td>OK</td>\n<td>The request was successful. This is typically the response to a successful <strong>GET</strong> request.</td>\n</tr>\n<tr>\n<td>201</td>\n<td>Created</td>\n<td>A new resource was created. This is typically the response to a succcessful <strong>POST</strong> request.</td>\n</tr>\n<tr>\n<td>400</td>\n<td>Bad Request</td>\n<td>Something was wrong with the client request.</td>\n</tr>\n<tr>\n<td>401</td>\n<td>Unauthorized</td>\n<td>Authentication is required but was not present in the request. Typically this means that the digest authentication information was omitted from the request.</td>\n</tr>\n<tr>\n<td>403</td>\n<td>Forbidden</td>\n<td>Access to the specified resource is not permitted. Usually means that the user associated with the given API Key is not allowed to access the requested resource.</td>\n</tr>\n<tr>\n<td>404</td>\n<td>Not Found</td>\n<td>The requested resource does not exist.</td>\n</tr>\n<tr>\n<td>405</td>\n<td>Method Not Allowed</td>\n<td>The HTTP method is not supported for the specified resource. Keep in mind that each resource may only support a subset of HTTP methods. For example, you are not allowed to DELETE the root resource.</td>\n</tr>\n<tr>\n<td>409</td>\n<td>Conflict</td>\n<td>This is typically the response to a request to create or modify a property of an entity that is unique when an existing entity already exists with the same value for that property. For example, attempting to create a group with the same name as an existing group is not allowed.</td>\n</tr>\n<tr>\n<td>429</td>\n<td>Too Many Requests</td>\n<td>You have exceeded the rate limit. See the section on Rate Limiting for more information.</td>\n</tr>\n<tr>\n<td>5xx</td>\n<td>Various server errors</td>\n<td>Something unexpected went wrong. Try again later and consider notifying MMS Support.</td>\n</tr>\n</tbody>\n</table>\n"
  },
  "footer": {
    "title": "Appendix",
    "content": "<h1 id=\"appendix\">Appendix</h1>\n<h3 id=\"admin-roles\">Admin Roles</h3>\n<table>\n<thead>\n<tr>\n<th>id</th>\n<th>name</th>\n<th>desciption</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>super-admin</td>\n<td>This is the super admin and can do everything he wants</td>\n</tr>\n<tr>\n<td>2</td>\n<td>admin</td>\n<td>Like the admin, but is not able to add or delete other admins</td>\n</tr>\n</tbody>\n</table>\n<h3 id=\"rate-limiting\">Rate Limiting</h3>\n"
  },
  "order": [
    "Application",
    "GetApplicationList",
    "GetApplication",
    "PostApplication",
    "PutApplication",
    "DeleteApplication",
    "Feed",
    "GetFeedList",
    "GetFeed",
    "PostFeed",
    "PutFeed",
    "DeleteFeed",
    "Entry",
    "GetEntry",
    "PostEntry",
    "PutEntry",
    "DeleteEntry",
    "GetEntryListFeed",
    "GetEntryFeed",
    "PostEntryFeed",
    "PostEntryFeedAdd",
    "RemoveEntry",
    "Admin",
    "GetAdminList",
    "GetAdmin",
    "PostAdmin",
    "PutAdmin",
    "DeleteAdmin",
    "Token",
    "GetTokenList",
    "GetToken",
    "PostToken",
    "DeleteToken"
  ],
  "sampleUrl": false,
  "apidoc": "0.2.0",
  "generator": {
    "name": "apidoc",
    "time": "2015-02-10T22:19:02.380Z",
    "url": "http://apidocjs.com",
    "version": "0.11.0"
  }
});