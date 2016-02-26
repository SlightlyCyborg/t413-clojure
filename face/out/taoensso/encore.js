// Compiled by ClojureScript 1.7.170 {}
goog.provide('taoensso.encore');
goog.require('cljs.core');
goog.require('goog.net.XhrIoPool');
goog.require('goog.events');
goog.require('clojure.set');
goog.require('cljs.tools.reader.edn');
goog.require('taoensso.truss');
goog.require('goog.net.XhrIo');
goog.require('goog.Uri.QueryData');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.string.StringBuffer');
goog.require('goog.net.EventType');
goog.require('goog.structs');
goog.require('goog.string.format');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('goog.net.ErrorCode');
taoensso.encore.as__QMARK_int;
/**
 * Used for lib-consumer version assertions
 */
taoensso.encore.encore_version = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(33),(0)], null);
taoensso.encore.assert_min_encore_version = (function taoensso$encore$assert_min_encore_version(min_version){
var vec__45189 = taoensso.encore.encore_version;
var xc = cljs.core.nth.call(null,vec__45189,(0),null);
var yc = cljs.core.nth.call(null,vec__45189,(1),null);
var zc = cljs.core.nth.call(null,vec__45189,(2),null);
var vec__45190 = ((cljs.core.vector_QMARK_.call(null,min_version))?min_version:cljs.core.re_seq.call(null,/\d+/,[cljs.core.str(min_version)].join('')));
var xm = cljs.core.nth.call(null,vec__45190,(0),null);
var ym = cljs.core.nth.call(null,vec__45190,(1),null);
var zm = cljs.core.nth.call(null,vec__45190,(2),null);
var vec__45191 = cljs.core.mapv.call(null,((function (vec__45189,xc,yc,zc,vec__45190,xm,ym,zm){
return (function (p1__45185_SHARP_){
var or__25265__auto__ = taoensso.encore.as__QMARK_int.call(null,p1__45185_SHARP_);
if(cljs.core.truth_(or__25265__auto__)){
return or__25265__auto__;
} else {
return (0);
}
});})(vec__45189,xc,yc,zc,vec__45190,xm,ym,zm))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xm,ym,zm], null));
var xm__$1 = cljs.core.nth.call(null,vec__45191,(0),null);
var ym__$1 = cljs.core.nth.call(null,vec__45191,(1),null);
var zm__$1 = cljs.core.nth.call(null,vec__45191,(2),null);
if(((xc > xm__$1)) || ((cljs.core._EQ_.call(null,xc,xm__$1)) && (((yc > ym__$1)) || ((cljs.core._EQ_.call(null,yc,ym__$1)) && ((zc >= zm__$1)))))){
return null;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Insufficient com.taoensso/encore version. You may have a Leiningen dependency conflict (see http://goo.gl/qBbLvC for solution).")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min-version","min-version",-1697197126),clojure.string.join.call(null,".",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xm__$1,ym__$1,zm__$1], null)),new cljs.core.Keyword(null,"your-version","your-version",-351781765),clojure.string.join.call(null,".",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xc,yc,zc], null))], null));
}
});
/**
 * Handles optional docstrings & attr maps for a macro def's name.
 *   Stolen from `clojure.tools.macro`.
 */
taoensso.encore.name_with_attrs = (function taoensso$encore$name_with_attrs(name,macro_args){
var vec__45194 = ((typeof cljs.core.first.call(null,macro_args) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,macro_args),cljs.core.next.call(null,macro_args)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,macro_args], null));
var docstring = cljs.core.nth.call(null,vec__45194,(0),null);
var macro_args__$1 = cljs.core.nth.call(null,vec__45194,(1),null);
var vec__45195 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,macro_args__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,macro_args__$1),cljs.core.next.call(null,macro_args__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,macro_args__$1], null));
var attr = cljs.core.nth.call(null,vec__45195,(0),null);
var macro_args__$2 = cljs.core.nth.call(null,vec__45195,(1),null);
var attr__$1 = (cljs.core.truth_(docstring)?cljs.core.assoc.call(null,attr,new cljs.core.Keyword(null,"doc","doc",1913296891),docstring):attr);
var attr__$2 = (cljs.core.truth_(cljs.core.meta.call(null,name))?cljs.core.conj.call(null,cljs.core.meta.call(null,name),attr__$1):attr__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta.call(null,name,attr__$2),macro_args__$2], null);
});
taoensso.encore.get_dynamic_assertion_data = (function taoensso$encore$get_dynamic_assertion_data(){
return taoensso.truss.get_dynamic_assertion_data.call(null);
});
taoensso.encore.map_keys;

taoensso.encore.kw_identical_QMARK_;
/**
 * Experimental. Attempts to pave over differences in:
 *  `clojure.edn/read-string`, `clojure.tools.edn/read-string`,
 *  `cljs.reader/read-string`, `cljs.tools.reader/read-string`.
 * `cljs.reader` in particular can be a bit of a pain.
 */
taoensso.encore.read_edn = (function taoensso$encore$read_edn(var_args){
var args45196 = [];
var len__26323__auto___45199 = arguments.length;
var i__26324__auto___45200 = (0);
while(true){
if((i__26324__auto___45200 < len__26323__auto___45199)){
args45196.push((arguments[i__26324__auto___45200]));

var G__45201 = (i__26324__auto___45200 + (1));
i__26324__auto___45200 = G__45201;
continue;
} else {
}
break;
}

var G__45198 = args45196.length;
switch (G__45198) {
case 1:
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45196.length)].join('')));

}
});

taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$1 = (function (s){
return taoensso.encore.read_edn.call(null,null,s);
});

taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$2 = (function (opts,s){
if(((s == null)) || ((s === ""))){
return null;
} else {
if(!(typeof s === 'string')){
throw cljs.core.ex_info.call(null,"`read-edn` attempt against non-nil, non-string arg",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arg","arg",-1747261837),s,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,s)], null));
} else {
var readers = cljs.core.get.call(null,opts,new cljs.core.Keyword(null,"readers","readers",-2118263030),new cljs.core.Keyword("taoensso.encore","dynamic","taoensso.encore/dynamic",-1726758399));
var default$ = cljs.core.get.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("taoensso.encore","dynamic","taoensso.encore/dynamic",-1726758399));
var readers__$1 = ((cljs.core.not.call(null,taoensso.encore.kw_identical_QMARK_.call(null,readers,new cljs.core.Keyword("taoensso.encore","dynamic","taoensso.encore/dynamic",-1726758399))))?readers:taoensso.encore.map_keys.call(null,cljs.core.symbol,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_)));
var default$__$1 = ((cljs.core.not.call(null,taoensso.encore.kw_identical_QMARK_.call(null,default$,new cljs.core.Keyword("taoensso.encore","dynamic","taoensso.encore/dynamic",-1726758399))))?default$:cljs.core.deref.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_));
var opts__$1 = cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"readers","readers",-2118263030),readers__$1,new cljs.core.Keyword(null,"default","default",-1987822328),default$__$1], null));
return cljs.tools.reader.edn.read_string.call(null,opts__$1,s);
}
}
});

taoensso.encore.read_edn.cljs$lang$maxFixedArity = 2;
taoensso.encore.pr_edn = (function taoensso$encore$pr_edn(var_args){
var args45203 = [];
var len__26323__auto___45208 = arguments.length;
var i__26324__auto___45209 = (0);
while(true){
if((i__26324__auto___45209 < len__26323__auto___45208)){
args45203.push((arguments[i__26324__auto___45209]));

var G__45210 = (i__26324__auto___45209 + (1));
i__26324__auto___45209 = G__45210;
continue;
} else {
}
break;
}

var G__45205 = args45203.length;
switch (G__45205) {
case 1:
return taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45203.length)].join('')));

}
});

taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$1 = (function (x){
return taoensso.encore.pr_edn.call(null,null,x);
});

taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$2 = (function (_opts,x){
var _STAR_print_level_STAR_45206 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_length_STAR_45207 = cljs.core._STAR_print_length_STAR_;
cljs.core._STAR_print_level_STAR_ = null;

cljs.core._STAR_print_length_STAR_ = null;

try{return cljs.core.pr_str.call(null,x);
}finally {cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR_45207;

cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_45206;
}});

taoensso.encore.pr_edn.cljs$lang$maxFixedArity = 2;
taoensso.encore.error_QMARK_ = (function taoensso$encore$error_QMARK_(x){
return (x instanceof Error);
});
/**
 * Returns data map iff `x` is an error of any type on platform
 */
taoensso.encore.error_data = (function taoensso$encore$error_data(x){
var temp__4657__auto__ = (function (){var or__25265__auto__ = cljs.core.ex_data.call(null,x);
if(cljs.core.truth_(or__25265__auto__)){
return or__25265__auto__;
} else {
if((x instanceof Error)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return null;
}
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var data_map = temp__4657__auto__;
return cljs.core.merge.call(null,(function (){var err = x;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"err-type","err-type",-116717722),cljs.core.type.call(null,err),new cljs.core.Keyword(null,"err-msg","err-msg",-1158512684),err.message,new cljs.core.Keyword(null,"err-cause","err-cause",897008749),err.cause], null);
})(),data_map);
} else {
return null;
}
});
taoensso.encore.kw_identical_QMARK_ = cljs.core.keyword_identical_QMARK_;
taoensso.encore.stringy_QMARK_ = (function taoensso$encore$stringy_QMARK_(x){
return ((x instanceof cljs.core.Keyword)) || (typeof x === 'string');
});
taoensso.encore.atom_QMARK_ = (function taoensso$encore$atom_QMARK_(x){
return (x instanceof cljs.core.Atom);
});
taoensso.encore.named_QMARK_ = (function taoensso$encore$named_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition1$ & (4096))) || (x.cljs$core$INamed$)){
return true;
} else {
return false;
}
} else {
return false;
}
});
taoensso.encore.chan_QMARK_ = (function taoensso$encore$chan_QMARK_(x){
return (x instanceof cljs.core.async.impl.channels.ManyToManyChannel);
});
taoensso.encore.lazy_seq_QMARK_ = (function taoensso$encore$lazy_seq_QMARK_(x){
return (x instanceof cljs.core.LazySeq);
});
taoensso.encore.re_pattern_QMARK_ = (function taoensso$encore$re_pattern_QMARK_(x){
return (x instanceof RegExp);
});
taoensso.encore.nnil_QMARK_ = (function taoensso$encore$nnil_QMARK_(x){
return !((x == null));
});
taoensso.encore.nblank_QMARK_ = (function taoensso$encore$nblank_QMARK_(x){
return !(clojure.string.blank_QMARK_.call(null,x));
});
taoensso.encore.nneg_QMARK_ = (function taoensso$encore$nneg_QMARK_(x){
return !((x < (0)));
});
taoensso.encore.pos_int_QMARK_ = (function taoensso$encore$pos_int_QMARK_(x){
return (cljs.core.integer_QMARK_.call(null,x)) && ((x > (0)));
});
taoensso.encore.nneg_int_QMARK_ = (function taoensso$encore$nneg_int_QMARK_(x){
return (cljs.core.integer_QMARK_.call(null,x)) && (!((x < (0))));
});
taoensso.encore.nvec_QMARK_ = (function taoensso$encore$nvec_QMARK_(n,x){
return (cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),n));
});
taoensso.encore.set_STAR_;
taoensso.encore.udt_QMARK_ = taoensso.encore.nneg_int_QMARK_;
taoensso.encore.vec2_QMARK_ = (function taoensso$encore$vec2_QMARK_(x){
return taoensso.encore.nvec_QMARK_.call(null,(2),x);
});
taoensso.encore.vec3_QMARK_ = (function taoensso$encore$vec3_QMARK_(x){
return taoensso.encore.nvec_QMARK_.call(null,(3),x);
});
taoensso.encore.distinct_elements_QMARK_ = (function taoensso$encore$distinct_elements_QMARK_(x){
return (cljs.core.set_QMARK_.call(null,x)) || (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,taoensso.encore.set_STAR_.call(null,x))));
});
taoensso.encore.nblank_str_QMARK_ = (function taoensso$encore$nblank_str_QMARK_(x){
return (typeof x === 'string') && (!(clojure.string.blank_QMARK_.call(null,x)));
});
taoensso.encore.nneg_num_QMARK_ = (function taoensso$encore$nneg_num_QMARK_(x){
return (typeof x === 'number') && (!((x < (0))));
});
taoensso.encore.pos_num_QMARK_ = (function taoensso$encore$pos_num_QMARK_(x){
return (typeof x === 'number') && ((x > (0)));
});
taoensso.encore.zero_num_QMARK_ = (function taoensso$encore$zero_num_QMARK_(x){
return cljs.core._EQ_.call(null,(0),x);
});
taoensso.encore.as__QMARK_nblank = (function taoensso$encore$as__QMARK_nblank(x){
if(typeof x === 'string'){
if(clojure.string.blank_QMARK_.call(null,x)){
return null;
} else {
return x;
}
} else {
return null;
}
});
taoensso.encore.as__QMARK_kw = (function taoensso$encore$as__QMARK_kw(x){
if((x instanceof cljs.core.Keyword)){
return x;
} else {
if(typeof x === 'string'){
return cljs.core.keyword.call(null,x);
} else {
return null;
}
}
});
taoensso.encore.as__QMARK_name = (function taoensso$encore$as__QMARK_name(x){
if(cljs.core.truth_(taoensso.encore.named_QMARK_.call(null,x))){
return cljs.core.name.call(null,x);
} else {
if(typeof x === 'string'){
return x;
} else {
return null;
}
}
});
taoensso.encore.as__QMARK_qname = (function taoensso$encore$as__QMARK_qname(x){
if(cljs.core.truth_(taoensso.encore.named_QMARK_.call(null,x))){
var n = cljs.core.name.call(null,x);
var temp__4655__auto__ = cljs.core.namespace.call(null,x);
if(cljs.core.truth_(temp__4655__auto__)){
var ns = temp__4655__auto__;
return [cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(n)].join('');
} else {
return n;
}
} else {
if(typeof x === 'string'){
return x;
} else {
return null;
}
}
});
taoensso.encore.as__QMARK_int = (function taoensso$encore$as__QMARK_int(x){
if((x == null)){
return null;
} else {
if(typeof x === 'number'){
return cljs.core.long$.call(null,x);
} else {
if(typeof x === 'string'){
var x__$1 = parseInt(x,(10));
if(cljs.core.truth_(isNaN(x__$1))){
return null;
} else {
return x__$1;
}
} else {
return null;
}
}
}
});
taoensso.encore.as__QMARK_float = (function taoensso$encore$as__QMARK_float(x){
if((x == null)){
return null;
} else {
if(typeof x === 'number'){
return x;
} else {
if(typeof x === 'string'){
var x__$1 = parseFloat(x);
if(cljs.core.truth_(isNan(x__$1))){
return null;
} else {
return x__$1;
}
} else {
return null;
}
}
}
});
taoensso.encore.as__QMARK_bool = (function taoensso$encore$as__QMARK_bool(x){
if((x == null)){
return null;
} else {
if((x === true) || (x === false)){
return x;
} else {
if((cljs.core._EQ_.call(null,x,(0))) || (cljs.core._EQ_.call(null,x,"false")) || (cljs.core._EQ_.call(null,x,"FALSE")) || (cljs.core._EQ_.call(null,x,"0"))){
return false;
} else {
if((cljs.core._EQ_.call(null,x,(1))) || (cljs.core._EQ_.call(null,x,"true")) || (cljs.core._EQ_.call(null,x,"TRUE")) || (cljs.core._EQ_.call(null,x,"1"))){
return true;
} else {
return null;
}
}
}
}
});
taoensso.encore.as__QMARK_email = (function taoensso$encore$as__QMARK_email(_QMARK_s){
if(cljs.core.truth_(_QMARK_s)){
return cljs.core.re_find.call(null,/^[^\s@]+@[^\s@]+\.\S*[^\.]$/,clojure.string.trim.call(null,_QMARK_s));
} else {
return null;
}
});
taoensso.encore.as__QMARK_nemail = (function taoensso$encore$as__QMARK_nemail(_QMARK_s){
var temp__4657__auto__ = taoensso.encore.as__QMARK_email.call(null,_QMARK_s);
if(cljs.core.truth_(temp__4657__auto__)){
var email = temp__4657__auto__;
return clojure.string.lower_case.call(null,email);
} else {
return null;
}
});
taoensso.encore._QMARK_as_throw = (function taoensso$encore$_QMARK_as_throw(as_name,x){
throw cljs.core.ex_info.call(null,[cljs.core.str("nil as-?"),cljs.core.str(cljs.core.name.call(null,as_name)),cljs.core.str(" against arg: "),cljs.core.str(cljs.core.pr_str.call(null,x))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arg","arg",-1747261837),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,x)], null));
});
taoensso.encore.as_nblank = (function taoensso$encore$as_nblank(x){
var or__25265__auto__ = taoensso.encore.as__QMARK_nblank.call(null,x);
if(cljs.core.truth_(or__25265__auto__)){
return or__25265__auto__;
} else {
return taoensso.encore._QMARK_as_throw.call(null,new cljs.core.Keyword(null,"nblank","nblank",626815585),x);
}
});
taoensso.encore.as_kw = (function taoensso$encore$as_kw(x){
var or__25265__auto__ = taoensso.encore.as__QMARK_kw.call(null,x);
if(cljs.core.truth_(or__25265__auto__)){
return or__25265__auto__;
} else {
return taoensso.encore._QMARK_as_throw.call(null,new cljs.core.Keyword(null,"kw","kw",1158308175),x);
}
});
taoensso.encore.as_name = (function taoensso$encore$as_name(x){
var or__25265__auto__ = taoensso.encore.as__QMARK_name.call(null,x);
if(cljs.core.truth_(or__25265__auto__)){
return or__25265__auto__;
} else {
return taoensso.encore._QMARK_as_throw.call(null,new cljs.core.Keyword(null,"name","name",1843675177),x);
}
});
taoensso.encore.as_qname = (function taoensso$encore$as_qname(x){
var or__25265__auto__ = taoensso.encore.as__QMARK_qname.call(null,x);
if(cljs.core.truth_(or__25265__auto__)){
return or__25265__auto__;
} else {
return taoensso.encore._QMARK_as_throw.call(null,new cljs.core.Keyword(null,"qname","qname",-1983612179),x);
}
});
taoensso.encore.as_bool = (function taoensso$encore$as_bool(x){
var _QMARK_b = taoensso.encore.as__QMARK_bool.call(null,x);
if(!((_QMARK_b == null))){
return _QMARK_b;
} else {
return taoensso.encore._QMARK_as_throw.call(null,new cljs.core.Keyword(null,"bool","bool",1444635321),x);
}
});
taoensso.encore.as_int = (function taoensso$encore$as_int(x){
var or__25265__auto__ = taoensso.encore.as__QMARK_int.call(null,x);
if(cljs.core.truth_(or__25265__auto__)){
return or__25265__auto__;
} else {
return taoensso.encore._QMARK_as_throw.call(null,new cljs.core.Keyword(null,"int","int",-1741416922),x);
}
});
taoensso.encore.as_float = (function taoensso$encore$as_float(x){
var or__25265__auto__ = taoensso.encore.as__QMARK_float.call(null,x);
if(cljs.core.truth_(or__25265__auto__)){
return or__25265__auto__;
} else {
return taoensso.encore._QMARK_as_throw.call(null,new cljs.core.Keyword(null,"float","float",-1732389368),x);
}
});
taoensso.encore.as_email = (function taoensso$encore$as_email(x){
var or__25265__auto__ = taoensso.encore.as__QMARK_email.call(null,x);
if(cljs.core.truth_(or__25265__auto__)){
return or__25265__auto__;
} else {
return taoensso.encore._QMARK_as_throw.call(null,new cljs.core.Keyword(null,"email","email",1415816706),x);
}
});
taoensso.encore.as_nemail = (function taoensso$encore$as_nemail(x){
var or__25265__auto__ = taoensso.encore.as__QMARK_nemail.call(null,x);
if(cljs.core.truth_(or__25265__auto__)){
return or__25265__auto__;
} else {
return taoensso.encore._QMARK_as_throw.call(null,new cljs.core.Keyword(null,"nemail","nemail",318708381),x);
}
});
taoensso.encore.nnil_EQ_ = (function taoensso$encore$nnil_EQ_(var_args){
var args45216 = [];
var len__26323__auto___45222 = arguments.length;
var i__26324__auto___45223 = (0);
while(true){
if((i__26324__auto___45223 < len__26323__auto___45222)){
args45216.push((arguments[i__26324__auto___45223]));

var G__45224 = (i__26324__auto___45223 + (1));
i__26324__auto___45223 = G__45224;
continue;
} else {
}
break;
}

var G__45221 = args45216.length;
switch (G__45221) {
case 2:
return taoensso.encore.nnil_EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__26342__auto__ = (new cljs.core.IndexedSeq(args45216.slice((2)),(0)));
return taoensso.encore.nnil_EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26342__auto__);

}
});

taoensso.encore.nnil_EQ_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
var and__25253__auto__ = taoensso.encore.nnil_QMARK_.call(null,x);
if(cljs.core.truth_(and__25253__auto__)){
return cljs.core._EQ_.call(null,x,y);
} else {
return and__25253__auto__;
}
});

taoensso.encore.nnil_EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
var and__25253__auto__ = taoensso.encore.nnil_QMARK_.call(null,x);
if(cljs.core.truth_(and__25253__auto__)){
return cljs.core.apply.call(null,cljs.core._EQ_,x,y,more);
} else {
return and__25253__auto__;
}
});

taoensso.encore.nnil_EQ_.cljs$lang$applyTo = (function (seq45217){
var G__45218 = cljs.core.first.call(null,seq45217);
var seq45217__$1 = cljs.core.next.call(null,seq45217);
var G__45219 = cljs.core.first.call(null,seq45217__$1);
var seq45217__$2 = cljs.core.next.call(null,seq45217__$1);
return taoensso.encore.nnil_EQ_.cljs$core$IFn$_invoke$arity$variadic(G__45218,G__45219,seq45217__$2);
});

taoensso.encore.nnil_EQ_.cljs$lang$maxFixedArity = (2);
taoensso.encore.without_meta = (function taoensso$encore$without_meta(x){
if(cljs.core.truth_(cljs.core.meta.call(null,x))){
return cljs.core.with_meta.call(null,x,null);
} else {
return x;
}
});
/**
 * Like `name` but includes keyword namespaces in name string
 */
taoensso.encore.qname = taoensso.encore.as_qname;
taoensso.encore.explode_keyword = (function taoensso$encore$explode_keyword(k){
return clojure.string.split.call(null,taoensso.encore.qname.call(null,k),/[\.\/]/);
});
taoensso.encore.merge_keywords = (function taoensso$encore$merge_keywords(var_args){
var args__26330__auto__ = [];
var len__26323__auto___45230 = arguments.length;
var i__26324__auto___45231 = (0);
while(true){
if((i__26324__auto___45231 < len__26323__auto___45230)){
args__26330__auto__.push((arguments[i__26324__auto___45231]));

var G__45232 = (i__26324__auto___45231 + (1));
i__26324__auto___45231 = G__45232;
continue;
} else {
}
break;
}

var argseq__26331__auto__ = ((((1) < args__26330__auto__.length))?(new cljs.core.IndexedSeq(args__26330__auto__.slice((1)),(0))):null);
return taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26331__auto__);
});

taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__45228){
var vec__45229 = p__45228;
var no_slash_QMARK_ = cljs.core.nth.call(null,vec__45229,(0),null);
var parts = cljs.core.reduce.call(null,((function (vec__45229,no_slash_QMARK_){
return (function (acc,in$){
if(cljs.core.truth_(in$)){
return cljs.core.into.call(null,acc,taoensso.encore.explode_keyword.call(null,in$));
} else {
return acc;
}
});})(vec__45229,no_slash_QMARK_))
,cljs.core.PersistentVector.EMPTY,ks);
if(cljs.core.empty_QMARK_.call(null,parts)){
return null;
} else {
if(cljs.core.truth_(no_slash_QMARK_)){
return cljs.core.keyword.call(null,clojure.string.join.call(null,".",parts));
} else {
var ppop = cljs.core.pop.call(null,parts);
return cljs.core.keyword.call(null,((cljs.core.empty_QMARK_.call(null,ppop))?null:clojure.string.join.call(null,".",ppop)),cljs.core.peek.call(null,parts));
}
}
});

taoensso.encore.merge_keywords.cljs$lang$maxFixedArity = (1);

taoensso.encore.merge_keywords.cljs$lang$applyTo = (function (seq45226){
var G__45227 = cljs.core.first.call(null,seq45226);
var seq45226__$1 = cljs.core.next.call(null,seq45226);
return taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$variadic(G__45227,seq45226__$1);
});
taoensso.encore.clamp = (function taoensso$encore$clamp(nmin,nmax,n){
if((n < nmin)){
return nmin;
} else {
if((n > nmax)){
return nmax;
} else {
return n;
}
}
});
taoensso.encore.pow = (function taoensso$encore$pow(n,exp){
return Math.pow(n,exp);
});
taoensso.encore.abs = (function taoensso$encore$abs(n){
if((n < (0))){
return (- n);
} else {
return n;
}
});
taoensso.encore.round_STAR_ = (function taoensso$encore$round_STAR_(var_args){
var args45233 = [];
var len__26323__auto___45237 = arguments.length;
var i__26324__auto___45238 = (0);
while(true){
if((i__26324__auto___45238 < len__26323__auto___45237)){
args45233.push((arguments[i__26324__auto___45238]));

var G__45239 = (i__26324__auto___45238 + (1));
i__26324__auto___45238 = G__45239;
continue;
} else {
}
break;
}

var G__45235 = args45233.length;
switch (G__45235) {
case 1:
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45233.length)].join('')));

}
});

taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (n){
return taoensso.encore.round_STAR_.call(null,new cljs.core.Keyword(null,"round","round",2009433328),null,n);
});

taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (type,n){
return taoensso.encore.round_STAR_.call(null,type,null,n);
});

taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (type,nplaces,n){
var n__$1 = n;
var modifier = (cljs.core.truth_(nplaces)?Math.pow(10.0,nplaces):null);
var n_STAR_ = ((cljs.core.not.call(null,modifier))?n__$1:(n__$1 * modifier));
var rounded = (function (){var G__45236 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__45236) {
case "round":
return Math.round(n_STAR_);

break;
case "floor":
return Math.floor(n_STAR_);

break;
case "ceil":
return Math.ceil(n_STAR_);

break;
case "trunc":
return cljs.core.long$.call(null,n_STAR_);

break;
default:
throw cljs.core.ex_info.call(null,"Unknown round type",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),type], null));

}
})();
if(cljs.core.not.call(null,modifier)){
return cljs.core.long$.call(null,rounded);
} else {
return (rounded / modifier);
}
});

taoensso.encore.round_STAR_.cljs$lang$maxFixedArity = 3;
taoensso.encore.round0 = (function taoensso$encore$round0(n){
return Math.round(n);
});
taoensso.encore.round1 = (function taoensso$encore$round1(n){
return (Math.round((n * 10.0)) / 10.0);
});
taoensso.encore.round2 = (function taoensso$encore$round2(n){
return (Math.round((n * 100.0)) / 100.0);
});
/**
 * Returns binary exponential backoff value.
 */
taoensso.encore.exp_backoff = (function taoensso$encore$exp_backoff(var_args){
var args__26330__auto__ = [];
var len__26323__auto___45248 = arguments.length;
var i__26324__auto___45249 = (0);
while(true){
if((i__26324__auto___45249 < len__26323__auto___45248)){
args__26330__auto__.push((arguments[i__26324__auto___45249]));

var G__45250 = (i__26324__auto___45249 + (1));
i__26324__auto___45249 = G__45250;
continue;
} else {
}
break;
}

var argseq__26331__auto__ = ((((1) < args__26330__auto__.length))?(new cljs.core.IndexedSeq(args__26330__auto__.slice((1)),(0))):null);
return taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26331__auto__);
});

taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$variadic = (function (nattempt,p__45244){
var vec__45245 = p__45244;
var map__45246 = cljs.core.nth.call(null,vec__45245,(0),null);
var map__45246__$1 = ((((!((map__45246 == null)))?((((map__45246.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45246.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45246):map__45246);
var min_SINGLEQUOTE_ = cljs.core.get.call(null,map__45246__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max_SINGLEQUOTE_ = cljs.core.get.call(null,map__45246__$1,new cljs.core.Keyword(null,"max","max",61366548));
var factor = cljs.core.get.call(null,map__45246__$1,new cljs.core.Keyword(null,"factor","factor",-2103172748),(1000));
var binary_exp = Math.pow((2),(nattempt - (1)));
var time = (((binary_exp + cljs.core.rand.call(null,binary_exp)) * 0.5) * factor);
return cljs.core.long$.call(null,(function (){var time__$1 = (cljs.core.truth_(min_SINGLEQUOTE_)?(function (){var x__25596__auto__ = cljs.core.long$.call(null,min_SINGLEQUOTE_);
var y__25597__auto__ = cljs.core.long$.call(null,time);
return ((x__25596__auto__ > y__25597__auto__) ? x__25596__auto__ : y__25597__auto__);
})():time);
var time__$2 = (cljs.core.truth_(max_SINGLEQUOTE_)?(function (){var x__25603__auto__ = cljs.core.long$.call(null,max_SINGLEQUOTE_);
var y__25604__auto__ = cljs.core.long$.call(null,time__$1);
return ((x__25603__auto__ < y__25604__auto__) ? x__25603__auto__ : y__25604__auto__);
})():time__$1);
return time__$2;
})());
});

taoensso.encore.exp_backoff.cljs$lang$maxFixedArity = (1);

taoensso.encore.exp_backoff.cljs$lang$applyTo = (function (seq45242){
var G__45243 = cljs.core.first.call(null,seq45242);
var seq45242__$1 = cljs.core.next.call(null,seq45242);
return taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$variadic(G__45243,seq45242__$1);
});
taoensso.encore.now_dt = (function taoensso$encore$now_dt(){
return (new Date());
});
taoensso.encore.now_udt = (function taoensso$encore$now_udt(){
return (new Date()).getTime();
});
taoensso.encore.secs__GT_ms = (function taoensso$encore$secs__GT_ms(secs){
return (cljs.core.long$.call(null,secs) * (1000));
});
taoensso.encore.ms__GT_secs = (function taoensso$encore$ms__GT_secs(ms){
return cljs.core.quot.call(null,cljs.core.long$.call(null,ms),(1000));
});
/**
 * Returns ~number of milliseconds in period defined by given args
 */
taoensso.encore.ms = (function taoensso$encore$ms(var_args){
var args__26330__auto__ = [];
var len__26323__auto___45268 = arguments.length;
var i__26324__auto___45269 = (0);
while(true){
if((i__26324__auto___45269 < len__26323__auto___45268)){
args__26330__auto__.push((arguments[i__26324__auto___45269]));

var G__45270 = (i__26324__auto___45269 + (1));
i__26324__auto___45269 = G__45270;
continue;
} else {
}
break;
}

var argseq__26331__auto__ = ((((0) < args__26330__auto__.length))?(new cljs.core.IndexedSeq(args__26330__auto__.slice((0)),(0))):null);
return taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(argseq__26331__auto__);
});

taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic = (function (p__45264){
var map__45265 = p__45264;
var map__45265__$1 = ((((!((map__45265 == null)))?((((map__45265.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45265.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45265):map__45265);
var opts = map__45265__$1;
var years = cljs.core.get.call(null,map__45265__$1,new cljs.core.Keyword(null,"years","years",-1298579689));
var months = cljs.core.get.call(null,map__45265__$1,new cljs.core.Keyword(null,"months","months",-45571637));
var weeks = cljs.core.get.call(null,map__45265__$1,new cljs.core.Keyword(null,"weeks","weeks",1844596125));
var days = cljs.core.get.call(null,map__45265__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var hours = cljs.core.get.call(null,map__45265__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
var mins = cljs.core.get.call(null,map__45265__$1,new cljs.core.Keyword(null,"mins","mins",467369676));
var secs = cljs.core.get.call(null,map__45265__$1,new cljs.core.Keyword(null,"secs","secs",1532330091));
var msecs = cljs.core.get.call(null,map__45265__$1,new cljs.core.Keyword(null,"msecs","msecs",1711980553));
var ms = cljs.core.get.call(null,map__45265__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
if(cljs.core.truth_(cljs.core.mapv.call(null,((function (map__45265,map__45265__$1,opts,years,months,weeks,days,hours,mins,secs,msecs,ms){
return (function (__in){
var __x = __in;
try{if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"msecs","msecs",1711980553),null,new cljs.core.Keyword(null,"secs","secs",1532330091),null,new cljs.core.Keyword(null,"months","months",-45571637),null,new cljs.core.Keyword(null,"days","days",-1394072564),null,new cljs.core.Keyword(null,"mins","mins",467369676),null,new cljs.core.Keyword(null,"hours","hours",58380855),null,new cljs.core.Keyword(null,"years","years",-1298579689),null,new cljs.core.Keyword(null,"ms","ms",-1152709733),null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),null], null), null).call(null,__x))){
return __x;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e45267){if((e45267 instanceof Error)){
var __t = e45267;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(#{:msecs :secs :months :days :mins :hours :years :ms :weeks} __in)",__x,__t,null);
} else {
throw e45267;

}
}});})(map__45265,map__45265__$1,opts,years,months,weeks,days,hours,mins,secs,msecs,ms))
,cljs.core.keys.call(null,opts)))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have","have",574419306,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"msecs","msecs",1711980553),null,new cljs.core.Keyword(null,"secs","secs",1532330091),null,new cljs.core.Keyword(null,"months","months",-45571637),null,new cljs.core.Keyword(null,"days","days",-1394072564),null,new cljs.core.Keyword(null,"mins","mins",467369676),null,new cljs.core.Keyword(null,"hours","hours",58380855),null,new cljs.core.Keyword(null,"years","years",-1298579689),null,new cljs.core.Keyword(null,"ms","ms",-1152709733),null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),null], null), null),new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null)))))].join('')));
}

return taoensso.encore.round_STAR_.call(null,(((((((((cljs.core.truth_(years)?(years * (31536000000)):0.0) + (cljs.core.truth_(months)?(months * 2.551392E9):0.0)) + (cljs.core.truth_(weeks)?(weeks * (604800000)):0.0)) + (cljs.core.truth_(days)?(days * (86400000)):0.0)) + (cljs.core.truth_(hours)?(hours * (3600000)):0.0)) + (cljs.core.truth_(mins)?(mins * (60000)):0.0)) + (cljs.core.truth_(secs)?(secs * (1000)):0.0)) + (cljs.core.truth_(msecs)?msecs:0.0)) + (cljs.core.truth_(ms)?ms:0.0)));
});

taoensso.encore.ms.cljs$lang$maxFixedArity = (0);

taoensso.encore.ms.cljs$lang$applyTo = (function (seq45263){
return taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45263));
});
taoensso.encore.secs = cljs.core.comp.call(null,taoensso.encore.ms__GT_secs,taoensso.encore.ms);
taoensso.encore.vec_STAR_ = (function taoensso$encore$vec_STAR_(x){
if(cljs.core.vector_QMARK_.call(null,x)){
return x;
} else {
return cljs.core.vec.call(null,x);
}
});
taoensso.encore.set_STAR_ = (function taoensso$encore$set_STAR_(x){
if(cljs.core.set_QMARK_.call(null,x)){
return x;
} else {
return cljs.core.set.call(null,x);
}
});
/**
 * Like `aget` for JS objects, Ref. https://goo.gl/eze8hY.
 *   Unlike `aget`, returns nil for missing keys instead of throwing.
 */
taoensso.encore.oget = (function taoensso$encore$oget(var_args){
var args45275 = [];
var len__26323__auto___45282 = arguments.length;
var i__26324__auto___45283 = (0);
while(true){
if((i__26324__auto___45283 < len__26323__auto___45282)){
args45275.push((arguments[i__26324__auto___45283]));

var G__45284 = (i__26324__auto___45283 + (1));
i__26324__auto___45283 = G__45284;
continue;
} else {
}
break;
}

var G__45281 = args45275.length;
switch (G__45281) {
case 2:
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__26342__auto__ = (new cljs.core.IndexedSeq(args45275.slice((3)),(0)));
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26342__auto__);

}
});

taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2 = (function (o,k){
if(cljs.core.truth_(o)){
return goog.object.get(o,k,null);
} else {
return null;
}
});

taoensso.encore.oget.cljs$core$IFn$_invoke$arity$3 = (function (o,k1,k2){
var temp__4657__auto__ = taoensso.encore.oget.call(null,o,k1);
if(cljs.core.truth_(temp__4657__auto__)){
var o__$1 = temp__4657__auto__;
return goog.object.get(o__$1,k2,null);
} else {
return null;
}
});

taoensso.encore.oget.cljs$core$IFn$_invoke$arity$variadic = (function (o,k1,k2,ks){
var temp__4657__auto__ = taoensso.encore.oget.call(null,o,k1,k2);
if(cljs.core.truth_(temp__4657__auto__)){
var o__$1 = temp__4657__auto__;
return cljs.core.apply.call(null,taoensso.encore.oget,o__$1,ks);
} else {
return null;
}
});

taoensso.encore.oget.cljs$lang$applyTo = (function (seq45276){
var G__45277 = cljs.core.first.call(null,seq45276);
var seq45276__$1 = cljs.core.next.call(null,seq45276);
var G__45278 = cljs.core.first.call(null,seq45276__$1);
var seq45276__$2 = cljs.core.next.call(null,seq45276__$1);
var G__45279 = cljs.core.first.call(null,seq45276__$2);
var seq45276__$3 = cljs.core.next.call(null,seq45276__$2);
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$variadic(G__45277,G__45278,G__45279,seq45276__$3);
});

taoensso.encore.oget.cljs$lang$maxFixedArity = (3);
taoensso.encore.singleton_QMARK_ = (function taoensso$encore$singleton_QMARK_(coll){
if(cljs.core.counted_QMARK_.call(null,coll)){
return cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),(1));
} else {
return cljs.core.not.call(null,cljs.core.next.call(null,coll));
}
});
taoensso.encore.__GT__QMARK_singleton = (function taoensso$encore$__GT__QMARK_singleton(coll){
if(cljs.core.truth_(taoensso.encore.singleton_QMARK_.call(null,coll))){
var vec__45287 = coll;
var c1 = cljs.core.nth.call(null,vec__45287,(0),null);
return c1;
} else {
return null;
}
});
taoensso.encore.__GT_vec = (function taoensso$encore$__GT_vec(x){
if(cljs.core.vector_QMARK_.call(null,x)){
return x;
} else {
if(cljs.core.sequential_QMARK_.call(null,x)){
return cljs.core.vec.call(null,x);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);

}
}
});
taoensso.encore.vnext = (function taoensso$encore$vnext(v){
if((cljs.core.count.call(null,v) > (1))){
return cljs.core.subvec.call(null,v,(1));
} else {
return null;
}
});
taoensso.encore.vsplit_last = (function taoensso$encore$vsplit_last(v){
var c = cljs.core.count.call(null,v);
if((c > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((c > (1)))?cljs.core.pop.call(null,v):null),cljs.core.peek.call(null,v)], null);
} else {
return null;
}
});
taoensso.encore.vsplit_first = (function taoensso$encore$vsplit_first(v){
var c = cljs.core.count.call(null,v);
if((c > (0))){
var vec__45289 = v;
var v1 = cljs.core.nth.call(null,vec__45289,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v1,(((c > (1)))?cljs.core.subvec.call(null,v,(1)):null)], null);
} else {
return null;
}
});
taoensso.encore.nnil_set = (function taoensso$encore$nnil_set(x){
return cljs.core.disj.call(null,taoensso.encore.set_STAR_.call(null,x),null);
});
taoensso.encore.conj_some = (function taoensso$encore$conj_some(var_args){
var args45290 = [];
var len__26323__auto___45296 = arguments.length;
var i__26324__auto___45297 = (0);
while(true){
if((i__26324__auto___45297 < len__26323__auto___45296)){
args45290.push((arguments[i__26324__auto___45297]));

var G__45298 = (i__26324__auto___45297 + (1));
i__26324__auto___45297 = G__45298;
continue;
} else {
}
break;
}

var G__45295 = args45290.length;
switch (G__45295) {
case 0:
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__26342__auto__ = (new cljs.core.IndexedSeq(args45290.slice((2)),(0)));
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26342__auto__);

}
});

taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentVector.EMPTY;
});

taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return coll;
});

taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$2 = (function (coll,_QMARK_x){
if(cljs.core.truth_(taoensso.encore.nnil_QMARK_.call(null,_QMARK_x))){
return cljs.core.conj.call(null,coll,_QMARK_x);
} else {
return coll;
}
});

taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$variadic = (function (coll,_QMARK_x,_QMARK_xs){
return cljs.core.reduce.call(null,taoensso.encore.conj_some,taoensso.encore.conj_some.call(null,coll,_QMARK_x),_QMARK_xs);
});

taoensso.encore.conj_some.cljs$lang$applyTo = (function (seq45291){
var G__45292 = cljs.core.first.call(null,seq45291);
var seq45291__$1 = cljs.core.next.call(null,seq45291);
var G__45293 = cljs.core.first.call(null,seq45291__$1);
var seq45291__$2 = cljs.core.next.call(null,seq45291__$1);
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$variadic(G__45292,G__45293,seq45291__$2);
});

taoensso.encore.conj_some.cljs$lang$maxFixedArity = (2);
/**
 * As `clojure.core/preserving-reduced`
 */
taoensso.encore.preserve_reduced = (function taoensso$encore$preserve_reduced(rf){
return (function (acc,in$){
var result = rf.call(null,acc,in$);
if(cljs.core.reduced_QMARK_.call(null,result)){
return cljs.core.reduced.call(null,result);
} else {
return result;
}
});
});
taoensso.encore.run_kv_BANG_ = (function taoensso$encore$run_kv_BANG_(proc,m){
cljs.core.reduce_kv.call(null,(function (p1__45302_SHARP_,p2__45300_SHARP_,p3__45301_SHARP_){
return proc.call(null,p2__45300_SHARP_,p3__45301_SHARP_);
}),null,m);

return null;
});
taoensso.encore.run_BANG__STAR_ = (function taoensso$encore$run_BANG__STAR_(proc,coll){
cljs.core.reduce.call(null,(function (p1__45304_SHARP_,p2__45303_SHARP_){
return proc.call(null,p2__45303_SHARP_);
}),null,coll);

return null;
});
/**
 * Faster `some` based on `reduce`
 */
taoensso.encore.rsome = (function taoensso$encore$rsome(pred,coll){
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
/**
 * Faster `every?` based on `reduce`
 */
taoensso.encore.revery_QMARK_ = (function taoensso$encore$revery_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (acc,in$){
if(cljs.core.truth_(pred.call(null,in$))){
return true;
} else {
return cljs.core.reduced.call(null,null);
}
}),true,coll);
});
taoensso.encore.ks_EQ_ = (function taoensso$encore$ks_EQ_(ks,m){
return cljs.core._EQ_.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,m)),taoensso.encore.set_STAR_.call(null,ks));
});
taoensso.encore.ks_LT__EQ_ = (function taoensso$encore$ks_LT__EQ_(ks,m){
return clojure.set.subset_QMARK_.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,m)),taoensso.encore.set_STAR_.call(null,ks));
});
taoensso.encore.ks_GT__EQ_ = (function taoensso$encore$ks_GT__EQ_(ks,m){
return clojure.set.superset_QMARK_.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,m)),taoensso.encore.set_STAR_.call(null,ks));
});
taoensso.encore.ks_nnil_QMARK_ = (function taoensso$encore$ks_nnil_QMARK_(ks,m){
return taoensso.encore.revery_QMARK_.call(null,(function (p1__45305_SHARP_){
return taoensso.encore.nnil_QMARK_.call(null,cljs.core.get.call(null,m,p1__45305_SHARP_));
}),ks);
});
/**
 * Like `update-in` but faster, more flexible, and simpler (less ambiguous)
 */
taoensso.encore.update_in_STAR_ = (function taoensso$encore$update_in_STAR_(m,ks,f){
if(cljs.core.empty_QMARK_.call(null,ks)){
return f.call(null,m);
} else {
var vec__45307 = ks;
var k = cljs.core.nth.call(null,vec__45307,(0),null);
var ks__$1 = cljs.core.nthnext.call(null,vec__45307,(1));
if(cljs.core.truth_(ks__$1)){
return cljs.core.assoc.call(null,m,k,taoensso$encore$update_in_STAR_.call(null,cljs.core.get.call(null,m,k),ks__$1,f));
} else {
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k)));
}
}
});
taoensso.encore.translate_signed_idx = (function taoensso$encore$translate_signed_idx(signed_idx,max_idx){
if((signed_idx >= (0))){
var x__25603__auto__ = signed_idx;
var y__25604__auto__ = max_idx;
return ((x__25603__auto__ < y__25604__auto__) ? x__25603__auto__ : y__25604__auto__);
} else {
var x__25596__auto__ = (0);
var y__25597__auto__ = (signed_idx + max_idx);
return ((x__25596__auto__ > y__25597__auto__) ? x__25596__auto__ : y__25597__auto__);
}
});
/**
 * Returns [<inclusive-start-idx*> <exclusive-end-idx*>] for counted 0-indexed
 *   input (str, vec, etc.) with support for:
 *  * Clamping of indexes beyond limits.
 *  * Max-length -> end-index.
 *  * -ive indexes (as +ive indexes but work from back of input):
 *    (+0) (+1) (+2) (+3) (+4)  ; inclusive +ive indexes
 *      h    e    l    l    o   ; 5 count
 *    (-5) (-4) (-3) (-2) (-1)  ; inclusive -ive indexes
 */
taoensso.encore.sub_indexes = (function taoensso$encore$sub_indexes(var_args){
var args__26330__auto__ = [];
var len__26323__auto___45315 = arguments.length;
var i__26324__auto___45316 = (0);
while(true){
if((i__26324__auto___45316 < len__26323__auto___45315)){
args__26330__auto__.push((arguments[i__26324__auto___45316]));

var G__45317 = (i__26324__auto___45316 + (1));
i__26324__auto___45316 = G__45317;
continue;
} else {
}
break;
}

var argseq__26331__auto__ = ((((2) < args__26330__auto__.length))?(new cljs.core.IndexedSeq(args__26330__auto__.slice((2)),(0))):null);
return taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26331__auto__);
});

taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic = (function (x,start_idx,p__45311){
var map__45312 = p__45311;
var map__45312__$1 = ((((!((map__45312 == null)))?((((map__45312.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45312.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45312):map__45312);
var max_len = cljs.core.get.call(null,map__45312__$1,new cljs.core.Keyword(null,"max-len","max-len",-18846016));
var end_idx = cljs.core.get.call(null,map__45312__$1,new cljs.core.Keyword(null,"end-idx","end-idx",-85750788));
if(cljs.core.truth_((function (){var __x = max_len;
try{if(cljs.core.truth_(taoensso.truss.impl._invar_pred.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),cljs.core.nil_QMARK_,taoensso.encore.nneg_int_QMARK_], null)).call(null,__x))){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e45314){if((e45314 instanceof Error)){
var __t = e45314;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"([:or nil? nneg-int?] max-len)",__x,__t,null);
} else {
throw e45314;

}
}})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"nneg-int?","nneg-int?",803479360,null)], null),new cljs.core.Symbol(null,"max-len","max-len",1621685511,null))))].join('')));
}

var start_idx__$1 = start_idx;
var xlen = cljs.core.count.call(null,x);
var start_idx_STAR_ = taoensso.encore.translate_signed_idx.call(null,start_idx__$1,xlen);
var end_idx_STAR_ = cljs.core.long$.call(null,(cljs.core.truth_(max_len)?(function (){var n1__9402__auto__ = (start_idx_STAR_ + max_len);
var n2__9403__auto__ = xlen;
if((n1__9402__auto__ > n2__9403__auto__)){
return n2__9403__auto__;
} else {
return n1__9402__auto__;
}
})():(cljs.core.truth_(end_idx)?(taoensso.encore.translate_signed_idx.call(null,end_idx,xlen) + (1)):xlen
)));
if((start_idx_STAR_ > end_idx_STAR_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start_idx_STAR_,end_idx_STAR_], null);
}
});

taoensso.encore.sub_indexes.cljs$lang$maxFixedArity = (2);

taoensso.encore.sub_indexes.cljs$lang$applyTo = (function (seq45308){
var G__45309 = cljs.core.first.call(null,seq45308);
var seq45308__$1 = cljs.core.next.call(null,seq45308);
var G__45310 = cljs.core.first.call(null,seq45308__$1);
var seq45308__$2 = cljs.core.next.call(null,seq45308__$1);
return taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic(G__45309,G__45310,seq45308__$2);
});
/**
 * Like `subvec` but uses `sub-indexes`
 */
taoensso.encore.subvec_STAR_ = (function taoensso$encore$subvec_STAR_(var_args){
var args__26330__auto__ = [];
var len__26323__auto___45325 = arguments.length;
var i__26324__auto___45326 = (0);
while(true){
if((i__26324__auto___45326 < len__26323__auto___45325)){
args__26330__auto__.push((arguments[i__26324__auto___45326]));

var G__45327 = (i__26324__auto___45326 + (1));
i__26324__auto___45326 = G__45327;
continue;
} else {
}
break;
}

var argseq__26331__auto__ = ((((2) < args__26330__auto__.length))?(new cljs.core.IndexedSeq(args__26330__auto__.slice((2)),(0))):null);
return taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26331__auto__);
});

taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (v,start_idx,p__45321){
var vec__45322 = p__45321;
var _QMARK_max_len = cljs.core.nth.call(null,vec__45322,(0),null);
if(cljs.core.truth_((function (){var __x = v;
try{if(cljs.core.vector_QMARK_.call(null,__x)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e45323){if((e45323 instanceof Error)){
var __t = e45323;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(vector? v)",__x,__t,null);
} else {
throw e45323;

}
}})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"v","v",1661996586,null))))].join('')));
}

var vec__45324 = taoensso.encore.sub_indexes.call(null,v,start_idx,new cljs.core.Keyword(null,"max-len","max-len",-18846016),_QMARK_max_len);
var start_idx_STAR_ = cljs.core.nth.call(null,vec__45324,(0),null);
var end_idx_STAR_ = cljs.core.nth.call(null,vec__45324,(1),null);
return cljs.core.subvec.call(null,v,start_idx_STAR_,end_idx_STAR_);
});

taoensso.encore.subvec_STAR_.cljs$lang$maxFixedArity = (2);

taoensso.encore.subvec_STAR_.cljs$lang$applyTo = (function (seq45318){
var G__45319 = cljs.core.first.call(null,seq45318);
var seq45318__$1 = cljs.core.next.call(null,seq45318);
var G__45320 = cljs.core.first.call(null,seq45318__$1);
var seq45318__$2 = cljs.core.next.call(null,seq45318__$1);
return taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__45319,G__45320,seq45318__$2);
});
taoensso.encore.into_BANG_ = (function taoensso$encore$into_BANG_(var_args){
var args45332 = [];
var len__26323__auto___45335 = arguments.length;
var i__26324__auto___45336 = (0);
while(true){
if((i__26324__auto___45336 < len__26323__auto___45335)){
args45332.push((arguments[i__26324__auto___45336]));

var G__45337 = (i__26324__auto___45336 + (1));
i__26324__auto___45336 = G__45337;
continue;
} else {
}
break;
}

var G__45334 = args45332.length;
switch (G__45334) {
case 2:
return taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45332.length)].join('')));

}
});

taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (to,from){
return cljs.core.reduce.call(null,cljs.core.conj_BANG_,to,from);
});

taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (to,xform,from){
return cljs.core.transduce.call(null,xform,cljs.core.conj_BANG_,to,from);
});

taoensso.encore.into_BANG_.cljs$lang$maxFixedArity = 3;
taoensso.encore.sentinel = {};

taoensso.encore.sentinel_QMARK_ = (function taoensso$encore$sentinel_QMARK_(x){
return (x === taoensso.encore.sentinel);
});

taoensso.encore.nil__GT_sentinel = (function taoensso$encore$nil__GT_sentinel(x){
if((x == null)){
return taoensso.encore.sentinel;
} else {
return x;
}
});

taoensso.encore.sentinel__GT_nil = (function taoensso$encore$sentinel__GT_nil(x){
if(cljs.core.truth_(taoensso.encore.sentinel_QMARK_.call(null,x))){
return null;
} else {
return x;
}
});
taoensso.encore.repeatedly_into;
/**
 * Returns a sorted vector of the top n items from coll of N items in O(N.logn)
 *   time. (take n (sort-by ...)) is O(N.logN) time, so much slower when n << N.
 *   Ref. http://stevehanov.ca/blog/index.php?id=122
 */
taoensso.encore.top = (function taoensso$encore$top(var_args){
var args45341 = [];
var len__26323__auto___45344 = arguments.length;
var i__26324__auto___45345 = (0);
while(true){
if((i__26324__auto___45345 < len__26323__auto___45344)){
args45341.push((arguments[i__26324__auto___45345]));

var G__45346 = (i__26324__auto___45345 + (1));
i__26324__auto___45345 = G__45346;
continue;
} else {
}
break;
}

var G__45343 = args45341.length;
switch (G__45343) {
case 2:
return taoensso.encore.top.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.top.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.top.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45341.length)].join('')));

}
});

taoensso.encore.top.cljs$core$IFn$_invoke$arity$2 = (function (n,coll){
return taoensso.encore.top.call(null,n,cljs.core.identity,cljs.core.compare,coll);
});

taoensso.encore.top.cljs$core$IFn$_invoke$arity$3 = (function (n,keyfn,coll){
return taoensso.encore.top.call(null,n,keyfn,cljs.core.compare,coll);
});

taoensso.encore.top.cljs$core$IFn$_invoke$arity$4 = (function (n,keyfn,cmp,coll){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.take.call(null,n),cljs.core.sort_by.call(null,keyfn,cmp,coll));
});

taoensso.encore.top.cljs$lang$maxFixedArity = 4;

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.encore.Swapped = (function (new_val,return_val,__meta,__extmap,__hash){
this.new_val = new_val;
this.return_val = return_val;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
taoensso.encore.Swapped.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25879__auto__,k__25880__auto__){
var self__ = this;
var this__25879__auto____$1 = this;
return cljs.core._lookup.call(null,this__25879__auto____$1,k__25880__auto__,null);
});

taoensso.encore.Swapped.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25881__auto__,k45349,else__25882__auto__){
var self__ = this;
var this__25881__auto____$1 = this;
var G__45351 = (((k45349 instanceof cljs.core.Keyword))?k45349.fqn:null);
switch (G__45351) {
case "new-val":
return self__.new_val;

break;
case "return-val":
return self__.return_val;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k45349,else__25882__auto__);

}
});

taoensso.encore.Swapped.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25893__auto__,writer__25894__auto__,opts__25895__auto__){
var self__ = this;
var this__25893__auto____$1 = this;
var pr_pair__25896__auto__ = ((function (this__25893__auto____$1){
return (function (keyval__25897__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25894__auto__,cljs.core.pr_writer,""," ","",opts__25895__auto__,keyval__25897__auto__);
});})(this__25893__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25894__auto__,pr_pair__25896__auto__,"#taoensso.encore.Swapped{",", ","}",opts__25895__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"new-val","new-val",-738158599),self__.new_val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"return-val","return-val",-512772489),self__.return_val],null))], null),self__.__extmap));
});

taoensso.encore.Swapped.prototype.cljs$core$IIterable$ = true;

taoensso.encore.Swapped.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__45348){
var self__ = this;
var G__45348__$1 = this;
return (new cljs.core.RecordIter((0),G__45348__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-val","new-val",-738158599),new cljs.core.Keyword(null,"return-val","return-val",-512772489)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

taoensso.encore.Swapped.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25877__auto__){
var self__ = this;
var this__25877__auto____$1 = this;
return self__.__meta;
});

taoensso.encore.Swapped.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25873__auto__){
var self__ = this;
var this__25873__auto____$1 = this;
return (new taoensso.encore.Swapped(self__.new_val,self__.return_val,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.encore.Swapped.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25883__auto__){
var self__ = this;
var this__25883__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.encore.Swapped.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25874__auto__){
var self__ = this;
var this__25874__auto____$1 = this;
var h__25700__auto__ = self__.__hash;
if(!((h__25700__auto__ == null))){
return h__25700__auto__;
} else {
var h__25700__auto____$1 = cljs.core.hash_imap.call(null,this__25874__auto____$1);
self__.__hash = h__25700__auto____$1;

return h__25700__auto____$1;
}
});

taoensso.encore.Swapped.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25875__auto__,other__25876__auto__){
var self__ = this;
var this__25875__auto____$1 = this;
if(cljs.core.truth_((function (){var and__25253__auto__ = other__25876__auto__;
if(cljs.core.truth_(and__25253__auto__)){
var and__25253__auto____$1 = (this__25875__auto____$1.constructor === other__25876__auto__.constructor);
if(and__25253__auto____$1){
return cljs.core.equiv_map.call(null,this__25875__auto____$1,other__25876__auto__);
} else {
return and__25253__auto____$1;
}
} else {
return and__25253__auto__;
}
})())){
return true;
} else {
return false;
}
});

taoensso.encore.Swapped.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25888__auto__,k__25889__auto__){
var self__ = this;
var this__25888__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"return-val","return-val",-512772489),null,new cljs.core.Keyword(null,"new-val","new-val",-738158599),null], null), null),k__25889__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25888__auto____$1),self__.__meta),k__25889__auto__);
} else {
return (new taoensso.encore.Swapped(self__.new_val,self__.return_val,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25889__auto__)),null));
}
});

taoensso.encore.Swapped.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25886__auto__,k__25887__auto__,G__45348){
var self__ = this;
var this__25886__auto____$1 = this;
var pred__45352 = cljs.core.keyword_identical_QMARK_;
var expr__45353 = k__25887__auto__;
if(cljs.core.truth_(pred__45352.call(null,new cljs.core.Keyword(null,"new-val","new-val",-738158599),expr__45353))){
return (new taoensso.encore.Swapped(G__45348,self__.return_val,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__45352.call(null,new cljs.core.Keyword(null,"return-val","return-val",-512772489),expr__45353))){
return (new taoensso.encore.Swapped(self__.new_val,G__45348,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.encore.Swapped(self__.new_val,self__.return_val,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25887__auto__,G__45348),null));
}
}
});

taoensso.encore.Swapped.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25891__auto__){
var self__ = this;
var this__25891__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"new-val","new-val",-738158599),self__.new_val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"return-val","return-val",-512772489),self__.return_val],null))], null),self__.__extmap));
});

taoensso.encore.Swapped.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25878__auto__,G__45348){
var self__ = this;
var this__25878__auto____$1 = this;
return (new taoensso.encore.Swapped(self__.new_val,self__.return_val,G__45348,self__.__extmap,self__.__hash));
});

taoensso.encore.Swapped.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25884__auto__,entry__25885__auto__){
var self__ = this;
var this__25884__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25885__auto__)){
return cljs.core._assoc.call(null,this__25884__auto____$1,cljs.core._nth.call(null,entry__25885__auto__,(0)),cljs.core._nth.call(null,entry__25885__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25884__auto____$1,entry__25885__auto__);
}
});

taoensso.encore.Swapped.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"new-val","new-val",902372928,null),new cljs.core.Symbol(null,"return-val","return-val",1127759038,null)], null);
});

taoensso.encore.Swapped.cljs$lang$type = true;

taoensso.encore.Swapped.cljs$lang$ctorPrSeq = (function (this__25913__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.encore/Swapped");
});

taoensso.encore.Swapped.cljs$lang$ctorPrWriter = (function (this__25913__auto__,writer__25914__auto__){
return cljs.core._write.call(null,writer__25914__auto__,"taoensso.encore/Swapped");
});

taoensso.encore.__GT_Swapped = (function taoensso$encore$__GT_Swapped(new_val,return_val){
return (new taoensso.encore.Swapped(new_val,return_val,null,null,null));
});

taoensso.encore.map__GT_Swapped = (function taoensso$encore$map__GT_Swapped(G__45350){
return (new taoensso.encore.Swapped(new cljs.core.Keyword(null,"new-val","new-val",-738158599).cljs$core$IFn$_invoke$arity$1(G__45350),new cljs.core.Keyword(null,"return-val","return-val",-512772489).cljs$core$IFn$_invoke$arity$1(G__45350),null,cljs.core.dissoc.call(null,G__45350,new cljs.core.Keyword(null,"new-val","new-val",-738158599),new cljs.core.Keyword(null,"return-val","return-val",-512772489)),null));
});

taoensso.encore.swapped = (function taoensso$encore$swapped(new_val,return_val){
return (new taoensso.encore.Swapped(new_val,return_val,null,null,null));
});
taoensso.encore.swapped_QMARK_ = (function taoensso$encore$swapped_QMARK_(x){
return (x instanceof taoensso.encore.Swapped);
});
taoensso.encore.swapped_STAR_ = (function taoensso$encore$swapped_STAR_(x){
if(cljs.core.truth_(taoensso.encore.swapped_QMARK_.call(null,x))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-val","new-val",-738158599).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"return-val","return-val",-512772489).cljs$core$IFn$_invoke$arity$1(x)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,x], null);
}
});
taoensso.encore.dissoc_in;
/**
 * [<new-val> <return-val>]
 */
taoensso.encore.swapped_STAR__in = (function taoensso$encore$swapped_STAR__in(m,ks,f){
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,f,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782)))){
return taoensso.encore.swapped_STAR_.call(null,taoensso.encore.dissoc_in.call(null,m,cljs.core.butlast.call(null,ks),cljs.core.last.call(null,ks)));
} else {
var old_val_in = cljs.core.get_in.call(null,m,ks);
var vec__45357 = taoensso.encore.swapped_STAR_.call(null,f.call(null,old_val_in));
var new_val_in = cljs.core.nth.call(null,vec__45357,(0),null);
var return_val = cljs.core.nth.call(null,vec__45357,(1),null);
var new_val = (cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,new_val_in,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782)))?taoensso.encore.dissoc_in.call(null,m,cljs.core.butlast.call(null,ks),cljs.core.last.call(null,ks)):cljs.core.assoc_in.call(null,m,ks,new_val_in));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_val,return_val], null);
}
});
/**
 * Reduces input with
 *   [<type> <ks> <reset-val-or-swap-fn>] or
 *       [<ks> <reset-val-or-swap-fn>] ops
 */
taoensso.encore.replace_in_STAR_ = (function taoensso$encore$replace_in_STAR_(_QMARK_vf_type,m,ops){
return cljs.core.reduce.call(null,(function (accum,_QMARK_op){
if(cljs.core.not.call(null,_QMARK_op)){
return accum;
} else {
var vec__45360 = ((cljs.core.not.call(null,_QMARK_vf_type))?_QMARK_op:cljs.core.cons.call(null,_QMARK_vf_type,_QMARK_op));
var vf_type = cljs.core.nth.call(null,vec__45360,(0),null);
var ks = cljs.core.nth.call(null,vec__45360,(1),null);
var valf = cljs.core.nth.call(null,vec__45360,(2),null);
var G__45361 = (((vf_type instanceof cljs.core.Keyword))?vf_type.fqn:null);
switch (G__45361) {
case "reset":
if(cljs.core.empty_QMARK_.call(null,ks)){
return valf;
} else {
return cljs.core.assoc_in.call(null,accum,ks,valf);
}

break;
case "swap":
if((valf == null)){
return accum;
} else {
if(cljs.core.empty_QMARK_.call(null,ks)){
return valf.call(null,accum);
} else {
return cljs.core.nth.call(null,taoensso.encore.swapped_STAR__in.call(null,accum,ks,valf),(0));
}
}

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(vf_type)].join('')));

}
}
}),m,ops);
});
/**
 * Experimental. For use with `swap!`, etc.
 */
taoensso.encore.replace_in = (function taoensso$encore$replace_in(var_args){
var args__26330__auto__ = [];
var len__26323__auto___45365 = arguments.length;
var i__26324__auto___45366 = (0);
while(true){
if((i__26324__auto___45366 < len__26323__auto___45365)){
args__26330__auto__.push((arguments[i__26324__auto___45366]));

var G__45367 = (i__26324__auto___45366 + (1));
i__26324__auto___45366 = G__45367;
continue;
} else {
}
break;
}

var argseq__26331__auto__ = ((((1) < args__26330__auto__.length))?(new cljs.core.IndexedSeq(args__26330__auto__.slice((1)),(0))):null);
return taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26331__auto__);
});

taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic = (function (m,ops){
return taoensso.encore.replace_in_STAR_.call(null,null,m,ops);
});

taoensso.encore.replace_in.cljs$lang$maxFixedArity = (1);

taoensso.encore.replace_in.cljs$lang$applyTo = (function (seq45363){
var G__45364 = cljs.core.first.call(null,seq45363);
var seq45363__$1 = cljs.core.next.call(null,seq45363);
return taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic(G__45364,seq45363__$1);
});
/**
 * More powerful version of `swap!`:
 *  * Supports optional `update-in` semantics.
 *  * Swap fn can return `(swapped <new-val> <return-val>)` rather than just
 *    <new-val>. This is useful when writing atomic pull fns, etc.
 */
taoensso.encore.swap_in_BANG_ = (function taoensso$encore$swap_in_BANG_(var_args){
var args45368 = [];
var len__26323__auto___45379 = arguments.length;
var i__26324__auto___45380 = (0);
while(true){
if((i__26324__auto___45380 < len__26323__auto___45379)){
args45368.push((arguments[i__26324__auto___45380]));

var G__45381 = (i__26324__auto___45380 + (1));
i__26324__auto___45380 = G__45381;
continue;
} else {
}
break;
}

var G__45374 = args45368.length;
switch (G__45374) {
case 3:
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__26342__auto__ = (new cljs.core.IndexedSeq(args45368.slice((3)),(0)));
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26342__auto__);

}
});

taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,ks,f){
if(cljs.core.empty_QMARK_.call(null,ks)){
while(true){
var old_val = cljs.core.deref.call(null,atom_);
var vec__45375 = taoensso.encore.swapped_STAR_.call(null,f.call(null,old_val));
var new_val = cljs.core.nth.call(null,vec__45375,(0),null);
var return_val = cljs.core.nth.call(null,vec__45375,(1),null);
if(cljs.core.not.call(null,cljs.core.compare_and_set_BANG_.call(null,atom_,old_val,new_val))){
continue;
} else {
return return_val;
}
break;
}
} else {
while(true){
var old_val = cljs.core.deref.call(null,atom_);
var vec__45376 = taoensso.encore.swapped_STAR__in.call(null,old_val,ks,f);
var new_val = cljs.core.nth.call(null,vec__45376,(0),null);
var return_val = cljs.core.nth.call(null,vec__45376,(1),null);
if(cljs.core.not.call(null,cljs.core.compare_and_set_BANG_.call(null,atom_,old_val,new_val))){
continue;
} else {
return return_val;
}
break;
}
}
});

taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (atom_,ks,f,more){
if(cljs.core.truth_((function (){var __x = (function (){try{return cljs.core.count.call(null,more);
}catch (e45377){if((e45377 instanceof Error)){
var __t = e45377;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(even? (count more))",taoensso.truss.impl._invar_undefined_val,__t,null);
} else {
throw e45377;

}
}})();
try{if(cljs.core.even_QMARK_.call(null,__x)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e45378){if((e45378 instanceof Error)){
var __t = e45378;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(even? (count more))",__x,__t,null);
} else {
throw e45378;

}
}})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"more","more",-418290273,null)))))].join('')));
}

var pairs = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ks,f], null)], null),cljs.core.partition.call(null,(2),more));
while(true){
var old_val = cljs.core.deref.call(null,atom_);
var new_val = taoensso.encore.replace_in_STAR_.call(null,new cljs.core.Keyword(null,"swap","swap",228675637),old_val,pairs);
if(cljs.core.not.call(null,cljs.core.compare_and_set_BANG_.call(null,atom_,old_val,new_val))){
continue;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"old","old",-1825222690),old_val,new cljs.core.Keyword(null,"new","new",-2085437848),new_val], null);
}
break;
}
});

taoensso.encore.swap_in_BANG_.cljs$lang$applyTo = (function (seq45369){
var G__45370 = cljs.core.first.call(null,seq45369);
var seq45369__$1 = cljs.core.next.call(null,seq45369);
var G__45371 = cljs.core.first.call(null,seq45369__$1);
var seq45369__$2 = cljs.core.next.call(null,seq45369__$1);
var G__45372 = cljs.core.first.call(null,seq45369__$2);
var seq45369__$3 = cljs.core.next.call(null,seq45369__$2);
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__45370,G__45371,G__45372,seq45369__$3);
});

taoensso.encore.swap_in_BANG_.cljs$lang$maxFixedArity = (3);
/**
 * Is to `reset!` as `swap-in!` is to `swap!`
 */
taoensso.encore.reset_in_BANG_ = (function taoensso$encore$reset_in_BANG_(var_args){
var args45383 = [];
var len__26323__auto___45392 = arguments.length;
var i__26324__auto___45393 = (0);
while(true){
if((i__26324__auto___45393 < len__26323__auto___45392)){
args45383.push((arguments[i__26324__auto___45393]));

var G__45394 = (i__26324__auto___45393 + (1));
i__26324__auto___45393 = G__45394;
continue;
} else {
}
break;
}

var G__45389 = args45383.length;
switch (G__45389) {
case 3:
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__26342__auto__ = (new cljs.core.IndexedSeq(args45383.slice((3)),(0)));
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26342__auto__);

}
});

taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,ks,new_val){
if(cljs.core.empty_QMARK_.call(null,ks)){
return cljs.core.reset_BANG_.call(null,atom_,new_val);
} else {
return cljs.core.swap_BANG_.call(null,atom_,(function (old_val){
return cljs.core.assoc_in.call(null,old_val,ks,new_val);
}));
}
});

taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (atom_,ks,new_val,more){
if(cljs.core.truth_((function (){var __x = (function (){try{return cljs.core.count.call(null,more);
}catch (e45390){if((e45390 instanceof Error)){
var __t = e45390;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(even? (count more))",taoensso.truss.impl._invar_undefined_val,__t,null);
} else {
throw e45390;

}
}})();
try{if(cljs.core.even_QMARK_.call(null,__x)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e45391){if((e45391 instanceof Error)){
var __t = e45391;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(even? (count more))",__x,__t,null);
} else {
throw e45391;

}
}})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"more","more",-418290273,null)))))].join('')));
}

var pairs = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ks,new_val], null)], null),cljs.core.partition.call(null,(2),more));
while(true){
var old_val = cljs.core.deref.call(null,atom_);
var new_val__$1 = taoensso.encore.replace_in_STAR_.call(null,new cljs.core.Keyword(null,"reset","reset",-800929946),old_val,pairs);
if(cljs.core.not.call(null,cljs.core.compare_and_set_BANG_.call(null,atom_,old_val,new_val__$1))){
continue;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"old","old",-1825222690),old_val,new cljs.core.Keyword(null,"new","new",-2085437848),new_val__$1], null);
}
break;
}
});

taoensso.encore.reset_in_BANG_.cljs$lang$applyTo = (function (seq45384){
var G__45385 = cljs.core.first.call(null,seq45384);
var seq45384__$1 = cljs.core.next.call(null,seq45384);
var G__45386 = cljs.core.first.call(null,seq45384__$1);
var seq45384__$2 = cljs.core.next.call(null,seq45384__$1);
var G__45387 = cljs.core.first.call(null,seq45384__$2);
var seq45384__$3 = cljs.core.next.call(null,seq45384__$2);
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__45385,G__45386,G__45387,seq45384__$3);
});

taoensso.encore.reset_in_BANG_.cljs$lang$maxFixedArity = (3);
taoensso.encore.contains_in_QMARK_ = (function taoensso$encore$contains_in_QMARK_(coll,ks){
return cljs.core.contains_QMARK_.call(null,cljs.core.get_in.call(null,coll,cljs.core.butlast.call(null,ks)),cljs.core.last.call(null,ks));
});
taoensso.encore.dissoc_in = (function taoensso$encore$dissoc_in(var_args){
var args__26330__auto__ = [];
var len__26323__auto___45399 = arguments.length;
var i__26324__auto___45400 = (0);
while(true){
if((i__26324__auto___45400 < len__26323__auto___45399)){
args__26330__auto__.push((arguments[i__26324__auto___45400]));

var G__45401 = (i__26324__auto___45400 + (1));
i__26324__auto___45400 = G__45401;
continue;
} else {
}
break;
}

var argseq__26331__auto__ = ((((2) < args__26330__auto__.length))?(new cljs.core.IndexedSeq(args__26330__auto__.slice((2)),(0))):null);
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26331__auto__);
});

taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic = (function (m,ks,dissoc_ks){
return taoensso.encore.update_in_STAR_.call(null,m,ks,(function (m__$1){
return cljs.core.apply.call(null,cljs.core.dissoc,m__$1,dissoc_ks);
}));
});

taoensso.encore.dissoc_in.cljs$lang$maxFixedArity = (2);

taoensso.encore.dissoc_in.cljs$lang$applyTo = (function (seq45396){
var G__45397 = cljs.core.first.call(null,seq45396);
var seq45396__$1 = cljs.core.next.call(null,seq45396);
var G__45398 = cljs.core.first.call(null,seq45396__$1);
var seq45396__$2 = cljs.core.next.call(null,seq45396__$1);
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic(G__45397,G__45398,seq45396__$2);
});
/**
 * Assocs each kv iff its value is not nil
 */
taoensso.encore.assoc_some = (function taoensso$encore$assoc_some(var_args){
var args__26330__auto__ = [];
var len__26323__auto___45414 = arguments.length;
var i__26324__auto___45415 = (0);
while(true){
if((i__26324__auto___45415 < len__26323__auto___45414)){
args__26330__auto__.push((arguments[i__26324__auto___45415]));

var G__45416 = (i__26324__auto___45415 + (1));
i__26324__auto___45415 = G__45416;
continue;
} else {
}
break;
}

var argseq__26331__auto__ = ((((1) < args__26330__auto__.length))?(new cljs.core.IndexedSeq(args__26330__auto__.slice((1)),(0))):null);
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26331__auto__);
});

taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic = (function (m,kvs){
if(cljs.core.truth_((function (){var __x = (function (){try{return cljs.core.count.call(null,kvs);
}catch (e45404){if((e45404 instanceof Error)){
var __t = e45404;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(even? (count kvs))",taoensso.truss.impl._invar_undefined_val,__t,null);
} else {
throw e45404;

}
}})();
try{if(cljs.core.even_QMARK_.call(null,__x)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e45405){if((e45405 instanceof Error)){
var __t = e45405;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(even? (count kvs))",__x,__t,null);
} else {
throw e45405;

}
}})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

return cljs.core.into.call(null,(function (){var or__25265__auto__ = m;
if(cljs.core.truth_(or__25265__auto__)){
return or__25265__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__26037__auto__ = (function taoensso$encore$iter__45406(s__45407){
return (new cljs.core.LazySeq(null,(function (){
var s__45407__$1 = s__45407;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__45407__$1);
if(temp__4657__auto__){
var s__45407__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__45407__$2)){
var c__26035__auto__ = cljs.core.chunk_first.call(null,s__45407__$2);
var size__26036__auto__ = cljs.core.count.call(null,c__26035__auto__);
var b__45409 = cljs.core.chunk_buffer.call(null,size__26036__auto__);
if((function (){var i__45408 = (0);
while(true){
if((i__45408 < size__26036__auto__)){
var vec__45412 = cljs.core._nth.call(null,c__26035__auto__,i__45408);
var k = cljs.core.nth.call(null,vec__45412,(0),null);
var v = cljs.core.nth.call(null,vec__45412,(1),null);
if(!((v == null))){
cljs.core.chunk_append.call(null,b__45409,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__45417 = (i__45408 + (1));
i__45408 = G__45417;
continue;
} else {
var G__45418 = (i__45408 + (1));
i__45408 = G__45418;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45409),taoensso$encore$iter__45406.call(null,cljs.core.chunk_rest.call(null,s__45407__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45409),null);
}
} else {
var vec__45413 = cljs.core.first.call(null,s__45407__$2);
var k = cljs.core.nth.call(null,vec__45413,(0),null);
var v = cljs.core.nth.call(null,vec__45413,(1),null);
if(!((v == null))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),taoensso$encore$iter__45406.call(null,cljs.core.rest.call(null,s__45407__$2)));
} else {
var G__45419 = cljs.core.rest.call(null,s__45407__$2);
s__45407__$1 = G__45419;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__26037__auto__.call(null,cljs.core.partition.call(null,(2),kvs));
})());
});

taoensso.encore.assoc_some.cljs$lang$maxFixedArity = (1);

taoensso.encore.assoc_some.cljs$lang$applyTo = (function (seq45402){
var G__45403 = cljs.core.first.call(null,seq45402);
var seq45402__$1 = cljs.core.next.call(null,seq45402);
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic(G__45403,seq45402__$1);
});
/**
 * Assocs each kv iff its val is truthy
 */
taoensso.encore.assoc_when = (function taoensso$encore$assoc_when(var_args){
var args__26330__auto__ = [];
var len__26323__auto___45432 = arguments.length;
var i__26324__auto___45433 = (0);
while(true){
if((i__26324__auto___45433 < len__26323__auto___45432)){
args__26330__auto__.push((arguments[i__26324__auto___45433]));

var G__45434 = (i__26324__auto___45433 + (1));
i__26324__auto___45433 = G__45434;
continue;
} else {
}
break;
}

var argseq__26331__auto__ = ((((1) < args__26330__auto__.length))?(new cljs.core.IndexedSeq(args__26330__auto__.slice((1)),(0))):null);
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26331__auto__);
});

taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,kvs){
if(cljs.core.truth_((function (){var __x = (function (){try{return cljs.core.count.call(null,kvs);
}catch (e45422){if((e45422 instanceof Error)){
var __t = e45422;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(even? (count kvs))",taoensso.truss.impl._invar_undefined_val,__t,null);
} else {
throw e45422;

}
}})();
try{if(cljs.core.even_QMARK_.call(null,__x)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e45423){if((e45423 instanceof Error)){
var __t = e45423;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(even? (count kvs))",__x,__t,null);
} else {
throw e45423;

}
}})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

return cljs.core.into.call(null,(function (){var or__25265__auto__ = m;
if(cljs.core.truth_(or__25265__auto__)){
return or__25265__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__26037__auto__ = (function taoensso$encore$iter__45424(s__45425){
return (new cljs.core.LazySeq(null,(function (){
var s__45425__$1 = s__45425;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__45425__$1);
if(temp__4657__auto__){
var s__45425__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__45425__$2)){
var c__26035__auto__ = cljs.core.chunk_first.call(null,s__45425__$2);
var size__26036__auto__ = cljs.core.count.call(null,c__26035__auto__);
var b__45427 = cljs.core.chunk_buffer.call(null,size__26036__auto__);
if((function (){var i__45426 = (0);
while(true){
if((i__45426 < size__26036__auto__)){
var vec__45430 = cljs.core._nth.call(null,c__26035__auto__,i__45426);
var k = cljs.core.nth.call(null,vec__45430,(0),null);
var v = cljs.core.nth.call(null,vec__45430,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append.call(null,b__45427,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__45435 = (i__45426 + (1));
i__45426 = G__45435;
continue;
} else {
var G__45436 = (i__45426 + (1));
i__45426 = G__45436;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45427),taoensso$encore$iter__45424.call(null,cljs.core.chunk_rest.call(null,s__45425__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45427),null);
}
} else {
var vec__45431 = cljs.core.first.call(null,s__45425__$2);
var k = cljs.core.nth.call(null,vec__45431,(0),null);
var v = cljs.core.nth.call(null,vec__45431,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),taoensso$encore$iter__45424.call(null,cljs.core.rest.call(null,s__45425__$2)));
} else {
var G__45437 = cljs.core.rest.call(null,s__45425__$2);
s__45425__$1 = G__45437;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__26037__auto__.call(null,cljs.core.partition.call(null,(2),kvs));
})());
});

taoensso.encore.assoc_when.cljs$lang$maxFixedArity = (1);

taoensso.encore.assoc_when.cljs$lang$applyTo = (function (seq45420){
var G__45421 = cljs.core.first.call(null,seq45420);
var seq45420__$1 = cljs.core.next.call(null,seq45420);
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic(G__45421,seq45420__$1);
});
taoensso.encore.queue_QMARK_ = (function taoensso$encore$queue_QMARK_(x){
return (x instanceof cljs.core.PersistentQueue);
});
/**
 * Returns a PersistentQueue
 */
taoensso.encore.queue = (function taoensso$encore$queue(var_args){
var args45438 = [];
var len__26323__auto___45441 = arguments.length;
var i__26324__auto___45442 = (0);
while(true){
if((i__26324__auto___45442 < len__26323__auto___45441)){
args45438.push((arguments[i__26324__auto___45442]));

var G__45443 = (i__26324__auto___45442 + (1));
i__26324__auto___45442 = G__45443;
continue;
} else {
}
break;
}

var G__45440 = args45438.length;
switch (G__45440) {
case 1:
return taoensso.encore.queue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return taoensso.encore.queue.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45438.length)].join('')));

}
});

taoensso.encore.queue.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return cljs.core.into.call(null,taoensso.encore.queue.call(null),coll);
});

taoensso.encore.queue.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentQueue.EMPTY;
});

taoensso.encore.queue.cljs$lang$maxFixedArity = 1;
taoensso.encore.queue_STAR_ = (function taoensso$encore$queue_STAR_(var_args){
var args__26330__auto__ = [];
var len__26323__auto___45446 = arguments.length;
var i__26324__auto___45447 = (0);
while(true){
if((i__26324__auto___45447 < len__26323__auto___45446)){
args__26330__auto__.push((arguments[i__26324__auto___45447]));

var G__45448 = (i__26324__auto___45447 + (1));
i__26324__auto___45447 = G__45448;
continue;
} else {
}
break;
}

var argseq__26331__auto__ = ((((0) < args__26330__auto__.length))?(new cljs.core.IndexedSeq(args__26330__auto__.slice((0)),(0))):null);
return taoensso.encore.queue_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__26331__auto__);
});

taoensso.encore.queue_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (items){
return taoensso.encore.queue.call(null,items);
});

taoensso.encore.queue_STAR_.cljs$lang$maxFixedArity = (0);

taoensso.encore.queue_STAR_.cljs$lang$applyTo = (function (seq45445){
return taoensso.encore.queue_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45445));
});
/**
 * (seq     {:a :A}) => ([:a :A])
 * (seq-kvs {:a :A}) => (:a :A)
 */
taoensso.encore.seq_kvs = cljs.core.partial.call(null,cljs.core.reduce,cljs.core.concat);
/**
 * Like `apply` but assumes last arg is a map whose elements should be applied
 *   to `f` as an unpaired seq:
 *  (mapply (fn [x & {:keys [y z]}] (str x y z)) 1 {:y 2 :z 3})
 *    where fn will receive args as: `(1 :y 2 :z 3)`.
 */
taoensso.encore.mapply = (function taoensso$encore$mapply(var_args){
var args__26330__auto__ = [];
var len__26323__auto___45451 = arguments.length;
var i__26324__auto___45452 = (0);
while(true){
if((i__26324__auto___45452 < len__26323__auto___45451)){
args__26330__auto__.push((arguments[i__26324__auto___45452]));

var G__45453 = (i__26324__auto___45452 + (1));
i__26324__auto___45452 = G__45453;
continue;
} else {
}
break;
}

var argseq__26331__auto__ = ((((1) < args__26330__auto__.length))?(new cljs.core.IndexedSeq(args__26330__auto__.slice((1)),(0))):null);
return taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26331__auto__);
});

taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.call(null,f,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),taoensso.encore.seq_kvs.call(null,cljs.core.last.call(null,args))));
});

taoensso.encore.mapply.cljs$lang$maxFixedArity = (1);

taoensso.encore.mapply.cljs$lang$applyTo = (function (seq45449){
var G__45450 = cljs.core.first.call(null,seq45449);
var seq45449__$1 = cljs.core.next.call(null,seq45449);
return taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic(G__45450,seq45449__$1);
});
taoensso.encore.map_kvs = (function taoensso$encore$map_kvs(kf,vf,m){
if(cljs.core.not.call(null,m)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var vf__$1 = (((vf == null))?(function (_,v){
return v;
}):vf
);
var kf__$1 = (((kf == null))?((function (vf__$1){
return (function (k,_){
return k;
});})(vf__$1))
:(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,kf,new cljs.core.Keyword(null,"keywordize","keywordize",1381210758)))?((function (vf__$1){
return (function (k,_){
return cljs.core.keyword.call(null,k);
});})(vf__$1))
:kf
));
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,((function (vf__$1,kf__$1){
return (function (m__$1,k,v){
return cljs.core.assoc_BANG_.call(null,m__$1,kf__$1.call(null,k,v),vf__$1.call(null,k,v));
});})(vf__$1,kf__$1))
,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
}
});
taoensso.encore.map_vals = (function taoensso$encore$map_vals(f,m){
return taoensso.encore.map_kvs.call(null,null,(function (_,v){
return f.call(null,v);
}),m);
});
taoensso.encore.map_keys = (function taoensso$encore$map_keys(f,m){
return taoensso.encore.map_kvs.call(null,(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,f,new cljs.core.Keyword(null,"keywordize","keywordize",1381210758)))?new cljs.core.Keyword(null,"keywordize","keywordize",1381210758):(function (k,_){
return f.call(null,k);
})),null,m);
});
taoensso.encore.filter_kvs = (function taoensso$encore$filter_kvs(predk,predv,m){
if(cljs.core.not.call(null,m)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
if(cljs.core.truth_((function (){var and__25253__auto__ = predk.call(null,k);
if(cljs.core.truth_(and__25253__auto__)){
return predv.call(null,v);
} else {
return and__25253__auto__;
}
})())){
return m__$1;
} else {
return cljs.core.dissoc.call(null,m__$1,k);
}
}),m,m);
}
});
taoensso.encore.filter_keys = (function taoensso$encore$filter_keys(pred,m){
return taoensso.encore.filter_kvs.call(null,pred,cljs.core.constantly.call(null,true),m);
});
taoensso.encore.filter_vals = (function taoensso$encore$filter_vals(pred,m){
return taoensso.encore.filter_kvs.call(null,cljs.core.constantly.call(null,true),pred,m);
});
/**
 * Smaller, common-case version of `filter-vals`. Esp useful with `nil?`/`blank?`
 *   pred when constructing maps: {:foo (when _ <...>) :bar (when _ <...>)} in a
 *   way that preservers :or semantics.
 */
taoensso.encore.remove_vals = (function taoensso$encore$remove_vals(pred,m){
if(cljs.core.not.call(null,m)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
if(cljs.core.truth_(pred.call(null,v))){
return cljs.core.dissoc.call(null,m__$1,k);
} else {
return m__$1;
}
}),m,m);
}
});
taoensso.encore.keywordize_map = (function taoensso$encore$keywordize_map(m){
if(cljs.core.not.call(null,m)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
return cljs.core.assoc.call(null,m__$1,cljs.core.keyword.call(null,k),v);
}),cljs.core.PersistentArrayMap.EMPTY,m);
}
});
taoensso.encore.as_map_STAR_ = (function taoensso$encore$as_map_STAR_(kf,vf,kvs){
return cljs.core.transduce.call(null,cljs.core.partition_all.call(null,(2)),cljs.core.completing.call(null,(function (acc,p__45460){
var vec__45461 = p__45460;
var k = cljs.core.nth.call(null,vec__45461,(0),null);
var v = cljs.core.nth.call(null,vec__45461,(1),null);
return cljs.core.assoc_BANG_.call(null,acc,kf.call(null,k,v),vf.call(null,k,v));
}),cljs.core.persistent_BANG_),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),kvs);
});
/**
 * Cross between `hash-map` & `map-kvs`
 */
taoensso.encore.as_map = (function taoensso$encore$as_map(var_args){
var args__26330__auto__ = [];
var len__26323__auto___45466 = arguments.length;
var i__26324__auto___45467 = (0);
while(true){
if((i__26324__auto___45467 < len__26323__auto___45466)){
args__26330__auto__.push((arguments[i__26324__auto___45467]));

var G__45468 = (i__26324__auto___45467 + (1));
i__26324__auto___45467 = G__45468;
continue;
} else {
}
break;
}

var argseq__26331__auto__ = ((((1) < args__26330__auto__.length))?(new cljs.core.IndexedSeq(args__26330__auto__.slice((1)),(0))):null);
return taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26331__auto__);
});

taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic = (function (kvs,p__45464){
var vec__45465 = p__45464;
var kf = cljs.core.nth.call(null,vec__45465,(0),null);
var vf = cljs.core.nth.call(null,vec__45465,(1),null);
if(cljs.core.empty_QMARK_.call(null,kvs)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var vf__$1 = (((vf == null))?((function (vec__45465,kf,vf){
return (function (_,v){
return v;
});})(vec__45465,kf,vf))
:vf
);
var kf__$1 = (((kf == null))?((function (vf__$1,vec__45465,kf,vf){
return (function (k,_){
return k;
});})(vf__$1,vec__45465,kf,vf))
:(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,kf,new cljs.core.Keyword(null,"keywordize","keywordize",1381210758)))?((function (vf__$1,vec__45465,kf,vf){
return (function (k,_){
return cljs.core.keyword.call(null,k);
});})(vf__$1,vec__45465,kf,vf))
:kf
));
return taoensso.encore.as_map_STAR_.call(null,kf__$1,vf__$1,kvs);
}
});

taoensso.encore.as_map.cljs$lang$maxFixedArity = (1);

taoensso.encore.as_map.cljs$lang$applyTo = (function (seq45462){
var G__45463 = cljs.core.first.call(null,seq45462);
var seq45462__$1 = cljs.core.next.call(null,seq45462);
return taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic(G__45463,seq45462__$1);
});
/**
 * Faster `zipmap` using transients
 */
taoensso.encore.fzipmap = (function taoensso$encore$fzipmap(ks,vs){
var m = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ks__$1 = cljs.core.seq.call(null,ks);
var vs__$1 = cljs.core.seq.call(null,vs);
while(true){
if(!((ks__$1) && (vs__$1))){
return cljs.core.persistent_BANG_.call(null,m);
} else {
var G__45469 = cljs.core.assoc_BANG_.call(null,m,cljs.core.first.call(null,ks__$1),cljs.core.first.call(null,vs__$1));
var G__45470 = cljs.core.next.call(null,ks__$1);
var G__45471 = cljs.core.next.call(null,vs__$1);
m = G__45469;
ks__$1 = G__45470;
vs__$1 = G__45471;
continue;
}
break;
}
});
/**
 * Like `into` but supports multiple "from"s
 */
taoensso.encore.into_all = (function taoensso$encore$into_all(var_args){
var args45472 = [];
var len__26323__auto___45478 = arguments.length;
var i__26324__auto___45479 = (0);
while(true){
if((i__26324__auto___45479 < len__26323__auto___45478)){
args45472.push((arguments[i__26324__auto___45479]));

var G__45480 = (i__26324__auto___45479 + (1));
i__26324__auto___45479 = G__45480;
continue;
} else {
}
break;
}

var G__45477 = args45472.length;
switch (G__45477) {
case 2:
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__26342__auto__ = (new cljs.core.IndexedSeq(args45472.slice((2)),(0)));
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26342__auto__);

}
});

taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$2 = (function (to,from){
return cljs.core.into.call(null,to,from);
});

taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic = (function (to,from,more){
return cljs.core.reduce.call(null,cljs.core.into,cljs.core.into.call(null,to,from),more);
});

taoensso.encore.into_all.cljs$lang$applyTo = (function (seq45473){
var G__45474 = cljs.core.first.call(null,seq45473);
var seq45473__$1 = cljs.core.next.call(null,seq45473);
var G__45475 = cljs.core.first.call(null,seq45473__$1);
var seq45473__$2 = cljs.core.next.call(null,seq45473__$1);
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic(G__45474,G__45475,seq45473__$2);
});

taoensso.encore.into_all.cljs$lang$maxFixedArity = (2);
/**
 * Greedy version of `interleave`, Ref. http://goo.gl/KvzqWb
 */
taoensso.encore.interleave_all = (function taoensso$encore$interleave_all(var_args){
var args45482 = [];
var len__26323__auto___45488 = arguments.length;
var i__26324__auto___45489 = (0);
while(true){
if((i__26324__auto___45489 < len__26323__auto___45488)){
args45482.push((arguments[i__26324__auto___45489]));

var G__45490 = (i__26324__auto___45489 + (1));
i__26324__auto___45489 = G__45490;
continue;
} else {
}
break;
}

var G__45487 = args45482.length;
switch (G__45487) {
case 0:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__26342__auto__ = (new cljs.core.IndexedSeq(args45482.slice((2)),(0)));
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26342__auto__);

}
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.List.EMPTY;
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$1 = (function (c1){
return (new cljs.core.LazySeq(null,(function (){
return c1;
}),null,null));
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$2 = (function (c1,c2){
return (new cljs.core.LazySeq(null,(function (){
var s1 = cljs.core.seq.call(null,c1);
var s2 = cljs.core.seq.call(null,c2);
if((s1) && (s2)){
return cljs.core.cons.call(null,cljs.core.first.call(null,s1),cljs.core.cons.call(null,cljs.core.first.call(null,s2),taoensso.encore.interleave_all.call(null,cljs.core.rest.call(null,s1),cljs.core.rest.call(null,s2))));
} else {
if(s1){
return s1;
} else {
if(s2){
return s2;
} else {
return null;
}
}
}
}),null,null));
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic = (function (c1,c2,colls){
return (new cljs.core.LazySeq(null,(function (){
var ss = cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1)));
return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss),cljs.core.apply.call(null,taoensso.encore.interleave_all,cljs.core.map.call(null,cljs.core.rest,ss)));
}),null,null));
});

taoensso.encore.interleave_all.cljs$lang$applyTo = (function (seq45483){
var G__45484 = cljs.core.first.call(null,seq45483);
var seq45483__$1 = cljs.core.next.call(null,seq45483);
var G__45485 = cljs.core.first.call(null,seq45483__$1);
var seq45483__$2 = cljs.core.next.call(null,seq45483__$1);
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic(G__45484,G__45485,seq45483__$2);
});

taoensso.encore.interleave_all.cljs$lang$maxFixedArity = (2);
taoensso.encore.distinct_by = (function taoensso$encore$distinct_by(keyfn,coll){
var step = (function taoensso$encore$distinct_by_$_step(xs,seen){
return (new cljs.core.LazySeq(null,(function (){
return (function (p__45498,seen__$1){
while(true){
var vec__45499 = p__45498;
var v = cljs.core.nth.call(null,vec__45499,(0),null);
var xs__$1 = vec__45499;
var temp__4657__auto__ = cljs.core.seq.call(null,xs__$1);
if(temp__4657__auto__){
var s = temp__4657__auto__;
var v_STAR_ = keyfn.call(null,v);
if(cljs.core.contains_QMARK_.call(null,seen__$1,v_STAR_)){
var G__45500 = cljs.core.rest.call(null,s);
var G__45501 = seen__$1;
p__45498 = G__45500;
seen__$1 = G__45501;
continue;
} else {
return cljs.core.cons.call(null,v,taoensso$encore$distinct_by_$_step.call(null,cljs.core.rest.call(null,s),cljs.core.conj.call(null,seen__$1,v_STAR_)));
}
} else {
return null;
}
break;
}
}).call(null,xs,seen);
}),null,null));
});
return step.call(null,coll,cljs.core.PersistentHashSet.EMPTY);
});
taoensso.encore.xdistinct = (function taoensso$encore$xdistinct(var_args){
var args45506 = [];
var len__26323__auto___45509 = arguments.length;
var i__26324__auto___45510 = (0);
while(true){
if((i__26324__auto___45510 < len__26323__auto___45509)){
args45506.push((arguments[i__26324__auto___45510]));

var G__45511 = (i__26324__auto___45510 + (1));
i__26324__auto___45510 = G__45511;
continue;
} else {
}
break;
}

var G__45508 = args45506.length;
switch (G__45508) {
case 0:
return taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45506.length)].join('')));

}
});

taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.distinct.call(null);
});

taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$1 = (function (keyfn){
return (function (rf){
var seen_ = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);
return ((function (seen_){
return (function() {
var G__45513 = null;
var G__45513__0 = (function (){
return rf.call(null);
});
var G__45513__1 = (function (acc){
return rf.call(null,acc);
});
var G__45513__2 = (function (acc,input){
var k = keyfn.call(null,input);
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,seen_),k)){
return acc;
} else {
cljs.core._vreset_BANG_.call(null,seen_,cljs.core.conj.call(null,cljs.core._deref.call(null,seen_),k));

return rf.call(null,acc,input);
}
});
G__45513 = function(acc,input){
switch(arguments.length){
case 0:
return G__45513__0.call(this);
case 1:
return G__45513__1.call(this,acc);
case 2:
return G__45513__2.call(this,acc,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__45513.cljs$core$IFn$_invoke$arity$0 = G__45513__0;
G__45513.cljs$core$IFn$_invoke$arity$1 = G__45513__1;
G__45513.cljs$core$IFn$_invoke$arity$2 = G__45513__2;
return G__45513;
})()
;})(seen_))
});
});

taoensso.encore.xdistinct.cljs$lang$maxFixedArity = 1;
taoensso.encore.takev = (function taoensso$encore$takev(n,coll){
if(cljs.core.vector_QMARK_.call(null,coll)){
return taoensso.encore.subvec_STAR_.call(null,coll,(0),n);
} else {
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.take.call(null,n),coll);
}
});
taoensso.encore.removev = (function taoensso$encore$removev(pred,coll){
return cljs.core.filterv.call(null,cljs.core.complement.call(null,pred),coll);
});
taoensso.encore.distinctv = (function taoensso$encore$distinctv(var_args){
var args45518 = [];
var len__26323__auto___45523 = arguments.length;
var i__26324__auto___45524 = (0);
while(true){
if((i__26324__auto___45524 < len__26323__auto___45523)){
args45518.push((arguments[i__26324__auto___45524]));

var G__45525 = (i__26324__auto___45524 + (1));
i__26324__auto___45524 = G__45525;
continue;
} else {
}
break;
}

var G__45520 = args45518.length;
switch (G__45520) {
case 1:
return taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45518.length)].join('')));

}
});

taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return taoensso.encore.distinctv.call(null,cljs.core.identity,coll);
});

taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$2 = (function (keyfn,coll){
var tr = cljs.core.reduce.call(null,(function (p__45521,in$){
var vec__45522 = p__45521;
var v = cljs.core.nth.call(null,vec__45522,(0),null);
var seen = cljs.core.nth.call(null,vec__45522,(1),null);
var in_STAR_ = keyfn.call(null,in$);
if(!(cljs.core.contains_QMARK_.call(null,seen,in_STAR_))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.call(null,v,in$),cljs.core.conj.call(null,seen,in_STAR_)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,seen], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),cljs.core.PersistentHashSet.EMPTY], null),coll);
return cljs.core.persistent_BANG_.call(null,cljs.core.nth.call(null,tr,(0)));
});

taoensso.encore.distinctv.cljs$lang$maxFixedArity = 2;
/**
 * Reverse comparator
 */
taoensso.encore.rcompare = (function taoensso$encore$rcompare(x,y){
return cljs.core.compare.call(null,y,x);
});
taoensso.encore.nested_merge_with = (function taoensso$encore$nested_merge_with(var_args){
var args__26330__auto__ = [];
var len__26323__auto___45529 = arguments.length;
var i__26324__auto___45530 = (0);
while(true){
if((i__26324__auto___45530 < len__26323__auto___45529)){
args__26330__auto__.push((arguments[i__26324__auto___45530]));

var G__45531 = (i__26324__auto___45530 + (1));
i__26324__auto___45530 = G__45531;
continue;
} else {
}
break;
}

var argseq__26331__auto__ = ((((1) < args__26330__auto__.length))?(new cljs.core.IndexedSeq(args__26330__auto__.slice((1)),(0))):null);
return taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26331__auto__);
});

taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$variadic = (function (f,maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps))){
var merge_entry = (function (m,e){
var k = cljs.core.key.call(null,e);
var rv = cljs.core.val.call(null,e);
if(!(cljs.core.contains_QMARK_.call(null,m,k))){
return cljs.core.assoc.call(null,m,k,rv);
} else {
var lv = cljs.core.get.call(null,m,k);
if((cljs.core.map_QMARK_.call(null,lv)) && (cljs.core.map_QMARK_.call(null,rv))){
return cljs.core.assoc.call(null,m,k,taoensso.encore.nested_merge_with.call(null,f,lv,rv));
} else {
return cljs.core.assoc.call(null,m,k,f.call(null,lv,rv));
}
}
});
var merge2 = ((function (merge_entry){
return (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry,(function (){var or__25265__auto__ = m1;
if(cljs.core.truth_(or__25265__auto__)){
return or__25265__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.seq.call(null,m2));
});})(merge_entry))
;
return cljs.core.reduce.call(null,merge2,maps);
} else {
return null;
}
});

taoensso.encore.nested_merge_with.cljs$lang$maxFixedArity = (1);

taoensso.encore.nested_merge_with.cljs$lang$applyTo = (function (seq45527){
var G__45528 = cljs.core.first.call(null,seq45527);
var seq45527__$1 = cljs.core.next.call(null,seq45527);
return taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$variadic(G__45528,seq45527__$1);
});
taoensso.encore.nested_merge = cljs.core.partial.call(null,taoensso.encore.nested_merge_with,(function (x,y){
if((cljs.core.map_QMARK_.call(null,x)) && ((y == null))){
return x;
} else {
return y;
}
}));
/**
 * Like `repeatedly` but faster and `conj`s items into given collection
 */
taoensso.encore.repeatedly_into = (function taoensso$encore$repeatedly_into(coll,n,f){
if((function (){var and__25253__auto__ = (n > (10));
if(and__25253__auto__){
if(!((coll == null))){
if(((coll.cljs$lang$protocol_mask$partition1$ & (4))) || (coll.cljs$core$IEditableCollection$)){
return true;
} else {
return false;
}
} else {
return false;
}
} else {
return and__25253__auto__;
}
})()){
var v = cljs.core.transient$.call(null,coll);
var idx = (0);
while(true){
if((idx === n)){
return cljs.core.persistent_BANG_.call(null,v);
} else {
var G__45536 = cljs.core.conj_BANG_.call(null,v,f.call(null));
var G__45537 = (idx + (1));
v = G__45536;
idx = G__45537;
continue;
}
break;
}
} else {
var v = coll;
var idx = (0);
while(true){
if((idx === n)){
return v;
} else {
var G__45538 = cljs.core.conj.call(null,v,f.call(null));
var G__45539 = (idx + (1));
v = G__45538;
idx = G__45539;
continue;
}
break;
}
}
});
taoensso.encore.str_builder_QMARK_ = (function taoensso$encore$str_builder_QMARK_(x){
return (x instanceof goog.string.StringBuffer);
});
/**
 * For cross-platform string building
 */
taoensso.encore.str_builder = (function() {
var taoensso$encore$str_builder = null;
var taoensso$encore$str_builder__0 = (function (){
return (new goog.string.StringBuffer());
});
var taoensso$encore$str_builder__1 = (function (s_init){
return (new goog.string.StringBuffer(s_init));
});
taoensso$encore$str_builder = function(s_init){
switch(arguments.length){
case 0:
return taoensso$encore$str_builder__0.call(this);
case 1:
return taoensso$encore$str_builder__1.call(this,s_init);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$encore$str_builder.cljs$core$IFn$_invoke$arity$0 = taoensso$encore$str_builder__0;
taoensso$encore$str_builder.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$str_builder__1;
return taoensso$encore$str_builder;
})()
;
/**
 * For cross-platform string building
 */
taoensso.encore.sb_append = (function taoensso$encore$sb_append(str_builder,s){
return str_builder.append(s);
});
/**
 * String builder reducing fn
 */
taoensso.encore.str_rf = (function() {
var taoensso$encore$str_rf = null;
var taoensso$encore$str_rf__0 = (function (){
return taoensso.encore.str_builder.call(null);
});
var taoensso$encore$str_rf__1 = (function (acc){
if(cljs.core.truth_(taoensso.encore.str_builder_QMARK_.call(null,acc))){
return acc;
} else {
return taoensso.encore.str_builder.call(null,[cljs.core.str(acc)].join(''));
}
});
var taoensso$encore$str_rf__2 = (function (acc,in$){
return taoensso.encore.sb_append.call(null,(cljs.core.truth_(taoensso.encore.str_builder_QMARK_.call(null,acc))?acc:taoensso.encore.str_builder.call(null,[cljs.core.str(acc)].join(''))),[cljs.core.str(in$)].join(''));
});
taoensso$encore$str_rf = function(acc,in$){
switch(arguments.length){
case 0:
return taoensso$encore$str_rf__0.call(this);
case 1:
return taoensso$encore$str_rf__1.call(this,acc);
case 2:
return taoensso$encore$str_rf__2.call(this,acc,in$);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$encore$str_rf.cljs$core$IFn$_invoke$arity$0 = taoensso$encore$str_rf__0;
taoensso$encore$str_rf.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$str_rf__1;
taoensso$encore$str_rf.cljs$core$IFn$_invoke$arity$2 = taoensso$encore$str_rf__2;
return taoensso$encore$str_rf;
})()
;
taoensso.encore.undefined__GT_nil = (function taoensso$encore$undefined__GT_nil(x){
if((void 0 === x)){
return null;
} else {
return x;
}
});
taoensso.encore.nil__GT_str = (function taoensso$encore$nil__GT_str(x){
if(((void 0 === x)) || ((x == null))){
return "nil";
} else {
return x;
}
});
/**
 * Faster, transducer-based generalization of `clojure.string/join` with `xform`
 *  support
 */
taoensso.encore.str_join = (function taoensso$encore$str_join(var_args){
var args45544 = [];
var len__26323__auto___45547 = arguments.length;
var i__26324__auto___45548 = (0);
while(true){
if((i__26324__auto___45548 < len__26323__auto___45547)){
args45544.push((arguments[i__26324__auto___45548]));

var G__45549 = (i__26324__auto___45548 + (1));
i__26324__auto___45548 = G__45549;
continue;
} else {
}
break;
}

var G__45546 = args45544.length;
switch (G__45546) {
case 1:
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45544.length)].join('')));

}
});

taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return taoensso.encore.str_join.call(null,null,null,coll);
});

taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$2 = (function (separator,coll){
return taoensso.encore.str_join.call(null,separator,null,coll);
});

taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3 = (function (separator,xform,coll){
if(cljs.core.truth_((function (){var and__25253__auto__ = separator;
if(cljs.core.truth_(and__25253__auto__)){
return cljs.core.not_EQ_.call(null,separator,"");
} else {
return and__25253__auto__;
}
})())){
var sep_xform = cljs.core.interpose.call(null,separator);
var str_rf_STAR_ = cljs.core.completing.call(null,taoensso.encore.str_rf,cljs.core.str);
if(cljs.core.truth_(xform)){
return cljs.core.transduce.call(null,cljs.core.comp.call(null,xform,sep_xform),str_rf_STAR_,coll);
} else {
return cljs.core.transduce.call(null,sep_xform,str_rf_STAR_,coll);
}
} else {
if(cljs.core.truth_(xform)){
return cljs.core.transduce.call(null,xform,cljs.core.completing.call(null,taoensso.encore.str_rf,cljs.core.str),coll);
} else {
return [cljs.core.str(cljs.core.reduce.call(null,taoensso.encore.str_rf,coll))].join('');
}
}
});

taoensso.encore.str_join.cljs$lang$maxFixedArity = 3;
taoensso.encore.format_STAR_ = (function taoensso$encore$format_STAR_(fmt,args){
var fmt__$1 = (function (){var or__25265__auto__ = fmt;
if(cljs.core.truth_(or__25265__auto__)){
return or__25265__auto__;
} else {
return "";
}
})();
var args__$1 = cljs.core.mapv.call(null,taoensso.encore.nil__GT_str,args);
return cljs.core.apply.call(null,goog.string.format,fmt__$1,args__$1);
});
/**
 * Like `clojure.core/format` but:
 *  * Returns "" when fmt is nil rather than throwing an NPE.
 *  * Formats nil as "nil" rather than "null".
 *  * Provides ClojureScript support via goog.string.format (this has fewer
 *    formatting options than Clojure's `format`!).
 */
taoensso.encore.format = (function taoensso$encore$format(var_args){
var args__26330__auto__ = [];
var len__26323__auto___45553 = arguments.length;
var i__26324__auto___45554 = (0);
while(true){
if((i__26324__auto___45554 < len__26323__auto___45553)){
args__26330__auto__.push((arguments[i__26324__auto___45554]));

var G__45555 = (i__26324__auto___45554 + (1));
i__26324__auto___45554 = G__45555;
continue;
} else {
}
break;
}

var argseq__26331__auto__ = ((((1) < args__26330__auto__.length))?(new cljs.core.IndexedSeq(args__26330__auto__.slice((1)),(0))):null);
return taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26331__auto__);
});

taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return taoensso.encore.format_STAR_.call(null,fmt,args);
});

taoensso.encore.format.cljs$lang$maxFixedArity = (1);

taoensso.encore.format.cljs$lang$applyTo = (function (seq45551){
var G__45552 = cljs.core.first.call(null,seq45551);
var seq45551__$1 = cljs.core.next.call(null,seq45551);
return taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic(G__45552,seq45551__$1);
});
/**
 * Workaround for http://dev.clojure.org/jira/browse/CLJS-794,
 *                http://dev.clojure.org/jira/browse/CLJS-911.
 * 
 *   Note that ClojureScript 1.7.145 technically introduced a breaking "fix" for
 *   CLJS-911 (Ref. https://goo.gl/bk5hcT) but it's a mess in an attempt to keep
 *   some compatibility with the previous broken behaviour. The merged CLJS-911 fix
 *   provides only inconsistent (single-match) and error-prone compatibility with
 *   Clojure's `str/replace`. CLJS-794 is also still unresolved.
 * 
 *   This util provides proper consistent Clojure/Script replace behaviour.
 */
taoensso.encore.str_replace = (function taoensso$encore$str_replace(s,match,replacement){
if(typeof match === 'string'){
return s.replace((new RegExp(goog.string.regExpEscape(match),"g")),replacement);
} else {
if((match instanceof RegExp)){
var flags = [cljs.core.str("g"),cljs.core.str((cljs.core.truth_(match.ignoreCase)?"i":null)),cljs.core.str((cljs.core.truth_(match.multiline)?"m":null))].join('');
var replacement__$1 = ((typeof replacement === 'string')?replacement:((function (flags){
return (function() { 
var G__45556__delegate = function (args){
return replacement.call(null,cljs.core.vec.call(null,args));
};
var G__45556 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45557__i = 0, G__45557__a = new Array(arguments.length -  0);
while (G__45557__i < G__45557__a.length) {G__45557__a[G__45557__i] = arguments[G__45557__i + 0]; ++G__45557__i;}
  args = new cljs.core.IndexedSeq(G__45557__a,0);
} 
return G__45556__delegate.call(this,args);};
G__45556.cljs$lang$maxFixedArity = 0;
G__45556.cljs$lang$applyTo = (function (arglist__45558){
var args = cljs.core.seq(arglist__45558);
return G__45556__delegate(args);
});
G__45556.cljs$core$IFn$_invoke$arity$variadic = G__45556__delegate;
return G__45556;
})()
;})(flags))
);
return s.replace((new RegExp(match.source,flags)),replacement__$1);
} else {
throw [cljs.core.str("Invalid match arg: "),cljs.core.str(match)].join('');

}
}
});
/**
 * Gives a consistent, flexible, cross-platform substring API built on
 *   `sub-indexes`
 */
taoensso.encore.substr = (function taoensso$encore$substr(var_args){
var args__26330__auto__ = [];
var len__26323__auto___45566 = arguments.length;
var i__26324__auto___45567 = (0);
while(true){
if((i__26324__auto___45567 < len__26323__auto___45566)){
args__26330__auto__.push((arguments[i__26324__auto___45567]));

var G__45568 = (i__26324__auto___45567 + (1));
i__26324__auto___45567 = G__45568;
continue;
} else {
}
break;
}

var argseq__26331__auto__ = ((((2) < args__26330__auto__.length))?(new cljs.core.IndexedSeq(args__26330__auto__.slice((2)),(0))):null);
return taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26331__auto__);
});

taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic = (function (s,start_idx,p__45562){
var vec__45563 = p__45562;
var _QMARK_max_len = cljs.core.nth.call(null,vec__45563,(0),null);
if(cljs.core.truth_((function (){var __x = s;
try{if(typeof __x === 'string'){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e45564){if((e45564 instanceof Error)){
var __t = e45564;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(string? s)",__x,__t,null);
} else {
throw e45564;

}
}})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"s","s",-948495851,null))))].join('')));
}

var vec__45565 = taoensso.encore.sub_indexes.call(null,s,start_idx,new cljs.core.Keyword(null,"max-len","max-len",-18846016),_QMARK_max_len);
var start_idx_STAR_ = cljs.core.nth.call(null,vec__45565,(0),null);
var end_idx_STAR_ = cljs.core.nth.call(null,vec__45565,(1),null);
return s.substring(start_idx_STAR_,end_idx_STAR_);
});

taoensso.encore.substr.cljs$lang$maxFixedArity = (2);

taoensso.encore.substr.cljs$lang$applyTo = (function (seq45559){
var G__45560 = cljs.core.first.call(null,seq45559);
var seq45559__$1 = cljs.core.next.call(null,seq45559);
var G__45561 = cljs.core.first.call(null,seq45559__$1);
var seq45559__$2 = cljs.core.next.call(null,seq45559__$1);
return taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic(G__45560,G__45561,seq45559__$2);
});
taoensso.encore.str_contains_QMARK_ = (function taoensso$encore$str_contains_QMARK_(s,substr){
return cljs.core.not_EQ_.call(null,(-1),s.indexOf(substr));
});
taoensso.encore.str_starts_with_QMARK_ = (function taoensso$encore$str_starts_with_QMARK_(s,substr){
return (s.indexOf(substr) === (0));
});
taoensso.encore.str_ends_with_QMARK_ = (function taoensso$encore$str_ends_with_QMARK_(s,substr){
var s_len = s.length;
var substr_len = substr.length;
if((s_len >= substr_len)){
return cljs.core.not_EQ_.call(null,(-1),s.indexOf(substr,(s_len - substr_len)));
} else {
return null;
}
});
taoensso.encore.str__QMARK_index = (function taoensso$encore$str__QMARK_index(var_args){
var args__26330__auto__ = [];
var len__26323__auto___45574 = arguments.length;
var i__26324__auto___45575 = (0);
while(true){
if((i__26324__auto___45575 < len__26323__auto___45574)){
args__26330__auto__.push((arguments[i__26324__auto___45575]));

var G__45576 = (i__26324__auto___45575 + (1));
i__26324__auto___45575 = G__45576;
continue;
} else {
}
break;
}

var argseq__26331__auto__ = ((((2) < args__26330__auto__.length))?(new cljs.core.IndexedSeq(args__26330__auto__.slice((2)),(0))):null);
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26331__auto__);
});

taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$variadic = (function (s,substr,p__45572){
var vec__45573 = p__45572;
var start_idx = cljs.core.nth.call(null,vec__45573,(0),null);
var last_QMARK_ = cljs.core.nth.call(null,vec__45573,(1),null);
var start_idx__$1 = ((function (){var or__25265__auto__ = start_idx;
if(cljs.core.truth_(or__25265__auto__)){
return or__25265__auto__;
} else {
return (0);
}
})() | (0));
var result = ((cljs.core.truth_(last_QMARK_)?s.lastIndexOf(substr,start_idx__$1):s.indexOf(substr,start_idx__$1)) | (0));
if(cljs.core.not_EQ_.call(null,result,(-1))){
return result;
} else {
return null;
}
});

taoensso.encore.str__QMARK_index.cljs$lang$maxFixedArity = (2);

taoensso.encore.str__QMARK_index.cljs$lang$applyTo = (function (seq45569){
var G__45570 = cljs.core.first.call(null,seq45569);
var seq45569__$1 = cljs.core.next.call(null,seq45569);
var G__45571 = cljs.core.first.call(null,seq45569__$1);
var seq45569__$2 = cljs.core.next.call(null,seq45569__$1);
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$variadic(G__45570,G__45571,seq45569__$2);
});
/**
 * Like `clojure.string/join` but ensures no double separators
 */
taoensso.encore.join_once = (function taoensso$encore$join_once(var_args){
var args__26330__auto__ = [];
var len__26323__auto___45579 = arguments.length;
var i__26324__auto___45580 = (0);
while(true){
if((i__26324__auto___45580 < len__26323__auto___45579)){
args__26330__auto__.push((arguments[i__26324__auto___45580]));

var G__45581 = (i__26324__auto___45580 + (1));
i__26324__auto___45580 = G__45581;
continue;
} else {
}
break;
}

var argseq__26331__auto__ = ((((1) < args__26330__auto__.length))?(new cljs.core.IndexedSeq(args__26330__auto__.slice((1)),(0))):null);
return taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26331__auto__);
});

taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic = (function (separator,coll){
return cljs.core.reduce.call(null,(function (s1,s2){
var s1__$1 = [cljs.core.str(s1)].join('');
var s2__$1 = [cljs.core.str(s2)].join('');
if(cljs.core.truth_(taoensso.encore.str_ends_with_QMARK_.call(null,s1__$1,separator))){
if(cljs.core.truth_(taoensso.encore.str_starts_with_QMARK_.call(null,s2__$1,separator))){
return [cljs.core.str(s1__$1),cljs.core.str(s2__$1.substring((1)))].join('');
} else {
return [cljs.core.str(s1__$1),cljs.core.str(s2__$1)].join('');
}
} else {
if(cljs.core.truth_(taoensso.encore.str_starts_with_QMARK_.call(null,s2__$1,separator))){
return [cljs.core.str(s1__$1),cljs.core.str(s2__$1)].join('');
} else {
if((cljs.core._EQ_.call(null,s1__$1,"")) || (cljs.core._EQ_.call(null,s2__$1,""))){
return [cljs.core.str(s1__$1),cljs.core.str(s2__$1)].join('');
} else {
return [cljs.core.str(s1__$1),cljs.core.str(separator),cljs.core.str(s2__$1)].join('');
}
}
}
}),null,coll);
});

taoensso.encore.join_once.cljs$lang$maxFixedArity = (1);

taoensso.encore.join_once.cljs$lang$applyTo = (function (seq45577){
var G__45578 = cljs.core.first.call(null,seq45577);
var seq45577__$1 = cljs.core.next.call(null,seq45577);
return taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic(G__45578,seq45577__$1);
});
/**
 * Joins string paths (URLs, file paths, etc.) ensuring correct "/"
 *   interposition
 */
taoensso.encore.path = (function taoensso$encore$path(var_args){
var args__26330__auto__ = [];
var len__26323__auto___45583 = arguments.length;
var i__26324__auto___45584 = (0);
while(true){
if((i__26324__auto___45584 < len__26323__auto___45583)){
args__26330__auto__.push((arguments[i__26324__auto___45584]));

var G__45585 = (i__26324__auto___45584 + (1));
i__26324__auto___45584 = G__45585;
continue;
} else {
}
break;
}

var argseq__26331__auto__ = ((((0) < args__26330__auto__.length))?(new cljs.core.IndexedSeq(args__26330__auto__.slice((0)),(0))):null);
return taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic(argseq__26331__auto__);
});

taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic = (function (parts){
return cljs.core.apply.call(null,taoensso.encore.join_once,"/",parts);
});

taoensso.encore.path.cljs$lang$maxFixedArity = (0);

taoensso.encore.path.cljs$lang$applyTo = (function (seq45582){
return taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45582));
});
/**
 * Converts all word breaks of any form and length (including line breaks of any
 *   form, tabs, spaces, etc.) to a single regular space
 */
taoensso.encore.norm_word_breaks = (function taoensso$encore$norm_word_breaks(s){
return clojure.string.replace.call(null,[cljs.core.str(s)].join(''),/\s+/," ");
});
taoensso.encore.count_words = (function taoensso$encore$count_words(s){
if(clojure.string.blank_QMARK_.call(null,s)){
return (0);
} else {
return cljs.core.count.call(null,clojure.string.split.call(null,s,/\s+/));
}
});
/**
 * Returns a UUIDv4 string of form "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx",
 *   Ref. http://www.ietf.org/rfc/rfc4122.txt,
 *     https://gist.github.com/franks42/4159427
 */
taoensso.encore.uuid_str = (function taoensso$encore$uuid_str(var_args){
var args45586 = [];
var len__26323__auto___45589 = arguments.length;
var i__26324__auto___45590 = (0);
while(true){
if((i__26324__auto___45590 < len__26323__auto___45589)){
args45586.push((arguments[i__26324__auto___45590]));

var G__45591 = (i__26324__auto___45590 + (1));
i__26324__auto___45590 = G__45591;
continue;
} else {
}
break;
}

var G__45588 = args45586.length;
switch (G__45588) {
case 1:
return taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45586.length)].join('')));

}
});

taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1 = (function (max_length){
return taoensso.encore.substr.call(null,taoensso.encore.uuid_str.call(null),(0),max_length);
});

taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0 = (function (){
var hex = (function (){
return cljs.core.rand_int.call(null,(16)).toString((16));
});
var rhex = ((8) | ((3) & cljs.core.rand_int.call(null,(16)))).toString((16));
return [cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str("-"),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str("-"),cljs.core.str("4"),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str("-"),cljs.core.str(rhex),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str("-"),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null))].join('');
});

taoensso.encore.uuid_str.cljs$lang$maxFixedArity = 1;
taoensso.encore.try_pred = (function taoensso$encore$try_pred(pred,x){
try{return pred.call(null,x);
}catch (e45594){if((e45594 instanceof Error)){
var _ = e45594;
return false;
} else {
throw e45594;

}
}});
/**
 * Experimental. Cheaper `have!` alt that provides less diagnostic info.
 */
taoensso.encore.is_BANG_ = (function taoensso$encore$is_BANG_(var_args){
var args45595 = [];
var len__26323__auto___45598 = arguments.length;
var i__26324__auto___45599 = (0);
while(true){
if((i__26324__auto___45599 < len__26323__auto___45598)){
args45595.push((arguments[i__26324__auto___45599]));

var G__45600 = (i__26324__auto___45599 + (1));
i__26324__auto___45599 = G__45600;
continue;
} else {
}
break;
}

var G__45597 = args45595.length;
switch (G__45597) {
case 1:
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45595.length)].join('')));

}
});

taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (x){
if(cljs.core.truth_(x)){
return x;
} else {
return taoensso.encore.is_BANG_.call(null,cljs.core.identity,x);
}
});

taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (pred,x){
if(cljs.core.truth_(taoensso.encore.try_pred.call(null,pred,x))){
return x;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("`is!` "),cljs.core.str([cljs.core.str(pred)].join('')),cljs.core.str(" failure against arg: "),cljs.core.str(cljs.core.pr_str.call(null,x))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arg","arg",-1747261837),x,new cljs.core.Keyword(null,"arg-type","arg-type",-2020167363),cljs.core.type.call(null,x)], null));
}
});

taoensso.encore.is_BANG_.cljs$lang$maxFixedArity = 2;
/**
 * Experimental. For use with `if-let`s, `when-let`s, etc.
 */
taoensso.encore.when_QMARK_ = (function taoensso$encore$when_QMARK_(pred,x){
if(cljs.core.truth_(taoensso.encore.try_pred.call(null,pred,x))){
return x;
} else {
return null;
}
});
taoensso.encore.gc_rate = (1.0 / (16000));
taoensso.encore.gc_now_QMARK_ = (function taoensso$encore$gc_now_QMARK_(){
return (cljs.core.rand.call(null) <= taoensso.encore.gc_rate);
});
/**
 * Swaps associative value at key and returns the new value. Specialized, fast
 *   `swap-in!` for use mostly by memoization utils.
 */
taoensso.encore.swap_val_BANG_ = (function taoensso$encore$swap_val_BANG_(atom_,k,f){
while(true){
var old_m = cljs.core.deref.call(null,atom_);
var new_v = f.call(null,cljs.core.get.call(null,old_m,k));
var new_m = cljs.core.assoc.call(null,old_m,k,new_v);
if(cljs.core.truth_(cljs.core.compare_and_set_BANG_.call(null,atom_,old_m,new_m))){
return new_v;
} else {
continue;
}
break;
}
});
/**
 * Like `clojure.core/memoize` but faster, uses delays to avoid write races
 */
taoensso.encore.memoize_ = (function taoensso$encore$memoize_(f){
var cache_ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (cache_){
return (function() { 
var G__45602__delegate = function (args){
return cljs.core.deref.call(null,(function (){var or__25265__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,cache_),args);
if(cljs.core.truth_(or__25265__auto__)){
return or__25265__auto__;
} else {
return taoensso.encore.swap_val_BANG_.call(null,cache_,args,((function (or__25265__auto__,cache_){
return (function (_QMARK_dv){
if(cljs.core.truth_(_QMARK_dv)){
return _QMARK_dv;
} else {
return (new cljs.core.Delay(((function (or__25265__auto__,cache_){
return (function (){
return cljs.core.apply.call(null,f,args);
});})(or__25265__auto__,cache_))
,null));
}
});})(or__25265__auto__,cache_))
);
}
})());
};
var G__45602 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45603__i = 0, G__45603__a = new Array(arguments.length -  0);
while (G__45603__i < G__45603__a.length) {G__45603__a[G__45603__i] = arguments[G__45603__i + 0]; ++G__45603__i;}
  args = new cljs.core.IndexedSeq(G__45603__a,0);
} 
return G__45602__delegate.call(this,args);};
G__45602.cljs$lang$maxFixedArity = 0;
G__45602.cljs$lang$applyTo = (function (arglist__45604){
var args = cljs.core.seq(arglist__45604);
return G__45602__delegate(args);
});
G__45602.cljs$core$IFn$_invoke$arity$variadic = G__45602__delegate;
return G__45602;
})()
;
;})(cache_))
});
/**
 * Fastest possible 0-arg `memoize_`
 */
taoensso.encore.memoize_a0_ = (function taoensso$encore$memoize_a0_(f){
var cache_ = cljs.core.atom.call(null,null);
return ((function (cache_){
return (function (){
return cljs.core.deref.call(null,(function (){var or__25265__auto__ = cljs.core.deref.call(null,cache_);
if(cljs.core.truth_(or__25265__auto__)){
return or__25265__auto__;
} else {
return cljs.core.swap_BANG_.call(null,cache_,((function (or__25265__auto__,cache_){
return (function (_QMARK_dv){
if(cljs.core.truth_(_QMARK_dv)){
return _QMARK_dv;
} else {
return (new cljs.core.Delay(((function (or__25265__auto__,cache_){
return (function (){
return f.call(null);
});})(or__25265__auto__,cache_))
,null));
}
});})(or__25265__auto__,cache_))
);
}
})());
});
;})(cache_))
});
/**
 * Fastest possible 0/1-arg `memoize_`
 */
taoensso.encore.memoize_a1_ = (function taoensso$encore$memoize_a1_(f){
var cache_ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (cache_){
return (function() {
var G__45605 = null;
var G__45605__0 = (function (){
return cljs.core.deref.call(null,(function (){var or__25265__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,cache_),taoensso.encore.sentinel);
if(cljs.core.truth_(or__25265__auto__)){
return or__25265__auto__;
} else {
return taoensso.encore.swap_val_BANG_.call(null,cache_,taoensso.encore.sentinel,((function (or__25265__auto__,cache_){
return (function (_QMARK_dv){
if(cljs.core.truth_(_QMARK_dv)){
return _QMARK_dv;
} else {
return (new cljs.core.Delay(((function (or__25265__auto__,cache_){
return (function (){
return f.call(null);
});})(or__25265__auto__,cache_))
,null));
}
});})(or__25265__auto__,cache_))
);
}
})());
});
var G__45605__1 = (function (x){
return cljs.core.deref.call(null,(function (){var or__25265__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,cache_),x);
if(cljs.core.truth_(or__25265__auto__)){
return or__25265__auto__;
} else {
return taoensso.encore.swap_val_BANG_.call(null,cache_,x,((function (or__25265__auto__,cache_){
return (function (_QMARK_dv){
if(cljs.core.truth_(_QMARK_dv)){
return _QMARK_dv;
} else {
return (new cljs.core.Delay(((function (or__25265__auto__,cache_){
return (function (){
return f.call(null,x);
});})(or__25265__auto__,cache_))
,null));
}
});})(or__25265__auto__,cache_))
);
}
})());
});
G__45605 = function(x){
switch(arguments.length){
case 0:
return G__45605__0.call(this);
case 1:
return G__45605__1.call(this,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__45605.cljs$core$IFn$_invoke$arity$0 = G__45605__0;
G__45605.cljs$core$IFn$_invoke$arity$1 = G__45605__1;
return G__45605;
})()
;})(cache_))
});
/**
 * Great for Reactjs render op caching on mobile devices, etc.
 */
taoensso.encore.memoize1 = (function taoensso$encore$memoize1(f){
var cache_ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (cache_){
return (function() { 
var G__45606__delegate = function (args){
return cljs.core.deref.call(null,(function (){var or__25265__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,cache_),args);
if(cljs.core.truth_(or__25265__auto__)){
return or__25265__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,cache_,((function (or__25265__auto__,cache_){
return (function (cache){
if(cljs.core.truth_(cljs.core.get.call(null,cache,args))){
return cache;
} else {
return cljs.core.PersistentArrayMap.fromArray([args,(new cljs.core.Delay(((function (or__25265__auto__,cache_){
return (function (){
return cljs.core.apply.call(null,f,args);
});})(or__25265__auto__,cache_))
,null))], true, false);
}
});})(or__25265__auto__,cache_))
),args);
}
})());
};
var G__45606 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45607__i = 0, G__45607__a = new Array(arguments.length -  0);
while (G__45607__i < G__45607__a.length) {G__45607__a[G__45607__i] = arguments[G__45607__i + 0]; ++G__45607__i;}
  args = new cljs.core.IndexedSeq(G__45607__a,0);
} 
return G__45606__delegate.call(this,args);};
G__45606.cljs$lang$maxFixedArity = 0;
G__45606.cljs$lang$applyTo = (function (arglist__45608){
var args = cljs.core.seq(arglist__45608);
return G__45606__delegate(args);
});
G__45606.cljs$core$IFn$_invoke$arity$variadic = G__45606__delegate;
return G__45606;
})()
;
;})(cache_))
});
/**
 * Like `(memoize* f)` but takes an explicit cache atom (possibly nil)
 *   and immediately applies memoized f to given arguments
 */
taoensso.encore.memoized = (function taoensso$encore$memoized(var_args){
var args__26330__auto__ = [];
var len__26323__auto___45612 = arguments.length;
var i__26324__auto___45613 = (0);
while(true){
if((i__26324__auto___45613 < len__26323__auto___45612)){
args__26330__auto__.push((arguments[i__26324__auto___45613]));

var G__45614 = (i__26324__auto___45613 + (1));
i__26324__auto___45613 = G__45614;
continue;
} else {
}
break;
}

var argseq__26331__auto__ = ((((2) < args__26330__auto__.length))?(new cljs.core.IndexedSeq(args__26330__auto__.slice((2)),(0))):null);
return taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26331__auto__);
});

taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic = (function (cache,f,args){
if(cljs.core.not.call(null,cache)){
return cljs.core.apply.call(null,f,args);
} else {
return cljs.core.deref.call(null,taoensso.encore.swap_val_BANG_.call(null,cache,args,(function (_QMARK_dv){
if(cljs.core.truth_(_QMARK_dv)){
return _QMARK_dv;
} else {
return (new cljs.core.Delay((function (){
return cljs.core.apply.call(null,f,args);
}),null));
}
})));
}
});

taoensso.encore.memoized.cljs$lang$maxFixedArity = (2);

taoensso.encore.memoized.cljs$lang$applyTo = (function (seq45609){
var G__45610 = cljs.core.first.call(null,seq45609);
var seq45609__$1 = cljs.core.next.call(null,seq45609);
var G__45611 = cljs.core.first.call(null,seq45609__$1);
var seq45609__$2 = cljs.core.next.call(null,seq45609__$1);
return taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic(G__45610,G__45611,seq45609__$2);
});
/**
 * Like `clojure.core/memoize` but:
 *  * Uses delays to prevent race conditions on writes.
 *  * Supports auto invalidation & gc with `ttl-ms` option.
 *  * Supports manual invalidation by prepending args with `:mem/del` or `:mem/fresh`.
 *  * Supports cache size limit & gc with `cache-size` option.
 * 
 *   Much faster than `clojure.core.memoize`.
 */
taoensso.encore.memoize_STAR_ = (function taoensso$encore$memoize_STAR_(var_args){
var args45615 = [];
var len__26323__auto___45639 = arguments.length;
var i__26324__auto___45640 = (0);
while(true){
if((i__26324__auto___45640 < len__26323__auto___45639)){
args45615.push((arguments[i__26324__auto___45640]));

var G__45641 = (i__26324__auto___45640 + (1));
i__26324__auto___45640 = G__45641;
continue;
} else {
}
break;
}

var G__45617 = args45615.length;
switch (G__45617) {
case 1:
return taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45615.length)].join('')));

}
});

taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (f){
var cache_ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (cache_){
return (function() { 
var G__45643__delegate = function (p__45618){
var vec__45619 = p__45618;
var arg1 = cljs.core.nth.call(null,vec__45619,(0),null);
var argn = cljs.core.nthnext.call(null,vec__45619,(1));
var args = vec__45619;
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","get","mem/get",1683009136)))){
return cljs.core.deref.call(null,cache_);
} else {
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","del","mem/del",574870667)))){
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,cljs.core.first.call(null,argn),new cljs.core.Keyword("mem","all","mem/all",892075139)))){
cljs.core.reset_BANG_.call(null,cache_,cljs.core.PersistentArrayMap.EMPTY);
} else {
cljs.core.swap_BANG_.call(null,cache_,cljs.core.dissoc,argn);
}

return null;
} else {
var fresh_QMARK_ = taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","fresh","mem/fresh",-1179989133));
var args__$1 = (cljs.core.truth_(fresh_QMARK_)?argn:args);
return cljs.core.deref.call(null,(function (){var or__25265__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,cache_),args__$1);
if(cljs.core.truth_(or__25265__auto__)){
return or__25265__auto__;
} else {
return taoensso.encore.swap_val_BANG_.call(null,cache_,args__$1,((function (or__25265__auto__,fresh_QMARK_,args__$1,vec__45619,arg1,argn,args,cache_){
return (function (_QMARK_dv){
if(cljs.core.truth_((function (){var and__25253__auto__ = _QMARK_dv;
if(cljs.core.truth_(and__25253__auto__)){
return cljs.core.not.call(null,fresh_QMARK_);
} else {
return and__25253__auto__;
}
})())){
return _QMARK_dv;
} else {
return (new cljs.core.Delay(((function (or__25265__auto__,fresh_QMARK_,args__$1,vec__45619,arg1,argn,args,cache_){
return (function (){
return cljs.core.apply.call(null,f,args__$1);
});})(or__25265__auto__,fresh_QMARK_,args__$1,vec__45619,arg1,argn,args,cache_))
,null));
}
});})(or__25265__auto__,fresh_QMARK_,args__$1,vec__45619,arg1,argn,args,cache_))
);
}
})());

}
}
};
var G__45643 = function (var_args){
var p__45618 = null;
if (arguments.length > 0) {
var G__45644__i = 0, G__45644__a = new Array(arguments.length -  0);
while (G__45644__i < G__45644__a.length) {G__45644__a[G__45644__i] = arguments[G__45644__i + 0]; ++G__45644__i;}
  p__45618 = new cljs.core.IndexedSeq(G__45644__a,0);
} 
return G__45643__delegate.call(this,p__45618);};
G__45643.cljs$lang$maxFixedArity = 0;
G__45643.cljs$lang$applyTo = (function (arglist__45645){
var p__45618 = cljs.core.seq(arglist__45645);
return G__45643__delegate(p__45618);
});
G__45643.cljs$core$IFn$_invoke$arity$variadic = G__45643__delegate;
return G__45643;
})()
;
;})(cache_))
});

taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (ttl_ms,f){
var __x_45646 = ttl_ms;
try{if(cljs.core.truth_(taoensso.encore.pos_int_QMARK_.call(null,__x_45646))){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e45620){if((e45620 instanceof Error)){
var __t_45647 = e45620;
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(pos-int? ttl-ms)",__x_45646,__t_45647,null);
} else {
throw e45620;

}
}
var cache_ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var gc_running_QMARK__ = cljs.core.atom.call(null,false);
var ttl_ms__$1 = cljs.core.long$.call(null,ttl_ms);
var gc_fn = ((function (cache_,gc_running_QMARK__,ttl_ms__$1){
return (function (){
if(cljs.core.truth_((function (){var and__25253__auto__ = taoensso.encore.gc_now_QMARK_.call(null);
if(cljs.core.truth_(and__25253__auto__)){
return taoensso.encore.swap_in_BANG_.call(null,gc_running_QMARK__,cljs.core.PersistentVector.EMPTY,((function (and__25253__auto__,cache_,gc_running_QMARK__,ttl_ms__$1){
return (function (b){
return taoensso.encore.swapped.call(null,true,cljs.core.not.call(null,b));
});})(and__25253__auto__,cache_,gc_running_QMARK__,ttl_ms__$1))
);
} else {
return and__25253__auto__;
}
})())){
var instant = taoensso.encore.now_udt.call(null);
var snapshot = cljs.core.deref.call(null,cache_);
var ks_to_gc = cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,((function (instant,snapshot,cache_,gc_running_QMARK__,ttl_ms__$1){
return (function (acc,k,p__45621){
var vec__45622 = p__45621;
var dv = cljs.core.nth.call(null,vec__45622,(0),null);
var udt = cljs.core.nth.call(null,vec__45622,(1),null);
var cv = vec__45622;
if(((instant - udt) > ttl_ms__$1)){
return cljs.core.conj_BANG_.call(null,acc,k);
} else {
return acc;
}
});})(instant,snapshot,cache_,gc_running_QMARK__,ttl_ms__$1))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),snapshot));
cljs.core.swap_BANG_.call(null,cache_,((function (instant,snapshot,ks_to_gc,cache_,gc_running_QMARK__,ttl_ms__$1){
return (function (m){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (instant,snapshot,ks_to_gc,cache_,gc_running_QMARK__,ttl_ms__$1){
return (function (acc,in$){
return cljs.core.dissoc_BANG_.call(null,acc,in$);
});})(instant,snapshot,ks_to_gc,cache_,gc_running_QMARK__,ttl_ms__$1))
,cljs.core.transient$.call(null,m),ks_to_gc));
});})(instant,snapshot,ks_to_gc,cache_,gc_running_QMARK__,ttl_ms__$1))
);

return cljs.core.reset_BANG_.call(null,gc_running_QMARK__,false);
} else {
return null;
}
});})(cache_,gc_running_QMARK__,ttl_ms__$1))
;
return ((function (cache_,gc_running_QMARK__,ttl_ms__$1,gc_fn){
return (function() { 
var G__45648__delegate = function (p__45623){
var vec__45624 = p__45623;
var arg1 = cljs.core.nth.call(null,vec__45624,(0),null);
var argn = cljs.core.nthnext.call(null,vec__45624,(1));
var args = vec__45624;
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","get","mem/get",1683009136)))){
return cljs.core.deref.call(null,cache_);
} else {
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","del","mem/del",574870667)))){
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,cljs.core.first.call(null,argn),new cljs.core.Keyword("mem","all","mem/all",892075139)))){
cljs.core.reset_BANG_.call(null,cache_,cljs.core.PersistentArrayMap.EMPTY);
} else {
cljs.core.swap_BANG_.call(null,cache_,cljs.core.dissoc,argn);
}

return null;
} else {
gc_fn.call(null);

var fresh_QMARK_ = taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","fresh","mem/fresh",-1179989133));
var args__$1 = (cljs.core.truth_(fresh_QMARK_)?argn:args);
var instant = taoensso.encore.now_udt.call(null);
var vec__45625 = taoensso.encore.swap_val_BANG_.call(null,cache_,args__$1,((function (fresh_QMARK_,args__$1,instant,vec__45624,arg1,argn,args,cache_,gc_running_QMARK__,ttl_ms__$1,gc_fn){
return (function (_QMARK_cv){
if(cljs.core.truth_((function (){var and__25253__auto__ = _QMARK_cv;
if(cljs.core.truth_(and__25253__auto__)){
var and__25253__auto____$1 = cljs.core.not.call(null,fresh_QMARK_);
if(and__25253__auto____$1){
var vec__45627 = _QMARK_cv;
var _dv = cljs.core.nth.call(null,vec__45627,(0),null);
var udt = cljs.core.nth.call(null,vec__45627,(1),null);
return ((instant - udt) < ttl_ms__$1);
} else {
return and__25253__auto____$1;
}
} else {
return and__25253__auto__;
}
})())){
return _QMARK_cv;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.Delay(((function (fresh_QMARK_,args__$1,instant,vec__45624,arg1,argn,args,cache_,gc_running_QMARK__,ttl_ms__$1,gc_fn){
return (function (){
return cljs.core.apply.call(null,f,args__$1);
});})(fresh_QMARK_,args__$1,instant,vec__45624,arg1,argn,args,cache_,gc_running_QMARK__,ttl_ms__$1,gc_fn))
,null)),instant], null);
}
});})(fresh_QMARK_,args__$1,instant,vec__45624,arg1,argn,args,cache_,gc_running_QMARK__,ttl_ms__$1,gc_fn))
);
var dv = cljs.core.nth.call(null,vec__45625,(0),null);
return cljs.core.deref.call(null,dv);

}
}
};
var G__45648 = function (var_args){
var p__45623 = null;
if (arguments.length > 0) {
var G__45649__i = 0, G__45649__a = new Array(arguments.length -  0);
while (G__45649__i < G__45649__a.length) {G__45649__a[G__45649__i] = arguments[G__45649__i + 0]; ++G__45649__i;}
  p__45623 = new cljs.core.IndexedSeq(G__45649__a,0);
} 
return G__45648__delegate.call(this,p__45623);};
G__45648.cljs$lang$maxFixedArity = 0;
G__45648.cljs$lang$applyTo = (function (arglist__45650){
var p__45623 = cljs.core.seq(arglist__45650);
return G__45648__delegate(p__45623);
});
G__45648.cljs$core$IFn$_invoke$arity$variadic = G__45648__delegate;
return G__45648;
})()
;
;})(cache_,gc_running_QMARK__,ttl_ms__$1,gc_fn))
});

taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (cache_size,ttl_ms,f){
var __x_45651 = ttl_ms;
try{if(cljs.core.truth_(taoensso.truss.impl._invar_pred.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),cljs.core.nil_QMARK_,taoensso.encore.pos_int_QMARK_], null)).call(null,__x_45651))){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e45628){if((e45628 instanceof Error)){
var __t_45652 = e45628;
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"([:or nil? pos-int?] ttl-ms)",__x_45651,__t_45652,null);
} else {
throw e45628;

}
}
var __x_45653 = cache_size;
try{if(cljs.core.truth_(taoensso.encore.pos_int_QMARK_.call(null,__x_45653))){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e45629){if((e45629 instanceof Error)){
var __t_45654 = e45629;
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(pos-int? cache-size)",__x_45653,__t_45654,null);
} else {
throw e45629;

}
}
var state_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tick","tick",-835886976),(0)], null));
var gc_running_QMARK__ = cljs.core.atom.call(null,false);
var ttl_ms_QMARK_ = !((ttl_ms == null));
var ttl_ms__$1 = cljs.core.long$.call(null,(function (){var or__25265__auto__ = ttl_ms;
if(cljs.core.truth_(or__25265__auto__)){
return or__25265__auto__;
} else {
return (0);
}
})());
var cache_size__$1 = cljs.core.long$.call(null,cache_size);
var gc_fn = ((function (state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (){
if(cljs.core.truth_((function (){var and__25253__auto__ = taoensso.encore.gc_now_QMARK_.call(null);
if(cljs.core.truth_(and__25253__auto__)){
return taoensso.encore.swap_in_BANG_.call(null,gc_running_QMARK__,cljs.core.PersistentVector.EMPTY,((function (and__25253__auto__,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (b){
return taoensso.encore.swapped.call(null,true,cljs.core.not.call(null,b));
});})(and__25253__auto__,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
);
} else {
return and__25253__auto__;
}
})())){
var instant = taoensso.encore.now_udt.call(null);
if(ttl_ms_QMARK_){
var snapshot_45655 = cljs.core.dissoc.call(null,cljs.core.deref.call(null,state_),new cljs.core.Keyword(null,"tick","tick",-835886976));
var ks_to_gc_45656 = cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,((function (snapshot_45655,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (acc,k,p__45630){
var vec__45631 = p__45630;
var dv = cljs.core.nth.call(null,vec__45631,(0),null);
var udt = cljs.core.nth.call(null,vec__45631,(1),null);
var _ = cljs.core.nth.call(null,vec__45631,(2),null);
var ___$1 = cljs.core.nth.call(null,vec__45631,(3),null);
var cv = vec__45631;
if(((instant - udt) > ttl_ms__$1)){
return cljs.core.conj_BANG_.call(null,acc,k);
} else {
return acc;
}
});})(snapshot_45655,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),snapshot_45655));
cljs.core.swap_BANG_.call(null,state_,((function (snapshot_45655,ks_to_gc_45656,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (m){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (snapshot_45655,ks_to_gc_45656,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (acc,in$){
return cljs.core.dissoc_BANG_.call(null,acc,in$);
});})(snapshot_45655,ks_to_gc_45656,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
,cljs.core.transient$.call(null,m),ks_to_gc_45656));
});})(snapshot_45655,ks_to_gc_45656,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
);
} else {
}

var snapshot_45657 = cljs.core.dissoc.call(null,cljs.core.deref.call(null,state_),new cljs.core.Keyword(null,"tick","tick",-835886976));
var n_to_gc_45658 = (cljs.core.count.call(null,snapshot_45657) - cache_size__$1);
if((n_to_gc_45658 > (64))){
var ks_to_gc_45659 = taoensso.encore.top.call(null,n_to_gc_45658,((function (snapshot_45657,n_to_gc_45658,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (k){
var vec__45632 = snapshot_45657.call(null,k);
var _ = cljs.core.nth.call(null,vec__45632,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__45632,(1),null);
var tick_lru = cljs.core.nth.call(null,vec__45632,(2),null);
var tick_lfu = cljs.core.nth.call(null,vec__45632,(3),null);
return (tick_lru + tick_lfu);
});})(snapshot_45657,n_to_gc_45658,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
,cljs.core.keys.call(null,snapshot_45657));
cljs.core.swap_BANG_.call(null,state_,((function (ks_to_gc_45659,snapshot_45657,n_to_gc_45658,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (m){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (ks_to_gc_45659,snapshot_45657,n_to_gc_45658,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (acc,in$){
return cljs.core.dissoc_BANG_.call(null,acc,in$);
});})(ks_to_gc_45659,snapshot_45657,n_to_gc_45658,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
,cljs.core.transient$.call(null,m),ks_to_gc_45659));
});})(ks_to_gc_45659,snapshot_45657,n_to_gc_45658,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
);
} else {
}

return cljs.core.reset_BANG_.call(null,gc_running_QMARK__,false);
} else {
return null;
}
});})(state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
;
var cv_fn = ((!(ttl_ms_QMARK_))?((function (state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn){
return (function (args,fresh_QMARK_,tick){
return taoensso.encore.swap_val_BANG_.call(null,state_,args,((function (state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn){
return (function (_QMARK_cv){
if(cljs.core.truth_((function (){var and__25253__auto__ = _QMARK_cv;
if(cljs.core.truth_(and__25253__auto__)){
return cljs.core.not.call(null,fresh_QMARK_);
} else {
return and__25253__auto__;
}
})())){
return _QMARK_cv;
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.Delay(((function (state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn){
return (function (){
return cljs.core.apply.call(null,f,args);
});})(state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn))
,null)),null,tick,(1)], null);
}
});})(state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn))
);
});})(state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn))
:((function (state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn){
return (function (args,fresh_QMARK_,tick){
var instant = taoensso.encore.now_udt.call(null);
return taoensso.encore.swap_val_BANG_.call(null,state_,args,((function (instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn){
return (function (_QMARK_cv){
if(cljs.core.truth_((function (){var and__25253__auto__ = _QMARK_cv;
if(cljs.core.truth_(and__25253__auto__)){
var and__25253__auto____$1 = cljs.core.not.call(null,fresh_QMARK_);
if(and__25253__auto____$1){
var vec__45634 = _QMARK_cv;
var _dv = cljs.core.nth.call(null,vec__45634,(0),null);
var udt = cljs.core.nth.call(null,vec__45634,(1),null);
return ((instant - udt) < ttl_ms__$1);
} else {
return and__25253__auto____$1;
}
} else {
return and__25253__auto__;
}
})())){
return _QMARK_cv;
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.Delay(((function (instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn){
return (function (){
return cljs.core.apply.call(null,f,args);
});})(instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn))
,null)),instant,tick,(1)], null);
}
});})(instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn))
);
});})(state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn))
);
return ((function (state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn,cv_fn){
return (function() { 
var G__45660__delegate = function (p__45635){
var vec__45636 = p__45635;
var arg1 = cljs.core.nth.call(null,vec__45636,(0),null);
var argn = cljs.core.nthnext.call(null,vec__45636,(1));
var args = vec__45636;
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","get","mem/get",1683009136)))){
return cljs.core.deref.call(null,state_);
} else {
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","del","mem/del",574870667)))){
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,cljs.core.first.call(null,argn),new cljs.core.Keyword("mem","all","mem/all",892075139)))){
cljs.core.reset_BANG_.call(null,state_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tick","tick",-835886976),(0)], null));
} else {
cljs.core.swap_BANG_.call(null,state_,cljs.core.dissoc,argn);
}

return null;
} else {
gc_fn.call(null);

var fresh_QMARK_ = taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","fresh","mem/fresh",-1179989133));
var args__$1 = (cljs.core.truth_(fresh_QMARK_)?argn:args);
var tick = new cljs.core.Keyword(null,"tick","tick",-835886976).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state_));
var vec__45637 = cv_fn.call(null,args__$1,fresh_QMARK_,tick);
var dv = cljs.core.nth.call(null,vec__45637,(0),null);
cljs.core.swap_BANG_.call(null,state_,((function (fresh_QMARK_,args__$1,tick,vec__45637,dv,vec__45636,arg1,argn,args,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn,cv_fn){
return (function (m){
var temp__4655__auto__ = cljs.core.get.call(null,m,args__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var vec__45638 = temp__4655__auto__;
var dv__$1 = cljs.core.nth.call(null,vec__45638,(0),null);
var _QMARK_udt = cljs.core.nth.call(null,vec__45638,(1),null);
var tick_lru = cljs.core.nth.call(null,vec__45638,(2),null);
var tick_lfu = cljs.core.nth.call(null,vec__45638,(3),null);
var cv = vec__45638;
return cljs.core.merge.call(null,m,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"tick","tick",-835886976),(tick + (1)),args__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [dv__$1,_QMARK_udt,tick,(tick_lfu + (1))], null)], true, false));
} else {
return cljs.core.merge.call(null,m,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tick","tick",-835886976),(tick + (1))], null));
}
});})(fresh_QMARK_,args__$1,tick,vec__45637,dv,vec__45636,arg1,argn,args,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn,cv_fn))
);

return cljs.core.deref.call(null,dv);

}
}
};
var G__45660 = function (var_args){
var p__45635 = null;
if (arguments.length > 0) {
var G__45661__i = 0, G__45661__a = new Array(arguments.length -  0);
while (G__45661__i < G__45661__a.length) {G__45661__a[G__45661__i] = arguments[G__45661__i + 0]; ++G__45661__i;}
  p__45635 = new cljs.core.IndexedSeq(G__45661__a,0);
} 
return G__45660__delegate.call(this,p__45635);};
G__45660.cljs$lang$maxFixedArity = 0;
G__45660.cljs$lang$applyTo = (function (arglist__45662){
var p__45635 = cljs.core.seq(arglist__45662);
return G__45660__delegate(p__45635);
});
G__45660.cljs$core$IFn$_invoke$arity$variadic = G__45660__delegate;
return G__45660;
})()
;
;})(state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn,cv_fn))
});

taoensso.encore.memoize_STAR_.cljs$lang$maxFixedArity = 3;
/**
 * Takes one or more rate specs of form [ncalls-limit window-ms ?spec-id] and
 *   returns a (fn [& [req-id])) that returns `nil` (=> all rate limits passed), or
 *   [<ms-wait> <worst-offending-spec-id>] / <ms-wait>.
 */
taoensso.encore.rate_limiter_STAR_ = (function taoensso$encore$rate_limiter_STAR_(specs){
if(cljs.core.empty_QMARK_.call(null,specs)){
return cljs.core.constantly.call(null,null);
} else {
var vspecs = cljs.core.vec.call(null,specs);
var vstates_ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var max_win_ms = cljs.core.long$.call(null,cljs.core.reduce.call(null,cljs.core.max,(0),cljs.core.mapv.call(null,((function (vspecs,vstates_){
return (function (p__45698){
var vec__45699 = p__45698;
var _ = cljs.core.nth.call(null,vec__45699,(0),null);
var win_ms = cljs.core.nth.call(null,vec__45699,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__45699,(2),null);
var spec = vec__45699;
return win_ms;
});})(vspecs,vstates_))
,vspecs)));
var nspecs = cljs.core.count.call(null,vspecs);
var nid_specs = cljs.core.count.call(null,cljs.core.filterv.call(null,((function (vspecs,vstates_,max_win_ms,nspecs){
return (function (p__45700){
var vec__45701 = p__45700;
var _ = cljs.core.nth.call(null,vec__45701,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__45701,(1),null);
var id = cljs.core.nth.call(null,vec__45701,(2),null);
return id;
});})(vspecs,vstates_,max_win_ms,nspecs))
,vspecs));
var _ = ((((nid_specs === (0))) || (cljs.core._EQ_.call(null,nid_specs,nspecs)))?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"zero?","zero?",325758897,null),new cljs.core.Symbol(null,"nid-specs","nid-specs",-1204406222,null)),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"nid-specs","nid-specs",-1204406222,null),new cljs.core.Symbol(null,"nspecs","nspecs",-1621596945,null)))))].join('')))})());
var return_ids_QMARK_ = !((nid_specs === (0)));
return ((function (vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function() { 
var taoensso$encore$rate_limiter_STAR__$_check_rate_limits__delegate = function (p__45702){
var vec__45718 = p__45702;
var req_id = cljs.core.nth.call(null,vec__45718,(0),null);
var instant = taoensso.encore.now_udt.call(null);
if(cljs.core.truth_((function (){var and__25253__auto__ = req_id;
if(cljs.core.truth_(and__25253__auto__)){
return taoensso.encore.gc_now_QMARK_.call(null);
} else {
return and__25253__auto__;
}
})())){
taoensso.encore.swap_in_BANG_.call(null,vstates_,cljs.core.PersistentVector.EMPTY,((function (instant,vec__45718,req_id,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function taoensso$encore$rate_limiter_STAR__$_check_rate_limits_$_gc(m){
return cljs.core.reduce_kv.call(null,((function (instant,vec__45718,req_id,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function (m_STAR_,req_id__$1,vstate){
var max_udt_win_start = cljs.core.reduce.call(null,((function (instant,vec__45718,req_id,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function (acc,p__45721){
var vec__45722 = p__45721;
var ___$1 = cljs.core.nth.call(null,vec__45722,(0),null);
var udt = cljs.core.nth.call(null,vec__45722,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__45722,(2),null);
var x__25596__auto__ = acc;
var y__25597__auto__ = udt;
return ((x__25596__auto__ > y__25597__auto__) ? x__25596__auto__ : y__25597__auto__);
});})(instant,vec__45718,req_id,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
,(0),vstate);
var min_win_ms_elapsed = (instant - max_udt_win_start);
if((min_win_ms_elapsed > max_win_ms)){
return cljs.core.dissoc.call(null,m_STAR_,req_id__$1);
} else {
return m_STAR_;
}
});})(instant,vec__45718,req_id,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
,m,m);
});})(instant,vec__45718,req_id,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
);
} else {
}

return taoensso.encore.swap_in_BANG_.call(null,vstates_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [req_id], null),((function (instant,vec__45718,req_id,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function (_QMARK_vstate){
if(cljs.core.not.call(null,_QMARK_vstate)){
return taoensso.encore.swapped.call(null,cljs.core.vec.call(null,cljs.core.repeat.call(null,nspecs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),instant], null))),null);
} else {
var vec__45723 = (function (){var in_vspecs = vspecs;
var in_vstate = _QMARK_vstate;
var out_vstate = cljs.core.PersistentVector.EMPTY;
var _QMARK_worst_limit_offence = null;
while(true){
var vec__45724 = in_vspecs;
var vec__45725 = cljs.core.nth.call(null,vec__45724,(0),null);
var ncalls_limit = cljs.core.nth.call(null,vec__45725,(0),null);
var win_ms = cljs.core.nth.call(null,vec__45725,(1),null);
var _QMARK_spec_id = cljs.core.nth.call(null,vec__45725,(2),null);
var next_in_vspecs = cljs.core.nthnext.call(null,vec__45724,(1));
var vec__45726 = in_vstate;
var vec__45727 = cljs.core.nth.call(null,vec__45726,(0),null);
var ncalls = cljs.core.nth.call(null,vec__45727,(0),null);
var udt_win_start = cljs.core.nth.call(null,vec__45727,(1),null);
var next_in_vstate = cljs.core.nthnext.call(null,vec__45726,(1));
var win_ms_elapsed = (instant - udt_win_start);
var reset_due_QMARK_ = (win_ms_elapsed >= win_ms);
var rate_limited_QMARK_ = (!(reset_due_QMARK_)) && ((ncalls >= ncalls_limit));
var new_out_vstate = cljs.core.conj.call(null,out_vstate,((reset_due_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),instant], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ncalls,udt_win_start], null)));
var new__QMARK_worst_limit_offence = ((!(rate_limited_QMARK_))?_QMARK_worst_limit_offence:(function (){var ms_wait = (win_ms - win_ms_elapsed);
if((function (){var or__25265__auto__ = (_QMARK_worst_limit_offence == null);
if(or__25265__auto__){
return or__25265__auto__;
} else {
var vec__45729 = _QMARK_worst_limit_offence;
var max_ms_wait = cljs.core.nth.call(null,vec__45729,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__45729,(1),null);
return (ms_wait > max_ms_wait);
}
})()){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ms_wait,_QMARK_spec_id], null);
} else {
return _QMARK_worst_limit_offence;
}
})());
if(cljs.core.not.call(null,next_in_vspecs)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_out_vstate,new__QMARK_worst_limit_offence], null);
} else {
var G__45733 = next_in_vspecs;
var G__45734 = next_in_vstate;
var G__45735 = new_out_vstate;
var G__45736 = new__QMARK_worst_limit_offence;
in_vspecs = G__45733;
in_vstate = G__45734;
out_vstate = G__45735;
_QMARK_worst_limit_offence = G__45736;
continue;
}
break;
}
})();
var vstate_with_resets = cljs.core.nth.call(null,vec__45723,(0),null);
var _QMARK_worst_limit_offence = cljs.core.nth.call(null,vec__45723,(1),null);
var all_limits_pass_QMARK_ = (_QMARK_worst_limit_offence == null);
var new_vstate = ((!(all_limits_pass_QMARK_))?vstate_with_resets:cljs.core.mapv.call(null,((function (vec__45723,vstate_with_resets,_QMARK_worst_limit_offence,all_limits_pass_QMARK_,instant,vec__45718,req_id,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function (p__45730){
var vec__45731 = p__45730;
var ncalls = cljs.core.nth.call(null,vec__45731,(0),null);
var udt_win_start = cljs.core.nth.call(null,vec__45731,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ncalls + (1)),udt_win_start], null);
});})(vec__45723,vstate_with_resets,_QMARK_worst_limit_offence,all_limits_pass_QMARK_,instant,vec__45718,req_id,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
,vstate_with_resets));
var result = (function (){var temp__4657__auto__ = _QMARK_worst_limit_offence;
if(cljs.core.truth_(temp__4657__auto__)){
var wlo = temp__4657__auto__;
if(return_ids_QMARK_){
return wlo;
} else {
var vec__45732 = wlo;
var ms_wait = cljs.core.nth.call(null,vec__45732,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__45732,(1),null);
return ms_wait;
}
} else {
return null;
}
})();
return taoensso.encore.swapped.call(null,new_vstate,result);
}
});})(instant,vec__45718,req_id,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
);
};
var taoensso$encore$rate_limiter_STAR__$_check_rate_limits = function (var_args){
var p__45702 = null;
if (arguments.length > 0) {
var G__45737__i = 0, G__45737__a = new Array(arguments.length -  0);
while (G__45737__i < G__45737__a.length) {G__45737__a[G__45737__i] = arguments[G__45737__i + 0]; ++G__45737__i;}
  p__45702 = new cljs.core.IndexedSeq(G__45737__a,0);
} 
return taoensso$encore$rate_limiter_STAR__$_check_rate_limits__delegate.call(this,p__45702);};
taoensso$encore$rate_limiter_STAR__$_check_rate_limits.cljs$lang$maxFixedArity = 0;
taoensso$encore$rate_limiter_STAR__$_check_rate_limits.cljs$lang$applyTo = (function (arglist__45738){
var p__45702 = cljs.core.seq(arglist__45738);
return taoensso$encore$rate_limiter_STAR__$_check_rate_limits__delegate(p__45702);
});
taoensso$encore$rate_limiter_STAR__$_check_rate_limits.cljs$core$IFn$_invoke$arity$variadic = taoensso$encore$rate_limiter_STAR__$_check_rate_limits__delegate;
return taoensso$encore$rate_limiter_STAR__$_check_rate_limits;
})()
;
;})(vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
}
});
taoensso.encore.rate_limit = (function taoensso$encore$rate_limit(specs,f){
var rl = taoensso.encore.rate_limiter_STAR_.call(null,specs);
return ((function (rl){
return (function() { 
var G__45739__delegate = function (args){
var temp__4655__auto__ = rl.call(null);
if(cljs.core.truth_(temp__4655__auto__)){
var backoff = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,backoff], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null),null], null);
}
};
var G__45739 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45740__i = 0, G__45740__a = new Array(arguments.length -  0);
while (G__45740__i < G__45740__a.length) {G__45740__a[G__45740__i] = arguments[G__45740__i + 0]; ++G__45740__i;}
  args = new cljs.core.IndexedSeq(G__45740__a,0);
} 
return G__45739__delegate.call(this,args);};
G__45739.cljs$lang$maxFixedArity = 0;
G__45739.cljs$lang$applyTo = (function (arglist__45741){
var args = cljs.core.seq(arglist__45741);
return G__45739__delegate(args);
});
G__45739.cljs$core$IFn$_invoke$arity$variadic = G__45739__delegate;
return G__45739;
})()
;
;})(rl))
});
taoensso.encore.nano_time = (function (){var temp__4655__auto__ = (function (){var and__25253__auto__ = typeof window !== 'undefined';
if(and__25253__auto__){
return (window["performance"]);
} else {
return and__25253__auto__;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var perf = temp__4655__auto__;
var temp__4655__auto____$1 = (function (){var or__25265__auto__ = (perf["now"]);
if(cljs.core.truth_(or__25265__auto__)){
return or__25265__auto__;
} else {
var or__25265__auto____$1 = (perf["mozNow"]);
if(cljs.core.truth_(or__25265__auto____$1)){
return or__25265__auto____$1;
} else {
var or__25265__auto____$2 = (perf["msNow"]);
if(cljs.core.truth_(or__25265__auto____$2)){
return or__25265__auto____$2;
} else {
var or__25265__auto____$3 = (perf["oNow"]);
if(cljs.core.truth_(or__25265__auto____$3)){
return or__25265__auto____$3;
} else {
return (perf["webkitNow"]);
}
}
}
}
})();
if(cljs.core.truth_(temp__4655__auto____$1)){
var f = temp__4655__auto____$1;
return ((function (f,temp__4655__auto____$1,perf,temp__4655__auto__){
return (function (){
return cljs.core.long$.call(null,(1000000.0 * f.call(perf)));
});
;})(f,temp__4655__auto____$1,perf,temp__4655__auto__))
} else {
return ((function (temp__4655__auto____$1,perf,temp__4655__auto__){
return (function (){
return (1000000.0 * taoensso.encore.now_udt.call(null));
});
;})(temp__4655__auto____$1,perf,temp__4655__auto__))
}
} else {
return ((function (temp__4655__auto__){
return (function (){
return (1000000.0 * taoensso.encore.now_udt.call(null));
});
;})(temp__4655__auto__))
}
})();
taoensso.encore.spaced_str_with_nils;
taoensso.encore.console_log = (function (){var temp__4655__auto__ = (function (){var and__25253__auto__ = typeof console !== 'undefined';
if(and__25253__auto__){
return console.log;
} else {
return and__25253__auto__;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
return ((function (f,temp__4655__auto__){
return (function (xs){
return f.apply(console,cljs.core.into_array.call(null,xs));
});
;})(f,temp__4655__auto__))
} else {
return ((function (temp__4655__auto__){
return (function (xs){
return null;
});
;})(temp__4655__auto__))
}
})();

taoensso.encore.log = (function taoensso$encore$log(var_args){
var args__26330__auto__ = [];
var len__26323__auto___45749 = arguments.length;
var i__26324__auto___45750 = (0);
while(true){
if((i__26324__auto___45750 < len__26323__auto___45749)){
args__26330__auto__.push((arguments[i__26324__auto___45750]));

var G__45751 = (i__26324__auto___45750 + (1));
i__26324__auto___45750 = G__45751;
continue;
} else {
}
break;
}

var argseq__26331__auto__ = ((((0) < args__26330__auto__.length))?(new cljs.core.IndexedSeq(args__26330__auto__.slice((0)),(0))):null);
return taoensso.encore.log.cljs$core$IFn$_invoke$arity$variadic(argseq__26331__auto__);
});

taoensso.encore.log.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return taoensso.encore.console_log.call(null,xs);
});

taoensso.encore.log.cljs$lang$maxFixedArity = (0);

taoensso.encore.log.cljs$lang$applyTo = (function (seq45742){
return taoensso.encore.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45742));
});

taoensso.encore.logp = (function taoensso$encore$logp(var_args){
var args__26330__auto__ = [];
var len__26323__auto___45752 = arguments.length;
var i__26324__auto___45753 = (0);
while(true){
if((i__26324__auto___45753 < len__26323__auto___45752)){
args__26330__auto__.push((arguments[i__26324__auto___45753]));

var G__45754 = (i__26324__auto___45753 + (1));
i__26324__auto___45753 = G__45754;
continue;
} else {
}
break;
}

var argseq__26331__auto__ = ((((0) < args__26330__auto__.length))?(new cljs.core.IndexedSeq(args__26330__auto__.slice((0)),(0))):null);
return taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic(argseq__26331__auto__);
});

taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return taoensso.encore.console_log.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.spaced_str_with_nils.call(null,xs)], null));
});

taoensso.encore.logp.cljs$lang$maxFixedArity = (0);

taoensso.encore.logp.cljs$lang$applyTo = (function (seq45743){
return taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45743));
});

taoensso.encore.logf = (function taoensso$encore$logf(var_args){
var args__26330__auto__ = [];
var len__26323__auto___45755 = arguments.length;
var i__26324__auto___45756 = (0);
while(true){
if((i__26324__auto___45756 < len__26323__auto___45755)){
args__26330__auto__.push((arguments[i__26324__auto___45756]));

var G__45757 = (i__26324__auto___45756 + (1));
i__26324__auto___45756 = G__45757;
continue;
} else {
}
break;
}

var argseq__26331__auto__ = ((((1) < args__26330__auto__.length))?(new cljs.core.IndexedSeq(args__26330__auto__.slice((1)),(0))):null);
return taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26331__auto__);
});

taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
return taoensso.encore.console_log.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.format_STAR_.call(null,fmt,xs)], null));
});

taoensso.encore.logf.cljs$lang$maxFixedArity = (1);

taoensso.encore.logf.cljs$lang$applyTo = (function (seq45744){
var G__45745 = cljs.core.first.call(null,seq45744);
var seq45744__$1 = cljs.core.next.call(null,seq45744);
return taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic(G__45745,seq45744__$1);
});

taoensso.encore.sayp = (function taoensso$encore$sayp(var_args){
var args__26330__auto__ = [];
var len__26323__auto___45758 = arguments.length;
var i__26324__auto___45759 = (0);
while(true){
if((i__26324__auto___45759 < len__26323__auto___45758)){
args__26330__auto__.push((arguments[i__26324__auto___45759]));

var G__45760 = (i__26324__auto___45759 + (1));
i__26324__auto___45759 = G__45760;
continue;
} else {
}
break;
}

var argseq__26331__auto__ = ((((0) < args__26330__auto__.length))?(new cljs.core.IndexedSeq(args__26330__auto__.slice((0)),(0))):null);
return taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic(argseq__26331__auto__);
});

taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return alert(taoensso.encore.spaced_str_with_nils.call(null,xs));
});

taoensso.encore.sayp.cljs$lang$maxFixedArity = (0);

taoensso.encore.sayp.cljs$lang$applyTo = (function (seq45746){
return taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45746));
});

taoensso.encore.sayf = (function taoensso$encore$sayf(var_args){
var args__26330__auto__ = [];
var len__26323__auto___45761 = arguments.length;
var i__26324__auto___45762 = (0);
while(true){
if((i__26324__auto___45762 < len__26323__auto___45761)){
args__26330__auto__.push((arguments[i__26324__auto___45762]));

var G__45763 = (i__26324__auto___45762 + (1));
i__26324__auto___45762 = G__45763;
continue;
} else {
}
break;
}

var argseq__26331__auto__ = ((((1) < args__26330__auto__.length))?(new cljs.core.IndexedSeq(args__26330__auto__.slice((1)),(0))):null);
return taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26331__auto__);
});

taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
return alert(taoensso.encore.format_STAR_.call(null,fmt,xs));
});

taoensso.encore.sayf.cljs$lang$maxFixedArity = (1);

taoensso.encore.sayf.cljs$lang$applyTo = (function (seq45747){
var G__45748 = cljs.core.first.call(null,seq45747);
var seq45747__$1 = cljs.core.next.call(null,seq45747);
return taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic(G__45748,seq45747__$1);
});
/**
 * Returns browser window's current location. These details can be forged!
 */
taoensso.encore.get_window_location = (function taoensso$encore$get_window_location(){
var loc_STAR_ = window.location;
var loc = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"href","href",-793805698),loc_STAR_.href,new cljs.core.Keyword(null,"protocol","protocol",652470118),loc_STAR_.protocol,new cljs.core.Keyword(null,"hostname","hostname",2105669933),loc_STAR_.hostname,new cljs.core.Keyword(null,"host","host",-1558485167),loc_STAR_.host,new cljs.core.Keyword(null,"pathname","pathname",-1420497528),loc_STAR_.pathname,new cljs.core.Keyword(null,"search","search",1564939822),loc_STAR_.search,new cljs.core.Keyword(null,"hash","hash",-13781596),loc_STAR_.hash], null);
return loc;
});
taoensso.encore.xhr_pool_ = (new cljs.core.Delay((function (){
return (new goog.net.XhrIoPool());
}),null));
/**
 * Returns an immediately available XhrIo instance, or nil. The instance must be
 *   released back to pool manually.
 */
taoensso.encore.get_pooled_xhr_BANG_ = (function taoensso$encore$get_pooled_xhr_BANG_(){
var result = cljs.core.deref.call(null,taoensso.encore.xhr_pool_).getObject();
if((void 0 === result)){
return null;
} else {
return result;
}
});
/**
 * [uri method get-or-post-params] -> [uri post-content]
 */
taoensso.encore.coerce_xhr_params = (function taoensso$encore$coerce_xhr_params(uri,method,params){
if(cljs.core.truth_((function (){var __x = params;
try{if(cljs.core.truth_(taoensso.truss.impl._invar_pred.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),cljs.core.nil_QMARK_,cljs.core.map_QMARK_], null)).call(null,__x))){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e45766){if((e45766 instanceof Error)){
var __t = e45766;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"([:or nil? map?] params)",__x,__t,null);
} else {
throw e45766;

}
}})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"map?","map?",-1780568534,null)], null),new cljs.core.Symbol(null,"params","params",-1943919534,null))))].join('')));
}

var _QMARK_pstr = ((cljs.core.empty_QMARK_.call(null,params))?null:(function (){var s = goog.Uri.QueryData.createFromMap((new goog.structs.Map(cljs.core.clj__GT_js.call(null,params)))).toString();
if(clojure.string.blank_QMARK_.call(null,s)){
return null;
} else {
return s;
}
})());
var G__45767 = (((method instanceof cljs.core.Keyword))?method.fqn:null);
switch (G__45767) {
case "get":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(_QMARK_pstr)?[cljs.core.str(uri),cljs.core.str("?"),cljs.core.str(_QMARK_pstr)].join(''):uri),null], null);

break;
case "post":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,_QMARK_pstr], null);

break;
case "put":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,_QMARK_pstr], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(method)].join('')));

}
});
/**
 * Alpha - subject to change.
 *   Simple+lightweight Ajax via Google Closure. Returns nil, or the xhr instance.
 *   Ref. https://developers.google.com/closure/library/docs/xhrio.
 * 
 *   (ajax-lite "/my-post-route"
 *  {:method     :post
 *   :params     {:username "Rich Hickey"
 *                :type     "Awesome"}
 *   :headers    {"Foo" "Bar"}
 *   :resp-type  :text
 *   :timeout-ms 7000
 *   :with-credentials? false ; Enable if using CORS (requires xhr v2+)
 *  }
 *  (fn async-callback [resp-map]
 *    (let [{:keys [success? ?status ?error ?content ?content-type]} resp-map]
 *      ;; ?status  - 200, 404, ..., or nil on no response
 *      ;; ?error   - e/o #{:xhr-pool-depleted :exception :http-error :abort
 *      ;;                  :timeout :no-content <http-error-status> nil}
 *      (js/alert (str "Ajax response: " resp-map)))))
 */
taoensso.encore.ajax_lite = (function taoensso$encore$ajax_lite(uri,p__45771,callback){
var map__45790 = p__45771;
var map__45790__$1 = ((((!((map__45790 == null)))?((((map__45790.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45790.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45790):map__45790);
var opts = map__45790__$1;
var method = cljs.core.get.call(null,map__45790__$1,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755));
var params = cljs.core.get.call(null,map__45790__$1,new cljs.core.Keyword(null,"params","params",710516235));
var headers = cljs.core.get.call(null,map__45790__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout_ms = cljs.core.get.call(null,map__45790__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),(10000));
var resp_type = cljs.core.get.call(null,map__45790__$1,new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"auto","auto",-566279492));
var with_credentials_QMARK_ = cljs.core.get.call(null,map__45790__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var progress_fn = cljs.core.get.call(null,map__45790__$1,new cljs.core.Keyword(null,"progress-fn","progress-fn",-1146547855));
var errorf = cljs.core.get.call(null,map__45790__$1,new cljs.core.Keyword(null,"errorf","errorf",-620376044),taoensso.encore.logf);
if(cljs.core.truth_((function (){var __x = timeout_ms;
try{if(cljs.core.truth_(taoensso.truss.impl._invar_pred.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),cljs.core.nil_QMARK_,taoensso.encore.nneg_int_QMARK_], null)).call(null,__x))){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e45792){if((e45792 instanceof Error)){
var __t = e45792;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"([:or nil? nneg-int?] timeout-ms)",__x,__t,null);
} else {
throw e45792;

}
}})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"nneg-int?","nneg-int?",803479360,null)], null),new cljs.core.Symbol(null,"timeout-ms","timeout-ms",-1900214363,null))))].join('')));
}

var temp__4655__auto__ = taoensso.encore.get_pooled_xhr_BANG_.call(null);
if(cljs.core.truth_(temp__4655__auto__)){
var xhr = temp__4655__auto__;
try{var timeout_ms__$1 = (function (){var or__25265__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__25265__auto__)){
return or__25265__auto__;
} else {
return timeout_ms;
}
})();
var method_STAR_ = (function (){var G__45795 = (((method instanceof cljs.core.Keyword))?method.fqn:null);
switch (G__45795) {
case "get":
return "GET";

break;
case "post":
return "POST";

break;
case "put":
return "PUT";

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(method)].join('')));

}
})();
var params__$1 = taoensso.encore.map_keys.call(null,cljs.core.name,params);
var headers__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["X-Requested-With","XMLHTTPRequest"], null),taoensso.encore.map_keys.call(null,cljs.core.name,headers));
var vec__45794 = taoensso.encore.coerce_xhr_params.call(null,uri,method,params__$1);
var uri_STAR_ = cljs.core.nth.call(null,vec__45794,(0),null);
var post_content_STAR_ = cljs.core.nth.call(null,vec__45794,(1),null);
var headers_STAR_ = cljs.core.clj__GT_js.call(null,((cljs.core.not.call(null,post_content_STAR_))?headers__$1:cljs.core.assoc.call(null,headers__$1,"Content-Type","application/x-www-form-urlencoded; charset=UTF-8")));
var G__45796_45809 = xhr;
goog.events.listenOnce(G__45796_45809,goog.net.EventType.READY,((function (G__45796_45809,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__45794,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4655__auto__,map__45790,map__45790__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf){
return (function (_){
return cljs.core.deref.call(null,taoensso.encore.xhr_pool_).releaseObject(xhr);
});})(G__45796_45809,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__45794,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4655__auto__,map__45790,map__45790__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf))
);

goog.events.listenOnce(G__45796_45809,goog.net.EventType.COMPLETE,((function (G__45796_45809,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__45794,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4655__auto__,map__45790,map__45790__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf){
return (function taoensso$encore$ajax_lite_$_wrapped_callback(resp){
var status = xhr.getStatus();
var success_QMARK_ = xhr.isSuccess();
var _QMARK_http_status = ((cljs.core.not_EQ_.call(null,status,(-1)))?status:null);
var _QMARK_content_type = (cljs.core.truth_(_QMARK_http_status)?xhr.getResponseHeader("Content-Type"):null);
var _QMARK_content = (cljs.core.truth_(_QMARK_http_status)?(function (){var resp_type__$1 = ((!(cljs.core._EQ_.call(null,resp_type,new cljs.core.Keyword(null,"auto","auto",-566279492))))?resp_type:(function (){var pred__45802 = ((function (status,success_QMARK_,_QMARK_http_status,_QMARK_content_type,G__45796_45809,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__45794,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4655__auto__,map__45790,map__45790__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf){
return (function (p1__45770_SHARP_,p2__45769_SHARP_){
return taoensso.encore.str_contains_QMARK_.call(null,p2__45769_SHARP_,p1__45770_SHARP_);
});})(status,success_QMARK_,_QMARK_http_status,_QMARK_content_type,G__45796_45809,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__45794,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4655__auto__,map__45790,map__45790__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf))
;
var expr__45803 = [cljs.core.str(_QMARK_content_type)].join('');
if(cljs.core.truth_(pred__45802.call(null,"/edn",expr__45803))){
return new cljs.core.Keyword(null,"edn","edn",1317840885);
} else {
if(cljs.core.truth_(pred__45802.call(null,"/json",expr__45803))){
return new cljs.core.Keyword(null,"json","json",1279968570);
} else {
if(cljs.core.truth_(pred__45802.call(null,"/xml",expr__45803))){
return new cljs.core.Keyword(null,"xml","xml",-1170142052);
} else {
if(cljs.core.truth_(pred__45802.call(null,"/html",expr__45803))){
return new cljs.core.Keyword(null,"text","text",-1790561697);
} else {
return new cljs.core.Keyword(null,"text","text",-1790561697);
}
}
}
}
})());
try{var G__45806 = (((resp_type__$1 instanceof cljs.core.Keyword))?resp_type__$1.fqn:null);
switch (G__45806) {
case "text":
return xhr.getResponseText();

break;
case "json":
return xhr.getResponseJson();

break;
case "xml":
return xhr.getResponseXml();

break;
case "edn":
return taoensso.encore.read_edn.call(null,xhr.getResponseText());

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(resp_type__$1)].join('')));

}
}catch (e45805){if((e45805 instanceof Error)){
var e = e45805;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ajax","bad-response-type","ajax/bad-response-type",789441015),resp_type__$1,new cljs.core.Keyword("ajax","resp-as-text","ajax/resp-as-text",141416819),xhr.getResponseText()], null);
} else {
throw e45805;

}
}})():null);
var cb_arg = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"raw-resp","raw-resp",-1924342506),resp,new cljs.core.Keyword(null,"xhr","xhr",-177710851),xhr,new cljs.core.Keyword(null,"success?","success?",-122854052),success_QMARK_,new cljs.core.Keyword(null,"?content-type","?content-type",-2129759049),(cljs.core.truth_(_QMARK_http_status)?_QMARK_content_type:null),new cljs.core.Keyword(null,"?content","?content",1697782054),_QMARK_content,new cljs.core.Keyword(null,"?status","?status",938730360),_QMARK_http_status,new cljs.core.Keyword(null,"?error","?error",1070752222),(function (){var or__25265__auto__ = (cljs.core.truth_(_QMARK_http_status)?(function (){var n = _QMARK_http_status;
if(cljs.core.truth_(success_QMARK_)){
return null;
} else {
return _QMARK_http_status;
}
})():cljs.core.get.call(null,cljs.core.PersistentArrayMap.fromArray([goog.net.ErrorCode.EXCEPTION,new cljs.core.Keyword(null,"exception","exception",-335277064),goog.net.ErrorCode.HTTP_ERROR,new cljs.core.Keyword(null,"http-error","http-error",-1040049553),goog.net.ErrorCode.ABORT,new cljs.core.Keyword(null,"abort","abort",521193198),goog.net.ErrorCode.TIMEOUT,new cljs.core.Keyword(null,"timeout","timeout",-318625318)], true, false),xhr.getLastErrorCode(),new cljs.core.Keyword(null,"unknown","unknown",-935977881)));
if(cljs.core.truth_(or__25265__auto__)){
return or__25265__auto__;
} else {
if(((_QMARK_content == null)) && (cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(204),null,(1223),null], null), null).call(null,_QMARK_http_status)))){
return new cljs.core.Keyword(null,"no-content","no-content",-1860206018);
} else {
return null;
}
}
})()], null);
return callback.call(null,cb_arg);
});})(G__45796_45809,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__45794,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4655__auto__,map__45790,map__45790__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf))
);


var temp__4657__auto___45811 = progress_fn;
if(cljs.core.truth_(temp__4657__auto___45811)){
var pf_45812 = temp__4657__auto___45811;
goog.events.listen(xhr,goog.net.EventType.PROGRESS,((function (pf_45812,temp__4657__auto___45811,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__45794,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4655__auto__,map__45790,map__45790__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf){
return (function (ev){
var length_computable_QMARK_ = ev.lengthComputable;
var loaded = ev.loaded;
var total = ev.total;
var _QMARK_ratio = (cljs.core.truth_((function (){var and__25253__auto__ = length_computable_QMARK_;
if(cljs.core.truth_(and__25253__auto__)){
return cljs.core.not_EQ_.call(null,total,(0));
} else {
return and__25253__auto__;
}
})())?(loaded / total):null);
return pf_45812.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"?ratio","?ratio",-1275760831),_QMARK_ratio,new cljs.core.Keyword(null,"length-computable?","length-computable?",1915473276),length_computable_QMARK_,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),loaded,new cljs.core.Keyword(null,"total","total",1916810418),total,new cljs.core.Keyword(null,"ev","ev",-406827324),ev], null));
});})(pf_45812,temp__4657__auto___45811,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__45794,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4655__auto__,map__45790,map__45790__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf))
);
} else {
}

var G__45807_45813 = xhr;
var temp__4657__auto___45814 = new cljs.core.Keyword(null,"always","always",-1772028770);
if(cljs.core.truth_(temp__4657__auto___45814)){
var x_45815 = temp__4657__auto___45814;
G__45807_45813.setTimeoutInterval((function (){var or__25265__auto__ = timeout_ms__$1;
if(cljs.core.truth_(or__25265__auto__)){
return or__25265__auto__;
} else {
return (0);
}
})());
} else {
}

var temp__4657__auto___45816 = with_credentials_QMARK_;
if(cljs.core.truth_(temp__4657__auto___45816)){
var x_45817 = temp__4657__auto___45816;
G__45807_45813.setWithCredentials(true);
} else {
}

var temp__4657__auto___45818 = new cljs.core.Keyword(null,"always","always",-1772028770);
if(cljs.core.truth_(temp__4657__auto___45818)){
var x_45819 = temp__4657__auto___45818;
G__45807_45813.send(uri_STAR_,method_STAR_,post_content_STAR_,headers_STAR_);
} else {
}


return xhr;
}catch (e45793){if((e45793 instanceof Error)){
var e = e45793;
cljs.core.deref.call(null,taoensso.encore.xhr_pool_).releaseObject(xhr);

return null;
} else {
throw e45793;

}
}} else {
callback.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?error","?error",1070752222),new cljs.core.Keyword(null,"xhr-pool-depleted","xhr-pool-depleted",-1812092376)], null));

return null;
}
});
/**
 * Stolen from http://goo.gl/99NSR1
 */
taoensso.encore.url_encode = (function taoensso$encore$url_encode(s){
if(cljs.core.truth_(s)){
return clojure.string.replace.call(null,clojure.string.replace.call(null,encodeURIComponent([cljs.core.str(s)].join(''),s),"*","%2A"),"'","%27");
} else {
return null;
}
});
/**
 * Stolen from http://goo.gl/99NSR1
 */
taoensso.encore.url_decode = (function taoensso$encore$url_decode(var_args){
var args__26330__auto__ = [];
var len__26323__auto___45824 = arguments.length;
var i__26324__auto___45825 = (0);
while(true){
if((i__26324__auto___45825 < len__26323__auto___45824)){
args__26330__auto__.push((arguments[i__26324__auto___45825]));

var G__45826 = (i__26324__auto___45825 + (1));
i__26324__auto___45825 = G__45826;
continue;
} else {
}
break;
}

var argseq__26331__auto__ = ((((1) < args__26330__auto__.length))?(new cljs.core.IndexedSeq(args__26330__auto__.slice((1)),(0))):null);
return taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26331__auto__);
});

taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__45822){
var vec__45823 = p__45822;
var encoding = cljs.core.nth.call(null,vec__45823,(0),null);
if(cljs.core.truth_(s)){
return decodeURIComponent(s);
} else {
return null;
}
});

taoensso.encore.url_decode.cljs$lang$maxFixedArity = (1);

taoensso.encore.url_decode.cljs$lang$applyTo = (function (seq45820){
var G__45821 = cljs.core.first.call(null,seq45820);
var seq45820__$1 = cljs.core.next.call(null,seq45820);
return taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic(G__45821,seq45820__$1);
});
taoensso.encore.format_query_string = (function taoensso$encore$format_query_string(m){
var param = (function (k,v){
return [cljs.core.str(taoensso.encore.url_encode.call(null,taoensso.encore.qname.call(null,k))),cljs.core.str("="),cljs.core.str(taoensso.encore.url_encode.call(null,(function (){var or__25265__auto__ = taoensso.encore.as__QMARK_qname.call(null,v);
if(cljs.core.truth_(or__25265__auto__)){
return or__25265__auto__;
} else {
return [cljs.core.str(v)].join('');
}
})()))].join('');
});
var join = ((function (param){
return (function (strs){
return clojure.string.join.call(null,"&",strs);
});})(param))
;
if(cljs.core.empty_QMARK_.call(null,m)){
return "";
} else {
return join.call(null,(function (){var iter__26037__auto__ = ((function (param,join){
return (function taoensso$encore$format_query_string_$_iter__45835(s__45836){
return (new cljs.core.LazySeq(null,((function (param,join){
return (function (){
var s__45836__$1 = s__45836;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__45836__$1);
if(temp__4657__auto__){
var s__45836__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__45836__$2)){
var c__26035__auto__ = cljs.core.chunk_first.call(null,s__45836__$2);
var size__26036__auto__ = cljs.core.count.call(null,c__26035__auto__);
var b__45838 = cljs.core.chunk_buffer.call(null,size__26036__auto__);
if((function (){var i__45837 = (0);
while(true){
if((i__45837 < size__26036__auto__)){
var vec__45841 = cljs.core._nth.call(null,c__26035__auto__,i__45837);
var k = cljs.core.nth.call(null,vec__45841,(0),null);
var v = cljs.core.nth.call(null,vec__45841,(1),null);
if(cljs.core.truth_(taoensso.encore.nnil_QMARK_.call(null,v))){
cljs.core.chunk_append.call(null,b__45838,((cljs.core.sequential_QMARK_.call(null,v))?join.call(null,cljs.core.mapv.call(null,cljs.core.partial.call(null,param,k),(function (){var or__25265__auto__ = cljs.core.seq.call(null,v);
if(or__25265__auto__){
return or__25265__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null);
}
})())):param.call(null,k,v)));

var G__45843 = (i__45837 + (1));
i__45837 = G__45843;
continue;
} else {
var G__45844 = (i__45837 + (1));
i__45837 = G__45844;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45838),taoensso$encore$format_query_string_$_iter__45835.call(null,cljs.core.chunk_rest.call(null,s__45836__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45838),null);
}
} else {
var vec__45842 = cljs.core.first.call(null,s__45836__$2);
var k = cljs.core.nth.call(null,vec__45842,(0),null);
var v = cljs.core.nth.call(null,vec__45842,(1),null);
if(cljs.core.truth_(taoensso.encore.nnil_QMARK_.call(null,v))){
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,v))?join.call(null,cljs.core.mapv.call(null,cljs.core.partial.call(null,param,k),(function (){var or__25265__auto__ = cljs.core.seq.call(null,v);
if(or__25265__auto__){
return or__25265__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null);
}
})())):param.call(null,k,v)),taoensso$encore$format_query_string_$_iter__45835.call(null,cljs.core.rest.call(null,s__45836__$2)));
} else {
var G__45845 = cljs.core.rest.call(null,s__45836__$2);
s__45836__$1 = G__45845;
continue;
}
}
} else {
return null;
}
break;
}
});})(param,join))
,null,null));
});})(param,join))
;
return iter__26037__auto__.call(null,m);
})());
}
});
taoensso.encore.assoc_conj = (function taoensso$encore$assoc_conj(m,k,v){
return cljs.core.assoc.call(null,m,k,(function (){var temp__4655__auto__ = cljs.core.get.call(null,m,k);
if(cljs.core.truth_(temp__4655__auto__)){
var cur = temp__4655__auto__;
if(cljs.core.vector_QMARK_.call(null,cur)){
return cljs.core.conj.call(null,cur,v);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cur,v], null);
}
} else {
return v;
}
})());
});
/**
 * Based on `ring-codec/form-decode`
 */
taoensso.encore.parse_query_params = (function taoensso$encore$parse_query_params(var_args){
var args__26330__auto__ = [];
var len__26323__auto___45852 = arguments.length;
var i__26324__auto___45853 = (0);
while(true){
if((i__26324__auto___45853 < len__26323__auto___45852)){
args__26330__auto__.push((arguments[i__26324__auto___45853]));

var G__45854 = (i__26324__auto___45853 + (1));
i__26324__auto___45853 = G__45854;
continue;
} else {
}
break;
}

var argseq__26331__auto__ = ((((1) < args__26330__auto__.length))?(new cljs.core.IndexedSeq(args__26330__auto__.slice((1)),(0))):null);
return taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26331__auto__);
});

taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__45848){
var vec__45849 = p__45848;
var keywordize_QMARK_ = cljs.core.nth.call(null,vec__45849,(0),null);
var encoding = cljs.core.nth.call(null,vec__45849,(1),null);
var _PERCENT_ = ((clojure.string.blank_QMARK_.call(null,s))?cljs.core.PersistentArrayMap.EMPTY:(function (){var s__$1 = (cljs.core.truth_(taoensso.encore.str_starts_with_QMARK_.call(null,s,"?"))?taoensso.encore.substr.call(null,s,(1)):s);
if(cljs.core.not.call(null,taoensso.encore.str_contains_QMARK_.call(null,s__$1,"="))){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var m = cljs.core.reduce.call(null,((function (s__$1,vec__45849,keywordize_QMARK_,encoding){
return (function (m,param){
var temp__4655__auto__ = clojure.string.split.call(null,param,/=/,(2));
if(cljs.core.truth_(temp__4655__auto__)){
var vec__45850 = temp__4655__auto__;
var k = cljs.core.nth.call(null,vec__45850,(0),null);
var v = cljs.core.nth.call(null,vec__45850,(1),null);
return taoensso.encore.assoc_conj.call(null,m,taoensso.encore.url_decode.call(null,k,encoding),taoensso.encore.url_decode.call(null,v,encoding));
} else {
return m;
}
});})(s__$1,vec__45849,keywordize_QMARK_,encoding))
,cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,s__$1,/&/));
if(cljs.core.not.call(null,keywordize_QMARK_)){
return m;
} else {
return taoensso.encore.keywordize_map.call(null,m);
}
}
})());
if(cljs.core.truth_((function (){var __x = _PERCENT_;
try{if(cljs.core.map_QMARK_.call(null,__x)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e45851){if((e45851 instanceof Error)){
var __t = e45851;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(map? %)",__x,__t,null);
} else {
throw e45851;

}
}})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"%","%",-950237169,null))))].join('')));
}

return _PERCENT_;
});

taoensso.encore.parse_query_params.cljs$lang$maxFixedArity = (1);

taoensso.encore.parse_query_params.cljs$lang$applyTo = (function (seq45846){
var G__45847 = cljs.core.first.call(null,seq45846);
var seq45846__$1 = cljs.core.next.call(null,seq45846);
return taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic(G__45847,seq45846__$1);
});
taoensso.encore.merge_url_with_query_string = (function taoensso$encore$merge_url_with_query_string(url,m){
var vec__45856 = clojure.string.split.call(null,[cljs.core.str(url)].join(''),/\?/,(2));
var url__$1 = cljs.core.nth.call(null,vec__45856,(0),null);
var _QMARK_qstr = cljs.core.nth.call(null,vec__45856,(1),null);
var qmap = cljs.core.merge.call(null,(cljs.core.truth_(_QMARK_qstr)?taoensso.encore.keywordize_map.call(null,taoensso.encore.parse_query_params.call(null,_QMARK_qstr)):null),taoensso.encore.keywordize_map.call(null,m));
var _QMARK_qstr__$1 = taoensso.encore.as__QMARK_nblank.call(null,taoensso.encore.format_query_string.call(null,qmap));
var temp__4655__auto__ = _QMARK_qstr__$1;
if(cljs.core.truth_(temp__4655__auto__)){
var qstr = temp__4655__auto__;
return [cljs.core.str(url__$1),cljs.core.str("?"),cljs.core.str(qstr)].join('');
} else {
return url__$1;
}
});
taoensso.encore.a0_memoize_ = taoensso.encore.memoize_a0_;
taoensso.encore.a1_memoize_ = taoensso.encore.memoize_a1_;
taoensso.encore.spaced_str_with_nils = (function taoensso$encore$spaced_str_with_nils(xs){
return clojure.string.join.call(null," ",cljs.core.mapv.call(null,taoensso.encore.nil__GT_str,xs));
});
taoensso.encore.spaced_str = (function taoensso$encore$spaced_str(xs){
return clojure.string.join.call(null," ",cljs.core.mapv.call(null,taoensso.encore.undefined__GT_nil,xs));
});
taoensso.encore.backport_run_BANG_ = taoensso.encore.run_BANG__STAR_;
taoensso.encore.fq_name = taoensso.encore.qname;
taoensso.encore.memoize_1 = taoensso.encore.memoize1;
taoensso.encore.round = (function taoensso$encore$round(var_args){
var args__26330__auto__ = [];
var len__26323__auto___45861 = arguments.length;
var i__26324__auto___45862 = (0);
while(true){
if((i__26324__auto___45862 < len__26323__auto___45861)){
args__26330__auto__.push((arguments[i__26324__auto___45862]));

var G__45863 = (i__26324__auto___45862 + (1));
i__26324__auto___45862 = G__45863;
continue;
} else {
}
break;
}

var argseq__26331__auto__ = ((((1) < args__26330__auto__.length))?(new cljs.core.IndexedSeq(args__26330__auto__.slice((1)),(0))):null);
return taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26331__auto__);
});

taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic = (function (n,p__45859){
var vec__45860 = p__45859;
var type = cljs.core.nth.call(null,vec__45860,(0),null);
var nplaces = cljs.core.nth.call(null,vec__45860,(1),null);
return taoensso.encore.round_STAR_.call(null,(function (){var or__25265__auto__ = type;
if(cljs.core.truth_(or__25265__auto__)){
return or__25265__auto__;
} else {
return new cljs.core.Keyword(null,"round","round",2009433328);
}
})(),nplaces,n);
});

taoensso.encore.round.cljs$lang$maxFixedArity = (1);

taoensso.encore.round.cljs$lang$applyTo = (function (seq45857){
var G__45858 = cljs.core.first.call(null,seq45857);
var seq45857__$1 = cljs.core.next.call(null,seq45857);
return taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic(G__45858,seq45857__$1);
});
taoensso.encore.logging_level = cljs.core.atom.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596));
taoensso.encore.set_exp_backoff_timeout_BANG_ = (function taoensso$encore$set_exp_backoff_timeout_BANG_(var_args){
var args__26330__auto__ = [];
var len__26323__auto___45868 = arguments.length;
var i__26324__auto___45869 = (0);
while(true){
if((i__26324__auto___45869 < len__26323__auto___45868)){
args__26330__auto__.push((arguments[i__26324__auto___45869]));

var G__45870 = (i__26324__auto___45869 + (1));
i__26324__auto___45869 = G__45870;
continue;
} else {
}
break;
}

var argseq__26331__auto__ = ((((1) < args__26330__auto__.length))?(new cljs.core.IndexedSeq(args__26330__auto__.slice((1)),(0))):null);
return taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26331__auto__);
});

taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (nullary_f,p__45866){
var vec__45867 = p__45866;
var nattempt = cljs.core.nth.call(null,vec__45867,(0),null);
return window.setTimeout(nullary_f,taoensso.encore.exp_backoff.call(null,(function (){var or__25265__auto__ = nattempt;
if(cljs.core.truth_(or__25265__auto__)){
return or__25265__auto__;
} else {
return (0);
}
})()));
});

taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$lang$applyTo = (function (seq45864){
var G__45865 = cljs.core.first.call(null,seq45864);
var seq45864__$1 = cljs.core.next.call(null,seq45864);
return taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__45865,seq45864__$1);
});
taoensso.encore.keys_EQ_ = (function taoensso$encore$keys_EQ_(m,ks){
return taoensso.encore.ks_EQ_.call(null,ks,m);
});
taoensso.encore.keys_LT__EQ_ = (function taoensso$encore$keys_LT__EQ_(m,ks){
return taoensso.encore.ks_LT__EQ_.call(null,ks,m);
});
taoensso.encore.keys_GT__EQ_ = (function taoensso$encore$keys_GT__EQ_(m,ks){
return taoensso.encore.ks_GT__EQ_.call(null,ks,m);
});
taoensso.encore.keys_EQ_nnil_QMARK_ = (function taoensso$encore$keys_EQ_nnil_QMARK_(m,ks){
return taoensso.encore.ks_nnil_QMARK_.call(null,ks,m);
});
taoensso.encore.parse_bool = taoensso.encore.as__QMARK_bool;
taoensso.encore.parse_int = taoensso.encore.as__QMARK_int;
taoensso.encore.parse_float = taoensso.encore.as__QMARK_float;
taoensso.encore.merge_deep_with = taoensso.encore.nested_merge_with;
taoensso.encore.merge_deep = taoensso.encore.nested_merge;
taoensso.encore.rate_limiter = (function taoensso$encore$rate_limiter(ncalls_limit,window_ms){
return taoensso.encore.rate_limiter_STAR_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ncalls_limit,window_ms], null)], null));
});
taoensso.encore.rate_limited = (function taoensso$encore$rate_limited(ncalls_limit,window_ms,f){
var rl = taoensso.encore.rate_limiter_STAR_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ncalls_limit,window_ms], null)], null));
return ((function (rl){
return (function() { 
var G__45871__delegate = function (args){
var temp__4655__auto__ = rl.call(null);
if(cljs.core.truth_(temp__4655__auto__)){
var backoff_ms = temp__4655__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backoff-ms","backoff-ms",1679281507),backoff_ms], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),f.call(null)], null);
}
};
var G__45871 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45872__i = 0, G__45872__a = new Array(arguments.length -  0);
while (G__45872__i < G__45872__a.length) {G__45872__a[G__45872__i] = arguments[G__45872__i + 0]; ++G__45872__i;}
  args = new cljs.core.IndexedSeq(G__45872__a,0);
} 
return G__45871__delegate.call(this,args);};
G__45871.cljs$lang$maxFixedArity = 0;
G__45871.cljs$lang$applyTo = (function (arglist__45873){
var args = cljs.core.seq(arglist__45873);
return G__45871__delegate(args);
});
G__45871.cljs$core$IFn$_invoke$arity$variadic = G__45871__delegate;
return G__45871;
})()
;
;})(rl))
});
if(typeof taoensso.encore._STAR_log_level_STAR_ !== 'undefined'){
} else {
/**
 * DEPRECATED
 */
taoensso.encore._STAR_log_level_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596);
}

taoensso.encore.log_QMARK_ = (function (){var __GT_n = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"trace","trace",-1082747415),(1),new cljs.core.Keyword(null,"debug","debug",-1608172596),(2),new cljs.core.Keyword(null,"info","info",-317069002),(3),new cljs.core.Keyword(null,"warn","warn",-436710552),(4),new cljs.core.Keyword(null,"error","error",-978969032),(5),new cljs.core.Keyword(null,"fatal","fatal",1874419888),(6),new cljs.core.Keyword(null,"report","report",1394055010),(7)], null);
return ((function (__GT_n){
return (function (level){
return (__GT_n.call(null,level) >= __GT_n.call(null,taoensso.encore._STAR_log_level_STAR_));
});
;})(__GT_n))
})();

taoensso.encore.tracef = (function taoensso$encore$tracef(var_args){
var args__26330__auto__ = [];
var len__26323__auto___45888 = arguments.length;
var i__26324__auto___45889 = (0);
while(true){
if((i__26324__auto___45889 < len__26323__auto___45888)){
args__26330__auto__.push((arguments[i__26324__auto___45889]));

var G__45890 = (i__26324__auto___45889 + (1));
i__26324__auto___45889 = G__45890;
continue;
} else {
}
break;
}

var argseq__26331__auto__ = ((((1) < args__26330__auto__.length))?(new cljs.core.IndexedSeq(args__26330__auto__.slice((1)),(0))):null);
return taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26331__auto__);
});

taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"trace","trace",-1082747415)))){
return cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.tracef.cljs$lang$maxFixedArity = (1);

taoensso.encore.tracef.cljs$lang$applyTo = (function (seq45874){
var G__45875 = cljs.core.first.call(null,seq45874);
var seq45874__$1 = cljs.core.next.call(null,seq45874);
return taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic(G__45875,seq45874__$1);
});

taoensso.encore.debugf = (function taoensso$encore$debugf(var_args){
var args__26330__auto__ = [];
var len__26323__auto___45891 = arguments.length;
var i__26324__auto___45892 = (0);
while(true){
if((i__26324__auto___45892 < len__26323__auto___45891)){
args__26330__auto__.push((arguments[i__26324__auto___45892]));

var G__45893 = (i__26324__auto___45892 + (1));
i__26324__auto___45892 = G__45893;
continue;
} else {
}
break;
}

var argseq__26331__auto__ = ((((1) < args__26330__auto__.length))?(new cljs.core.IndexedSeq(args__26330__auto__.slice((1)),(0))):null);
return taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26331__auto__);
});

taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596)))){
return cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.debugf.cljs$lang$maxFixedArity = (1);

taoensso.encore.debugf.cljs$lang$applyTo = (function (seq45876){
var G__45877 = cljs.core.first.call(null,seq45876);
var seq45876__$1 = cljs.core.next.call(null,seq45876);
return taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic(G__45877,seq45876__$1);
});

taoensso.encore.infof = (function taoensso$encore$infof(var_args){
var args__26330__auto__ = [];
var len__26323__auto___45894 = arguments.length;
var i__26324__auto___45895 = (0);
while(true){
if((i__26324__auto___45895 < len__26323__auto___45894)){
args__26330__auto__.push((arguments[i__26324__auto___45895]));

var G__45896 = (i__26324__auto___45895 + (1));
i__26324__auto___45895 = G__45896;
continue;
} else {
}
break;
}

var argseq__26331__auto__ = ((((1) < args__26330__auto__.length))?(new cljs.core.IndexedSeq(args__26330__auto__.slice((1)),(0))):null);
return taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26331__auto__);
});

taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"info","info",-317069002)))){
return cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.infof.cljs$lang$maxFixedArity = (1);

taoensso.encore.infof.cljs$lang$applyTo = (function (seq45878){
var G__45879 = cljs.core.first.call(null,seq45878);
var seq45878__$1 = cljs.core.next.call(null,seq45878);
return taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic(G__45879,seq45878__$1);
});

taoensso.encore.warnf = (function taoensso$encore$warnf(var_args){
var args__26330__auto__ = [];
var len__26323__auto___45897 = arguments.length;
var i__26324__auto___45898 = (0);
while(true){
if((i__26324__auto___45898 < len__26323__auto___45897)){
args__26330__auto__.push((arguments[i__26324__auto___45898]));

var G__45899 = (i__26324__auto___45898 + (1));
i__26324__auto___45898 = G__45899;
continue;
} else {
}
break;
}

var argseq__26331__auto__ = ((((1) < args__26330__auto__.length))?(new cljs.core.IndexedSeq(args__26330__auto__.slice((1)),(0))):null);
return taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26331__auto__);
});

taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552)))){
return cljs.core.apply.call(null,taoensso.encore.logf,[cljs.core.str("WARN: "),cljs.core.str(fmt)].join(''),xs);
} else {
return null;
}
});

taoensso.encore.warnf.cljs$lang$maxFixedArity = (1);

taoensso.encore.warnf.cljs$lang$applyTo = (function (seq45880){
var G__45881 = cljs.core.first.call(null,seq45880);
var seq45880__$1 = cljs.core.next.call(null,seq45880);
return taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic(G__45881,seq45880__$1);
});

taoensso.encore.errorf = (function taoensso$encore$errorf(var_args){
var args__26330__auto__ = [];
var len__26323__auto___45900 = arguments.length;
var i__26324__auto___45901 = (0);
while(true){
if((i__26324__auto___45901 < len__26323__auto___45900)){
args__26330__auto__.push((arguments[i__26324__auto___45901]));

var G__45902 = (i__26324__auto___45901 + (1));
i__26324__auto___45901 = G__45902;
continue;
} else {
}
break;
}

var argseq__26331__auto__ = ((((1) < args__26330__auto__.length))?(new cljs.core.IndexedSeq(args__26330__auto__.slice((1)),(0))):null);
return taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26331__auto__);
});

taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"error","error",-978969032)))){
return cljs.core.apply.call(null,taoensso.encore.logf,[cljs.core.str("ERROR: "),cljs.core.str(fmt)].join(''),xs);
} else {
return null;
}
});

taoensso.encore.errorf.cljs$lang$maxFixedArity = (1);

taoensso.encore.errorf.cljs$lang$applyTo = (function (seq45882){
var G__45883 = cljs.core.first.call(null,seq45882);
var seq45882__$1 = cljs.core.next.call(null,seq45882);
return taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic(G__45883,seq45882__$1);
});

taoensso.encore.fatalf = (function taoensso$encore$fatalf(var_args){
var args__26330__auto__ = [];
var len__26323__auto___45903 = arguments.length;
var i__26324__auto___45904 = (0);
while(true){
if((i__26324__auto___45904 < len__26323__auto___45903)){
args__26330__auto__.push((arguments[i__26324__auto___45904]));

var G__45905 = (i__26324__auto___45904 + (1));
i__26324__auto___45904 = G__45905;
continue;
} else {
}
break;
}

var argseq__26331__auto__ = ((((1) < args__26330__auto__.length))?(new cljs.core.IndexedSeq(args__26330__auto__.slice((1)),(0))):null);
return taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26331__auto__);
});

taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"fatal","fatal",1874419888)))){
return cljs.core.apply.call(null,taoensso.encore.logf,[cljs.core.str("FATAL: "),cljs.core.str(fmt)].join(''),xs);
} else {
return null;
}
});

taoensso.encore.fatalf.cljs$lang$maxFixedArity = (1);

taoensso.encore.fatalf.cljs$lang$applyTo = (function (seq45884){
var G__45885 = cljs.core.first.call(null,seq45884);
var seq45884__$1 = cljs.core.next.call(null,seq45884);
return taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic(G__45885,seq45884__$1);
});

taoensso.encore.reportf = (function taoensso$encore$reportf(var_args){
var args__26330__auto__ = [];
var len__26323__auto___45906 = arguments.length;
var i__26324__auto___45907 = (0);
while(true){
if((i__26324__auto___45907 < len__26323__auto___45906)){
args__26330__auto__.push((arguments[i__26324__auto___45907]));

var G__45908 = (i__26324__auto___45907 + (1));
i__26324__auto___45907 = G__45908;
continue;
} else {
}
break;
}

var argseq__26331__auto__ = ((((1) < args__26330__auto__.length))?(new cljs.core.IndexedSeq(args__26330__auto__.slice((1)),(0))):null);
return taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26331__auto__);
});

taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"report","report",1394055010)))){
return cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.reportf.cljs$lang$maxFixedArity = (1);

taoensso.encore.reportf.cljs$lang$applyTo = (function (seq45886){
var G__45887 = cljs.core.first.call(null,seq45886);
var seq45886__$1 = cljs.core.next.call(null,seq45886);
return taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic(G__45887,seq45886__$1);
});
/**
 * Deprecated
 */
taoensso.encore.greatest = (function taoensso$encore$greatest(var_args){
var args__26330__auto__ = [];
var len__26323__auto___45915 = arguments.length;
var i__26324__auto___45916 = (0);
while(true){
if((i__26324__auto___45916 < len__26323__auto___45915)){
args__26330__auto__.push((arguments[i__26324__auto___45916]));

var G__45917 = (i__26324__auto___45916 + (1));
i__26324__auto___45916 = G__45917;
continue;
} else {
}
break;
}

var argseq__26331__auto__ = ((((1) < args__26330__auto__.length))?(new cljs.core.IndexedSeq(args__26330__auto__.slice((1)),(0))):null);
return taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26331__auto__);
});

taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic = (function (coll,p__45913){
var vec__45914 = p__45913;
var _QMARK_comparator = cljs.core.nth.call(null,vec__45914,(0),null);
var comparator = (function (){var or__25265__auto__ = _QMARK_comparator;
if(cljs.core.truth_(or__25265__auto__)){
return or__25265__auto__;
} else {
return taoensso.encore.rcompare;
}
})();
return cljs.core.reduce.call(null,((function (comparator,vec__45914,_QMARK_comparator){
return (function (p1__45909_SHARP_,p2__45910_SHARP_){
if((comparator.call(null,p1__45909_SHARP_,p2__45910_SHARP_) > (0))){
return p2__45910_SHARP_;
} else {
return p1__45909_SHARP_;
}
});})(comparator,vec__45914,_QMARK_comparator))
,coll);
});

taoensso.encore.greatest.cljs$lang$maxFixedArity = (1);

taoensso.encore.greatest.cljs$lang$applyTo = (function (seq45911){
var G__45912 = cljs.core.first.call(null,seq45911);
var seq45911__$1 = cljs.core.next.call(null,seq45911);
return taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic(G__45912,seq45911__$1);
});
/**
 * Deprecated
 */
taoensso.encore.least = (function taoensso$encore$least(var_args){
var args__26330__auto__ = [];
var len__26323__auto___45924 = arguments.length;
var i__26324__auto___45925 = (0);
while(true){
if((i__26324__auto___45925 < len__26323__auto___45924)){
args__26330__auto__.push((arguments[i__26324__auto___45925]));

var G__45926 = (i__26324__auto___45925 + (1));
i__26324__auto___45925 = G__45926;
continue;
} else {
}
break;
}

var argseq__26331__auto__ = ((((1) < args__26330__auto__.length))?(new cljs.core.IndexedSeq(args__26330__auto__.slice((1)),(0))):null);
return taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26331__auto__);
});

taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic = (function (coll,p__45922){
var vec__45923 = p__45922;
var _QMARK_comparator = cljs.core.nth.call(null,vec__45923,(0),null);
var comparator = (function (){var or__25265__auto__ = _QMARK_comparator;
if(cljs.core.truth_(or__25265__auto__)){
return or__25265__auto__;
} else {
return taoensso.encore.rcompare;
}
})();
return cljs.core.reduce.call(null,((function (comparator,vec__45923,_QMARK_comparator){
return (function (p1__45918_SHARP_,p2__45919_SHARP_){
if((comparator.call(null,p1__45918_SHARP_,p2__45919_SHARP_) < (0))){
return p2__45919_SHARP_;
} else {
return p1__45918_SHARP_;
}
});})(comparator,vec__45923,_QMARK_comparator))
,coll);
});

taoensso.encore.least.cljs$lang$maxFixedArity = (1);

taoensso.encore.least.cljs$lang$applyTo = (function (seq45920){
var G__45921 = cljs.core.first.call(null,seq45920);
var seq45920__$1 = cljs.core.next.call(null,seq45920);
return taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic(G__45921,seq45920__$1);
});
taoensso.encore.clj1098 = (function taoensso$encore$clj1098(x){
var or__25265__auto__ = x;
if(cljs.core.truth_(or__25265__auto__)){
return or__25265__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});

//# sourceMappingURL=encore.js.map