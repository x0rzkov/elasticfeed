package controller

import (
	"github.com/astaxie/beego"
	"github.com/astaxie/beego/context"

	"github.com/feedlabs/feedify"
	"github.com/feedlabs/elasticfeed/resource"
	"github.com/feedlabs/elasticfeed/helper"
)

type DefaultController struct {
	feedify.Controller
}

func (this *DefaultController) Get() {
	this.Data["json"] = map[string]string{"succes": "ok"}
	this.ServeJson()
}

func (this *DefaultController) GetAdmin() *resource.Admin {
	if this.GetCtx().Input.Data["admin"] != nil {
		return this.GetCtx().Input.Data["admin"].(*resource.Admin)
	}
	return nil
}

func (this *DefaultController) GetAdminOrgId() string {
	admin := this.GetAdmin()
	if admin != nil {
		return admin.Org.Id
	}
	return "0"
}

func (this *DefaultController) ServeJson(encoding ...bool) {
	this.Controller.ServeJson(encoding...)
}

func (this *DefaultController) SetResponseStatusCode(code int) {
	this.Controller.Ctx.Output.SetStatus(code)
}

func SetGlobalResponseHeader() {
	var FilterUser = func(ctx *context.Context) {
		ctx.Output.Header("Access-Control-Allow-Origin", "*")
	}
	beego.InsertFilter("/*", beego.BeforeRouter, FilterUser)
}

func SetAuthenticationFilter() {
	var AuthUser = func(ctx *context.Context) {
		ctx.Input.Data["admin"] = helper.Auth(ctx)
	}
	beego.InsertFilter("/*", beego.BeforeRouter, AuthUser)
}

func init() {
	SetAuthenticationFilter()
	SetGlobalResponseHeader()
}
