// Compiled by ClojureScript 1.7.170 {}
goog.provide('taoensso.truss.impl');
goog.require('cljs.core');
goog.require('clojure.set');
taoensso.truss.impl.rsome = (function taoensso$truss$impl$rsome(pred,coll){
return cljs.core.reduce.call(null,(function (acc,in$){
var temp__4657__auto__ = pred.call(null,in$);
if(cljs.core.truth_(temp__4657__auto__)){
var p = temp__4657__auto__;
return cljs.core.reduced.call(null,p);
} else {
return null;
}
}),null,coll);
});
taoensso.truss.impl.revery_QMARK_ = (function taoensso$truss$impl$revery_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (acc,in$){
if(cljs.core.truth_(pred.call(null,in$))){
return true;
} else {
return cljs.core.reduced.call(null,null);
}
}),true,coll);
});
taoensso.truss.impl.set_STAR_ = (function taoensso$truss$impl$set_STAR_(x){
if(cljs.core.set_QMARK_.call(null,x)){
return x;
} else {
return cljs.core.set.call(null,x);
}
});
taoensso.truss.impl.ks_EQ_ = (function taoensso$truss$impl$ks_EQ_(ks,m){
return cljs.core._EQ_.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,m)),taoensso.truss.impl.set_STAR_.call(null,ks));
});
taoensso.truss.impl.ks_LT__EQ_ = (function taoensso$truss$impl$ks_LT__EQ_(ks,m){
return clojure.set.subset_QMARK_.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,m)),taoensso.truss.impl.set_STAR_.call(null,ks));
});
taoensso.truss.impl.ks_GT__EQ_ = (function taoensso$truss$impl$ks_GT__EQ_(ks,m){
return clojure.set.superset_QMARK_.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,m)),taoensso.truss.impl.set_STAR_.call(null,ks));
});
taoensso.truss.impl.ks_nnil_QMARK_ = (function taoensso$truss$impl$ks_nnil_QMARK_(ks,m){
return taoensso.truss.impl.revery_QMARK_.call(null,(function (p1__45992_SHARP_){
return !((cljs.core.get.call(null,m,p1__45992_SHARP_) == null));
}),ks);
});
taoensso.truss.impl.now_dt = (function taoensso$truss$impl$now_dt(){
return (new Date());
});
taoensso.truss.impl._STAR___QMARK_data_STAR_ = null;
taoensso.truss.impl.non_throwing = (function taoensso$truss$impl$non_throwing(pred){
return (function (x){
try{return pred.call(null,x);
}catch (e45994){if((e45994 instanceof Error)){
var _ = e45994;
return null;
} else {
throw e45994;

}
}});
});
/**
 * Predicate shorthand transformations for convenience
 */
taoensso.truss.impl._invar_pred = (function taoensso$truss$impl$_invar_pred(pred_form){
if(!(cljs.core.vector_QMARK_.call(null,pred_form))){
return pred_form;
} else {
var vec__46000 = pred_form;
var type = cljs.core.nth.call(null,vec__46000,(0),null);
var p1 = cljs.core.nth.call(null,vec__46000,(1),null);
var p2 = cljs.core.nth.call(null,vec__46000,(2),null);
var more = cljs.core.nthnext.call(null,vec__46000,(3));
var G__46001 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__46001) {
case "el":
return ((function (G__46001,vec__46000,type,p1,p2,more){
return (function (x){
return cljs.core.contains_QMARK_.call(null,taoensso.truss.impl.set_STAR_.call(null,p1),x);
});
;})(G__46001,vec__46000,type,p1,p2,more))

break;
case "ks-nnil?":
return ((function (G__46001,vec__46000,type,p1,p2,more){
return (function (x){
return taoensso.truss.impl.ks_nnil_QMARK_.call(null,p1,x);
});
;})(G__46001,vec__46000,type,p1,p2,more))

break;
case "ks<=":
return ((function (G__46001,vec__46000,type,p1,p2,more){
return (function (x){
return taoensso.truss.impl.ks_LT__EQ_.call(null,p1,x);
});
;})(G__46001,vec__46000,type,p1,p2,more))

break;
case "or":
return ((function (G__46001,vec__46000,type,p1,p2,more){
return (function (x){
var or__25265__auto__ = (cljs.core.truth_(p1)?taoensso.truss.impl.non_throwing.call(null,taoensso$truss$impl$_invar_pred.call(null,p1)).call(null,x):null);
if(cljs.core.truth_(or__25265__auto__)){
return or__25265__auto__;
} else {
var or__25265__auto____$1 = (cljs.core.truth_(p2)?taoensso.truss.impl.non_throwing.call(null,taoensso$truss$impl$_invar_pred.call(null,p2)).call(null,x):null);
if(cljs.core.truth_(or__25265__auto____$1)){
return or__25265__auto____$1;
} else {
return taoensso.truss.impl.rsome.call(null,((function (or__25265__auto____$1,or__25265__auto__,G__46001,vec__46000,type,p1,p2,more){
return (function (p1__45996_SHARP_){
return taoensso.truss.impl.non_throwing.call(null,taoensso$truss$impl$_invar_pred.call(null,p1__45996_SHARP_)).call(null,x);
});})(or__25265__auto____$1,or__25265__auto__,G__46001,vec__46000,type,p1,p2,more))
,more);
}
}
});
;})(G__46001,vec__46000,type,p1,p2,more))

break;
case "not":
return ((function (G__46001,vec__46000,type,p1,p2,more){
return (function (x){
var and__25253__auto__ = ((cljs.core.not.call(null,p1))?true:cljs.core.not.call(null,taoensso$truss$impl$_invar_pred.call(null,p1).call(null,x)));
if(and__25253__auto__){
var and__25253__auto____$1 = ((cljs.core.not.call(null,p2))?true:cljs.core.not.call(null,taoensso$truss$impl$_invar_pred.call(null,p2).call(null,x)));
if(and__25253__auto____$1){
return taoensso.truss.impl.revery_QMARK_.call(null,((function (and__25253__auto____$1,and__25253__auto__,G__46001,vec__46000,type,p1,p2,more){
return (function (p1__45995_SHARP_){
return cljs.core.not.call(null,taoensso$truss$impl$_invar_pred.call(null,p1__45995_SHARP_).call(null,x));
});})(and__25253__auto____$1,and__25253__auto__,G__46001,vec__46000,type,p1,p2,more))
,more);
} else {
return and__25253__auto____$1;
}
} else {
return and__25253__auto__;
}
});
;})(G__46001,vec__46000,type,p1,p2,more))

break;
case "ks=":
return ((function (G__46001,vec__46000,type,p1,p2,more){
return (function (x){
return taoensso.truss.impl.ks_EQ_.call(null,p1,x);
});
;})(G__46001,vec__46000,type,p1,p2,more))

break;
case "and":
return ((function (G__46001,vec__46000,type,p1,p2,more){
return (function (x){
var and__25253__auto__ = ((cljs.core.not.call(null,p1))?true:taoensso$truss$impl$_invar_pred.call(null,p1).call(null,x));
if(cljs.core.truth_(and__25253__auto__)){
var and__25253__auto____$1 = ((cljs.core.not.call(null,p2))?true:taoensso$truss$impl$_invar_pred.call(null,p2).call(null,x));
if(cljs.core.truth_(and__25253__auto____$1)){
return taoensso.truss.impl.revery_QMARK_.call(null,((function (and__25253__auto____$1,and__25253__auto__,G__46001,vec__46000,type,p1,p2,more){
return (function (p1__45997_SHARP_){
return taoensso$truss$impl$_invar_pred.call(null,p1__45997_SHARP_).call(null,x);
});})(and__25253__auto____$1,and__25253__auto__,G__46001,vec__46000,type,p1,p2,more))
,more);
} else {
return and__25253__auto____$1;
}
} else {
return and__25253__auto__;
}
});
;})(G__46001,vec__46000,type,p1,p2,more))

break;
case "ks>=":
return ((function (G__46001,vec__46000,type,p1,p2,more){
return (function (x){
return taoensso.truss.impl.ks_GT__EQ_.call(null,p1,x);
});
;})(G__46001,vec__46000,type,p1,p2,more))

break;
case "not-in":
return ((function (G__46001,vec__46000,type,p1,p2,more){
return (function (x){
return !(cljs.core.contains_QMARK_.call(null,taoensso.truss.impl.set_STAR_.call(null,p1),x));
});
;})(G__46001,vec__46000,type,p1,p2,more))

break;
case "not-el":
return ((function (G__46001,vec__46000,type,p1,p2,more){
return (function (x){
return !(cljs.core.contains_QMARK_.call(null,taoensso.truss.impl.set_STAR_.call(null,p1),x));
});
;})(G__46001,vec__46000,type,p1,p2,more))

break;
case "set<=":
return ((function (G__46001,vec__46000,type,p1,p2,more){
return (function (x){
return clojure.set.subset_QMARK_.call(null,taoensso.truss.impl.set_STAR_.call(null,x),taoensso.truss.impl.set_STAR_.call(null,p1));
});
;})(G__46001,vec__46000,type,p1,p2,more))

break;
case "set>=":
return ((function (G__46001,vec__46000,type,p1,p2,more){
return (function (x){
return clojure.set.superset_QMARK_.call(null,taoensso.truss.impl.set_STAR_.call(null,x),taoensso.truss.impl.set_STAR_.call(null,p1));
});
;})(G__46001,vec__46000,type,p1,p2,more))

break;
case "set=":
return ((function (G__46001,vec__46000,type,p1,p2,more){
return (function (x){
return cljs.core._EQ_.call(null,taoensso.truss.impl.set_STAR_.call(null,x),taoensso.truss.impl.set_STAR_.call(null,p1));
});
;})(G__46001,vec__46000,type,p1,p2,more))

break;
case "in":
return ((function (G__46001,vec__46000,type,p1,p2,more){
return (function (x){
return cljs.core.contains_QMARK_.call(null,taoensso.truss.impl.set_STAR_.call(null,p1),x);
});
;})(G__46001,vec__46000,type,p1,p2,more))

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
}
});
taoensso.truss.impl._assertion_error = (function taoensso$truss$impl$_assertion_error(msg){
return (new Error(msg));
});
taoensso.truss.impl._invar_undefined_val = new cljs.core.Keyword("invariant","undefined-val","invariant/undefined-val",-906909938);
taoensso.truss.impl._invar_violation_BANG_ = (function taoensso$truss$impl$_invar_violation_BANG_(var_args){
var args46003 = [];
var len__26323__auto___46007 = arguments.length;
var i__26324__auto___46008 = (0);
while(true){
if((i__26324__auto___46008 < len__26323__auto___46007)){
args46003.push((arguments[i__26324__auto___46008]));

var G__46009 = (i__26324__auto___46008 + (1));
i__26324__auto___46008 = G__46009;
continue;
} else {
}
break;
}

var G__46005 = args46003.length;
switch (G__46005) {
case 0:
return taoensso.truss.impl._invar_violation_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 7:
return taoensso.truss.impl._invar_violation_BANG_.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46003.length)].join('')));

}
});

taoensso.truss.impl._invar_violation_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
throw cljs.core.ex_info.call(null,"Invariant violation",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"invariant-violation?","invariant-violation?",-356256378),true], null));
});

taoensso.truss.impl._invar_violation_BANG_.cljs$core$IFn$_invoke$arity$7 = (function (assertion_QMARK_,ns_str,_QMARK_line,form,val,_QMARK_err,_QMARK_data_fn){
var fmt_msg = (function (x1,x2,x3,x4){
return [cljs.core.str("Invariant violation in `"),cljs.core.str(x1),cljs.core.str(":"),cljs.core.str(x2),cljs.core.str("` [pred-form, val]:"),cljs.core.str("\n ["),cljs.core.str(x3),cljs.core.str(", "),cljs.core.str(x4),cljs.core.str("]")].join('');
});
var line_str = (function (){var or__25265__auto__ = _QMARK_line;
if(cljs.core.truth_(or__25265__auto__)){
return or__25265__auto__;
} else {
return "?";
}
})();
var form_str = [cljs.core.str(form)].join('');
var undefn_val_QMARK_ = cljs.core._EQ_.call(null,val,taoensso.truss.impl._invar_undefined_val);
var val_str = ((undefn_val_QMARK_)?"<undefined>":[cljs.core.str((function (){var or__25265__auto__ = val;
if(cljs.core.truth_(or__25265__auto__)){
return or__25265__auto__;
} else {
return "<nil>";
}
})())].join(''));
var dummy_err_QMARK_ = new cljs.core.Keyword(null,"invariant-violation?","invariant-violation?",-356256378).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,_QMARK_err));
var _QMARK_err__$1 = (cljs.core.truth_(dummy_err_QMARK_)?null:_QMARK_err);
var _QMARK_err_str = (function (){var temp__4657__auto__ = _QMARK_err__$1;
if(cljs.core.truth_(temp__4657__auto__)){
var e = temp__4657__auto__;
return [cljs.core.str(_QMARK_err__$1)].join('');
} else {
return null;
}
})();
var msg = (function (){var msg = fmt_msg.call(null,ns_str,line_str,form_str,val_str);
if(cljs.core.not.call(null,_QMARK_err__$1)){
return msg;
} else {
if(undefn_val_QMARK_){
return [cljs.core.str(msg),cljs.core.str("\n`val` error: "),cljs.core.str(_QMARK_err_str)].join('');
} else {
return [cljs.core.str(msg),cljs.core.str("\n`pred-form` error: "),cljs.core.str(_QMARK_err_str)].join('');

}
}
})();
var _QMARK_data = (function (){var temp__4657__auto__ = _QMARK_data_fn;
if(cljs.core.truth_(temp__4657__auto__)){
var data_fn = temp__4657__auto__;
try{return data_fn.call(null);
}catch (e46006){if((e46006 instanceof Error)){
var e = e46006;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-error","data-error",-1058016301),e], null);
} else {
throw e46006;

}
}} else {
return null;
}
})();
throw cljs.core.ex_info.call(null,msg,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"*?data*","*?data*",1047537922),new cljs.core.Keyword(null,"elidable?","elidable?",248362249),new cljs.core.Keyword(null,"dt","dt",-368444759),new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"ns-str","ns-str",-2062616499),new cljs.core.Keyword(null,"val-type","val-type",-279850094),new cljs.core.Keyword(null,"?err","?err",549653299),new cljs.core.Keyword(null,"*assert*","*assert*",-160895053),new cljs.core.Keyword(null,"?data","?data",-9471433),new cljs.core.Keyword(null,"?line","?line",-631853385),new cljs.core.Keyword(null,"form-str","form-str",871608859)],[taoensso.truss.impl._STAR___QMARK_data_STAR_,assertion_QMARK_,taoensso.truss.impl.now_dt.call(null),((undefn_val_QMARK_)?new cljs.core.Symbol("undefined","threw-error","undefined/threw-error",-2085122794,null):val),ns_str,((undefn_val_QMARK_)?new cljs.core.Symbol("undefined","threw-error","undefined/threw-error",-2085122794,null):cljs.core.type.call(null,val)),_QMARK_err__$1,cljs.core._STAR_assert_STAR_,_QMARK_data,_QMARK_line,form_str]));
});

taoensso.truss.impl._invar_violation_BANG_.cljs$lang$maxFixedArity = 7;

//# sourceMappingURL=impl.js.map