(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{"4LMt":function(n,s){n.exports='<span class="hljs-keyword">import</span> { NgModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { CommonModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/common\'</span>;\n<span class="hljs-keyword">import</span> { ReactiveFormsModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n<span class="hljs-keyword">import</span> { FormlyModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n<span class="hljs-keyword">import</span> { FormlyBootstrapModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/bootstrap\'</span>;\n\n<span class="hljs-keyword">import</span> { AppComponent } <span class="hljs-keyword">from</span> <span class="hljs-string">\'./app.component\'</span>;\n<span class="hljs-keyword">import</span> { RepeatTypeComponent } <span class="hljs-keyword">from</span> <span class="hljs-string">\'./repeat-section.type\'</span>;\n\n<span class="hljs-meta">@NgModule</span>({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot({\n      types: [\n        { name: <span class="hljs-string">\'repeat\'</span>, component: RepeatTypeComponent },\n      ],\n    }),\n  ],\n  declarations: [\n    AppComponent,\n    RepeatTypeComponent,\n  ],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppModule { }\n'},"4O8j":function(n,s){n.exports='import { Component } from \'@angular/core\';\nimport { FieldArrayType } from \'@ngx-formly/core\';\n\n@Component({\n  selector: \'formly-repeat-section\',\n  template: `\n    <div *ngFor="let field of field.fieldGroup; let i = index;" class="row">\n      <formly-field class="col" [field]="field"></formly-field>\n      <div class="col-sm-2 d-flex align-items-center">\n        <button class="btn btn-danger" type="button" (click)="remove(i)">Remove</button>\n      </div>\n    </div>\n    <div style="margin:30px 0;">\n      <button class="btn btn-primary" type="button" (click)="add()">{{ to.addText }}</button>\n    </div>\n  `,\n})\nexport class RepeatTypeComponent extends FieldArrayType {}\n'},"6T7I":function(n,s,l){"use strict";l.r(s);var a=l("CcnG"),e=l("gIcY"),t=function(){function n(){this.form=new e.FormGroup({}),this.model={investments:[{}]},this.options={},this.fields=[{key:"investments",type:"repeat",templateOptions:{addText:"Add another investment"},fieldArray:{fieldGroup:[{className:"col-sm-4",type:"input",key:"investmentName",templateOptions:{label:"Name of Investment:",required:!0}},{type:"input",key:"investmentDate",className:"col-sm-4",templateOptions:{type:"date",label:"Date of Investment:"}},{type:"input",key:"stockIdentifier",className:"col-sm-4",templateOptions:{label:"Stock Identifier:",addonRight:{class:"fa fa-code",onClick:function(n,s,l){return console.log(n,s,l)}}}}]}}]}return n.prototype.submit=function(){alert(JSON.stringify(this.model))},n}(),o={examples:[{title:"Repeating Section",description:"\n              This demonstrates using\n              <code>formly-form</code> inside of a custom type in order to accomplish repeating fields.\n            ",component:t,files:[{file:"app.component.html",content:l("i9On"),filecontent:l("da9Q")},{file:"app.component.ts",content:l("cmiX"),filecontent:l("hhWI")},{file:"app.module.ts",content:l("4LMt"),filecontent:l("NqLg")},{file:"repeat-section.type.ts",content:l("U2ut"),filecontent:l("4O8j")}]}]},p=function(){return function(){}}(),r=l("NcP4"),m=l("AcC/"),i=l("htty"),c=l("5yjx"),d=l("bg4O"),u=l("1C3p"),f=l("aMyW"),y=l("cD0v"),g=l("FZbr"),h=l("jYRx"),j=l("YBPd"),b=l("cI/F"),v=l("fVcV"),k=l("DAbo"),w=l("Ip0R"),C=l("mrSG"),F=function(n){function s(){return null!==n&&n.apply(this,arguments)||this}return Object(C.__extends)(s,n),s}(l("HkYz").a),x=a["\u0275crt"]({encapsulation:2,styles:[],data:{}});function N(n){return a["\u0275vid"](0,[(n()(),a["\u0275eld"](0,0,null,null,5,"div",[["class","row"]],null,null,null,null,null)),(n()(),a["\u0275eld"](1,0,null,null,1,"formly-field",[["class","col"]],[[4,"display",null],[8,"className",0]],null,null,b.b,b.a)),a["\u0275did"](2,16760832,null,0,v.a,[k.b,a.ComponentFactoryResolver,a.Injector],{field:[0,"field"],className:[1,"className"]},null),(n()(),a["\u0275eld"](3,0,null,null,2,"div",[["class","col-sm-2 d-flex align-items-center"]],null,null,null,null,null)),(n()(),a["\u0275eld"](4,0,null,null,1,"button",[["class","btn btn-danger"],["type","button"]],null,[[null,"click"]],function(n,s,l){var a=!0;return"click"===s&&(a=!1!==n.component.remove(n.context.index)&&a),a},null,null)),(n()(),a["\u0275ted"](-1,null,["Remove"]))],function(n,s){n(s,2,0,s.context.$implicit,"col")},function(n,s){n(s,1,0,a["\u0275nov"](s,2).field.hide?"none":"",a["\u0275nov"](s,2).field.className?a["\u0275nov"](s,2).field.className:a["\u0275nov"](s,2).className)})}function M(n){return a["\u0275vid"](0,[(n()(),a["\u0275and"](16777216,null,null,1,null,N)),a["\u0275did"](1,278528,null,0,w.NgForOf,[a.ViewContainerRef,a.TemplateRef,a.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),a["\u0275eld"](2,0,null,null,2,"div",[["style","margin:30px 0;"]],null,null,null,null,null)),(n()(),a["\u0275eld"](3,0,null,null,1,"button",[["class","btn btn-primary"],["type","button"]],null,[[null,"click"]],function(n,s,l){var a=!0;return"click"===s&&(a=!1!==n.component.add()&&a),a},null,null)),(n()(),a["\u0275ted"](4,null,["",""]))],function(n,s){n(s,1,0,s.component.field.fieldGroup)},function(n,s){n(s,4,0,s.component.to.addText)})}function R(n){return a["\u0275vid"](0,[(n()(),a["\u0275eld"](0,0,null,null,1,"formly-repeat-section",[],null,null,null,M,x)),a["\u0275did"](1,49152,null,0,F,[],null,null)],null,null)}var O=a["\u0275ccf"]("formly-repeat-section",F,R,{field:"field"},{},[]),T=l("pMnS"),_=l("4o01"),I=l("Dl9q"),S=l("UcnZ"),A=l("9Glx"),G=a["\u0275crt"]({encapsulation:2,styles:[],data:{}});function D(n){return a["\u0275vid"](0,[(n()(),a["\u0275eld"](0,0,null,null,9,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(n,s,l){var e=!0,t=n.component;return"submit"===s&&(e=!1!==a["\u0275nov"](n,2).onSubmit(l)&&e),"reset"===s&&(e=!1!==a["\u0275nov"](n,2).onReset()&&e),"ngSubmit"===s&&(e=!1!==t.submit()&&e),e},null,null)),a["\u0275did"](1,16384,null,0,e["\u0275angular_packages_forms_forms_bh"],[],null,null),a["\u0275did"](2,540672,null,0,e.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),a["\u0275prd"](2048,null,e.ControlContainer,null,[e.FormGroupDirective]),a["\u0275did"](4,16384,null,0,e.NgControlStatusGroup,[[4,e.ControlContainer]],null,null),(n()(),a["\u0275eld"](5,0,null,null,2,"formly-form",[],null,null,null,I.b,I.a)),a["\u0275prd"](512,null,S.a,S.a,[k.b,a.ComponentFactoryResolver,a.Injector]),a["\u0275did"](7,966656,null,0,A.a,[S.a,k.b,[8,null],[2,e.FormGroupDirective]],{form:[0,"form"],model:[1,"model"],fields:[2,"fields"],options:[3,"options"]},null),(n()(),a["\u0275eld"](8,0,null,null,1,"button",[["class","btn btn-primary submit-button"],["type","submit"]],[[8,"disabled",0]],null,null,null,null)),(n()(),a["\u0275ted"](-1,null,["Submit"]))],function(n,s){var l=s.component;n(s,2,0,l.form),n(s,7,0,l.form,l.model,l.fields,l.options)},function(n,s){var l=s.component;n(s,0,0,a["\u0275nov"](s,4).ngClassUntouched,a["\u0275nov"](s,4).ngClassTouched,a["\u0275nov"](s,4).ngClassPristine,a["\u0275nov"](s,4).ngClassDirty,a["\u0275nov"](s,4).ngClassValid,a["\u0275nov"](s,4).ngClassInvalid,a["\u0275nov"](s,4).ngClassPending),n(s,8,0,!l.form.valid)})}function L(n){return a["\u0275vid"](0,[(n()(),a["\u0275eld"](0,0,null,null,1,"formly-app-example",[],null,null,null,D,G)),a["\u0275did"](1,49152,null,0,t,[],null,null)],null,null)}var q=a["\u0275ccf"]("formly-app-example",t,L,{},{},[]),U=l("M2Lx"),W=l("eDkP"),B=l("Fzqc"),J=l("v9Dh"),P=l("ZYjt"),Y=l("Wf4p"),Z=l("mVsa"),z=l("6LlJ"),V=l("F6kA"),$=l("dWZg"),E=l("lLAP"),Q=l("4c35"),X=l("qAlS"),H=l("La40"),K=l("SMsm"),nn=l("UodH"),sn=l("5QwG"),ln=l("vqwi"),an=l("WJWa"),en=l("aD/X"),tn=l("rxDs"),on=l("bCbW"),pn=l("7yie"),rn=l("xWhi"),mn=l("owZ6"),cn=l("DwvE"),dn=l("XR12"),un=l("Nsh5"),fn=l("8mMr"),yn=l("mqvi"),gn=l("lhp3"),hn=l("izcw"),jn=l("z6f/"),bn=l("lYui"),vn=l("QcTH"),kn=l("82Si"),wn=l("cJUE"),Cn=l("eqw4"),Fn=l("nyVy"),xn=l("7BuT"),Nn=function(){return function(){}}(),Mn=l("ZYCi"),Rn=l("cIcG");l.d(s,"ConfigModuleNgFactory",function(){return On});var On=a["\u0275cmf"](p,[],function(n){return a["\u0275mod"]([a["\u0275mpd"](512,a.ComponentFactoryResolver,a["\u0275CodegenComponentFactoryResolver"],[[8,[r.a,m.a,i.a,c.a,d.a,u.a,f.a,y.a,g.a,h.a,j.a,O,T.a,_.a,q]],[3,a.ComponentFactoryResolver],a.NgModuleRef]),a["\u0275mpd"](4608,w.NgLocalization,w.NgLocaleLocalization,[a.LOCALE_ID,[2,w["\u0275angular_packages_common_common_a"]]]),a["\u0275mpd"](4608,U.c,U.c,[]),a["\u0275mpd"](4608,W.c,W.c,[W.i,W.e,a.ComponentFactoryResolver,W.h,W.f,a.Injector,a.NgZone,w.DOCUMENT,B.b,[2,w.Location]]),a["\u0275mpd"](5120,W.j,W.k,[W.c]),a["\u0275mpd"](5120,J.b,J.c,[W.c]),a["\u0275mpd"](4608,P.f,Y.c,[[2,Y.g],[2,Y.l]]),a["\u0275mpd"](5120,Z.b,Z.g,[W.c]),a["\u0275mpd"](4608,z.a,z.a,[]),a["\u0275mpd"](4608,V.a,V.a,[]),a["\u0275mpd"](4608,e.FormBuilder,e.FormBuilder,[]),a["\u0275mpd"](4608,e["\u0275angular_packages_forms_forms_j"],e["\u0275angular_packages_forms_forms_j"],[]),a["\u0275mpd"](4608,S.a,S.a,[k.b,a.ComponentFactoryResolver,a.Injector]),a["\u0275mpd"](1073742336,w.CommonModule,w.CommonModule,[]),a["\u0275mpd"](1073742336,$.b,$.b,[]),a["\u0275mpd"](1073742336,U.d,U.d,[]),a["\u0275mpd"](1073742336,E.a,E.a,[]),a["\u0275mpd"](1073742336,B.a,B.a,[]),a["\u0275mpd"](1073742336,Q.g,Q.g,[]),a["\u0275mpd"](1073742336,X.ScrollingModule,X.ScrollingModule,[]),a["\u0275mpd"](1073742336,W.g,W.g,[]),a["\u0275mpd"](1073742336,Y.l,Y.l,[[2,Y.d],[2,P.g]]),a["\u0275mpd"](1073742336,J.e,J.e,[]),a["\u0275mpd"](1073742336,Y.v,Y.v,[]),a["\u0275mpd"](1073742336,H.j,H.j,[]),a["\u0275mpd"](1073742336,Z.e,Z.e,[]),a["\u0275mpd"](1073742336,K.c,K.c,[]),a["\u0275mpd"](1073742336,nn.c,nn.c,[]),a["\u0275mpd"](1073742336,sn.b,sn.b,[]),a["\u0275mpd"](512,k.b,k.b,[]),a["\u0275mpd"](1024,k.a,function(n){return[{wrappers:[{name:"form-field",component:ln.a}]},{types:[{name:"input",component:an.a,wrappers:["form-field"]}]},{types:[{name:"textarea",component:en.a,wrappers:["form-field"]}]},{types:[{name:"radio",component:tn.a,wrappers:["form-field"]}]},{types:[{name:"checkbox",component:on.a,wrappers:["form-field"]}]},{types:[{name:"multicheckbox",component:pn.a,wrappers:["form-field"]}]},{types:[{name:"select",component:rn.a,wrappers:["form-field"]}]},{wrappers:[{name:"addons",component:mn.a}],extensions:[{name:"addons",extension:{postPopulate:cn.a}}]},dn.b(n),{types:[{name:"repeat",component:F}]}]},[k.b]),a["\u0275mpd"](1073742336,dn.a,dn.a,[k.b,[2,k.a]]),a["\u0275mpd"](1073742336,un.h,un.h,[]),a["\u0275mpd"](1073742336,fn.b,fn.b,[]),a["\u0275mpd"](1073742336,yn.a,yn.a,[]),a["\u0275mpd"](1073742336,e["\u0275angular_packages_forms_forms_bc"],e["\u0275angular_packages_forms_forms_bc"],[]),a["\u0275mpd"](1073742336,e.ReactiveFormsModule,e.ReactiveFormsModule,[]),a["\u0275mpd"](1073742336,gn.a,gn.a,[]),a["\u0275mpd"](1073742336,hn.a,hn.a,[]),a["\u0275mpd"](1073742336,jn.a,jn.a,[]),a["\u0275mpd"](1073742336,bn.a,bn.a,[]),a["\u0275mpd"](1073742336,vn.a,vn.a,[]),a["\u0275mpd"](1073742336,kn.a,kn.a,[]),a["\u0275mpd"](1073742336,wn.a,wn.a,[]),a["\u0275mpd"](1073742336,Cn.a,Cn.a,[]),a["\u0275mpd"](1073742336,Fn.a,Fn.a,[]),a["\u0275mpd"](1073742336,xn.a,xn.a,[]),a["\u0275mpd"](1073742336,Nn,Nn,[]),a["\u0275mpd"](1073742336,Mn.s,Mn.s,[[2,Mn.y],[2,Mn.p]]),a["\u0275mpd"](1073742336,p,p,[]),a["\u0275mpd"](1024,Mn.n,function(){return[[{path:"",component:Rn.a,data:o}]]},[])])})},NqLg:function(n,s){n.exports="import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { ReactiveFormsModule } from '@angular/forms';\nimport { FormlyModule } from '@ngx-formly/core';\nimport { FormlyBootstrapModule } from '@ngx-formly/bootstrap';\n\nimport { AppComponent } from './app.component';\nimport { RepeatTypeComponent } from './repeat-section.type';\n\n@NgModule({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot({\n      types: [\n        { name: 'repeat', component: RepeatTypeComponent },\n      ],\n    }),\n  ],\n  declarations: [\n    AppComponent,\n    RepeatTypeComponent,\n  ],\n})\nexport class AppModule { }\n"},U2ut:function(n,s){n.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { FieldArrayType } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  selector: <span class="hljs-string">\'formly-repeat-section\'</span>,\n  template: <span class="hljs-string">`\n    &lt;div *ngFor="let field of field.fieldGroup; let i = index;" class="row"&gt;\n      &lt;formly-field class="col" [field]="field"&gt;&lt;/formly-field&gt;\n      &lt;div class="col-sm-2 d-flex align-items-center"&gt;\n        &lt;button class="btn btn-danger" type="button" (click)="remove(i)"&gt;Remove&lt;/button&gt;\n      &lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div style="margin:30px 0;"&gt;\n      &lt;button class="btn btn-primary" type="button" (click)="add()"&gt;{{ to.addText }}&lt;/button&gt;\n    &lt;/div&gt;\n  `</span>,\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> RepeatTypeComponent <span class="hljs-keyword">extends</span> FieldArrayType {}\n'},cmiX:function(n,s){n.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { FormGroup } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n<span class="hljs-keyword">import</span> { FormlyFormOptions, FormlyFieldConfig } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  selector: <span class="hljs-string">\'formly-app-example\'</span>,\n  templateUrl: <span class="hljs-string">\'./app.component.html\'</span>,\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppComponent {\n  form = <span class="hljs-keyword">new</span> FormGroup({});\n  model = {\n    investments: [{}],\n  };\n  options: FormlyFormOptions = {};\n\n  fields: FormlyFieldConfig[] = [\n    {\n      key: <span class="hljs-string">\'investments\'</span>,\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'repeat\'</span>,\n      templateOptions: {\n        addText: <span class="hljs-string">\'Add another investment\'</span>,\n      },\n      fieldArray: {\n        fieldGroup: [\n          {\n            className: <span class="hljs-string">\'col-sm-4\'</span>,\n            <span class="hljs-keyword">type</span>: <span class="hljs-string">\'input\'</span>,\n            key: <span class="hljs-string">\'investmentName\'</span>,\n            templateOptions: {\n              label: <span class="hljs-string">\'Name of Investment:\'</span>,\n              required: <span class="hljs-literal">true</span>,\n            },\n          },\n          {\n            <span class="hljs-keyword">type</span>: <span class="hljs-string">\'input\'</span>,\n            key: <span class="hljs-string">\'investmentDate\'</span>,\n            className: <span class="hljs-string">\'col-sm-4\'</span>,\n            templateOptions: {\n              <span class="hljs-keyword">type</span>: <span class="hljs-string">\'date\'</span>,\n              label: <span class="hljs-string">\'Date of Investment:\'</span>,\n            },\n          },\n          {\n            <span class="hljs-keyword">type</span>: <span class="hljs-string">\'input\'</span>,\n            key: <span class="hljs-string">\'stockIdentifier\'</span>,\n            className: <span class="hljs-string">\'col-sm-4\'</span>,\n            templateOptions: {\n              label: <span class="hljs-string">\'Stock Identifier:\'</span>,\n              addonRight: {\n                <span class="hljs-keyword">class</span>: <span class="hljs-string">\'fa fa-code\'</span>,\n                onClick: <span class="hljs-function">(<span class="hljs-params">to, fieldType, $event</span>) =&gt;</span> <span class="hljs-built_in">console</span>.log(to, fieldType, $event),\n              },\n            },\n          },\n        ],\n      },\n    },\n  ];\n\n  submit() {\n    alert(<span class="hljs-built_in">JSON</span>.stringify(<span class="hljs-keyword">this</span>.model));\n  }\n}\n'},da9Q:function(n,s){n.exports='<form [formGroup]="form" (ngSubmit)="submit()">\n  <formly-form [model]="model" [fields]="fields" [options]="options" [form]="form"></formly-form>\n  <button type="submit" class="btn btn-primary submit-button" [disabled]="!form.valid">Submit</button>\n</form>\n'},hhWI:function(n,s){n.exports="import { Component } from '@angular/core';\nimport { FormGroup } from '@angular/forms';\nimport { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';\n\n@Component({\n  selector: 'formly-app-example',\n  templateUrl: './app.component.html',\n})\nexport class AppComponent {\n  form = new FormGroup({});\n  model = {\n    investments: [{}],\n  };\n  options: FormlyFormOptions = {};\n\n  fields: FormlyFieldConfig[] = [\n    {\n      key: 'investments',\n      type: 'repeat',\n      templateOptions: {\n        addText: 'Add another investment',\n      },\n      fieldArray: {\n        fieldGroup: [\n          {\n            className: 'col-sm-4',\n            type: 'input',\n            key: 'investmentName',\n            templateOptions: {\n              label: 'Name of Investment:',\n              required: true,\n            },\n          },\n          {\n            type: 'input',\n            key: 'investmentDate',\n            className: 'col-sm-4',\n            templateOptions: {\n              type: 'date',\n              label: 'Date of Investment:',\n            },\n          },\n          {\n            type: 'input',\n            key: 'stockIdentifier',\n            className: 'col-sm-4',\n            templateOptions: {\n              label: 'Stock Identifier:',\n              addonRight: {\n                class: 'fa fa-code',\n                onClick: (to, fieldType, $event) => console.log(to, fieldType, $event),\n              },\n            },\n          },\n        ],\n      },\n    },\n  ];\n\n  submit() {\n    alert(JSON.stringify(this.model));\n  }\n}\n"},i9On:function(n,s){n.exports='<span class="hljs-tag">&lt;<span class="hljs-name">form</span> [<span class="hljs-attr">formGroup</span>]=<span class="hljs-string">"form"</span> (<span class="hljs-attr">ngSubmit</span>)=<span class="hljs-string">"submit()"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">formly-form</span> [<span class="hljs-attr">model</span>]=<span class="hljs-string">"model"</span> [<span class="hljs-attr">fields</span>]=<span class="hljs-string">"fields"</span> [<span class="hljs-attr">options</span>]=<span class="hljs-string">"options"</span> [<span class="hljs-attr">form</span>]=<span class="hljs-string">"form"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">formly-form</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"submit"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-primary submit-button"</span> [<span class="hljs-attr">disabled</span>]=<span class="hljs-string">"!form.valid"</span>&gt;</span>Submit<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">form</span>&gt;</span>\n'}}]);