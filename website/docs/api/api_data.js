define({ "api": [
  {
    "type": "delete",
    "url": "admin/:adminId",
    "title": "Delete",
    "version": "1.0.0",
    "name": "DeleteAdmin",
    "group": "Admin",
    "description": "<p>Delete a specific admin user.</p> ",
    "filename": "service/db/v1/controller/admin.go",
    "groupTitle": "Admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "adminId",
            "description": "<p>The admin user id</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "admin/:adminId",
    "title": "Get",
    "version": "1.0.0",
    "name": "GetAdmin",
    "group": "Admin",
    "description": "<p>This will return a specific token.</p> ",
    "filename": "service/db/v1/controller/admin.go",
    "groupTitle": "Admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "adminId",
            "description": "<p>The admin user id</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The id</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mail",
            "description": "<p>The E-Mail Address of the admin user</p> "
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "roleList",
            "description": "<p>A array of all roles</p> "
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "roleList.id",
            "description": "<p>Role id (see full list at Appendix)</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "roleList.name",
            "description": "<p>Role name</p> "
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "createStamp",
            "description": "<p>Unix time stamp of create time</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n    {\n      \"id\": \"KAJFDA7GFTRE87FDS78F7\",\n      \"mail\": \"son.goku@dragonball.com\",\n      \"roleList\": [\n        {\n          \"id\": \"2\",\n          \"name\": \"admin\"\n        },\n        ...\n       \"createStamp\": \"1415637736\",\n    }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "admin",
    "title": "Get List",
    "version": "1.0.0",
    "name": "GetAdminList",
    "group": "Admin",
    "description": "<p>This will return a list of all admin users.</p> ",
    "filename": "service/db/v1/controller/admin.go",
    "groupTitle": "Admin",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "adminList",
            "description": "<p>Array of all admin users</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "adminList.id",
            "description": "<p>The id</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "adminList.mail",
            "description": "<p>The E-Mail Address of the admin user</p> "
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "adminList.roleList",
            "description": "<p>A array of all roles</p> "
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "adminList.roleList.id",
            "description": "<p>Role id (see full list at Appendix)</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "adminList.roleList.name",
            "description": "<p>Role name</p> "
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "adminList.createStamp",
            "description": "<p>Unix time stamp of create time</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n    \"adminList\": [\n      {\n        \"id\": \"KAJFDA7GFTRE87FDS78F7\",\n        \"mail\": \"son.goku@dragonball.com\",\n        \"roleList\": [\n          {\n            \"id\": \"2\",\n            \"name\": \"admin\"\n          },\n          ...\n        \"createStamp\": \"1415637736\",\n      },\n      ...\n    ]\n  }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "admin",
    "title": "Create",
    "version": "1.0.0",
    "name": "PostAdmin",
    "group": "Admin",
    "description": "<p>Create a admin user.</p> ",
    "filename": "service/db/v1/controller/admin.go",
    "groupTitle": "Admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mail",
            "description": "<p>The E-Mail Address of the admin user</p> "
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "roleList",
            "description": "<p>A array of all roles</p> "
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "roleList.id",
            "description": "<p>Role id (see full list at Appendix)</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "roleList.name",
            "description": "<p>Role name</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The id</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mail",
            "description": "<p>The E-Mail Address of the admin user</p> "
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "roleList",
            "description": "<p>A array of all roles</p> "
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "roleList.id",
            "description": "<p>Role id (see full list at Appendix)</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "roleList.name",
            "description": "<p>Role name</p> "
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "createStamp",
            "description": "<p>Unix time stamp of create time</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n    {\n      \"id\": \"KAJFDA7GFTRE87FDS78F7\",\n      \"mail\": \"son.goku@dragonball.com\",\n      \"roleList\": [\n        {\n          \"id\": \"2\",\n          \"name\": \"admin\"\n        },\n        ...\n      \"createStamp\": \"1415637736\",\n    }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "admin/:adminId",
    "title": "Update",
    "version": "1.0.0",
    "name": "PutAdmin",
    "group": "Admin",
    "description": "<p>Update a specific admin user.</p> ",
    "filename": "service/db/v1/controller/admin.go",
    "groupTitle": "Admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "adminId",
            "description": "<p>The admin user id</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mail",
            "description": "<p>The E-Mail Address of the admin user</p> "
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "roleList",
            "description": "<p>A array of all roles</p> "
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "roleList.id",
            "description": "<p>Role id (see full list at Appendix)</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "roleList.name",
            "description": "<p>Role name</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The id</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mail",
            "description": "<p>The E-Mail Address of the admin user</p> "
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "roleList",
            "description": "<p>A array of all roles</p> "
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "roleList.id",
            "description": "<p>Role id (see full list at Appendix)</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "roleList.name",
            "description": "<p>Role name</p> "
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "createStamp",
            "description": "<p>Unix time stamp of create time</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n    {\n      \"id\": \"KAJFDA7GFTRE87FDS78F7\",\n      \"mail\": \"son.goku@dragonball.com\",\n      \"roleList\": [\n        {\n          \"id\": \"2\",\n          \"name\": \"admin\"\n        },\n        ...\n      \"createStamp\": \"1415637736\",\n    }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "application/:applicationId",
    "title": "Delete",
    "version": "1.0.0",
    "name": "DeleteApplication",
    "group": "Application",
    "description": "<p>Delete a specific application.</p> ",
    "filename": "service/db/v1/controller/application.go",
    "groupTitle": "Application",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "applicationId",
            "description": "<p>The application id</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "application/:applicationId",
    "title": "Get",
    "version": "1.0.0",
    "name": "GetApplication",
    "group": "Application",
    "description": "<p>This will return a specific application.</p> ",
    "filename": "service/db/v1/controller/application.go",
    "groupTitle": "Application",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "applicationId",
            "description": "<p>The application id</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The application Id</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the application</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>The description of the application</p> "
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "createStamp",
            "description": "<p>Unix time stamp of create time</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n    {\n      \"id\": \"KAJFDA786FDS87FDS78F6\",\n      \"name\": \"DragonBall\",\n      \"description\": \"The DragonBall application. This will contain feeds for all DragonBall characters.\",\n      \"createStamp\": \"1415637736\",\n    }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "application",
    "title": "Get List",
    "version": "1.0.0",
    "name": "GetApplicationList",
    "group": "Application",
    "description": "<p>This will return a list of all applications you have created.</p> ",
    "filename": "service/db/v1/controller/application.go",
    "groupTitle": "Application",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "applicationList",
            "description": "<p>Array of all applications</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "applicationList.id",
            "description": "<p>The application Id</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "applicationList.name",
            "description": "<p>The name of the application</p> "
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "applicationList.createStamp",
            "description": "<p>Unix time stamp of create time</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n    {\n      \"applicationList\": [\n        {\n          \"id\": \"systemId\",\n          \"name\": \"YourName\",\n          \"createStamp\": \"1234567890\",\n        },\n        ...\n      ]\n    }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "application",
    "title": "Create",
    "version": "1.0.0",
    "name": "PostApplication",
    "group": "Application",
    "description": "<p>Create a application.</p> ",
    "filename": "service/db/v1/controller/application.go",
    "groupTitle": "Application",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the application</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>The description of the application</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example post body (json):",
        "content": "    {\n      \"name\": \"DragonBall\",\n      \"description\": \"The DragonBall application. This will contain feeds for all DragonBall characters.\"\n    }",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The application Id</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the application</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>The description of the application</p> "
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "createStamp",
            "description": "<p>Unix time stamp of create time</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n    {\n      \"id\": \"KAJFDA786FDS87FDS78F6\",\n      \"name\": \"DragonBall\",\n      \"description\": \"The DragonBall application. This will contain feeds for all DragonBall characters.\",\n      \"createStamp\": \"1415637736\",\n    }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "application/:applicationId",
    "title": "Update",
    "version": "1.0.0",
    "name": "PutApplication",
    "group": "Application",
    "description": "<p>Update a specific application.</p> ",
    "filename": "service/db/v1/controller/application.go",
    "groupTitle": "Application",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "applicationId",
            "description": "<p>The application id</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the application</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>The description of the application</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example post body (json):",
        "content": "    {\n      \"name\": \"DragonBall\",\n      \"description\": \"The DragonBall application. This will contain feeds for all DragonBall characters.\"\n    }",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The application Id</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the application</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>The description of the application</p> "
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "createStamp",
            "description": "<p>Unix time stamp of create time</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n    {\n      \"id\": \"KAJFDA786FDS87FDS78F6\",\n      \"name\": \"DragonBall\",\n      \"description\": \"The DragonBall application. This will contain feeds for all DragonBall characters.\",\n      \"createStamp\": \"1415637736\",\n    }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "application/:applicationId/entry/:entryId",
    "title": "Delete (Global)",
    "version": "1.0.0",
    "name": "DeleteEntry",
    "group": "Entry",
    "description": "<p>Delete a specific entry. (will also remove the entry from all feeds)</p> ",
    "filename": "service/db/v1/controller/entry.go",
    "groupTitle": "Entry",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "applicationId",
            "description": "<p>The application id</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "entryId",
            "description": "<p>The entry id</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "application/:applicationId/entry/:entryId",
    "title": "Get (Global)",
    "version": "1.0.0",
    "name": "GetEntry",
    "group": "Entry",
    "description": "<p>This will return a specific entry.</p> ",
    "filename": "service/db/v1/controller/entry.go",
    "groupTitle": "Entry",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "applicationId",
            "description": "<p>The application id</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "entryId",
            "description": "<p>The entry id</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The feed Id</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "applicationId",
            "description": "<p>The application id</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>The data of the entry</p> "
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "tagList",
            "description": "<p>List of set tags</p> "
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "createStamp",
            "description": "<p>Unix time stamp of create time</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n    {\n      \"id\": \"KAJFDA7GFTRE87FDS78F7\",\n      \"applicationId\": \"KAJDFE7GFTRE87FDS78F7\",\n      \"data\": \"Hello, I'm Son Gocu and this is my first post.\",\n      \"tagList\": [\n        \"First\",\n        \"Awesome\"\n      ],\n      \"createStamp\": \"1415637736\",\n    }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "application/:applicationId/feed/:feedId/entry/:entryId",
    "title": "Get (Feed)",
    "version": "1.0.0",
    "name": "GetEntryFeed",
    "group": "Entry",
    "description": "<p>This will return a specific entry.</p> ",
    "filename": "service/db/v1/controller/entry.go",
    "groupTitle": "Entry",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "applicationId",
            "description": "<p>The application id</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "feedId",
            "description": "<p>The feed id</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "entryId",
            "description": "<p>The entry id</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The feed Id</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "applicationId",
            "description": "<p>The application id</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "feedId",
            "description": "<p>The feed id</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>The data of the entry</p> "
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "tagList",
            "description": "<p>List of set tags</p> "
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "createStamp",
            "description": "<p>Unix time stamp of create time</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n    {\n      \"id\": \"KAJFDA7GFTRE87FDS78F7\",\n      \"applicationId\": \"KAJDFE7GFTRE87FDS78F7\",\n      \"feedId\": \"KAJDFE7GFTRE87FDS78F7\",\n      \"data\": \"Hello, I'm Son Gocu and this is my first post.\",\n      \"tagList\": [\n        \"First\",\n        \"Awesome\"\n      ],\n      \"createStamp\": \"1415637736\",\n    }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "application/:applicationId/feed/:feedId/entry",
    "title": "Get List (Feed)",
    "version": "1.0.0",
    "name": "GetEntryListFeed",
    "group": "Entry",
    "description": "<p>This will return a list of all entries per feed you have created.</p> ",
    "filename": "service/db/v1/controller/entry.go",
    "groupTitle": "Entry",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "applicationId",
            "description": "<p>The application id</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "feedId",
            "description": "<p>The application id</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "feed",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "feed.id",
            "description": "<p>The application Id</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "feed.name",
            "description": "<p>The name of the application</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "feed.channelId",
            "description": "<p>The channel Id of the feed</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "feed.applicationId",
            "description": "<p>The id of the application the feed belongs to</p> "
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "feed.createStamp",
            "description": "<p>Unix time stamp of create time</p> "
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "entryList",
            "description": "<p>Array of all entries</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entryList.id",
            "description": "<p>The entry Id</p> "
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "entryList.createStamp",
            "description": "<p>Unix time stamp of create time</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n    {\n      \"feed\": {\n          \"id\": \"KAJFDA7GFTRE87FDS78F7\",\n          \"name\": \"Son Goku\",\n          \"channelId\": \"ASJDH86ASD678ASDASD768\",\n          \"applicationId\": \"KAJFDA786FDS87FDS78F6\",\n          \"createStamp\": \"1415637736\",\n      }\n      \"entryList\": [\n        {\n          \"id\": \"KAJFDA7GFTRE87FDS78F7\",\n          \"createStamp\": \"1415637736\",\n        },\n        ...\n      ]\n    }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "application/:applicationId/entry",
    "title": "Create (Global)",
    "version": "1.0.0",
    "name": "PostEntry",
    "group": "Entry",
    "description": "<p>Create a entry on the global feed. This could be used to store a element in the cloud system and re-use it later.</p> ",
    "filename": "service/db/v1/controller/entry.go",
    "groupTitle": "Entry",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "applicationId",
            "description": "<p>The application id</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>The data of the entry</p> "
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "tagList",
            "description": "<p>Tags of the entry</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The feed Id</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "applicationId",
            "description": "<p>The application id</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>The data of the entry</p> "
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "tagList",
            "description": "<p>List of set tags</p> "
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "createStamp",
            "description": "<p>Unix time stamp of create time</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n    {\n      \"id\": \"KAJFDA7GFTRE87FDS78F7\",\n      \"applicationId\": \"KAJDFE7GFTRE87FDS78F7\",\n      \"data\": \"Hello, I'm Son Gocu and this is my first post.\",\n      \"tagList\": [\n        \"First\",\n        \"Awesome\"\n      ],\n      \"createStamp\": \"1415637736\",\n    }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "application/:applicationId/feed/:feedId/entry",
    "title": "Create (Feed)",
    "version": "1.0.0",
    "name": "PostEntryFeed",
    "group": "Entry",
    "description": "<p>Create a entry in the global feed and link it automatically to a feed.</p> ",
    "filename": "service/db/v1/controller/entry.go",
    "groupTitle": "Entry",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "applicationId",
            "description": "<p>The application id</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "feedId",
            "description": "<p>The feed id</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>The data of the entry</p> "
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "tagList",
            "description": "<p>Tags of the entry</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The feed Id</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "applicationId",
            "description": "<p>The application id</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "feedId",
            "description": "<p>The feed id</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>The data of the entry</p> "
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "tagList",
            "description": "<p>List of set tags</p> "
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "createStamp",
            "description": "<p>Unix time stamp of create time</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n    {\n      \"id\": \"KAJFDA7GFTRE87FDS78F7\",\n      \"applicationId\": \"KAJDFE7GFTRE87FDS78F7\",\n      \"feedId\": \"KAJDFE7GFTRE87FDS78F7\",\n      \"data\": \"Hello, I'm Son Gocu and this is my first post.\",\n      \"tagList\": [\n        \"First\",\n        \"Awesome\"\n      ],\n      \"createStamp\": \"1415637736\",\n    }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "application/:applicationId/feed/:feedId/entry/",
    "title": "Add (Feed)",
    "version": "1.0.0",
    "name": "PostEntryFeedAdd",
    "group": "Entry",
    "description": "<p>Add a entry by entry Id to the feed which is already store in the system.</p> ",
    "filename": "service/db/v1/controller/entry.go",
    "groupTitle": "Entry",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "applicationId",
            "description": "<p>The application id</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "feedId",
            "description": "<p>The feed id</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "entryId",
            "description": "<p>The entry id</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The feed Id</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "applicationId",
            "description": "<p>The application id</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "feedId",
            "description": "<p>The feed id</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>The data of the entry</p> "
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "tagList",
            "description": "<p>List of set tags</p> "
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "createStamp",
            "description": "<p>Unix time stamp of create time</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n    {\n      \"id\": \"KAJFDA7GFTRE87FDS78F7\",\n      \"applicationId\": \"KAJDFE7GFTRE87FDS78F7\",\n      \"feedId\": \"KAJDFE7GFTRE87FDS78F7\",\n      \"data\": \"Hello, I'm Son Gocu and this is my first post.\",\n      \"tagList\": [\n        \"First\",\n        \"Awesome\"\n      ],\n      \"createStamp\": \"1415637736\",\n    }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "application/:applicationId/entry/:entryId",
    "title": "Update (Global)",
    "version": "1.0.0",
    "name": "PutEntry",
    "group": "Entry",
    "description": "<p>Update a specific entry.</p> ",
    "filename": "service/db/v1/controller/entry.go",
    "groupTitle": "Entry",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "applicationId",
            "description": "<p>The application id</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "entryId",
            "description": "<p>The entry id</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>The data of the entry</p> "
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "tagList",
            "description": "<p>Tags of the entry</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The feed Id</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "applicationId",
            "description": "<p>The application id</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "feedId",
            "description": "<p>The feed id</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>The data of the entry</p> "
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "tagList",
            "description": "<p>List of set tags</p> "
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "createStamp",
            "description": "<p>Unix time stamp of create time</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n    {\n      \"id\": \"KAJFDA7GFTRE87FDS78F7\",\n      \"applicationId\": \"KAJDFE7GFTRE87FDS78F7\",\n      \"feedId\": \"KAJDFE7GFTRE87FDS78F7\",\n      \"data\": \"Hello, I'm Son Gocu and this is my first post.\",\n      \"tagList\": [\n        \"First\",\n        \"Awesome\"\n      ],\n      \"createStamp\": \"1415637736\",\n    }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "application/:applicationId/feed/:feedId/entry/:entryId",
    "title": "Remove (Feed)",
    "version": "1.0.0",
    "name": "RemoveEntry",
    "group": "Entry",
    "description": "<p>Removes a specific entry from a feed.</p> ",
    "filename": "service/db/v1/controller/entry.go",
    "groupTitle": "Entry",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "applicationId",
            "description": "<p>The application id</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "feedId",
            "description": "<p>The feed id</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "entryId",
            "description": "<p>The entry id</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "application/:applicationId/feed/:feedId",
    "title": "Delete",
    "version": "1.0.0",
    "name": "DeleteFeed",
    "group": "Feed",
    "description": "<p>Delete a specific feed.</p> ",
    "filename": "service/db/v1/controller/feed.go",
    "groupTitle": "Feed",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "applicationId",
            "description": "<p>The application id</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "feedId",
            "description": "<p>The feed id</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "application/:applicationId/feed/:feedId",
    "title": "Get",
    "version": "1.0.0",
    "name": "GetFeed",
    "group": "Feed",
    "description": "<p>This will return a specific feed.</p> ",
    "filename": "service/db/v1/controller/feed.go",
    "groupTitle": "Feed",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "applicationId",
            "description": "<p>The application id</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "feedId",
            "description": "<p>The feed id</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The feed id</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the feed</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>The description of the feed</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "channelId",
            "description": "<p>The channel Id</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "applicationId",
            "description": "<p>The Id of the application the feed belongs to</p> "
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "tagList",
            "description": "<p>List of set tags</p> "
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "createStamp",
            "description": "<p>Unix time stamp of create time</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n    {\n      \"id\": \"KAJFDA7GFTRE87FDS78F7\",\n      \"name\": \"Son Goku\",\n      \"description\": \"The Son Goku feed. Here Son Goku will push all his news.\",\n      \"channelId\": \"ASJDH86ASD678ASDASD768\",\n      \"applicationId\": \"KAJFDA786FDS87FDS78F6\",\n      \"tagList\": [\n        \"Saiyan\",\n        \"Dragon Ball\",\n        \"Dragon Ball Z\"\n      ],\n      \"createStamp\": \"1415637736\",\n    }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "application/:applicationId/feed",
    "title": "Get List",
    "version": "1.0.0",
    "name": "GetFeedList",
    "group": "Feed",
    "description": "<p>This will return a list of all feeds per applications you have created.</p> ",
    "filename": "service/db/v1/controller/feed.go",
    "groupTitle": "Feed",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "applicationId",
            "description": "<p>The application id</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "application",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "application.id",
            "description": "<p>The application Id</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "application.name",
            "description": "<p>The name of the application</p> "
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "application.createStamp",
            "description": "<p>Unix time stamp of create time</p> "
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "feedList",
            "description": "<p>Array of all feeds</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "feedList.id",
            "description": "<p>The feed Id</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "feedList.name",
            "description": "<p>The name of the feed</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "feedList.channelId",
            "description": "<p>The channel Id of the feed</p> "
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "feedList.createStamp",
            "description": "<p>Unix time stamp of create time</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n    {\n      \"application\": {\n          \"id\": \"KAJFDA786FDS87FDS78F6\",\n          \"name\": \"DragonBall\",\n          \"createStamp\": \"1415637736\",\n      }\n      \"feedList\": [\n        {\n          \"id\": \"KAJFDA7GFTRE87FDS78F7\",\n          \"name\": \"Son Goku\",\n          \"channelId\": \"ASJDH86ASD678ASDASD768\",\n          \"createStamp\": \"1415637736\",\n        },\n        ...\n      ]\n    }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "application/:applicationId/feed",
    "title": "Create",
    "version": "1.0.0",
    "name": "PostFeed",
    "group": "Feed",
    "description": "<p>Create a feed.</p> ",
    "filename": "service/db/v1/controller/feed.go",
    "groupTitle": "Feed",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "applicationId",
            "description": "<p>The application id</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the feed</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>The description of the feed</p> "
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "tagList",
            "description": "<p>Tags of the feed</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The feed Id</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the feed</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>The description of the feed</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "channelId",
            "description": "<p>The channel Id</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "applicationId",
            "description": "<p>The Id of the application the feed belongs to</p> "
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "tagList",
            "description": "<p>List of set tags</p> "
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "createStamp",
            "description": "<p>Unix time stamp of create time</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n    {\n      \"id\": \"KAJFDA7GFTRE87FDS78F7\",\n      \"name\": \"Son Goku\",\n      \"description\": \"The Son Goku feed. Here Son Goku will push all his news.\",\n      \"channelId\": \"ASJDH86ASD678ASDASD768\",\n      \"applicationId\": \"KAJFDA786FDS87FDS78F6\",\n      \"tagList\": [\n        \"Saiyan\",\n        \"Dragon Ball\",\n        \"Dragon Ball Z\"\n      ],\n      \"createStamp\": \"1415637736\",\n    }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "application/:applicationId/feed/:feedId",
    "title": "Update",
    "version": "1.0.0",
    "name": "PutFeed",
    "group": "Feed",
    "description": "<p>Update a specific feed.</p> ",
    "filename": "service/db/v1/controller/feed.go",
    "groupTitle": "Feed",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "applicationId",
            "description": "<p>The application id</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the feed</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>The description of the feed</p> "
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "tagList",
            "description": "<p>Tags of the feed</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The feed Id</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the feed</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>The description of the feed</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "channelId",
            "description": "<p>The channel Id</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "applicationId",
            "description": "<p>The Id of the application the feed belongs to</p> "
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "tagList",
            "description": "<p>List of set tags</p> "
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "createStamp",
            "description": "<p>Unix time stamp of create time</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n    {\n      \"id\": \"KAJFDA7GFTRE87FDS78F7\",\n      \"name\": \"Son Goku\",\n      \"description\": \"The Son Goku feed. Here Son Goku will push all his news.\",\n      \"channelId\": \"ASJDH86ASD678ASDASD768\",\n      \"applicationId\": \"KAJFDA786FDS87FDS78F6\",\n      \"tagList\": [\n        \"Saiyan\",\n        \"Dragon Ball\",\n        \"Dragon Ball Z\"\n      ],\n      \"createStamp\": \"1415637736\",\n    }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "org/:orgId",
    "title": "Delete",
    "version": "1.0.0",
    "name": "DeleteOrg",
    "group": "Organisation",
    "description": "<p>Delete a specific org.</p> ",
    "filename": "service/db/v1/controller/org.go",
    "groupTitle": "Organisation",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "orgId",
            "description": "<p>The org id</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "org/:orgId",
    "title": "Get",
    "version": "1.0.0",
    "name": "GetOrg",
    "group": "Organisation",
    "description": "<p>This will return a specific org.</p> ",
    "filename": "service/db/v1/controller/org.go",
    "groupTitle": "Organisation",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "orgId",
            "description": "<p>The org id</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The id</p> "
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "createStamp",
            "description": "<p>Unix time stamp of create time</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n    {\n      \"id\": \"KAJFDA7GFTRE87FDS78F7\",\n        ...\n       \"createStamp\": \"1415637736\",\n    }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "org",
    "title": "Get List",
    "version": "1.0.0",
    "name": "GetOrgList",
    "group": "Organisation",
    "description": "<p>This will return a list of all orgs.</p> ",
    "filename": "service/db/v1/controller/org.go",
    "groupTitle": "Organisation",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "orgList",
            "description": "<p>Array of all organisations</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orgList.id",
            "description": "<p>The org id</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n    \"orgList\": [\n      {\n        \"id\": \"KAJFDA7GFTRE87FDS78F7\",\n        \"createStamp\": \"1415637736\",\n      },\n      ...\n    ]\n  }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "org",
    "title": "Create",
    "version": "1.0.0",
    "name": "PostOrg",
    "group": "Organisation",
    "description": "<p>Create a org.</p> ",
    "filename": "service/db/v1/controller/org.go",
    "groupTitle": "Organisation",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The id</p> "
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "createStamp",
            "description": "<p>Unix time stamp of create time</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n    {\n      \"id\": \"KAJFDA7GFTRE87FDS78F7\",\n      \"createStamp\": \"1415637736\",\n    }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "org/:orgId",
    "title": "Update",
    "version": "1.0.0",
    "name": "PutOrg",
    "group": "Organisation",
    "description": "<p>Update a specific organisation.</p> ",
    "filename": "service/db/v1/controller/org.go",
    "groupTitle": "Organisation",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "orgId",
            "description": "<p>The org id</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The id</p> "
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "createStamp",
            "description": "<p>Unix time stamp of create time</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n    {\n      \"id\": \"KAJFDA7GFTRE87FDS78F7\",\n      \"createStamp\": \"1415637736\",\n    }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "org/:orgId/token/:tokenId",
    "title": "Delete (Org)",
    "version": "1.0.0",
    "name": "DeleteOrgToken",
    "group": "Token",
    "description": "<p>Delete a specific organisation token</p> ",
    "filename": "service/db/v1/controller/token.go",
    "groupTitle": "Token",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "orgId",
            "description": "<p>The org id</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "admin/:adminId/token/:token",
    "title": "Delete (Admin)",
    "version": "1.0.0",
    "name": "DeleteToken",
    "group": "Token",
    "description": "<p>Delete a specific token for specific admin.</p> ",
    "filename": "service/db/v1/controller/token.go",
    "groupTitle": "Token",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "orgId",
            "description": "<p>The org id</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "org/:orgId/token/:tokenId",
    "title": "Get (Org)",
    "version": "1.0.0",
    "name": "GetOrgToken",
    "group": "Token",
    "description": "<p>This will return a specific organisation token</p> ",
    "filename": "service/db/v1/controller/token.go",
    "groupTitle": "Token",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "orgId",
            "description": "<p>The org id</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The id</p> "
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "createStamp",
            "description": "<p>Unix time stamp of create time</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n    {\n      \"id\": \"KAJFDA7GFTRE87FDS78F7\",\n        ...\n       \"createStamp\": \"1415637736\",\n    }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "org/:orgId/token",
    "title": "Get List (Org)",
    "version": "1.0.0",
    "name": "GetOrgTokenList",
    "group": "Token",
    "description": "<p>This will return a list of all organisation tokens</p> ",
    "filename": "service/db/v1/controller/token.go",
    "groupTitle": "Token",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "orgTokenList",
            "description": "<p>Array of all organisation tokens</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orgTokenList.id",
            "description": "<p>The orgToken id</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n    \"orgTokenList\": [\n      {\n        \"id\": \"KAJFDA7GFTRE87FDS78F7\",\n        \"createStamp\": \"1415637736\",\n      },\n      ...\n    ]\n  }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "admin/:adminId/token/:token",
    "title": "Get (Admin)",
    "version": "1.0.0",
    "name": "GetToken",
    "group": "Token",
    "description": "<p>This will return a specific token for specific admin.</p> ",
    "filename": "service/db/v1/controller/token.go",
    "groupTitle": "Token",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "orgId",
            "description": "<p>The org id</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The id</p> "
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "createStamp",
            "description": "<p>Unix time stamp of create time</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n    {\n      \"id\": \"KAJFDA7GFTRE87FDS78F7\",\n        ...\n       \"createStamp\": \"1415637736\",\n    }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "admin/:adminId/token",
    "title": "Get List (Admin)",
    "version": "1.0.0",
    "name": "GetTokenList",
    "group": "Token",
    "description": "<p>This will return a list of all tokens for specific admin.</p> ",
    "filename": "service/db/v1/controller/token.go",
    "groupTitle": "Token",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "orgTokenList",
            "description": "<p>Array of all organisation tokens</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orgTokenList.id",
            "description": "<p>The orgToken id</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n    \"orgTokenList\": [\n      {\n        \"id\": \"KAJFDA7GFTRE87FDS78F7\",\n        \"createStamp\": \"1415637736\",\n      },\n      ...\n    ]\n  }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "org/:orgId/token",
    "title": "Create (Org)",
    "version": "1.0.0",
    "name": "PostOrgToken",
    "group": "Token",
    "description": "<p>Create a organisation token</p> ",
    "filename": "service/db/v1/controller/token.go",
    "groupTitle": "Token",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The id</p> "
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "createStamp",
            "description": "<p>Unix time stamp of create time</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n    {\n      \"id\": \"KAJFDA7GFTRE87FDS78F7\",\n      \"createStamp\": \"1415637736\",\n    }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "admin/:adminId/token",
    "title": "Create (Admin)",
    "version": "1.0.0",
    "name": "PostToken",
    "group": "Token",
    "description": "<p>Create a token for specific admin.</p> ",
    "filename": "service/db/v1/controller/token.go",
    "groupTitle": "Token",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The id</p> "
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "createStamp",
            "description": "<p>Unix time stamp of create time</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n    {\n      \"id\": \"KAJFDA7GFTRE87FDS78F7\",\n      \"createStamp\": \"1415637736\",\n    }",
          "type": "json"
        }
      ]
    }
  }
] });