"use strict";(self.webpackChunkdnguyen_portfolio=self.webpackChunkdnguyen_portfolio||[]).push([[120],{1120:(l,s,i)=>{i.r(s),i.d(s,{pwa_action_sheet:()=>o});var e=i(3404);const o=class{constructor(t){(0,e.r)(this,t),this.onSelection=(0,e.c)(this,"onSelection",7),this.header=void 0,this.cancelable=!0,this.options=[],this.open=!1}componentDidLoad(){requestAnimationFrame(()=>{this.open=!0})}dismiss(){this.cancelable&&this.close()}close(){this.open=!1,setTimeout(()=>{this.el.parentNode.removeChild(this.el)},500)}handleOptionClick(t,n){t.stopPropagation(),this.onSelection.emit(n),this.close()}render(){return(0,e.h)("div",{class:"wrapper"+(this.open?" open":""),onClick:()=>this.dismiss()},(0,e.h)("div",{class:"content"},(0,e.h)("div",{class:"title"},this.header),this.options.map((t,n)=>(0,e.h)("div",{class:"action-sheet-option",onClick:r=>this.handleOptionClick(r,n)},(0,e.h)("div",{class:"action-sheet-button"},t.title)))))}get el(){return(0,e.g)(this)}};o.style=':host{z-index:1000;position:fixed;top:0;left:0;width:100%;height:100%;display:-ms-flexbox;display:flex;contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:-apple-system, BlinkMacSystemFont, "Helvetica Neue", "Roboto", sans-serif}.wrapper{-ms-flex:1;flex:1;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;background-color:rgba(0, 0, 0, 0);-webkit-transition:400ms background-color cubic-bezier(.36,.66,.04,1);transition:400ms background-color cubic-bezier(.36,.66,.04,1)}.wrapper.open{background-color:rgba(0, 0, 0, 0.32)}.title{color:#999;height:23px;line-height:23px;padding-bottom:17px;-webkit-padding-end:16px;padding-inline-end:16px;-webkit-padding-start:16px;padding-inline-start:16px;padding-left:16px;padding-right:16px;padding-top:20px}.content{width:568px;-ms-flex-item-align:end;align-self:flex-end;background-color:#fff;-webkit-transition:400ms -webkit-transform cubic-bezier(.36,.66,.04,1);transition:400ms -webkit-transform cubic-bezier(.36,.66,.04,1);transition:400ms transform cubic-bezier(.36,.66,.04,1);transition:400ms transform cubic-bezier(.36,.66,.04,1), 400ms -webkit-transform cubic-bezier(.36,.66,.04,1);-webkit-transform:translateY(100%);transform:translateY(100%)}.wrapper.open .content{-webkit-transform:translateY(0%);transform:translateY(0%)}@media only screen and (max-width: 568px){.content{width:100%}}.action-sheet-option{cursor:pointer;height:52px;line-height:52px}.action-sheet-button{color:rgb(38, 38, 38);font-size:16px;-webkit-padding-end:16px;padding-inline-end:16px;-webkit-padding-start:16px;padding-inline-start:16px;padding-left:16px;padding-right:16px;padding-top:0px}.action-sheet-button:hover{background-color:#F6F6F6}'}}]);