package routers

import (
	"cfp/src/controllers"
	"github.com/astaxie/beego"
)

func init() {
	beego.Router("/v1/user", &controllers.UserController{}, "get:Get;post:Post")
	beego.Router("/v1/user/:id:int", &controllers.UserController{}, "get:Get;delete:Delete;put:Put")
}
