// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__25979_25993 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25980_25994 = null;
var count__25981_25995 = (0);
var i__25982_25996 = (0);
while(true){
if((i__25982_25996 < count__25981_25995)){
var f_25997 = cljs.core._nth.call(null,chunk__25980_25994,i__25982_25996);
cljs.core.println.call(null,"  ",f_25997);

var G__25998 = seq__25979_25993;
var G__25999 = chunk__25980_25994;
var G__26000 = count__25981_25995;
var G__26001 = (i__25982_25996 + (1));
seq__25979_25993 = G__25998;
chunk__25980_25994 = G__25999;
count__25981_25995 = G__26000;
i__25982_25996 = G__26001;
continue;
} else {
var temp__4657__auto___26002 = cljs.core.seq.call(null,seq__25979_25993);
if(temp__4657__auto___26002){
var seq__25979_26003__$1 = temp__4657__auto___26002;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25979_26003__$1)){
var c__25624__auto___26004 = cljs.core.chunk_first.call(null,seq__25979_26003__$1);
var G__26005 = cljs.core.chunk_rest.call(null,seq__25979_26003__$1);
var G__26006 = c__25624__auto___26004;
var G__26007 = cljs.core.count.call(null,c__25624__auto___26004);
var G__26008 = (0);
seq__25979_25993 = G__26005;
chunk__25980_25994 = G__26006;
count__25981_25995 = G__26007;
i__25982_25996 = G__26008;
continue;
} else {
var f_26009 = cljs.core.first.call(null,seq__25979_26003__$1);
cljs.core.println.call(null,"  ",f_26009);

var G__26010 = cljs.core.next.call(null,seq__25979_26003__$1);
var G__26011 = null;
var G__26012 = (0);
var G__26013 = (0);
seq__25979_25993 = G__26010;
chunk__25980_25994 = G__26011;
count__25981_25995 = G__26012;
i__25982_25996 = G__26013;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_26014 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__24821__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__24821__auto__)){
return or__24821__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_26014);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_26014)))?cljs.core.second.call(null,arglists_26014):arglists_26014));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__25983 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25984 = null;
var count__25985 = (0);
var i__25986 = (0);
while(true){
if((i__25986 < count__25985)){
var vec__25987 = cljs.core._nth.call(null,chunk__25984,i__25986);
var name = cljs.core.nth.call(null,vec__25987,(0),null);
var map__25988 = cljs.core.nth.call(null,vec__25987,(1),null);
var map__25988__$1 = ((((!((map__25988 == null)))?((((map__25988.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25988.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25988):map__25988);
var doc = cljs.core.get.call(null,map__25988__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__25988__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__26015 = seq__25983;
var G__26016 = chunk__25984;
var G__26017 = count__25985;
var G__26018 = (i__25986 + (1));
seq__25983 = G__26015;
chunk__25984 = G__26016;
count__25985 = G__26017;
i__25986 = G__26018;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__25983);
if(temp__4657__auto__){
var seq__25983__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25983__$1)){
var c__25624__auto__ = cljs.core.chunk_first.call(null,seq__25983__$1);
var G__26019 = cljs.core.chunk_rest.call(null,seq__25983__$1);
var G__26020 = c__25624__auto__;
var G__26021 = cljs.core.count.call(null,c__25624__auto__);
var G__26022 = (0);
seq__25983 = G__26019;
chunk__25984 = G__26020;
count__25985 = G__26021;
i__25986 = G__26022;
continue;
} else {
var vec__25990 = cljs.core.first.call(null,seq__25983__$1);
var name = cljs.core.nth.call(null,vec__25990,(0),null);
var map__25991 = cljs.core.nth.call(null,vec__25990,(1),null);
var map__25991__$1 = ((((!((map__25991 == null)))?((((map__25991.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25991.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25991):map__25991);
var doc = cljs.core.get.call(null,map__25991__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__25991__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__26023 = cljs.core.next.call(null,seq__25983__$1);
var G__26024 = null;
var G__26025 = (0);
var G__26026 = (0);
seq__25983 = G__26023;
chunk__25984 = G__26024;
count__25985 = G__26025;
i__25986 = G__26026;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map