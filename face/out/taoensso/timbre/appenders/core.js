// Compiled by ClojureScript 1.7.170 {}
goog.provide('taoensso.timbre.appenders.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('taoensso.encore');
/**
 * Returns a simple `println` appender for Clojure/Script.
 *   Use with ClojureScript requires that `cljs.core/*print-fn*` be set.
 * 
 *   :stream (clj only) - e/o #{:auto :*out* :*err* :std-err :std-out <io-stream>}.
 */
taoensso.timbre.appenders.core.println_appender = (function taoensso$timbre$appenders$core$println_appender(var_args){
var args__26330__auto__ = [];
var len__26323__auto___46373 = arguments.length;
var i__26324__auto___46374 = (0);
while(true){
if((i__26324__auto___46374 < len__26323__auto___46373)){
args__26330__auto__.push((arguments[i__26324__auto___46374]));

var G__46375 = (i__26324__auto___46374 + (1));
i__26324__auto___46374 = G__46375;
continue;
} else {
}
break;
}

var argseq__26331__auto__ = ((((0) < args__26330__auto__.length))?(new cljs.core.IndexedSeq(args__26330__auto__.slice((0)),(0))):null);
return taoensso.timbre.appenders.core.println_appender.cljs$core$IFn$_invoke$arity$variadic(argseq__26331__auto__);
});

taoensso.timbre.appenders.core.println_appender.cljs$core$IFn$_invoke$arity$variadic = (function (p__46369){
var vec__46370 = p__46369;
var _opts = cljs.core.nth.call(null,vec__46370,(0),null);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),true,new cljs.core.Keyword(null,"async?","async?",1523057758),false,new cljs.core.Keyword(null,"min-level","min-level",1634684919),null,new cljs.core.Keyword(null,"rate-limit","rate-limit",1748082022),null,new cljs.core.Keyword(null,"output-fn","output-fn",1600951539),new cljs.core.Keyword(null,"inherit","inherit",-1840815422),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (vec__46370,_opts){
return (function (data){
var map__46371 = data;
var map__46371__$1 = ((((!((map__46371 == null)))?((((map__46371.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46371.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46371):map__46371);
var output_fn = cljs.core.get.call(null,map__46371__$1,new cljs.core.Keyword(null,"output-fn","output-fn",1600951539));
return cljs.core.println.call(null,output_fn.call(null,data));
});})(vec__46370,_opts))
], null);
});

taoensso.timbre.appenders.core.println_appender.cljs$lang$maxFixedArity = (0);

taoensso.timbre.appenders.core.println_appender.cljs$lang$applyTo = (function (seq46368){
return taoensso.timbre.appenders.core.println_appender.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46368));
});
/**
 * Returns a simple js/console appender for ClojureScript, or nil if no
 *   js/console exists.
 */
taoensso.timbre.appenders.core.console__QMARK_appender = (function taoensso$timbre$appenders$core$console__QMARK_appender(){
var temp__4657__auto__ = (function (){var and__25253__auto__ = typeof console !== 'undefined';
if(and__25253__auto__){
return console.log;
} else {
return and__25253__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var have_logger_QMARK_ = temp__4657__auto__;
var have_warn_logger_QMARK_ = console.warn;
var have_error_logger_QMARK_ = console.error;
var level__GT_logger = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fatal","fatal",1874419888),(cljs.core.truth_(have_error_logger_QMARK_)?new cljs.core.Keyword(null,"error","error",-978969032):new cljs.core.Keyword(null,"info","info",-317069002)),new cljs.core.Keyword(null,"error","error",-978969032),(cljs.core.truth_(have_error_logger_QMARK_)?new cljs.core.Keyword(null,"error","error",-978969032):new cljs.core.Keyword(null,"info","info",-317069002)),new cljs.core.Keyword(null,"warn","warn",-436710552),(cljs.core.truth_(have_warn_logger_QMARK_)?new cljs.core.Keyword(null,"warn","warn",-436710552):new cljs.core.Keyword(null,"info","info",-317069002))], null);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),true,new cljs.core.Keyword(null,"async?","async?",1523057758),false,new cljs.core.Keyword(null,"min-level","min-level",1634684919),null,new cljs.core.Keyword(null,"rate-limit","rate-limit",1748082022),null,new cljs.core.Keyword(null,"output-fn","output-fn",1600951539),new cljs.core.Keyword(null,"inherit","inherit",-1840815422),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (have_warn_logger_QMARK_,have_error_logger_QMARK_,level__GT_logger,have_logger_QMARK_,temp__4657__auto__){
return (function (data){
var map__46380 = data;
var map__46380__$1 = ((((!((map__46380 == null)))?((((map__46380.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46380.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46380):map__46380);
var level = cljs.core.get.call(null,map__46380__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var output_fn = cljs.core.get.call(null,map__46380__$1,new cljs.core.Keyword(null,"output-fn","output-fn",1600951539));
var vargs_ = cljs.core.get.call(null,map__46380__$1,new cljs.core.Keyword(null,"vargs_","vargs_",552132148));
var vargs = cljs.core.force.call(null,vargs_);
var vec__46381 = taoensso.encore.vsplit_first.call(null,vargs);
var v1 = cljs.core.nth.call(null,vec__46381,(0),null);
var vnext = cljs.core.nth.call(null,vec__46381,(1),null);
var output = ((cljs.core._EQ_.call(null,v1,new cljs.core.Keyword("timbre","raw","timbre/raw",-1823417723)))?cljs.core.into_array.call(null,vnext):output_fn.call(null,data));
var G__46383 = (((level__GT_logger.call(null,level) instanceof cljs.core.Keyword))?level__GT_logger.call(null,level).fqn:null);
switch (G__46383) {
case "error":
return console.error(output);

break;
case "warn":
return console.warn(output);

break;
default:
return console.log(output);

}
});})(have_warn_logger_QMARK_,have_error_logger_QMARK_,level__GT_logger,have_logger_QMARK_,temp__4657__auto__))
], null);
} else {
return null;
}
});

//# sourceMappingURL=core.js.map