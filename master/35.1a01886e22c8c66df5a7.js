(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{"+BgI":function(n,s){n.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { FormGroup } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n<span class="hljs-keyword">import</span> { FormlyFormOptions, FormlyFieldConfig } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n<span class="hljs-keyword">import</span> { DataService } <span class="hljs-keyword">from</span> <span class="hljs-string">\'./data.service\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  selector: <span class="hljs-string">\'formly-app-example\'</span>,\n  templateUrl: <span class="hljs-string">\'./app.component.html\'</span>,\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppComponent {\n  form = <span class="hljs-keyword">new</span> FormGroup({});\n  model: <span class="hljs-built_in">any</span> = {};\n  options: FormlyFormOptions = {};\n\n  fields: FormlyFieldConfig[] = [\n    {\n      key: <span class="hljs-string">\'sport\'</span>,\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'select\'</span>,\n      templateOptions: {\n        label: <span class="hljs-string">\'Sport\'</span>,\n        options: <span class="hljs-keyword">this</span>.dataService.getSports(),\n        valueProp: <span class="hljs-string">\'id\'</span>,\n        labelProp: <span class="hljs-string">\'name\'</span>,\n      },\n    },\n  ];\n\n  <span class="hljs-keyword">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">private</span> dataService: DataService</span>) {}\n\n  submit() {\n    alert(<span class="hljs-built_in">JSON</span>.stringify(<span class="hljs-keyword">this</span>.model));\n  }\n}\n'},"1K2+":function(n,s){n.exports="import { Injectable } from '@angular/core';\nimport { Observable, of } from 'rxjs';\n\n@Injectable()\nexport class DataService {\n    sports = [\n        { id: '1', name: 'Soccer' },\n        { id: '2', name: 'Basketball' },\n    ];\n\n    getSports(): Observable<any[]> {\n        return of(this.sports);\n    }\n}\n"},Csgu:function(n,s){n.exports='<span class="hljs-keyword">import</span> { Injectable } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { Observable, of } <span class="hljs-keyword">from</span> <span class="hljs-string">\'rxjs\'</span>;\n\n<span class="hljs-meta">@Injectable</span>()\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> DataService {\n    sports = [\n        { id: <span class="hljs-string">\'1\'</span>, name: <span class="hljs-string">\'Soccer\'</span> },\n        { id: <span class="hljs-string">\'2\'</span>, name: <span class="hljs-string">\'Basketball\'</span> },\n    ];\n\n    getSports(): Observable&lt;<span class="hljs-built_in">any</span>[]&gt; {\n        <span class="hljs-keyword">return</span> of(<span class="hljs-keyword">this</span>.sports);\n    }\n}\n'},"J+NF":function(n,s,a){"use strict";a.r(s);var o=a("CcnG"),l=a("gIcY"),p=a("F/XL"),r=function(){function n(){this.sports=[{id:"1",name:"Soccer"},{id:"2",name:"Basketball"}]}return n.prototype.getSports=function(){return Object(p.a)(this.sports)},n}(),t=function(){function n(n){this.dataService=n,this.form=new l.FormGroup({}),this.model={},this.options={},this.fields=[{key:"sport",type:"select",templateOptions:{label:"Sport",options:this.dataService.getSports(),valueProp:"id",labelProp:"name"}}]}return n.prototype.submit=function(){alert(JSON.stringify(this.model))},n}(),e={examples:[{title:"Bind Observables to Select",description:"",component:t,files:[{file:"app.component.html",content:a("yFFy"),filecontent:a("pE2D")},{file:"app.component.ts",content:a("+BgI"),filecontent:a("wS3k")},{file:"app.module.ts",content:a("OQAp"),filecontent:a("holT")},{file:"data.service.ts",content:a("Csgu"),filecontent:a("1K2+")}]}]},m=function(){return function(){}}(),i=a("NcP4"),c=a("AcC/"),d=a("htty"),u=a("5yjx"),f=a("bg4O"),g=a("1C3p"),h=a("aMyW"),j=a("cD0v"),y=a("FZbr"),b=a("jYRx"),v=a("YBPd"),w=a("pMnS"),k=a("4o01"),F=a("Dl9q"),S=a("UcnZ"),C=a("DAbo"),x=a("9Glx"),M=o["\u0275crt"]({encapsulation:2,styles:[],data:{}});function _(n){return o["\u0275vid"](0,[(n()(),o["\u0275eld"](0,0,null,null,9,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(n,s,a){var l=!0,p=n.component;return"submit"===s&&(l=!1!==o["\u0275nov"](n,2).onSubmit(a)&&l),"reset"===s&&(l=!1!==o["\u0275nov"](n,2).onReset()&&l),"ngSubmit"===s&&(l=!1!==p.submit()&&l),l},null,null)),o["\u0275did"](1,16384,null,0,l["\u0275angular_packages_forms_forms_bh"],[],null,null),o["\u0275did"](2,540672,null,0,l.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),o["\u0275prd"](2048,null,l.ControlContainer,null,[l.FormGroupDirective]),o["\u0275did"](4,16384,null,0,l.NgControlStatusGroup,[[4,l.ControlContainer]],null,null),(n()(),o["\u0275eld"](5,0,null,null,2,"formly-form",[],null,null,null,F.b,F.a)),o["\u0275prd"](512,null,S.a,S.a,[C.b,o.ComponentFactoryResolver,o.Injector]),o["\u0275did"](7,966656,null,0,x.a,[S.a,C.b,[8,null],[2,l.FormGroupDirective]],{form:[0,"form"],model:[1,"model"],fields:[2,"fields"],options:[3,"options"]},null),(n()(),o["\u0275eld"](8,0,null,null,1,"button",[["class","btn btn-primary submit-button"],["type","submit"]],[[8,"disabled",0]],null,null,null,null)),(n()(),o["\u0275ted"](-1,null,["Submit"]))],function(n,s){var a=s.component;n(s,2,0,a.form),n(s,7,0,a.form,a.model,a.fields,a.options)},function(n,s){var a=s.component;n(s,0,0,o["\u0275nov"](s,4).ngClassUntouched,o["\u0275nov"](s,4).ngClassTouched,o["\u0275nov"](s,4).ngClassPristine,o["\u0275nov"](s,4).ngClassDirty,o["\u0275nov"](s,4).ngClassValid,o["\u0275nov"](s,4).ngClassInvalid,o["\u0275nov"](s,4).ngClassPending),n(s,8,0,!a.form.valid)})}function D(n){return o["\u0275vid"](0,[(n()(),o["\u0275eld"](0,0,null,null,1,"formly-app-example",[],null,null,null,_,M)),o["\u0275did"](1,49152,null,0,t,[r],null,null)],null,null)}var O=o["\u0275ccf"]("formly-app-example",t,D,{},{},[]),R=a("Ip0R"),N=a("M2Lx"),A=a("eDkP"),G=a("Fzqc"),B=a("v9Dh"),I=a("ZYjt"),P=a("Wf4p"),L=a("mVsa"),J=a("6LlJ"),U=a("F6kA"),W=a("dWZg"),Z=a("lLAP"),q=a("4c35"),E=a("qAlS"),T=a("La40"),Y=a("SMsm"),z=a("UodH"),Q=a("5QwG"),V=a("vqwi"),X=a("WJWa"),H=a("aD/X"),K=a("rxDs"),$=a("bCbW"),nn=a("7yie"),sn=a("xWhi"),an=a("owZ6"),on=a("DwvE"),ln=a("XR12"),pn=a("Nsh5"),rn=a("8mMr"),tn=a("mqvi"),en=a("lhp3"),mn=a("izcw"),cn=a("z6f/"),dn=a("lYui"),un=a("QcTH"),fn=a("82Si"),gn=a("cJUE"),hn=a("eqw4"),jn=a("nyVy"),yn=a("7BuT"),bn=function(){return function(){}}(),vn=a("ZYCi"),wn=a("cIcG");a.d(s,"ConfigModuleNgFactory",function(){return kn});var kn=o["\u0275cmf"](m,[],function(n){return o["\u0275mod"]([o["\u0275mpd"](512,o.ComponentFactoryResolver,o["\u0275CodegenComponentFactoryResolver"],[[8,[i.a,c.a,d.a,u.a,f.a,g.a,h.a,j.a,y.a,b.a,v.a,w.a,k.a,O]],[3,o.ComponentFactoryResolver],o.NgModuleRef]),o["\u0275mpd"](4608,R.NgLocalization,R.NgLocaleLocalization,[o.LOCALE_ID,[2,R["\u0275angular_packages_common_common_a"]]]),o["\u0275mpd"](4608,N.c,N.c,[]),o["\u0275mpd"](4608,A.c,A.c,[A.i,A.e,o.ComponentFactoryResolver,A.h,A.f,o.Injector,o.NgZone,R.DOCUMENT,G.b,[2,R.Location]]),o["\u0275mpd"](5120,A.j,A.k,[A.c]),o["\u0275mpd"](5120,B.b,B.c,[A.c]),o["\u0275mpd"](4608,I.f,P.c,[[2,P.g],[2,P.l]]),o["\u0275mpd"](5120,L.b,L.g,[A.c]),o["\u0275mpd"](4608,J.a,J.a,[]),o["\u0275mpd"](4608,U.a,U.a,[]),o["\u0275mpd"](4608,l.FormBuilder,l.FormBuilder,[]),o["\u0275mpd"](4608,l["\u0275angular_packages_forms_forms_j"],l["\u0275angular_packages_forms_forms_j"],[]),o["\u0275mpd"](4608,S.a,S.a,[C.b,o.ComponentFactoryResolver,o.Injector]),o["\u0275mpd"](4608,r,r,[]),o["\u0275mpd"](1073742336,R.CommonModule,R.CommonModule,[]),o["\u0275mpd"](1073742336,W.b,W.b,[]),o["\u0275mpd"](1073742336,N.d,N.d,[]),o["\u0275mpd"](1073742336,Z.a,Z.a,[]),o["\u0275mpd"](1073742336,G.a,G.a,[]),o["\u0275mpd"](1073742336,q.g,q.g,[]),o["\u0275mpd"](1073742336,E.ScrollingModule,E.ScrollingModule,[]),o["\u0275mpd"](1073742336,A.g,A.g,[]),o["\u0275mpd"](1073742336,P.l,P.l,[[2,P.d],[2,I.g]]),o["\u0275mpd"](1073742336,B.e,B.e,[]),o["\u0275mpd"](1073742336,P.v,P.v,[]),o["\u0275mpd"](1073742336,T.j,T.j,[]),o["\u0275mpd"](1073742336,L.e,L.e,[]),o["\u0275mpd"](1073742336,Y.c,Y.c,[]),o["\u0275mpd"](1073742336,z.c,z.c,[]),o["\u0275mpd"](1073742336,Q.b,Q.b,[]),o["\u0275mpd"](512,C.b,C.b,[]),o["\u0275mpd"](1024,C.a,function(n){return[{wrappers:[{name:"form-field",component:V.a}]},{types:[{name:"input",component:X.a,wrappers:["form-field"]}]},{types:[{name:"textarea",component:H.a,wrappers:["form-field"]}]},{types:[{name:"radio",component:K.a,wrappers:["form-field"]}]},{types:[{name:"checkbox",component:$.a,wrappers:["form-field"]}]},{types:[{name:"multicheckbox",component:nn.a,wrappers:["form-field"]}]},{types:[{name:"select",component:sn.a,wrappers:["form-field"]}]},{wrappers:[{name:"addons",component:an.a}],extensions:[{name:"addons",extension:{postPopulate:on.a}}]},ln.b(n),{}]},[C.b]),o["\u0275mpd"](1073742336,ln.a,ln.a,[C.b,[2,C.a]]),o["\u0275mpd"](1073742336,pn.h,pn.h,[]),o["\u0275mpd"](1073742336,rn.b,rn.b,[]),o["\u0275mpd"](1073742336,tn.a,tn.a,[]),o["\u0275mpd"](1073742336,l["\u0275angular_packages_forms_forms_bc"],l["\u0275angular_packages_forms_forms_bc"],[]),o["\u0275mpd"](1073742336,l.ReactiveFormsModule,l.ReactiveFormsModule,[]),o["\u0275mpd"](1073742336,en.a,en.a,[]),o["\u0275mpd"](1073742336,mn.a,mn.a,[]),o["\u0275mpd"](1073742336,cn.a,cn.a,[]),o["\u0275mpd"](1073742336,dn.a,dn.a,[]),o["\u0275mpd"](1073742336,un.a,un.a,[]),o["\u0275mpd"](1073742336,fn.a,fn.a,[]),o["\u0275mpd"](1073742336,gn.a,gn.a,[]),o["\u0275mpd"](1073742336,hn.a,hn.a,[]),o["\u0275mpd"](1073742336,jn.a,jn.a,[]),o["\u0275mpd"](1073742336,yn.a,yn.a,[]),o["\u0275mpd"](1073742336,bn,bn,[]),o["\u0275mpd"](1073742336,vn.s,vn.s,[[2,vn.y],[2,vn.p]]),o["\u0275mpd"](1073742336,m,m,[]),o["\u0275mpd"](1024,vn.n,function(){return[[{path:"",component:wn.a,data:e}]]},[])])})},OQAp:function(n,s){n.exports='<span class="hljs-keyword">import</span> { NgModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { CommonModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/common\'</span>;\n<span class="hljs-keyword">import</span> { ReactiveFormsModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n<span class="hljs-keyword">import</span> { FormlyModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n<span class="hljs-keyword">import</span> { FormlyBootstrapModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/bootstrap\'</span>;\n\n<span class="hljs-keyword">import</span> { AppComponent } <span class="hljs-keyword">from</span> <span class="hljs-string">\'./app.component\'</span>;\n<span class="hljs-keyword">import</span> { DataService } <span class="hljs-keyword">from</span> <span class="hljs-string">\'./data.service\'</span>;\n<span class="hljs-meta">@NgModule</span>({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot(),\n  ],\n  declarations: [\n    AppComponent,\n  ],\n  providers: [DataService],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppModule { }\n'},holT:function(n,s){n.exports="import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { ReactiveFormsModule } from '@angular/forms';\nimport { FormlyModule } from '@ngx-formly/core';\nimport { FormlyBootstrapModule } from '@ngx-formly/bootstrap';\n\nimport { AppComponent } from './app.component';\nimport { DataService } from './data.service';\n@NgModule({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot(),\n  ],\n  declarations: [\n    AppComponent,\n  ],\n  providers: [DataService],\n})\nexport class AppModule { }\n"},pE2D:function(n,s){n.exports='<form [formGroup]="form" (ngSubmit)="submit()">\n  <formly-form [model]="model" [fields]="fields" [options]="options" [form]="form"></formly-form>\n  <button type="submit" class="btn btn-primary submit-button" [disabled]="!form.valid">Submit</button>\n</form>\n'},wS3k:function(n,s){n.exports="import { Component } from '@angular/core';\nimport { FormGroup } from '@angular/forms';\nimport { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';\nimport { DataService } from './data.service';\n\n@Component({\n  selector: 'formly-app-example',\n  templateUrl: './app.component.html',\n})\nexport class AppComponent {\n  form = new FormGroup({});\n  model: any = {};\n  options: FormlyFormOptions = {};\n\n  fields: FormlyFieldConfig[] = [\n    {\n      key: 'sport',\n      type: 'select',\n      templateOptions: {\n        label: 'Sport',\n        options: this.dataService.getSports(),\n        valueProp: 'id',\n        labelProp: 'name',\n      },\n    },\n  ];\n\n  constructor(private dataService: DataService) {}\n\n  submit() {\n    alert(JSON.stringify(this.model));\n  }\n}\n"},yFFy:function(n,s){n.exports='<span class="hljs-tag">&lt;<span class="hljs-name">form</span> [<span class="hljs-attr">formGroup</span>]=<span class="hljs-string">"form"</span> (<span class="hljs-attr">ngSubmit</span>)=<span class="hljs-string">"submit()"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">formly-form</span> [<span class="hljs-attr">model</span>]=<span class="hljs-string">"model"</span> [<span class="hljs-attr">fields</span>]=<span class="hljs-string">"fields"</span> [<span class="hljs-attr">options</span>]=<span class="hljs-string">"options"</span> [<span class="hljs-attr">form</span>]=<span class="hljs-string">"form"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">formly-form</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"submit"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-primary submit-button"</span> [<span class="hljs-attr">disabled</span>]=<span class="hljs-string">"!form.valid"</span>&gt;</span>Submit<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">form</span>&gt;</span>\n'}}]);