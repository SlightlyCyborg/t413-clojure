// Compiled by ClojureScript 0.0-3308 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4423__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4423__auto__)){
var ns = temp__4423__auto__;
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
var seq__15770_15782 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__15771_15783 = null;
var count__15772_15784 = (0);
var i__15773_15785 = (0);
while(true){
if((i__15773_15785 < count__15772_15784)){
var f_15786 = cljs.core._nth.call(null,chunk__15771_15783,i__15773_15785);
cljs.core.println.call(null,"  ",f_15786);

var G__15787 = seq__15770_15782;
var G__15788 = chunk__15771_15783;
var G__15789 = count__15772_15784;
var G__15790 = (i__15773_15785 + (1));
seq__15770_15782 = G__15787;
chunk__15771_15783 = G__15788;
count__15772_15784 = G__15789;
i__15773_15785 = G__15790;
continue;
} else {
var temp__4423__auto___15791 = cljs.core.seq.call(null,seq__15770_15782);
if(temp__4423__auto___15791){
var seq__15770_15792__$1 = temp__4423__auto___15791;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15770_15792__$1)){
var c__15438__auto___15793 = cljs.core.chunk_first.call(null,seq__15770_15792__$1);
var G__15794 = cljs.core.chunk_rest.call(null,seq__15770_15792__$1);
var G__15795 = c__15438__auto___15793;
var G__15796 = cljs.core.count.call(null,c__15438__auto___15793);
var G__15797 = (0);
seq__15770_15782 = G__15794;
chunk__15771_15783 = G__15795;
count__15772_15784 = G__15796;
i__15773_15785 = G__15797;
continue;
} else {
var f_15798 = cljs.core.first.call(null,seq__15770_15792__$1);
cljs.core.println.call(null,"  ",f_15798);

var G__15799 = cljs.core.next.call(null,seq__15770_15792__$1);
var G__15800 = null;
var G__15801 = (0);
var G__15802 = (0);
seq__15770_15782 = G__15799;
chunk__15771_15783 = G__15800;
count__15772_15784 = G__15801;
i__15773_15785 = G__15802;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_15803 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__14653__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__14653__auto__)){
return or__14653__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_15803);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_15803)))?cljs.core.second.call(null,arglists_15803):arglists_15803));
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
var seq__15774 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__15775 = null;
var count__15776 = (0);
var i__15777 = (0);
while(true){
if((i__15777 < count__15776)){
var vec__15778 = cljs.core._nth.call(null,chunk__15775,i__15777);
var name = cljs.core.nth.call(null,vec__15778,(0),null);
var map__15779 = cljs.core.nth.call(null,vec__15778,(1),null);
var map__15779__$1 = ((cljs.core.seq_QMARK_.call(null,map__15779))?cljs.core.apply.call(null,cljs.core.hash_map,map__15779):map__15779);
var doc = cljs.core.get.call(null,map__15779__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__15779__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__15804 = seq__15774;
var G__15805 = chunk__15775;
var G__15806 = count__15776;
var G__15807 = (i__15777 + (1));
seq__15774 = G__15804;
chunk__15775 = G__15805;
count__15776 = G__15806;
i__15777 = G__15807;
continue;
} else {
var temp__4423__auto__ = cljs.core.seq.call(null,seq__15774);
if(temp__4423__auto__){
var seq__15774__$1 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15774__$1)){
var c__15438__auto__ = cljs.core.chunk_first.call(null,seq__15774__$1);
var G__15808 = cljs.core.chunk_rest.call(null,seq__15774__$1);
var G__15809 = c__15438__auto__;
var G__15810 = cljs.core.count.call(null,c__15438__auto__);
var G__15811 = (0);
seq__15774 = G__15808;
chunk__15775 = G__15809;
count__15776 = G__15810;
i__15777 = G__15811;
continue;
} else {
var vec__15780 = cljs.core.first.call(null,seq__15774__$1);
var name = cljs.core.nth.call(null,vec__15780,(0),null);
var map__15781 = cljs.core.nth.call(null,vec__15780,(1),null);
var map__15781__$1 = ((cljs.core.seq_QMARK_.call(null,map__15781))?cljs.core.apply.call(null,cljs.core.hash_map,map__15781):map__15781);
var doc = cljs.core.get.call(null,map__15781__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__15781__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__15812 = cljs.core.next.call(null,seq__15774__$1);
var G__15813 = null;
var G__15814 = (0);
var G__15815 = (0);
seq__15774 = G__15812;
chunk__15775 = G__15813;
count__15776 = G__15814;
i__15777 = G__15815;
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