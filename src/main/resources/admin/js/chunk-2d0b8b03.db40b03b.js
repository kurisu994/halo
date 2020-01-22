(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b8b03"],{"306f":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("a-row",{staticStyle:{height:"100vh"},attrs:{type:"flex",justify:"center",align:"middle"}},[e("a-col",{attrs:{xl:8,md:12,sm:20,xs:24}},[e("div",{staticClass:"card-container"},[e("a-card",{staticStyle:{"box-shadow":"0px 10px 20px 0px rgba(236, 236, 236, 0.86)"},attrs:{bordered:!1,title:"Halo 安装向导"}},[e("a-steps",{attrs:{current:t.stepCurrent}},[e("a-step",{attrs:{title:"博主信息"}}),e("a-step",{attrs:{title:"博客信息"}}),e("a-step",{attrs:{title:"数据迁移"}})],1),e("a-divider",{attrs:{dashed:""}}),e("a-form",{directives:[{name:"show",rawName:"v-show",value:0==t.stepCurrent,expression:"stepCurrent == 0"}],attrs:{layout:"horizontal",form:t.bloggerForm}},[e("a-form-item",{staticClass:"animated fadeInUp"},[e("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["username",{rules:[{required:!0,message:"请输入用户名"}]}],expression:"[\n                  'username',\n                  {rules: [{ required: true, message: '请输入用户名' }]}\n                ]"}],attrs:{placeholder:"用户名"},model:{value:t.installation.username,callback:function(a){t.$set(t.installation,"username",a)},expression:"installation.username"}},[e("a-icon",{staticStyle:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"user"},slot:"prefix"})],1)],1),e("a-form-item",{staticClass:"animated fadeInUp",style:{"animation-delay":"0.1s"}},[e("a-input",{attrs:{placeholder:"用户昵称"},model:{value:t.installation.nickname,callback:function(a){t.$set(t.installation,"nickname",a)},expression:"installation.nickname"}},[e("a-icon",{staticStyle:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"smile"},slot:"prefix"})],1)],1),e("a-form-item",{staticClass:"animated fadeInUp",style:{"animation-delay":"0.2s"}},[e("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["email",{rules:[{required:!0,message:"请输入邮箱"}]}],expression:"[\n                  'email',\n                  {rules: [{ required: true, message: '请输入邮箱' }]}\n                ]"}],attrs:{placeholder:"用户邮箱"},model:{value:t.installation.email,callback:function(a){t.$set(t.installation,"email",a)},expression:"installation.email"}},[e("a-icon",{staticStyle:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"mail"},slot:"prefix"})],1)],1),e("a-form-item",{staticClass:"animated fadeInUp",style:{"animation-delay":"0.3s"}},[e("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["password",{rules:[{required:!0,message:"请输入密码（8-100位）"}]}],expression:"[\n                  'password',\n                  {rules: [{ required: true, message: '请输入密码（8-100位）' }]}\n                ]"}],attrs:{type:"password",placeholder:"用户密码（8-100位）"},model:{value:t.installation.password,callback:function(a){t.$set(t.installation,"password",a)},expression:"installation.password"}},[e("a-icon",{staticStyle:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"lock"},slot:"prefix"})],1)],1),e("a-form-item",{staticClass:"animated fadeInUp",style:{"animation-delay":"0.4s"}},[e("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["confirmPassword",{rules:[{required:!0,message:"请确定密码"}]}],expression:"[\n                  'confirmPassword',\n                  {rules: [{ required: true, message: '请确定密码' }]}\n                ]"}],attrs:{type:"password",placeholder:"确定密码"},model:{value:t.installation.confirmPassword,callback:function(a){t.$set(t.installation,"confirmPassword",a)},expression:"installation.confirmPassword"}},[e("a-icon",{staticStyle:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"lock"},slot:"prefix"})],1)],1)],1),e("a-form",{directives:[{name:"show",rawName:"v-show",value:1==t.stepCurrent,expression:"stepCurrent == 1"}],attrs:{layout:"horizontal"}},[e("a-form-item",{staticClass:"animated fadeInUp"},[e("a-input",{attrs:{placeholder:"博客地址"},model:{value:t.installation.url,callback:function(a){t.$set(t.installation,"url",a)},expression:"installation.url"}},[e("a-icon",{staticStyle:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"link"},slot:"prefix"})],1)],1),e("a-form-item",{staticClass:"animated fadeInUp",style:{"animation-delay":"0.2s"}},[e("a-input",{attrs:{placeholder:"博客标题"},model:{value:t.installation.title,callback:function(a){t.$set(t.installation,"title",a)},expression:"installation.title"}},[e("a-icon",{staticStyle:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"book"},slot:"prefix"})],1)],1)],1),e("div",{directives:[{name:"show",rawName:"v-show",value:2==t.stepCurrent,expression:"stepCurrent == 2"}]},[e("a-alert",{staticClass:"animated fadeInUp",staticStyle:{"margin-bottom":"1rem"},attrs:{message:"如果有迁移需求，请点击并选择'迁移文件'",type:"info"}}),e("Upload",{staticClass:"animated fadeIn",style:{"animation-delay":"0.2s"},attrs:{name:t.migrationUploadName,accept:"application/json",uploadHandler:t.handleMigrationUpload},on:{remove:t.handleMigrationFileRemove}},[e("p",{staticClass:"ant-upload-drag-icon"},[e("a-icon",{attrs:{type:"inbox"}})],1),e("p",{staticClass:"ant-upload-text"},[t._v("点击选择文件或将文件拖拽到此处")]),e("p",{staticClass:"ant-upload-hint"},[t._v("仅支持单个文件上传")])])],1),e("a-row",{staticClass:"install-action",staticStyle:{"margin-top":"1rem"},attrs:{type:"flex",justify:"space-between"}},[e("div",[0!=t.stepCurrent?e("a-button",{staticClass:"previus-button",staticStyle:{"margin-right":"1rem"},on:{click:function(a){t.stepCurrent--}}},[t._v("上一步")]):t._e(),2!=t.stepCurrent?e("a-button",{attrs:{type:"primary"},on:{click:t.handleNextStep}},[t._v("下一步")]):t._e()],1),2==t.stepCurrent?e("a-button",{attrs:{type:"danger",icon:"upload"},on:{click:t.handleInstall}},[t._v("安装")]):t._e()],1)],1)],1)])],1)],1)},i=[],n=e("50fc"),r=e("9efd"),o="/api/admin/recoveries",l={migrate:function(t){return Object(r["a"])({url:"".concat(o,"/migrations/v0_4_3"),data:t,method:"post"})}},c=l,d={data:function(){return{installation:{},migrationUploadName:"file",migrationData:null,stepCurrent:0,bloggerForm:this.$form.createForm(this)}},created:function(){this.verifyIsInstall(),this.installation.url=window.location.protocol+"//"+window.location.host},methods:{verifyIsInstall:function(){var t=this;n["a"].isInstalled().then((function(a){a.data.data&&t.$router.push({name:"Login"})}))},handleNextStep:function(t){var a=this;t.preventDefault(),this.bloggerForm.validateFields((function(t,e){console.log("error",t),console.log("Received values of form: ",e),null!=t||a.stepCurrent++}))},handleMigrationUpload:function(t){var a=this;return this.$log.debug("Selected data",t),this.migrationData=t,new Promise((function(t,e){a.$log.debug("Handle uploading"),t()}))},handleMigrationFileRemove:function(t){this.$log.debug("Removed file",t),this.$log.debug("Migration file from data",this.migrationData.get(this.migrationUploadName)),this.migrationData.get(this.migrationUploadName).uid===t.uid&&(this.migrationData=null,this.migrationFile=null)},install:function(){var t=this;n["a"].install(this.installation).then((function(a){t.$log.debug("Installation response",a),t.$message.success("安装成功！"),setTimeout((function(){t.$router.push({name:"Login"})}),300)}))},handleInstall:function(){var t=this,a=this.installation.password,e=this.installation.confirmPassword;this.$log.debug("Password",a),this.$log.debug("Confirm password",e),a===e?this.migrationData?c.migrate(this.migrationData).then((function(a){t.$log.debug("Migrated successfullly"),t.$message.success("数据迁移成功！"),t.install()})):this.install():this.$message.error("确认密码和密码不匹配")}}},u=d,m=e("2877"),p=Object(m["a"])(u,s,i,!1,null,null,null);a["default"]=p.exports}}]);